import React, {useEffect, useState} from 'react';
import { Pie } from '@nivo/pie';
import {useCategory} from "../../states/category_context";
import AnimalService from "../../services/animal_services/animal";


const PieChartExample = () => {

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
        { id: 'malade', value: infecte}, // Couleur orange
        { id: 'saine', value: bonneSante}, // Couleur verte
        { id: 'traiter', value: traitement}, // Couleur jaune
    ];

    useEffect(() => {
        loadDataChart().then(r => console.log(r))
    }, [category]);

        return (
            <div
                className={"items-center shadow-lg flex flex-row justify-center pt-2 bg-gray-200 rounded-md mt-2 h-[70%] w-[48%] p-2"}>
                <Pie
                    data={data}
                    indexKey="id"
                    valueKey="value"
                    colors={['#ff6200', '#6aef6a', '#26b8e3']}
                    height={250}
                    width={300}
                    margin={{top: 20, right: 10, bottom: 40, left: 10}}
                    innerRadius={0.45}
                    cornerRadius={5}
                    enableArcLinkLabels={false}
                    activeOuterRadiusOffset={7}
                    arcLabelsTextColor="#ffffff"
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 200,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemsSpacing: 5,
                            symbolSize: 20,
                            itemDirection: 'left-to-right',
                            symbolShape: 'circle'
                        }
                    ]}
                />
                <div className={"h-[37vh] flex flex-col justify-around"}>
                    <p className={"top-0 text-blue-700"}>Etat de Sante des animaux</p>
                    <p><span className={"font-bold text-green-600 text-xl"}>{(bonneSante * 100)/total | 0}% </span> en bonne sante</p>
                    <p><span className={"font-bold text-[#26b8e3] text-xl"}>{(traitement * 100)/total | 0}% </span> en traitement</p>
                    <p><span className={"font-bold text-[#c06229] text-xl"}>{(infecte * 100)/total | 0}% </span> infectee de maladie</p>
                    <p className={"bg-pink-600 text-gray-200 font-mono py-4 px-4 rounded-md"}>sur une total de :
                       <span className={"text-white font-bold text-xl"}> {total}</span> animaux</p>
                </div>
            </div>

        )


    }
;

export default PieChartExample;
