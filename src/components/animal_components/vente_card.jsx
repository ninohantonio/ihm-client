import React, {useState} from "react";
import {faCheck, faClose, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddAnimalForm from "./animal_add";
import EditAnimalForm from "./animal_edit";
import AnimalService from "../../services/animal_services/animal";
import {Bounce, toast, ToastContainer} from "react-toastify";
import ToastOptions from "../../services/toast_options";
import VenteService from "../../services/vente_services/vente";
import category from "../../services/animal_services/category";

const VenteCard = (props) => {
    const [showEditForm, setShowEditForm] = useState(false)
    const [open, setOpen] = useState(false)


    const setEditData = (id, description, age, poids, sexe, vaccine, sante) => {
        setShowEditForm(true)
        setOpen(true)
        console.log("sexe : ", props.sexe)
    }

    const handleDeleteAnimal = () => {
        if(window.confirm("Etes vous sur de vendre l'animal numero : " + props.numero )){
            const venteData = {
                category: props.category,
                animal: props.id,
                description: props.description,
            }
            const response = VenteService.createVente(venteData)
            response.then((res)=>{
                if(res){
                    toast.info("L'animal numero : " + props.numero + " a ete supprimer", ToastOptions)
                }
            }).catch((err)=>{
                toast.error("Un erreur est survenu lors de la suppression", ToastOptions)
            })
        }
    }

    return (
        <>
            <div className="bg-gray-200 shadow-lg rounded-lg p-6 w-64">
                <div className="flex justify-around items-center mb-4">
                    <img className="h-20 w-30 rounded object-cover mb-4"
                         src={`http://localhost:8080/animal/getphoto/${props.id}`}
                         alt="Image de l'animal"/>
                    <div className="text-gray-300 px-2 rounded-sm mx-1 cursor-pointer bg-green-600" onClick={handleDeleteAnimal}>
                        vendre
                    </div>
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-2">{props.description}</h2>
                    <p className="text-gray-700">Numero: {props.numero}</p>
                    <p className="text-gray-700">Sexe: <span className={props.sexe === 1?"text-blue-500":"text-pink-700"}>{props.sexe === 1 ? "Male" : "Femele"}</span></p>
                    <p className="text-gray-700">Âge: {props.age}</p>
                    <p className="text-gray-700">Poids: {props.poids} Kg</p>
                    <p className={props.sante === "En bonne santé"?"text-black bg-green-300 rounded-md":(props.sante==="En traitement"?"bg-blue-400 rounded-md":"bg-red-400 rounded-md")}>Sante: {props.sante}</p>
                    <p className="text-gray-700">Vaccine: {props.vaccine} {props.vaccine === "Oui"?<span className={"text-green-500"}><FontAwesomeIcon icon={faCheck}/></span> :<FontAwesomeIcon icon={faClose}/>}</p>
                </div>
            </div>
        </>
    )
}

export default VenteCard;