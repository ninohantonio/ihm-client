import React from 'react';
import CategoryBar from "../containers/animal_container/category_bar";
import Sidebar from "../components/navigation_components/left_side_bar";
import CardContainer from "../containers/animal_container/animal_container";

const Animal = () => {
    return (
        <>
            <Sidebar/>
            <CategoryBar/>
            <CardContainer/>
        </>
    )
}

export default Animal;