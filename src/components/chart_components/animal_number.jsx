import React, {useEffect, useState} from "react";
import { PieChart, Pie, Tooltip, Legend } from 'recharts'
import AnimalService from "../../services/animal_services/animal";
import {useCategory} from "../../states/category_context";


const AnimalNumberChart = (props) => {

    const {category, setCategory} = useCategory()

    const [bonneSante, setBonneSante] = useState(0)
    const [traitement, setTraitement] = useState(0)
    const [infecte, setInfecte] = useState(0)
    const [total, setTotal] = useState(0)


    const loadDataChart = async () => {
        if(category !== null){
            const response1 = await AnimalService.filterBySante(category, "En bonne santé")
            const response2 = await AnimalService.filterBySante(category, "En traitement")
            const response3 = await AnimalService.filterBySante(category, "Infecté de maladie")

            try{
                setBonneSante(response1?.length)
                setTraitement(response2?.length)
                setInfecte(response3?.length)

                setTotal(response1?.length + response2?.length + response3?.length)
            }catch (e) {
                console.log(e)
            }
        }
    }

    const data = [
        { name: 'En bonne santé', value: bonneSante, fill: '#83d29f' }, // Couleur verte
        { name: 'En traitement', value: traitement, fill: '#2769e3' }, // Couleur jaune
        { name: 'Infectés', value: infecte, fill: '#cb7373' }, // Couleur orange
    ];

    useEffect(() => {
        loadDataChart().then(r => console.log(r))
    }, [category]);

    return (
        <>
            <PieChart width={300} height={300}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
                <Legend />
            </PieChart>
            <p className={"text-white mt-2 bg-gray-800 py-2 px-8 rounded-md text-center"}>Sur la total de : {total} animaux</p>
        </>
    );
}

export default AnimalNumberChart