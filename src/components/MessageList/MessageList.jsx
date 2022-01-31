import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message/Message";
import sl from "./MessageList.module.css";

const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message) {
      setMessageList([
        ...messageList,
        { author: "User", text: message, date: new Date() },
      ]);
      setMessage("");
    } else {
      alert("write something");
    }
  };

  const handlePressInput = (event) => {
    if (event.code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const LastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (LastMessage?.author !== "Bot" && messageList.length) {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", text: "Hello from Bot" },
        ]);
      }, 100);
    }

    return () => clearInterval(timerId);
  }, [messageList]);

  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, [messageList]);

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messageList, handleScrollBottom]);

  return (
    <div>
      <div ref={ref}>
        {messageList.map((message, index) => (
          <Message key={index} author={message.author} text={message.text} />
        ))}
        <Input
          className={sl.input}
          fullWidth
          placeholder="enter message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={handlePressInput}
          endAdornment={
            message && (
              <InputAdornment position="end">
                <SendIcon className={sl.icon} onClick={sendMessage} />
              </InputAdornment>
            )
          }
        />
      </div>
    </div>
  );
};

export default MessageList;
