import { useEffect, useRef, useState } from "react";
import "../assets/css/Login.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  const email = useRef();
  const password = useRef();
  const [loginmsg, setLoginmsg] = useState("Welcome back");
  useEffect(() => {
    // Disable scrolling when the component mounts (login page is rendered)
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts (user navigates away from the login page)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  function handlesubmit(event) {
    event.preventDefault();
    //check email and password are empty or not
    console.log("clicked");
    if (email.current.value === "" || password.current.value === "") {
      setLoginmsg("Please enter email and password");
      //set the #login_msg to red color
      document.getElementById("login_msg").style.color = "red";
    } else {
      setLoginmsg("Login successful");
      //set the #login_msg to green color
      document.getElementById("login_msg").style.color = "green";
      document.getElementById("home_link").click();

    }
  }
  return (
    <div className="bodylog">
    <div className="container">
      <div className="well">
        <br/>
         <center> <h1 className="h1">Welcome Back</h1>
          <h2 className="h2">Log in to your account</h2></center>
          <p id="login_msg">{loginmsg}</p>

        <div>
          <form id="login_form">
          <input
            type="email" 
            ref={email}
            placeholder="Enter your email"
            id="email"
          />
          <br/><br/>
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            id="password"
          />
          
          <br/><br/>
        <center>
          <button className="button" id="btn-submit" onClick={handlesubmit}>
            Login
          </button></center><br/>
          
        </form>
        </div>
        
      </div>
      <Link id="home_link" to="/admin" style={{ display: "none" }}>Home</Link>

      <img className="logimg" src="https://thumbs.dreamstime.com/b/vector-stock-illustration-birthday-bash-inscription-stars-greeting-card-invitation-brush-pen-lettering-calligraphy-167457355.jpg" />
    </div>
    </div>
  );
}

export default AdminLogin;
