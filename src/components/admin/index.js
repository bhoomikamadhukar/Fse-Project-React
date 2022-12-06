import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as service
    from "../../services/users-service";

const UpdateUser = () => {
    const { uid } = useParams();


    //const [empdata, empdatachange] = useState({});

    // useEffect(() => {
    //     fetch("http://localhost:4000/api/user/" + uid).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         namechange(resp.username);
    //         emailchange(resp.email);
    //
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, []);


    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");

    const[validation,valchange]=useState(false);


    const navigate=useNavigate();
    const navigateToUser = ()=>{
      navigate(`/profile/allUsers/`);
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
      const userdata={name,email};

    console.log(uid)
      fetch("http://localhost:4000/api/users/"+uid
      ,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
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
                                        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
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
