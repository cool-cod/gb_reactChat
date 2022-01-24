import React from 'react';
import Message from '../Message/Message';

const MessageList = ({messages}) => {
	return (
		<div>
			{messages.map((message, index) => (
				<Message key={index} author={message.author} text={message.text}/>
			))}
		</div>
	)
};

export default MessageList;
