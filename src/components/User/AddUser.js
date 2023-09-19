import { useState } from "react";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const defaultData = {
  userName: "",
  age: "",
};

function AddUser(props) {
  const [user, setUser] = useState(defaultData);
  function userInputChangeHandler(input, value) {
    setUser((prevValue) => {
      return { ...prevValue, [input]: value };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("submit", user);
    if (!user.userName || !user.age) {
      props.onInvalidInput(true)
    } else {
      props.onAddUser(user);
      setUser(defaultData);
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          onChange={(event) => {
            userInputChangeHandler("userName", event.target.value);
          }}
          value={user.userName}
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          onChange={(event) => {
            userInputChangeHandler("age", event.target.value);
          }}
          value={user.age}
        />
      </div>
      <div>
        <Button type="submit" label="Add User" />
      </div>
    </form>
  );
}

export default AddUser;
