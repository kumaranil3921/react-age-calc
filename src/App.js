import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);

  function addUserHandler(name, age) {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name, age, id: Math.random().toString() }];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
