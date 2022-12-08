import React from "react";
import {useEffect, useState} from "react";
import * as userService from "../../services/users-service";
import {UserList} from "../profile/user-list";
import {Link, useNavigate} from "react-router-dom";
import CreateUser from "../profile/create-user";
import './users.css'
const AllUsers = () => {
  const [existingUsers, setExistingUsers] = useState([]);


    const navigate = useNavigate();
    const navigateToCreate = ()=>{
      navigate('/profile/createUser');
    }

    const deleteUser = (uid) =>
        userService.deleteUser(uid)
            .then(findAllUsers)

    const updateUser = (user) =>
        userService.updateUser(user)
            .then(alert('Saved successfully.'),
              navigate('/'))

    const findAllUsers = () =>
        userService.findAllUsersAsAdmin()
            .then(users => {
                setExistingUsers(users)
            })
    useEffect(findAllUsers, []);

    return (

<div>
        <div id="main">

          <h1 className="fa-pull-left">Existing Users</h1>
          <button onClick={navigateToCreate} className="btn btn-primary mb-5">Add User
           </button>
</div>

  <UserList users={existingUsers} deleteUser={deleteUser} updateUser={updateUser}/>
        </div>



  );
};

export default AllUsers;
