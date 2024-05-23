import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import EditAlimentForm from "./edit_aliment";
import ProduitService from "../../services/aliment_service/produit";
import {Bounce, toast} from "react-toastify";
import ToastOptions from "../../services/toast_options";

const ListAliment = (props) => {

    const styleForPair = "relative bg-gray-300 bg-opacity-40"
    const styleForUnPair = "relative"
    const [showEditForm, setShowEditForm] = useState(false)
    const [keyOpen, setKeyOpen] = useState(null)


    const closeEditForm = () => {
        setShowEditForm(false)
        setKeyOpen(null)
    }

    const handleDeleteAliment = (id, designation) => {
        if(window.confirm("Vous voulez supprimer le produit : " + designation)){
            const response = ProduitService.deleteProduct(id)
            response.then((res)=>{
                props.onEditSubmitAliment()
                toast.info("Le produit : " + designation + " a ete supprimer", ToastOptions)
            }).catch((err)=>{
                toast.error("Une erreur s'est produit lors de la suppression", ToastOptions)
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
            <div className={"flex items-center justify-center ml-[20%] pt-8 mt-2 h-[70%] w-[60%] p-2"}>
                <table className={"w-[85%]"}>
                    <thead className={"theader-table"}>
                        <tr className={"py-6"}>
                            <th>Numero</th>
                            <th>Designation</th>
                            <th>Quantite</th>
                            <th colSpan={2}>Options</th>
                        </tr>
                    </thead>
                    <tbody className={"relative"}>
                    {
                        props.data?.map((item, key)=> (
                            <tr className={checkIsPair(key) ? styleForPair : styleForUnPair}>
                                <td className={"border-r-2 border-l-2 py-2 pl-2"}> {key + 1} </td>
                                <td className={"border-r-2 py-2 pl-2"}> {item.designation} </td>
                                <td className={"border-r-2 py-2 pl-2"}> {item.quantite} kg</td>
                                {showEditForm && (keyOpen === key)?<EditAlimentForm onCloseEditForm={closeEditForm} designation={item.designation}
                                                  quantite={item.quantite} id={item.id} onEditSubmitAliment={props.onEditSubmitAliment} /> : ""}
                                <td>
                                    <div
                                        className={"cursor-pointer flex flex-row justify-center items-center hover:bg-blue-400 py-2 rounded-md hover:transition"}
                                        onClick={()=>{
                                            openThisKey(key)
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={"cursor-pointer flex flex-row justify-center items-center hover:bg-red-400 py-2 rounded-md hover:transition"}
                                        onClick={()=>{
                                            handleDeleteAliment(item.id, item.designation)
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

export default ListAliment