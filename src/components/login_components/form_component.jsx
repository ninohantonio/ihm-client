import React, {useContext, useState} from 'react';
import './logo.png'
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthService from "../../services/auth_services/auth";
import {useAuth} from "../../states/is_authenticate";
import {redirect, useNavigate} from "react-router-dom";
import {Bounce, toast, ToastContainer} from "react-toastify";


const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)
    const {isAuth, setIsAuth} = useAuth()
    const navigate = useNavigate()

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (e) => {
        e.preventDefault()
        const UserData = {
            email: email,
            password: password
        }
        const response = AuthService.login(UserData)
        response.then((res)=>{
            if(!res){
                toast.error('Email ou mot de passe invalides!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }else{
                toast.info('🦄 Wow so easy!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setIsAuth(true)
                navigate("/animal")
            }
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const response = await AuthService.isauth()
        console.log("isauth " + response)
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
            <ToastContainer/>
            <div className="flex w-4/5 h-4/5 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-1/2 left-side-bg">
                    <div className="flex flex-col items-center justify-center h-full text-white mt-60">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gray-200 opacity-20"></div>
                            <div className="relative py-2 px-20 text-white text-lg rounded-md">
                                Bienvenue sur FermeData
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-8 mt-1">
                    <img src='./logo.png' alt={""} className={" w-20 h-20 top-0 mx-auto border-none rounded-full image-back-logo"}/>
                    {isLogin ? (
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Email</label>
                                <input className="mt-1 block w-full h-10 border-2 bg-gray-300 rounded-md text-sm pl-2.5 " type="email"
                                    value={email}
                                       onChange={(e)=>{setEmail(e.target.value)}}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Mot de passe</label>
                                <span className={"absolute mt-2 ml-2"} onClick={()=>{setVisible(!visible)}}>
                                    <FontAwesomeIcon icon={visible?faEyeSlash:faEye} className="text-gray-500"/>
                                </span>
                                <input className="mt-1 block w-full h-10 border-2 bg-gray-300 rounded-md text-sm pl-8"
                                    type={visible?"text":"password"}
                                    value={password}
                                       onChange={(e)=>{setPassword(e.target.value)}}
                                />
                            </div>
                            <div>
                                <button
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleLogin}
                                >
                                    Se connecter
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form className="space-y-4">
                            {/* Formulaire d'inscription */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Nom</label>
                                <input className="mt-1 block w-full h-10 border-2 bg-gray-300 rounded-md text-sm pl-2.5" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Email</label>
                                <input className="mt-1 block w-full h-10 border-2 bg-gray-300 rounded-md text-sm pl-2.5" type="email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Mot de passe</label>
                                <input className="mt-1 block w-full h-10 border-2 bg-gray-300 rounded-md text-sm pl-2.5" type="password" />
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleRegister}
                                >
                                    S'inscrire
                                </button>
                            </div>
                        </form>
                    )}
                    <div className="flex justify-center mt-4">
                        <button onClick={toggleForm} className="text-sm text-blue-500 hover:text-blue-700">
                            {isLogin ? 'Passer à l\'inscription' : 'Retourner à la connexion'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
