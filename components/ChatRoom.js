import React from "react";
import Message from "./Message";

const ChatRoom = ({ messages }) => {
  return (
    <div className="h-full overflow-y-scroll bg-gradient-to-b from-purple-500 via-pink-500 to-red-500">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatRoom;

