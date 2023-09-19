import React,{useState} from 'react';
import Card from './components/UI/Card';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [users,setUsers] = useState([])
    const [isInvalid, setIsInvalid] = useState(false);
  function addUserHandler(user){
    setUsers([...users, user]);
  }
  function invalidInputHandler(isInvalid){
    setIsInvalid(isInvalid);
  }
  return (
    <div>
      <Card>
        <AddUser
          onAddUser={addUserHandler}
          onInvalidInput={invalidInputHandler}
        />
        {users.length && <UserList users={users} />}
      </Card>
      {isInvalid && <ErrorModal title="invalid data" message='test'/>}
    </div>
  );
}

export default App;
