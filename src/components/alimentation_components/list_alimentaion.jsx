import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import EditAlimentForm from "../aliment_components/edit_aliment";
import EditAlimentationForm from "./edit_alimentation";
import AlimentationService from "../../services/alimentation_services/alimentation";
import {toast} from "react-toastify";
import ToastOptions from "../../services/toast_options";


const ListAlimentation = (props) => {

    const [showEditForm, setShowEditForm] = useState(false)
    const [keyOpen, setKeyOpen] = useState(null)

    const styleForPair = "relative bg-gray-300 bg-opacity-40"
    const styleForUnPair = "relative"

    const closeEditForm = () => {
        setShowEditForm(false)
        setKeyOpen(null)
    }

    const handleDeleteAlimentation = (id, key) => {
        if(window.confirm("Supprimer le programme : " + key)){
            const response = AlimentationService.deleteAlimentation(id)
            response.then((res)=>{
                toast.info("Le programme alimentation : " + key + " a ete supprimer", ToastOptions)
                props.onSubmitEdit()
            }).catch(err => {
                toast.error("Erreur lors de la suppression")
                console.log("error de suppresion ", err)
            })
        }
    }

    const openThisKey = (key) => {
        setKeyOpen(key)
        setShowEditForm(true)
    }

    const checkIsPair = (key) => {
        return key % 2 === 0
    }


    return (
        <>
            <div className={"flex items-center justify-center ml-[19.5%] mt-4 pt-6 h-[70%] w-[60%] p-2"}>
                <table className={"w-[100%]"}>
                    <thead className={"theader-table"}>
                        <tr className={"py-6"}>
                            <th>Heure</th>
                            <th>Quantite</th>
                            <th className={"w-13"}>Age Minimum</th>
                            <th className={"w-13"}>Age Maximum</th>
                            <th>Produit</th>
                            <th colSpan={2}>Options</th>
                        </tr>
                    </thead>
                    <tbody className={"relative"}>
                    {
                        props.data?.map((item, key)=> (
                            <tr className={checkIsPair(key)?styleForPair:styleForUnPair}>
                                <td className={"border-r-2 border-l-2 py-2 pl-2"}>{item.heure}</td>
                                <td className={"border-r-2 py-2 pl-2"}>{item.quantite} Kg</td>
                                <td className={"border-r-2 py-2 pl-2"}>{item.ageMin}</td>
                                <td className={"border-r-2 py-2 pl-2"}>{item.ageMax}</td>
                                <td className={"border-r-2 py-2 pl-2"}>{item.product["designation"]}</td>
                                {showEditForm && (keyOpen === key)?<EditAlimentationForm
                                    onCloseEditForm={closeEditForm}
                                    onEditSubmit={props.onSubmitEdit}
                                    data={item}
                                /> : ""}
                                <td>
                                    <div
                                        className={"cursor-pointer flex flex-row justify-center items-center hover:bg-blue-400 py-2 rounded-md hover:transition"}
                                        onClick={()=>{openThisKey(key)}}
                                    >
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={"cursor-pointer flex flex-row justify-center items-center hover:bg-red-400 py-2 rounded-md hover:transition"}
                                        onClick={()=>{
                                            handleDeleteAlimentation(item.id, key + 1)
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListAlimentation