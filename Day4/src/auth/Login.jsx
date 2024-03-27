import { useEffect, useState } from "react";
import "../assets/css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginmsg, setLoginmsg] = useState("Welcome back");
  useEffect(() => {
    // Disable scrolling when the component mounts (login page is rendered)
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts (user navigates away from the login page)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const formHandler = async(e) => {
    e.preventDefault();
    try
    {
      if (username.length === 0 || password.length === 0) {
        alert("Enter emailid and password")
      } else if (username.length === 0) {
        alert("Enter Emailid")
      } else if (password.length === 0) {
        alert("Enter Password");
      } 
      else 
      {
        const response = await axios.post("http://localhost:8080/auth/authenticate", { username, password });
        const { token } = response.data;
        const { role } =response.data;
        localStorage.setItem("token", token);
  
        if (role === "ADMIN") 
        {
          navigate("/admin");
        } 
        else 
        {
          navigate("/");
        }
      }
  }
  catch(error)
  {
    alert("Incorrect Username and Password.");
  }

  };
  
  return (
    <div className="bodylog">
    <div className="container">
      <div className="well">
        <br/>
         <center> <h1 className="head1">Welcome Back</h1>
          <h2 className="h2">Log in to your account</h2></center>

        <div>
          <form id="login_form" onSubmit={formHandler}>
          <input className="textbox5"
            placeholder="Enter your username"
            id="email" onChange={(e) => setUsername(e.target.value)}
          />
          <br/><br/>
          <input
            type="password"
            placeholder="Enter your password"
            id="password" onChange={(e) => setPassword(e.target.value)}
          />
          
          <br/><br/>
        <center>
          <button className="button" id="btn-submit" >
            Login
          </button></center><br/>
          <center>Don't have an account?</center><br/>
          <center> <Link className="button" to="/register">Signup</Link></center>
        </form>
        </div>
        
      </div>
      <Link id="home_link" to="/" style={{ display: "none" }}>Home</Link>

      <img className="logimg" src="https://thumbs.dreamstime.com/b/vector-stock-illustration-birthday-bash-inscription-stars-greeting-card-invitation-brush-pen-lettering-calligraphy-167457355.jpg" />
    </div>
    </div>
  );
}

export default Login;
