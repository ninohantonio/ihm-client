import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faChartBar, faClose} from "@fortawesome/free-solid-svg-icons";
import AddAnimalForm from "../../components/animal_components/animal_add";
import {useCategory} from "../../states/category_context";
import EditAnimalForm from "../../components/animal_components/animal_edit";
import {ToastContainer} from "react-toastify";
import CategoryAddForm from "../../components/animal_components/category_add";
import AccordeonFilter from "../../components/animal_components/accordeon_filter";
import {faChartPie} from "@fortawesome/free-solid-svg-icons/faChartPie";
import {faChartLine} from "@fortawesome/free-solid-svg-icons/faChartLine";

const AddCommand = () => {

    const [isShow, setIsShow] = useState(false)
    const [isAnimalAdd, setIsAnimalAdd] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)
    const [open, setOpen] = useState(false)
    const {category, setCategory} = useCategory()

    const handleShowAdd = () => {
        setIsShow(!isShow)
    }

    return (
        <>
            <div
                className={"fixed left-[82%] top-3 items-center mx-auto pl-3.5 p-2 text-white cursor-pointer bg-gray-800 h-10 w-10 rounded"}
                onClick={handleShowAdd}
            >
                <FontAwesomeIcon icon={faAdd}/>
            </div>
            <div
                className={isShow ? "fixed left-[82%] top-14 items-center mx-auto pl-3.5 p-2 text-white cursor-pointer bg-gray-200 h-20 w-60 rounded flex flex-col justify-around" : "hidden"}
            >
                <div
                    className={"text-s text-blue-700 font-bold border-b-2 border-b-indigo-500 py-2 hover:bg-gray-300 w-full pl-2.5"}
                    onClick={() => {
                        setIsAnimalAdd(false)
                        setShowAddForm(true)
                        setOpen(true)
                    }}
                >
                    Nouvelle Categorie
                </div>
                <div
                    className={"text-s text-blue-700 font-bold py-2 hover:bg-gray-300 w-full pl-2.5"}
                    onClick={() => {
                        setIsAnimalAdd(true)
                        setShowAddForm(true)
                        setOpen(true)
                    }}
                >
                    Nouveau Animal
                </div>
                <div
                    className={showAddForm ? "w-[182vw] h-[171vh] absolute z-10 bg-gray-800 opacity-90 flex flex-row items-center" : "none-display"}>
                    <div className={"rounded-full bg-blue-700 ml-[37vw] p-2 pl-3.5 mb-20 mr-1 w-10 items-center"}
                         onClick={() => {
                             setShowAddForm(false)
                             setOpen(false)
                         }}>
                        <FontAwesomeIcon icon={faClose}/>
                    </div>
                    {(isAnimalAdd && category !== 0) ? <AddAnimalForm open={open} closeAddContainer={() => {
                        setShowAddForm(false)
                    }}/> : <CategoryAddForm open={open} closeAddContainer={() => {
                        setShowAddForm(false)
                    }}/>}
                </div>

            </div>

            <a href={"/dashboard"} className={"fixed left-[82%] top-[65%] mt-2 rounded-md border-2 px-y w-60 py-2 text-center bg-black text-[#c4e4db] cursor-pointer space-x-4"}>
                    Resume Statistique   <FontAwesomeIcon icon={faChartLine}/>
            </a>
        </>
    )
}

export default AddCommand
