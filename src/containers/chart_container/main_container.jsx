import React from "react";
import AnimalNumberChart from "../../components/chart_components/animal_number";
import AnimalSoldeChart from "../../components/chart_components/animal_solde";
import AnimalSexeChart from "../../components/chart_components/animal_sexe";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft, faBackward} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import Sidebar from "../../components/navigation_components/left_side_bar";
import PieChartExample from "../../components/chart_components/repartition_animal";
import SexeRepartition from "../../components/chart_components/sexe_repartition";
import CategoryBar from "../animal_container/category_bar";

const MainChartContainer = () => {
    const navigate = useNavigate();
    return (
        <>
            {/*<div className={"fixed w-full flex-row bg-purple-500 h-10 py-2 text-white mt-0 justify-between z-10 "}>*/}
            {/*    <div className={"text-lg inline ml-6 mt-2 cursor-pointer"} onClick={()=>{navigate("/animal")}}>*/}
            {/*        <FontAwesomeIcon icon={faArrowCircleLeft}/>*/}
            {/*        <span className={"ml-2"}>Retour au detail</span>*/}
            {/*    </div>*/}
            {/*    <div className={"text-xl mt-2 text-center inline basis-[60%] ml-[30%]"}>*/}
            {/*        Tableau de bord*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"flex items-center justify-around pt-16 w-full p-2 flex-wrap gap-3"}>*/}
            {/*    <div className={"bg-gray-200 shadow-xl ml-3 hover:transition hover:shadow-2xl rounded-lg p-6"}>*/}
            {/*        <p className={"pb-4 text-center text-blue-700"}>Etat de sante des animaux</p>*/}
            {/*        <AnimalNumberChart/>*/}
            {/*    </div>*/}
            {/*    <div className={"bg-gray-200 shadow-xl ml-3 hover:transition hover:shadow-2xl rounded-lg p-6 h-[40%]"}>*/}
            {/*        <p className={"pb-4 text-center text-blue-700"}>Repartition par sexe</p>*/}
            {/*        <AnimalSexeChart/>*/}
            {/*    </div>*/}
            {/*    <div className={"bg-gray-200 shadow-xl ml-3 hover:transition hover:shadow-2xl rounded-lg p-6 h-[40%]"}>*/}
            {/*        <p className={"pb-4 text-center text-blue-700"}>Repartition par sexe</p>*/}
            {/*        <AnimalSexeChart/>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className={"bg-gray-200 shadow-xl hover:transition hover:shadow-2xl mt-20 mb-10 w-[45%] items-center ml-3 rounded-lg p-6 h-[40%]"}>*/}
            {/*        <p className={"pb-4 text-center text-blue-700"}>Situation de vente des animaux</p>*/}
            {/*        <AnimalSoldeChart/>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className={"bg-gray-200 shadow-xl hover:transition hover:shadow-2xl mt-20 mb-10 w-[45%] items-center ml-3 rounded-lg p-6 h-[40%]"}>*/}
            {/*        <p className={"pb-4 text-center text-blue-700"}>Situation de vente des animaux</p>*/}
            {/*        <AnimalSoldeChart/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Sidebar active={3}/>
            <CategoryBar/>
            <div className={"items-center justify-center ml-[20%] pt-4 mt-2 h-[60%] w-[60%] p-2"}>
                <p className={"pb-4 text-center text-blue-700"}>Situation de vente des animaux</p>
                <AnimalSoldeChart/>
            </div>
            <div className={"flex ml-[18%] items-center flex-row h-[100%] justify-center gap-3"}>
                <PieChartExample/>
                <SexeRepartition/>
            </div>
        </>
    )
}

export default MainChartContainer