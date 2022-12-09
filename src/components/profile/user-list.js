
import React from "react";
import {Link,useNavigate} from "react-router-dom";

export const UserList = ({users, deleteUser,updateUser}) => {
  const navigate = useNavigate();
  const navigateToCreate = (user)=>{
    navigate(`/admin/user/${user._id}`);
  }
  return (
    <div className="list-group">
      {
        users.map(user => {
          return (
            <Link className="list-group-item"
                  key={user._id}
                  to={`/admin/users/${user._id}`}>

          <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">

            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Create</h2>
                </div>
                <div className="card-body"></div>

                {user &&
                    <div>
                        <h2>The User name is : <b>{user.username}</b></h2>
                        <h5>Email is : {user.email}</h5>
                        <h5>Role is : {user.role}</h5>

                    </div>
                }



              <button onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                deleteUser(user._id)
              }} className="btn btn-danger fa-pull-right">
                Delete User
              </button>
              <button onClick={navigateToCreate}
               className="btn btn-warning fa-pull-right">
                Edit User Details
              </button>
              </div>
              </div>
  </div>


            </Link>

          )
        })
      }

    </div>)
};
