import React from 'react'
import Sidebar from "../components/navigation_components/left_side_bar";
import CategoryBar from "../containers/animal_container/category_bar";


const Vente = () => {
    return (
        <>
            <Sidebar active={7} />
            <CategoryBar/>
        </>
    )
}

export default Vente