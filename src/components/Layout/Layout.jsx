import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ header, chats, messages }) => {
  return (
    <div className={styles.body}>
      {/* <div className={styles.header}>{header}</div> */}

      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{messages}</div>
      </div>
    </div>
  );
};

export default Layout;
