import React, {useState} from "react";
import ProduitService from "../../services/aliment_service/produit";
import {Bounce, toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import ToastOptions from "../../services/toast_options";


const AddAlimentForm = (props) => {

    const [designation, setDesignation] = useState("")
    const [quantite, setQuantite] = useState(0)

    const handleSubmitNewAliment = (e) => {

        e.preventDefault()

        if(designation !== ""){
            if(window.confirm("Etes vous sur d'ajouter : " + designation + ",  quantite : " + quantite + "Kg ?")){
                const newAliment = {
                    designation: designation,
                    quantite: quantite
                }
                const response = ProduitService.insertProduct(newAliment)
                response.then((res)=>{
                    props.onAddSubmitAliment()
                    props.onCloseAddForm()
                    toast.success("La nouvelle produir alimentaire a ete ajouter", ToastOptions)
                }).catch((err)=> {
                    toast.error("Un erreur s'est produit lors de l'ajout", {
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
            }
        }else{
            toast.warning("Veuillez remplir le champs de designation pour cette produit", {
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


    return (
        <>
            <div className={"z-10 bg-gray-800 justify-center opacity-90 flex flex-row items-center edit-center-form"}>
                <div className={"rounded-full bg-blue-700 px-3 py-1.5 absolute left-[32%] top-20"} onClick={props.onCloseAddForm}>
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
                            onClick={handleSubmitNewAliment}
                        >
                            Ajouter le produit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAlimentForm