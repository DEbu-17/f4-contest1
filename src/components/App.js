import React, { useState } from "react";
import "../styles.css";


const App = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setcPassword] = useState("");


    function implementFocus(e){
        e.target.style.borderColor = "blue"
    }

    function onChangeEmail(e){
        setEmail(e.target.value);      
    }

    function onChangePassword(e) {
      setPassword(e.target.value);
      console.log(password.length);
    }

    function onChangecpassword(e) {
      setcPassword(e.target.value);
    }

   
    function successPass() {
      document.getElementById("password").style.borderColor = "#00FF00";
    }

    function successEmail(){
        document.getElementById("email").style.borderColor = "#00FF00";
    }
     function successConfPass() {
       document.getElementById("cpassword").style.borderColor = "#00FF00";
     }


    function implementSubmit(e){
        e.preventDefault();
        if((password != cpassword) || (password.length<8) || ((!email.includes("@") || !email.includes(".com")))){
            alert("form can not be submitted")
        }else{
            alert("form submitted successfully");
        }
    }

    return (
      <form className="forms" onSubmit={implementSubmit}>
        <label for="email">Email</label>
        <input
          onFocus={implementFocus}
          type="email"
          onChange={onChangeEmail}
          id="email"
        ></input>

        {(!email.includes("@") || !email.includes(".com")) && (
          <div class="error">Write a valid Email</div>
        )}

        {email.includes("@") && email.includes(".com") && successEmail()}

        <label for="password">password</label>
        <input
          onFocus={implementFocus}
          type="password"
          onChange={onChangePassword}
          id="password"
        ></input>

        {password.length < 8 && (
          <div class="error">password must be atleast 8 characters</div>
        )}

        {password.length >= 8 && successPass()}

        <label for="cpassword">Confirm Password</label>
        <input
          onFocus={implementFocus}
          type="password"
          onChange={onChangecpassword}
          id="cpassword"
        ></input>

        {cpassword != password && <div class="error">password Not matched</div>}

       

        <button type="submit">Submit</button>
      </form>
    );
}

export default App;