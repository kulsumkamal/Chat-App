import ChatBox from "../../components/ChatBox.js";
import ChatRoom from "../../components/ChatRoom.js";
import ChatRoomList from "../../components/ChatRoomList.js";
import CreateChatRoom from "../../components/CreateChatRoom.js";
import NavBar from "../../components/NavBar.js";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";

const rooms = [];
const onCreate = ({ room }) => {
  rooms.push(room);
};

export default function Home() {
  const auth = getAuth();
  const router = useRouter();
  if (auth.currentUser == null) router.push("../");
  const user = auth.currentUser.email;
  const [messages, setMessages] = useState([]);
  const [currentRoom, setCurrentRoom] = useState("");
  const [text, setText] = useState("");

  const sendMessage = async () => {
    await updateDoc(doc(db, "ChatRooms", currentRoom), {
      messages: arrayUnion({ name: user, text: text }),
    });
  };

  if (currentRoom != "") {
    const unsub = onSnapshot(doc(db, "ChatRooms", currentRoom), (doc) => {
      const messageData = doc.data().messages;
      setMessages(messageData);
    });
  }

  const selectedChatRoom = async () => {
    await getDoc(doc(db, "ChatRooms", currentRoom), (doc) => {
      const messageData = doc.data().messages;
      setMessages(messageData);
    });
  };

  useEffect(() => {
    if (currentRoom != "") selectedChatRoom();
  }, messages);

  const dummy = [
    { name: "sam", text: "hello" },
    { name: "jane", text: "hi there how are you" },
    { name: "sam", text: "hello" },
    { name: "jane", text: "hi there how are you" },
    { name: "sam", text: "hello" },
    { name: "jane", text: "hi there how are you" },
    { name: "sam", text: "hello" },
    { name: "jane", text: "hi there how are you" },
  ];
  return (
    <main className="flex min-h-screen w-full flex-col items-center align-top justify-center">
      <NavBar />
      <div class="flex h-screen mx-auto w-screen align-top justify-center bg-teal-950">
        <div class="flex-auto h-max bg-gradient-to-r from-purple-600 to-indigo-600 py-10 px-4 sm:px-6 lg:px-8">
          <CreateChatRoom onCreate={onCreate} />
          <ChatRoomList user={user} selectChatRoom={setCurrentRoom} />
        </div>
        <div class="flex-auto h-100">
          <h2>{currentRoom}</h2>
          <ChatRoom messages={messages} />
          <ChatBox setText={setText} sendMessage={sendMessage} />
        </div>
      </div>
    </main>
  );
}
