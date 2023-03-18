import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import Rectangle2 from ".src/Images/Rectangle2.png"


export default function Login(props) {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate();

  const login = () => {
    let url = "https://reqres.in/api/login";
    // let data='{"email": "eve.holt@reqres.in","password": "cityslicka"}'
    const items = { email, password };
    let params = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(items)
    }
    // console.log(data)
    fetch(url, params).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      if (data.token === 'QpwL5tke4Pnpja7X4') {
        console.log("success")
        navigate("/Home");
      }
      else {
        alert(data.error)
      }
    })
  }

  return (
    <>
      {/* <h1>login page</h1>
<input type="text" onChange={(e)=>setemail(e.target.value)} placeholder="email" className="form-control" />
<br />
<input type="text" onChange={(e)=>setpassword(e.target.value)} placeholder="password" className="form-control" />
<br />
<button onClick={login}>Login</button> */}
      <div className="login">
        <div className="login1">
          <div>
            <h1>Welcome</h1>
            <p>Enter your Username and Passoword.</p>
            <ul>
              <li><i class="fa fa-light fa-user"></i><input type="text" onChange={(e) => setemail(e.target.value)} placeholder="Username" /></li>
              <li><i class="fa fa-thin fa-lock"></i><input type="text" onChange={(e) => setpassword(e.target.value)} placeholder="Password" /><i class="fa fa-light fa-eye"></i></li>
              <li onClick={login}>Login</li>
            </ul>
            <p style={{ color: "#686687", textDecoration: "underline" }}>Forgot Password?</p>
          </div>
        </div>
        <div className="login2">
          <div className="login21">
            <div className="rectangle1">

            </div>
            <div className="rectangle2">
              {/* <img src="/Images/Screenshot (31).png" alt="269" /> */}
            </div>
            {/* <img src="" alt="" /> */}
          </div>
          <div className="login22">
            <h2>360° Solution for Asset Management</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>
      </div>
    </>
  )
}
