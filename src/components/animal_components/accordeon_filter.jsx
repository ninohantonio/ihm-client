import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faFilter, faHome, faUser} from "@fortawesome/free-solid-svg-icons";

const AccordeonFilter = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [filterType, setFilterType] = useState("")

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const loadFilterBySante = () => {
        props.setFilterBySante()
        setFilterType("Sante")
    }

    const loadFilterByVaccin = () => {
        props.setFilterByVaccin()
        setFilterType("Vaccination")
    }

    const loadFilterBySexe = () => {
        props.setFilterBySexe()
        setFilterType("Sexe")
    }

    const loadDefaultAnimal = () => {
        props.setDefaultFilter()
        setFilterType("Par defaut")
    }

    return (
        <>
            <div className="flex flex-col items-center h-[35%] bg-gray-100 w-[17vw]">
                <div className={"flex flex-row left-0 border-gray-700 cursor-pointer py-2 w-full border-b-2 pl-4"}>
                    <div className={"mr-1"}>
                        <FontAwesomeIcon icon={faFilter}/>
                    </div>
                    Filtrer par : {filterType}
                </div>
                <div
                    className={"flex flex-row left-0 border-gray-700 py-2 w-full border-b-2 pl-4 cursor-pointer hover:bg-blue-400 hover:transition hover:backdrop-blur"}
                    onClick={loadFilterBySante}
                >
                    Filtrer par : {"Sante d'animal"}
                </div>
                <div className={"flex flex-row left-0 border-gray-700 py-2 w-full border-b-2 pl-4 cursor-pointer hover:bg-blue-400 hover:transition hover:backdrop-blur"}
                     onClick={loadFilterByVaccin}>
                    Filtrer par : {"Vaccin d'animal"}
                </div>
                <div className={"flex flex-row left-0 border-gray-700 py-2 w-full border-b-2 pl-4 cursor-pointer hover:bg-blue-400 hover:transition hover:backdrop-blur"}
                     onClick={loadFilterBySexe}>
                    Filtrer par : {"Sexe d'animal"}
                </div>
                <div className={"flex flex-row left-0 border-gray-700 py-2 w-full pl-4 cursor-pointer hover:bg-blue-400 hover:transition hover:backdrop-blur"}
                     onClick={loadDefaultAnimal}>
                    Par defaut
                </div>

            </div>
        </>
    )
}

export default AccordeonFilter

