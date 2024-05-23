import React from "react";
import Sidebar from "../components/navigation_components/left_side_bar";
import MainAlimentContainer from "../containers/aliment_container/main_container";

const Aliment = () => {
    return (
        <>
            <Sidebar active={5}/>
            <MainAlimentContainer/>
        </>
    )
}

export default Aliment