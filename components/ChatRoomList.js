import { useEffect, useState } from "react";
import { Link } from "next/link";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { eventNames } from "process";

const ChatRoomList = ({user, selectChatRoom}) => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      const unsub = onSnapshot(doc(db, "Users", user), (doc) => {
        const chatRoomsData = doc.data().rooms;
        setChatRooms(chatRoomsData);
      });
    };
    fetchChatRooms();
  }, []);


  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg text-black font-semibold mb-2">Chat Rooms</h2>
      <ul>
        {chatRooms.map((room) => (
          <li className="flex rounded-md text-lg font-bold px-2 my-1 mx-1 bg-gray-100 p-4 hover:bg-gray-300" key={room} onClick={()=>{selectChatRoom(room)}}>{room}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomList;
