import { useState } from "react";
import "../assets/css/Register.css"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [emailid, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobilenumber, setMobileno] = useState('');
  const [role, setRole] = useState('');
  const details={username,emailid,password,mobilenumber,role}
  const formHandler = async(e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (username.length === 0 || emailid.length === 0 || password.length === 0 || mobilenumber.length === 0 || role.length==0) {
      alert("Enter all the fields");
    }
    else if (!regex.test(emailid)) {
      alert("Enter a valid Email Address");
    }
    else if (password.length < 8) {
      alert("Enter at least 8 characters in password");
    }
    else {
      try {
        await axios.post("http://localhost:8080/auth/register", details);
        if(role==="ADMIN")
        {
          navigate("/admin");
        }
        else
        {
        navigate('/user/*');
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error appropriately, e.g., show error message to user
      }
    }
  }
  
  const [registerMsg, setRegisterMsg] = useState("Create an account");
  

  function handleSubmit() {
    if (username.current.value === "" || password.current.value === "" || confirmPassword.current.value === ""|| mobnumber.current.value==="") {
      setRegisterMsg("Please fill in all fields");
      document.getElementById("register_msg").style.color = "red";
    } else if (password.current.value !== confirmPassword.current.value) {
      setRegisterMsg("Passwords do not match");
      document.getElementById("register_msg").style.color = "red";
    } else {
      setRegisterMsg("Account created successfully");
      document.getElementById("register_msg").style.color = "green";
      document.getElementById("home_link").click();

    }
  }

  return (
    <div className="bodylog">
    <div className="container">
    <div className="well">
      <br/>
       <center> <h1 className="h1">Register</h1></center>
        <p id="register_msg">{registerMsg}</p>
<br/>
      <div>
        <form id="register_form" onSubmit={formHandler}>
        <input
          className="textbox6"
          placeholder="Enter your username"
          id="user"  onChange={(e) => setUsername(e.target.value)}
        />
        <br/><br/>
        <input
          type="email" 
          placeholder="Enter your Email id"
          id="email"  onChange={(e) => setEmail(e.target.value)} 
        />
          <br/><br/>
        <input
          type="number" 
          placeholder="Enter your mobile number"
          id="number" onChange={(e) => setMobileno(e.target.value)}  
        />
        <br/><br/>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"  onChange={(e) => setPassword(e.target.value)}
        />
        <br/><br/>

              <select className="role" value={role} onChange={(e) => setRole(e.target.value)} >
                <option value="">Select a role</option>
                <option value="USER">User</option>
  <option value="ADMIN">Admin</option>
</select>
        <br/><br/>
      <center>
        <button className="button"  id="btn-submit" >
          Register
        </button></center><br/>
        <center>Already have an account? <Link to="/user/*" className="reglog">Log In</Link></center>
      </form>
      </div>
      
    </div>
    <Link id="home_link" to="/" style={{ display: "none" }}>Home</Link>
    <img className="logimg" src="https://thumbs.dreamstime.com/b/vector-stock-illustration-birthday-bash-inscription-stars-greeting-card-invitation-brush-pen-lettering-calligraphy-167457355.jpg" />
  </div>
  </div>
  );
}

export default Register;
