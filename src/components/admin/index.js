import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as service
    from "../../services/users-service";
    import bcrypt from 'bcryptjs'
    const saltRounds = bcrypt.genSaltSync(10);

const UpdateUser = () => {
    const { uid } = useParams();



    const[username,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[password,passwordChange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();
    const navigateToUser = ()=>{
      navigate(`/profile/allUsers/`);
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
      const userdata={}
      if (username!==""){
        userdata.username=username;
      }
      if (password!==""){
        userdata.password=bcrypt.hashSync(password,saltRounds);
      }
      if (email!==""){
        userdata.email=email;
      }
      

    console.log(uid)
      fetch("http://localhost:4000/api/users/"+uid
      ,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/profile');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return (
        <div>

        <div className="row">
            <div className="col-lg-12">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>User Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">



                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={username} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                  
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input value={password} onChange={e=>passwordChange(e.target.value)} className="form-control" placeholder="password"></input>
                                    </div>
                                </div>



                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success col-lg-3 offset-lg-2" type="submit">Save</button>
                                       <button onClick={navigateToUser} className="btn btn-danger col-lg-3 offset-lg-2">Back</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
export default UpdateUser;
