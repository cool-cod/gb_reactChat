import React, { useState } from 'react';

const MessageInput = ({messages, setMessages}) => {

	const [message, setMessage] = useState('')

	const sendMessage = () => {
    if(message) {
      setMessages([...messages, {author: 'User', text: message}])
      setMessage('')
    } else {
      alert('write something')
    }
  }

	return (
		<form onClick={(event) => event.preventDefault()}>
        <input 
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            placeholder='enter message...'>
        </input>
        <button onClick={sendMessage}>Send</button>
      </form>
	);
};

export default MessageInput;
