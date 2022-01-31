import React from 'react';
import ReactDOM from 'react-dom';
import ChatsList from './components/ChatsList/ChatsList';
import Layout from './components/Layout/Layout';
import MessageList from './components/MessageList/MessageList';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout
      // header={<Header />}
      chats={<ChatsList />}
      messages={<MessageList />}
    />
  </React.StrictMode>,
  document.getElementById('root')
);


