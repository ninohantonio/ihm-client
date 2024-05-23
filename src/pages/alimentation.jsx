import React from "react";
import Sidebar from "../components/navigation_components/left_side_bar";
import CategoryBar from "../containers/animal_container/category_bar";
import MainAlimentationContainer from "../containers/alimentation_container/main_container";

const Alimentation = () => {
    return (
        <>
            <Sidebar active={6}/>
            <MainAlimentationContainer/>
        </>
    )
}

export default Alimentation