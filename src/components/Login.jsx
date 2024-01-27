import { UseAuth } from "../context/AuthProvider";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
    
    const authctx = UseAuth();
    // console.log(authctx);

    const [loginemail, setLoginEmail]= useState("");
    const [loginpass, setLoginPass] = useState("");

    const nav = useNavigate();

    const submitloginform = async (e) => {
         e.preventDefault();
        //  console.log(loginemail, loginpass);
        try {
           const res= await authctx.login(loginemail, loginpass);
            console.log(res);
            authctx.setNewUser(res);
            nav("/dashboard")
        } catch (error) {
            console.log(error);
        }
        
       
    }

    return(
        <>
        <h1>Log In</h1>
        <form onSubmit={submitloginform}>
            <label>
               Email: <input type="text" placeholder="Enter Email.." onChange={(e)=>setLoginEmail(e.target.value)}/>
            </label>
            <label>
                Password: <input type="password" onChange={(e)=>setLoginPass(e.target.value)}/>
            </label>
            <button>LogIn</button>
            Create an account: <Link to="/signup">Sign Up</Link> 
        </form>
        </>
    );
};

export default Login;