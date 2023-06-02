import React, { useState } from "react";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import { getAuth } from "firebase/auth";

function CreateChatRoom({ onCreate }) {
  const [name, setName] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  var f=0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new chat room with a unique ID
    const chatRoomRef = doc(db, "ChatRooms", name);
    const userRef = doc(db, "Users", user.email);
    //const chatRoomId = chatRoomRef.key;

    if(f === 1)
    await setDoc(chatRoomRef, {name: name, messages:[]});

    // Save the chat room name to the database
    await updateDoc(userRef, {
      rooms: arrayUnion(name)
  });

    // Call the onCreate callback with the chat room ID
    onCreate(name);
  };

  return (
    <div className="flex justify-center align-top my-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6">
          Create/Join a New Chatroom
        </h2>
        <div className="mb-1">
          <label htmlFor="roomName" className="text-sm block font-medium mb-2">
            Room Name
          </label>
          <input
            type="text"
            id="roomName"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border border-gray-300 rounded-md px-2 py-1"
            placeholder="Enter room name"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={()=>{f=1;}}
            className="text-sm flex-auto px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Create Room
          </button>
          <button
            type="submit"
            onClick={()=>{f=0;}}
            className="text-sm flex-auto px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Join Room
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateChatRoom;
