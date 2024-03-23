import React from "react";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Card = (props) => {
    return (
        <div className="bg-gray-200 shadow-lg rounded-lg p-6 w-64">
            <div className="flex justify-around items-center mb-4">
                <img className="h-20 w-30 rounded object-cover mb-4" src="http://localhost:8080/animal/getphoto/1"
                     alt="Image de l'animal"/>
                <label htmlFor="imageUpload" className="cursor-pointer">
                    <FontAwesomeIcon icon={faEdit} className="text-gray-500"/>
                </label>
                <input type="file" id="imageUpload" className="hidden"/>
                <FontAwesomeIcon icon={faTrash} className="text-gray-500"/>
            </div>
            <div>
                <h2 className="text-sm font-bold mb-2">{props.description}</h2>
                <p className="text-gray-700">Numero: {props.id}</p>
                <p className="text-gray-700">Âge: {props.age}</p>
                <p className="text-gray-700">Poids: {props.poids}</p>
                <p className="text-gray-700">Sante: {props.sante}</p>
                <p className="text-gray-700">Vaccine: {props.vaccine}</p>
            </div>
        </div>
    )
}

export default Card;