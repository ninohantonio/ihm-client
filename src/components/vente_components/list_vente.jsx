import React, {useEffect, useState} from "react";
import VenteService from "../../services/vente_services/vente";
import {useCategory} from "../../states/category_context";
import EditAlimentationForm from "../alimentation_components/edit_alimentation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const ListVente = () => {
    const [data, setData] = useState([])
    const {category, setCategory} = useCategory()
    const [monnaie, setMonnaie] = useState(0)

    const styleForPair = "relative bg-gray-300 bg-opacity-40"
    const styleForUnPair = "relative"

    const loadAllVente = () => {
        const response = VenteService.allVente(category)
        response.then((res)=>{
            setData(res)
            console.log(data)
            let caisse = 0;
            res.map(item => (
                caisse += (item.poids * item.category.prix)
            ))
            setMonnaie(caisse)
        }).catch((e)=>{console.error("error de get vente")})

    }


    const checkIsPair = (key) => {
        return key % 2 === 0
    }

    useEffect(()=>{
        loadAllVente()
    }, [category])
    return (
        <>
            <div className={"flex items-center justify-center ml-[19.5%] mt-4 pt-20 h-[70%] w-[60%] p-2 text-black"}>
                <table className={"w-[100%]"}>
                    <thead className={"theader-table"}>
                    <tr className={"py-6"}>
                        <th>Numero</th>
                        <th>Quantite</th>
                        <th className={""}>Prix Par kilo</th>
                        <th className={""}>Description</th>
                        <th>Prix de l'animal</th>
                    </tr>
                    </thead>
                    <tbody className={"relative"}>
                    {
                        data.map((item, key) => (
                            <tr className={checkIsPair(key) ? styleForPair : styleForUnPair}>
                                <td className={"border-r-2 border-l-2 py-2 pl-2"}>{key + 1}</td>
                                <td className={"border-r-2 py-2 pl-2"}>{item.poids} kg</td>
                                <td className={"border-r-2 py-2 pl-2"}>{item.category.prix} Ar</td>
                                <td className={"border-r-2 py-2 pl-2"}>{item.description}</td>
                                <td className={"py-2 pl-2"}>{item.poids * item.category.prix} Ar</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={5} className="items-center py-4">
                            <div className="mx-auto inline px-5 text-xl"><span>Argent en caisse : </span> <span className="text-blue-600 font-mono">{monnaie} Ar</span></div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListVente