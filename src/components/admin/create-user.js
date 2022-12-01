import {useState} from "react";
import * as service
    from "../../services/auth-service";
import {useNavigate} from "react-router-dom";

export const CreateUser = () => {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    const signup = () =>
        service.signup(newUser)
            .then(() => navigate('/explore'))
            .catch(e => alert(e));
    return (
        <div>
            <h1>Create User</h1>
            <input  className="mb-2 form-control" onChange={(e) =>
                setNewUser({...newUser,
                    username: e.target.value})} placeholder="username"/>
            <input  className="mb-2 form-control" onChange={(e) =>
                setNewUser({...newUser,
                    password: e.target.value})} placeholder="password"/>
            <input  className="mb-2 form-control" onChange={(e) =>
                setNewUser({...newUser,
                    email: e.target.value})} placeholder="email"/>
            <button onClick={signup}
                    className="btn btn-primary mb-5">Create User
            </button>
        </div>
    );
}