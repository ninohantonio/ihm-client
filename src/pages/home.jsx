import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignIn} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="p-4 bg-blue-500 text-white">
                <span>Home</span>
                <span className={"ml-3 border-b-2 cursor-pointer"} onClick={()=>{navigate("/login")}} >Se connecter <FontAwesomeIcon icon={faSignIn} /> </span>
            </div>
        </>
    )
}

export default Home;