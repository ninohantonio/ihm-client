import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faHeart,
    faRepeat, faSignOutAlt, faSyringe, faBoxOpen, faLineChart, faCow, faCoins
} from '@fortawesome/free-solid-svg-icons';
import AuthService from "../../services/auth_services/auth";
import {useNavigate} from "react-router-dom";
import {useCategory} from "../../states/category_context";
import {useAuth} from "../../states/is_authenticate";


const Sidebar = (props) => {

    const navigate = useNavigate()
    const {category, setCategory} = useCategory()
    const {isAuth, setIsAuth} = useAuth()


    const [active, setActive] = useState(0)

    const activeStyle = "flex items-center space-x-2 border-b bg-gray-300 border-blue-700 border-l-4 pl-2 border-green-400 py-2"

    const handleLogout = () => {
        const response = AuthService.logout()
        setCategory(0)
        setIsAuth(false)
        localStorage.removeItem("email")
        localStorage.setItem("topics", null)
    }

    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-gray-200 shadow-xl text-black ">
            <div className="p-6">
                <h2 className="text-2xl text-yellow-600 mb-4">Ferme Data</h2>
                <ul className="space-y-2">
                    <li className={props.active === 1 ? activeStyle : "flex items-center cursor-pointer space-x-2 border-gray-700 py-2"}
                        onClick={() => {
                            navigate("/")
                            setActive(1)
                        }}>
                        <FontAwesomeIcon icon={faHome} className="text-lg"/>
                        <span>Accueil</span>
                    </li>
                    <li className={props.active === 2 ? activeStyle : "flex items-center cursor-pointer space-x-2 border-gray-700 py-2"}
                        onClick={() => {
                            navigate("/profile")
                            setActive(2)
                        }}>
                        <FontAwesomeIcon icon={faUser} className="text-lg"/>
                        <span>Profil</span>
                    </li>
                    <li className={props.active === 3 ? activeStyle : "flex items-center space-x-2 cursor-pointer border-gray-700 py-2"}
                        onClick={() => {
                            navigate("/dashboard")
                            setActive(3)
                        }}>
                        <FontAwesomeIcon icon={faLineChart} className="text-lg"/>
                        <span>Tableau de bord</span>
                    </li>
                    {/* Ajoutez plus d'items ici */}
                    <li className="pt-20 mt-80 border-2 mb-8"></li>
                    {/* Ligne horizontale fine */}
                    <li className={props.active === 4 ? activeStyle : "flex items-center space-x-2 pl-2 border-gray-700 py-2 cursor-pointer"}
                        onClick={() => {
                            navigate("/animal")
                            setActive(4)
                        }}>
                        <FontAwesomeIcon icon={faCow} className="text-lg"/>
                        <span>Animal</span>
                    </li>
                    <li className={props.active === 5 ? activeStyle : "flex items-center space-x-2 pl-2 border-gray-700 py-2 cursor-pointer"}
                        onClick={() => {
                            navigate("/aliment")
                            setActive(5)
                        }}>
                        <FontAwesomeIcon icon={faBoxOpen} className="text-lg"/>
                        <span>Aliment</span>
                    </li>
                    <li className={props.active === 6 ? activeStyle : "flex items-center space-x-2 pl-2 border-gray-700 py-2 cursor-pointer"}
                        onClick={() => {
                            navigate("/alimentation")
                            setActive(6)
                        }}>
                        <FontAwesomeIcon icon={faHeart} className="text-lg"/>
                        <span>Alimentation</span>
                    </li>
                    <li className={props.active === 7 ? activeStyle : "flex items-center space-x-2 pl-2 border-gray-700 py-2 cursor-pointer"}
                        onClick={() => {
                            navigate("/vente")
                            setActive(7)
                        }}>
                        <FontAwesomeIcon icon={faCoins} className="text-lg"/>
                        <span>Vente</span>
                    </li>
                    <li className="pt-8 border-2 mb-8"></li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-red-700 border-gray-700 py-2 text-red-500"
                        onClick={handleLogout}
                    >
                        <a href={"/"}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg"/>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
