// import * as userService from "../../services/users-service";
// import {useEffect, useState} from "react";
// import {UpdateList} from "../profile/update-list";
// import {Link, useNavigate,useParams} from "react-router-dom";
// const UserFormEditor = () => {
//         const {id} = useParams()
//         const [user, setUser] = useState({})
//
//         useEffect(() => {
//                 if(id !== "new") {
//
//                         findUserById(id)
//                 }
//         }, []);
//
//         const findUserById = (id) =>
//             userService.findUserById(id)
//                 .then(user => setUser(user))
//
//         const updateUser = (id, newUser) =>
//             userService.updateUser(id, newUser)
//                 .then(console.log("success"))
//
//         return (
//         <div>
//             <h2>User Editor</h2>
//             <label>Id</label>
//             <input className="form-control"
//                    value={user.id}/><br/>
//             <label>First Name</label>
//             <input className="form-control" onChange={(e) =>
//                 setUser(user =>
//                              ({...user, firstName: e.target.value}))} value={user.firstName}/><br/>
//             <label>Last Name</label>
//             <input className="form-control" onChange={(e) =>
//                 setUser(user =>
//                              ({...user, lastName: e.target.value}))} value={user.lastName}/><br/>
//             <label>Email</label>
//             <input className="form-control" onChange={(e) =>
//                 setUser(user =>
//                              ({...user, email: e.target.value}))} value={user.email}/><br/>
//             <label>Password</label>
//             <input className="form-control" onChange={(e) =>
//                 setUser(user =>
//                              ({...user, password: e.target.value}))} value={user.password}/><br/>
//             <label>Date of Birth</label>
//                 <input className="form-control" onChange={(e) =>
//                     setUser(user =>
//                                  ({...user, dob: e.target.value}))} value={user.dob}/><br/>
//                 <label>Gender</label>
//                 <input className="form-control" onChange={(e) =>
//                     setUser(user =>
//                                  ({...user, gender: e.target.value}))}value={user.gender}/><br/>
//
//
//             <button className="btn btn-primary" onClick={() => updateUser(user.id, user)}>Save</button>
//   <UpdateList users={user}/>
//             {/*<button className="btn btn-success" onClick={() => bookingsForGuest(user.id)}>View all Bookings</button>*/}
//             <Link to={`/admin/users/${user.id}`}>
//                 Update User
//             </Link>
//
//         </div>
//     )
// }
//
// export default UserFormEditor
