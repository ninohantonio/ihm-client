import React, {useEffect, useState} from 'react';
import { Pie } from '@nivo/pie';
import {useCategory} from "../../states/category_context";
import AnimalService from "../../services/animal_services/animal";


const SexeRepartition = () => {

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
            { id: 'male', value: male}, // Couleur orange
            { id: 'femele', value: femele}, // Couleur verte
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
                    colors={['#e3a327', '#9073e8']}
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
                            translateX: 70,
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
                    <p className={"top-0 text-blue-700"}>Repartition par sexe</p>
                    <p><span className={"font-bold text-yellow-600 text-xl"}>{(male * 100)/total | 0}% </span> Male</p>
                    <p><span className={"font-bold text-[#9073e8] text-xl"}>{(femele * 100)/total | 0}% </span> Femele</p>
                    <p className={"bg-pink-600 text-gray-200 font-mono py-4 px-4 rounded-md"}>sur une total de :
                        <span className={"text-white font-bold text-xl"}> {total}</span> animaux</p>
                </div>
            </div>

        )


    }
;

export default SexeRepartition;
