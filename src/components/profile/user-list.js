import React from "react";
import {Link} from "react-router-dom";

export const UserList = ({users, deleteUser}) => {
  return (
    <div className="list-group">
      {
        users.map(user => {
          return (
            <Link className="list-group-item"
                  key={user._id}
                  to={`/admin/users/${user._id}`}>
          <span className="fs-3">
            Name : {user.username}
{' '}
Role: {user.role}
          </span>

              <button onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                deleteUser(user._id)
              }} className="btn btn-danger fa-pull-right">
                <i className="fas fa-remove"></i>
              </button>
            </Link>
          )
        })
      }
    </div>)
};
