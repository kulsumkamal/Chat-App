import { useState, useEffect } from "react";

const Message = ({message}) => {
  return (
    <>
    <div className="chat-bubble">
      <p className="message-name">{message.name}</p>
      <p className="message-text">{message.text}</p>
    </div>
    <br/>
    </>
  );
};

export default Message;
