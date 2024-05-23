import React, {useEffect, useState} from "react";
import CategoryService from "../../services/animal_services/category";

const CategoryAddForm = (props) => {

    const [description, setDescription] = useState("");
    const [esperence, setEsperence] = useState(0)
    const [prix, setPrix] = useState(0)

    const handleSubmitCategory = (e) => {
        e.preventDefault()
        const newCategory = {
            name: description,
            dureeMoyen: esperence,
            prix: prix
        }
        console.log(newCategory)
        const response = CategoryService.insertCategory(newCategory)
        response.then((res)=>{
            console.log("Nouvelle category : ", res)
        }).catch((err)=>console.log("erreue d'insertion de category ", err))
        props.closeAddContainer()
    }

    const threatDataForm = () => {
        setDescription("")
        setPrix(1)
        setEsperence(1)
    }

    useEffect(() => {
        threatDataForm()
    }, [props.open]);

    return (
        <>

            <div
                className={"w-[30vw] h-[40%] mt-[18%] left-[40vw] bg-gray-300 bg-opacity-100 rounded shadow-lg shadow-black text-black space-y-6 p-4"}>
                <div>
                    Nouvelle categorie
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                           type="text"
                           value={description}
                           onChange={(e) => {
                               setDescription(e.target.value)
                           }}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duree de vie Moyenne</label>
                    <input className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                           type="number"
                           value={esperence}
                           onChange={(e) => {
                               setEsperence(parseInt(e.target.value))
                           }}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prix par Kilo</label>
                    <input className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                           type="number"
                           value={prix}
                           onChange={(e) => {
                               setPrix(parseInt(e.target.value))
                           }}
                    />
                </div>
                <div>
                    <button
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleSubmitCategory}
                    >
                        Ajouter la categorie
                    </button>
                </div>
            </div>

        </>
    )
}

export default CategoryAddForm