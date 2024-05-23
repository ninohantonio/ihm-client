import React, {useEffect, useState} from 'react'
import ListAlimentation from "../../components/alimentation_components/list_alimentaion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faRepeat, faSearch} from "@fortawesome/free-solid-svg-icons";
import CategoryBar from "../animal_container/category_bar";
import AlimentationService from "../../services/alimentation_services/alimentation";
import {useCategory} from "../../states/category_context";
import AddAlimentationForm from "../../components/alimentation_components/add_alimentation";
import {ToastContainer} from "react-toastify";


const MainAlimentationContainer = (props) => {
    const {category, setCategory} = useCategory()
    const [showAddForm, setShowAddForm] = useState(false)
    const [data, setData] = useState([])
    const [heure, setHeure] = useState("")

    const onCloseAddForm = () => {
        setShowAddForm(false)
    }

    const handleSearchAlimentation = async (e) => {
        e.preventDefault()
        const response = await AlimentationService.searchAlimentation(category, heure)
        console.log(response)
    }

    const loadAlimentation = () => {
        const response = AlimentationService.getAllAlimentation(category)
        response.then((res)=>{
            console.log("all alimeantation ", res)
            setData(res)
        }).catch((err)=>{
            console.error("error get response ", err)
        })
    }

    useEffect(() => {
        loadAlimentation()
    }, [category]);
    return (
        <>
            <ToastContainer/>
            <CategoryBar/>
            <div className={"flex items-center justify-start ml-[20%] mt-4 pt-20 h-[12%] w-[30%]"}>
                <input type={"search"}
                       className={"rounded-md border-2 pl-2 py-2 w-[65%] border-blue-500"}
                       placeholder={"Recheche de programme..."}
                       value={heure}
                       onChange={(e)=>{setHeure(e.target.value)}}
                />
                <div className={"ml-4 bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-400 hover:transition"}
                     onClick={handleSearchAlimentation}
                >
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
            </div>
            <ListAlimentation onSubmitEdit={loadAlimentation} data={data}/>
            <div className={"flex items-center justify-start ml-[49%] mt-2 h-[12%] w-[33%]"}>
                <div
                    className={"flex items-center justify-around bg-green-400 cursor-pointer hover:bg-green-500 h-[10%] w-[45%] p-2 border-2 rounded-md"}
                    onClick={()=>{
                        setShowAddForm(true)
                    }}
                >
                    <FontAwesomeIcon icon={faAdd}/>
                    Ajouter un Programme
                </div>
                <div
                    className={"flex items-center justify-around bg-gray-400 cursor-pointer hover:bg-gray-500 h-[10%] w-[45%] p-2 border-2 rounded-md"}
                    onClick={loadAlimentation}
                >
                    <FontAwesomeIcon icon={faRepeat}/>
                    Rafrechir
                </div>
            </div>
            {showAddForm?<AddAlimentationForm onCloseAddForm={onCloseAddForm} onAddSubmit={loadAlimentation}/>:""}
        </>
    )
}

export default MainAlimentationContainer