import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MessageInput from './components/MessageInput/MessageInput';
import MessageList from './components/MessageList/MessageList';
import './index.css';


const App = () => {
  
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    const LastMessage = messages[messages.length - 1];
    let timerId = null;

    if (LastMessage?.author !== 'Bot' && messages.length) {
      timerId = setTimeout(()=>{
        setMessages([...messages, {author: 'Bot', text: 'Hello from Bot'}])
      }, 1500)
    }

    return () => clearInterval(timerId)
  }, [messages])

  return (
    <div>
      <MessageInput messages={messages} setMessages={setMessages}/>
      <MessageList messages={messages}/>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


