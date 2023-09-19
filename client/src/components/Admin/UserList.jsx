import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function UserList({ users }) {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.fullName} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
