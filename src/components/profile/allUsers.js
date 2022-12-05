
import {useEffect, useState} from "react";
import * as userService from "../../services/users-service";
import {UserList} from "../profile/user-list";
import {Link, useNavigate} from "react-router-dom";

const AllUsers = () => {
  const [existingUsers, setExistingUsers] = useState([]);


    const navigate = useNavigate();

    const deleteUser = (uid) =>
        userService.deleteUser(uid)
            .then(findAllUsers)

    const findAllUsers = () =>
        userService.findAllUsersAsAdmin()
            .then(users => {
                setExistingUsers(users)
            })
    useEffect(findAllUsers, []);

    return (
        <div>
          <h1>Existing Users</h1>

          <UserList users={existingUsers} deleteUser={deleteUser}/>

        </div>
  );
};

export default AllUsers;
