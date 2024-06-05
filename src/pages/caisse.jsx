import React from 'react'
import Sidebar from "../components/navigation_components/left_side_bar";
import ListVente from "../components/vente_components/list_vente";
import CategoryBar from "../containers/animal_container/category_bar";

const Caisse = () => {
    return (
        <>
            <Sidebar active={8}/>
            <CategoryBar/>
            <ListVente/>
        </>
    )
}

export default Caisse