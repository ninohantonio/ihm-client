import React from 'react';
import CategoryBar from "../containers/animal_container/category_bar";
import Sidebar from "../components/navigation_components/left_side_bar";
import CardContainer from "../containers/animal_container/animal_container";
import AddCommand from "../containers/animal_container/add_command";
import {ToastContainer} from "react-toastify";

const Animal = () => {
    return (
        <>
            <ToastContainer/>
            <Sidebar active={4}/>
            <CategoryBar/>
            <CardContainer/>
            <AddCommand/>
        </>
    )
}

export default Animal;