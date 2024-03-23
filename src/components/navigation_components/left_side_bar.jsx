import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faCog,
    faDog,
    faHeart,
    faRepeat, faSignOutAlt, faSyringe, faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
import AuthService from "../../services/auth_services/auth";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        const response = AuthService.logout()
        navigate("/")
    }
    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white">
            <div className="p-6">
                <h2 className="text-2xl mb-4">Ferme Data</h2>
                <ul className="space-y-2">
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2">
                        <FontAwesomeIcon icon={faHome} className="text-lg"/>
                        <span>Accueil</span>
                    </li>
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2">
                        <FontAwesomeIcon icon={faUser} className="text-lg"/>
                        <span>Profil</span>
                    </li>
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2">
                        <FontAwesomeIcon icon={faCog} className="text-lg"/>
                        <span>Paramètres</span>
                    </li>
                    {/* Ajoutez plus d'items ici */}
                    <li className="border-b border-gray-700 pt-20 mt-80 mb-8"></li>
                    {/* Ligne horizontale fine */}
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2">
                        <FontAwesomeIcon icon={faDog} className="text-lg"/>
                        <span>Animal</span>
                    </li>
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2">
                        <FontAwesomeIcon icon={faBoxOpen} className="text-lg"/>
                        <span>Aliment</span>
                    </li>
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2">
                        <FontAwesomeIcon icon={faHeart} className="text-lg"/>
                        <span>Alimentation</span>
                    </li>
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2">
                        <FontAwesomeIcon icon={faSyringe} className="text-lg"/>
                        <span>Vaccination</span>
                    </li>
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2">
                        <FontAwesomeIcon icon={faRepeat} className="text-lg"/>
                        <span>Reproduction</span>
                    </li>
                    <li className="flex items-center space-x-2 border-b border-gray-700 py-2"
                        onClick={handleLogout}
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} className="text-lg"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
