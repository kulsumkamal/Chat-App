import { useState, useEffect } from 'react';

const ChatBox = ({setText, sendMessage}) => {
    const [message, setMessage] = useState("");
    const handleSend = async() => {
        if(message.trim() === "") return;
        setText(message);
        await sendMessage();
        setMessage("");
    }

    return (
        <div className='send-chat-box'>
            <input 
            type='text'
            placeholder='Type your message here..'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatBox;