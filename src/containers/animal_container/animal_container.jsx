import React, {useEffect, useState} from "react";
import Card from "../../components/animal_components/card";
import AnimalService from "../../services/animal_services/animal";
import {useCategory} from "../../states/category_context";
import error from "../../pages/Error";
import {Bounce, toast, ToastContainer} from "react-toastify";
import ToastOptions from "../../services/toast_options";
import {faAdd, faRecycle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/free-solid-svg-icons/faChartLine";
import AccordeonFilter from "../../components/animal_components/accordeon_filter";

const CardContainer = () => {
    const [animals, setAnimals] = useState([])
    const [filterData, setFilterData] = useState([])
    const {category, setCategory} = useCategory()

    const loadAnimal = () => {
        if(category === 0){
            toast.info("Pas de categorie selectionner", ToastOptions)
        }else{
            const response = AnimalService.allAnimal(category)
            response.then((res)=>{
                setAnimals(res)
            }).catch((error)=>console.log(error))
        }
    }

    const filterBySante = async () => {
        setFilterData([])
        const response1 = await AnimalService.filterBySante(category, "En bonne santé")

        const response2 = await AnimalService.filterBySante(category, "En traitement")

        const response3 = await AnimalService.filterBySante(category, "Infecté de maladie")

        setAnimals(response1.concat(response2).concat(response3))
    }

    const filterByVaccin = async () => {
        const response1 = await AnimalService.filterByVaccine(category, true)

        const response2 = await AnimalService.filterByVaccine(category, false)

        setAnimals(response1.concat(response2))

    }

    const filterBySex = async () => {
        const response1 = await AnimalService.filterBySexe(category, 1)

        const response2 = await AnimalService.filterBySexe(category, 2)

        setAnimals(response1.concat(response2))
    }


    useEffect(() => {
        loadAnimal()
    }, [category]);

    return (
        <>
            <div
                className={"fixed left-[86%] top-3 items-center mx-auto pl-3.5 p-2 text-white cursor-pointer bg-gray-800 h-10 w-10 rounded"}
                onClick={loadAnimal}
            >
                <FontAwesomeIcon icon={faRecycle}/>
            </div>
            <div className={"fixed left-[82%] top-20 mt-2 rounded-md pr-2"}>
                <div className={"flex flex-row justify-around"}>
                    <input type={"search"}
                           className={"rounded-md border-2 pl-2 py-2 w-[75%] border-blue-400"}
                           placeholder={"Recheche d'animal..."}
                    />
                    <div className={"ml-4 bg-gray-300 px-3 py-2 w-10 rounded-md hover:bg-gray-500 hover:transition"}
                    >
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>
            </div>
            <div className={"flex items-center justify-center ml-[20%] pt-20 mt-2 h-[70%] w-[60%] p-2"}>
                <div className="flex flex-wrap justify-between gap-4">
                    {
                        animals?.map((item, key) => (
                            <Card
                                id={item.id}
                                description={item.description}
                                age={item.age}
                                sexe={item.sexe["id"]}
                                poids={item.poids}
                                sante={item.sante}
                                vaccine={item.vaccine ? "Oui" : "Non"}
                                numero={key + 1}
                                onEditSubmitAnimal={loadAnimal}
                            />
                        ))
                    }
                </div>

            </div>
            <div className={"fixed left-[82%] top-40 mt-2 rounded-md border-gray-500 border-2 px-y"}>
                <AccordeonFilter data={"hey"} setFilterBySante={filterBySante} setFilterByVaccin={filterByVaccin} setFilterBySexe={filterBySex} setDefaultFilter={loadAnimal} />
            </div>
            <div
                className={"fixed left-[82%] top-[74%] mt-2 rounded-md px-y w-60 py-2 text-center bg-blue-400 text-black space-x-4"}>
                Total des animaux : {animals?.length}
            </div>
        </>
    )
}

export default CardContainer;