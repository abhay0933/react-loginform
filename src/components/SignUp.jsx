import { UseAuth } from "../context/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";
import './'


const SignUp = () => {

    const [email1, setEmail]= useState("");
    const [pass1,setPass]= useState ("");
    const [confirmpass,setConfirmPass]= useState ("");

    const authctx= UseAuth();
    // console.log(authctx);

    const submitsignupform = async (e) => {
        e.preventDefault();

        if(pass1 != confirmpass){
            alert("Password does not match");
        }
        try {
           const res= await authctx.signup(email1, pass1);
        //    console.log(res);
        authctx.setNewUser(res);
        alert("Restration Successfull proceed to Login");
        } catch (error) {
            console.log(error);
        }
        
    }


   return(
    <>
    <form onSubmit={submitsignupform}>
        <h1>Sign Up</h1>
        <label>Email: 
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>Password: 
            <input type="password" onChange={(e) => setPass(e.target.value)}/>
        </label>
        <label>Confirm Password: 
            <input type="password" onChange={(e) => setConfirmPass(e.target.value)} />
        </label>
        <button>Submit</button>
        Already have an account: <Link to="/">Log In</Link>
    </form>
    </>
   );
}

export default SignUp;