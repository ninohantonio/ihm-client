import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import ProduitService from "../../services/aliment_service/produit";
import {Bounce, toast} from "react-toastify";

const EditAlimentForm = (props) => {
    const [designation, setDesignation] = useState("")
    const [quantite, setQuantite] = useState(0)
    const [alimentId, setAlimentId] = useState(0)

    const loadMainData = () => {
        props.onEditSubmitAliment()
    }

    const handleSubmitEditAliment = () => {
        if(designation !== ""){
            const alimentData = {
                designation: designation,
                quantite: quantite
            }
            const response = ProduitService.updateProduct(alimentData, alimentId)
            response.then((res)=>{
                props.onEditSubmitAliment()
                props.onCloseEditForm()
                console.log("result edit = ", res)
            }).catch((err)=>{
                toast.error("Une erreur s'est produite lors de la modifications", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            })
        }else{
            toast.warning("Veuillez remplir le champ pour la disignation", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        }
    }

    const setAllEditData = () => {
        setQuantite(props.quantite)
        setDesignation(props.designation)
        setAlimentId(props.id)
    }

    useEffect(() => {
        setAllEditData()
    }, []);
    return (
        <>
            <div className={"z-10 bg-gray-800 justify-center opacity-90 flex flex-row items-center edit-center-form"}>
                <div className={"rounded-full bg-blue-700 px-3 py-1.5 absolute left-[32%] top-20"}
                     onClick={props.onCloseEditForm}>
                    <FontAwesomeIcon icon={faClose}/>
                </div>
                <div
                    className={"w-[30vw] h-[50%] left-[40vw] bg-gray-300 bg-opacity-100 rounded shadow-lg shadow-black text-black space-y-6 p-4 mx-auto"}>
                    <div>
                        Nouvelle Produit alimentaire
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
                        <input
                            className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="text"
                            value={designation}
                            min={0}
                            onChange={(e) => {
                                setDesignation(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Quantite en Kg</label>
                        <input
                            className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="number"
                            value={quantite}
                            onChange={(e) => {
                                setQuantite(parseInt(e.target.value))
                            }}
                        />
                    </div>
                    <div>
                        <button
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleSubmitEditAliment}
                        >
                            Enregistrer la modification
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditAlimentForm