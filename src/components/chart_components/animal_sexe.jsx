import React, {useEffect, useState} from 'react';
import {Legend, Pie, PieChart, Tooltip} from "recharts";
import {useCategory} from "../../states/category_context";
import AnimalService from "../../services/animal_services/animal";

const AnimalSexeChart = () => {

    const {category, setCategory} = useCategory()
    const [male, setMale] = useState(0)
    const [femele, setFemele] = useState(0)
    const [total, setTotal] = useState(0)

    const loadDataChart = async () => {
        if(category  !== null){
            const response1 = await AnimalService.filterBySexe(category, 1)
            const response2 = await AnimalService.filterBySexe(category, 2)

            setMale(response1.length)
            setFemele(response2.length)

            setTotal(response1.length + response2.length)
        }
    }

    const data = [
        { name: 'Male', value: male, fill: '#316991' }, // Couleur verte
        { name: 'Femele', value: femele, fill: '#ca90e5' }, // Couleur jaune
    ];

    useEffect(() => {
        loadDataChart()
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
    )
}

export default AnimalSexeChart