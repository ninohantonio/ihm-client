import React from 'react'
import Sidebar from "../components/navigation_components/left_side_bar";
import CategoryBar from "../containers/animal_container/category_bar";
import VenteCardContainer from "../containers/vente_container/vente_container_card";


const Vente = () => {
    return (
        <>
            <Sidebar active={7} />
            <CategoryBar/>
            <VenteCardContainer/>
        </>
    )
}

export default Vente