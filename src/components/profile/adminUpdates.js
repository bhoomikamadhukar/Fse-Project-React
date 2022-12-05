import {useEffect, useState} from "react";
import * as userService from "../../services/users-service";
import {UserList} from "../profile/user-list";
import {Link, useNavigate} from "react-router-dom";

const EditUser = () => {
  const [existingUsers, setExistingUsers] = useState([]);


    const navigate = useNavigate();

    const updateUser = (uid) =>
        userService.updateUser(uid)
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

          <UserList users={existingUsers} updateUser={updateUser}/>

        </div>
  );
};

export default EditUser;
