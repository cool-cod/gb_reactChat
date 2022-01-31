import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const ChatsList = () => {
  const [chatsArr, setChatsArr] = useState([
    { name: "room-1", id: 1 },
    { name: "room-2", id: 2 },
    { name: "room-3", id: 3 },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <List>
      {chatsArr.map((chat) => {
        return (
          <ListItemButton
            selected={selectedIndex === chat.id}
            onClick={() => handleListItemClick(chat.id)}
            key={chat.id}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary={chat.name} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default ChatsList;
