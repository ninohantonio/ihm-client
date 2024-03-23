import React, {useEffect, useState} from 'react';
import CategoryService from "../../services/animal_services/category";
import CategoryButton from "../../components/animal_components/category_bar";
import {useCategory} from "../../states/category_context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
const CategoryBar = () => {

    const [AllCategory, setAllCategory] = React.useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const {category, setCategory} = useCategory();
    const loadCategories = async () => {
        const response = await CategoryService.getAllCategories()
        setAllCategory(response)
    }


    useEffect(() => {
        loadCategories()
        console.log("Changement vers "+category)
    }, [category]);
    return (
        <>
            <div className={"flex items-center fixed rounded center justify-center h-12 w-[60%] bg-gray-200 mx-auto ml-[20%] overflow-x-scroll"}>
                {
                        AllCategory.map((item, index) => (
                            <div onClick={()=> {
                                setActiveIndex(index)
                                setCategory(item.id)
                            }}>
                                <CategoryButton
                                    category={item.name}
                                    key={index}
                                    style={activeIndex===index?"bg-blue-700 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded w-[10vw] mr-4" : "bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded w-[10vw] mr-4"}
                                />
                            </div>
                        ))
                }
            </div>
            <div className={"fixed left-[82%] top-3 items-center mx-auto pl-3.5 p-2 text-white cursor-pointer bg-gray-800 h-10 w-10 rounded"}>
                <FontAwesomeIcon icon={faAdd}/>
            </div>
            <div className={"fixed left-[82%] top-14 items-center mx-auto pl-3.5 p-2 text-white cursor-pointer bg-gray-200 h-20 w-60 rounded"}>

            </div>
        </>
    )
}

export default CategoryBar;