// import { useEffect } from "react";
import {useNavigate, Navigate} from "react-router-dom";
import { UseAuth } from "../context/AuthProvider";


const Dashboard = () => {

    const authctx = UseAuth();
    const nav = useNavigate();

    // useEffect(()=> {
    //     if(Object.keys(authctx.newUser).length===0) {
    //         <Navigate to="/" />
    //     }
    // },[]);

    const logout = () => {
        
        nav('/'); 
    }

    if(Object.keys(authctx.newUser).length===0) {
        return(
            <Navigate to="/" />
        );
    }

    return(
        <>
        <h1>DashBoard</h1>
        <button onClick={logout}>Log Out</button>
        </>
    )
};

export default Dashboard;