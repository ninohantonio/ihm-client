import React, {useEffect, useState} from 'react';
import CategoryService from "../../services/animal_services/category";
import CategoryButton from "../../components/animal_components/category_bar";
import {useCategory} from "../../states/category_context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faRemove} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";
import MainNotificationContainer from "../notifications/main_container";
const CategoryBar = () => {

    const [AllCategory, setAllCategory] = React.useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const {category, setCategory} = useCategory();
    const loadCategories = async () => {
        const response = await CategoryService.getAllCategories()
        setAllCategory(response)
    }

    const handleRemoveCategory = (nom,numero) => {
        if(window.confirm("Etes vous sur de supprimer la categorie " + nom)){
            CategoryService.deleteCategory(numero)
            toast.info("La categorie "+ nom + " a ete supprimmer")
            loadCategories()
        }
    }



    useEffect(() => {
        loadCategories()
        console.log("Changement vers "+category)
    }, [category]);
    return (
        <>
            <MainNotificationContainer/>
            <div className={"flex items-center fixed rounded center justify-center h-12 w-[60%] bg-gray-200 mx-auto ml-[20%] overflow-x-scroll"}>
                { AllCategory.length > 0 ?
                        AllCategory.map((item, index) => (
                            <div>
                                <div onClick={() => {
                                    setActiveIndex(index)
                                    setCategory(item.id)
                                }}>
                                    <CategoryButton
                                        category={item.name}
                                        key={index}
                                        style={activeIndex === index ? "bg-blue-700 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded w-[10vw] mr-4" : "bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded w-[10vw] mr-4"}
                                    />
                                </div>
                                <div className={"absolute top-0 ml-1 mt-1 cursor-pointer hover:rounded-full hover:bg-gray-200 hover:bg-opacity-40 px-1"}
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        handleRemoveCategory(item.name, item.id)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faRemove}/>
                                </div>
                            </div>

                        ))
                    : <div className={"text-center text-xs font-bold py-2 px-4 rounded w-[10vw] mr-4"}> Ici Vos Categories d'animaux </div>
                }
            </div>
        </>
    )
}

export default CategoryBar;