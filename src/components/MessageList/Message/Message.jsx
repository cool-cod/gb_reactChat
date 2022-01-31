import React from "react";
import classNames from "classnames";
import styles from "./Message.module.css";

const Message = ({ author, text }) => {
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <h3>{text}</h3>
      <p>{author}</p>
      <p>12.03</p>
    </div>
  );
};

export default Message;
