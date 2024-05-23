import React, {useEffect, useState} from "react";
import ListAliment from "../../components/aliment_components/list_aliment";
import AddAlimentForm from "../../components/aliment_components/add_aliment";
import ProduitService from "../../services/aliment_service/produit";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faRepeat, faSearch, faTruckLoading} from "@fortawesome/free-solid-svg-icons";
import {Bounce, toast, ToastContainer} from "react-toastify";
import ToastOptions from "../../services/toast_options";

const MainAlimentContainer = () => {
    const [datalist, setDatalist] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)
    const [search, setSearch] = useState("")

    const loadAlimentData = () => {
        const response = ProduitService.getAllProduct()
        response.then((res)=>{
            setDatalist(res)
            console.log("aliment : ", res)
        }).catch((err)=>{
            console.log("error get aliment ", err)
        })
    }

    const handleSearchAliment = () => {
        if(search !== ""){
            const response = ProduitService.searchProduct(search)
            response.then((res)=>{
                if(res?.length>0){
                    setDatalist(res)
                }else{
                    toast.info("Pas de produit correspondant a cette recherche", ToastOptions)
                }
            }).catch(err => {
                console.log("error ", err)
            })
        }
        setSearch("")
    }

    const handleAddNewAnimalReload = () => {
        loadAlimentData()
    }

    const closeAddForm = () => {
        setShowAddForm(false)
    }


    useEffect(() => {
        loadAlimentData()
    }, [showAddForm]);

    return (
        <>
            <ToastContainer/>
            <div className={"flex items-center justify-start ml-[25%] mt-8 h-[12%] w-[30%]"}>
                <input type={"search"}
                    className={"rounded-md border-2 pl-2 py-2 w-[65%] border-blue-500"}
                       placeholder={"Recheche de produit..."}
                       value={search}
                       onChange={(e)=>{setSearch(e.target.value)}}
                />
                <div className={"ml-4 bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-400 hover:transition"}
                    onClick={handleSearchAliment}
                >
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
            </div>
            <ListAliment data={datalist} onEditSubmitAliment={handleAddNewAnimalReload} />

            <div className={"flex items-center justify-start ml-[48%] mt-2 h-[12%] w-[30%]"}>
                <div
                    className={"flex items-center justify-around bg-green-400 cursor-pointer hover:bg-green-500 h-[10%] w-[45%] p-2 border-2 rounded-md"}
                    onClick={() => {
                        setShowAddForm(true)
                    }}
                >
                    <FontAwesomeIcon icon={faAdd}/>
                    Ajouter un Produit
                </div>
                <div
                    className={"flex items-center justify-around bg-gray-400 cursor-pointer hover:bg-gray-500 h-[10%] w-[45%] p-2 border-2 rounded-md"}
                    onClick={() => {
                        loadAlimentData()
                    }}
                >
                    <FontAwesomeIcon icon={faRepeat}/>
                    Rafrechir
                </div>
            </div>

            {showAddForm ? <AddAlimentForm onAddSubmitAliment={handleAddNewAnimalReload} onCloseAddForm={closeAddForm}/> : ""}

        </>
    )
}

export default MainAlimentContainer