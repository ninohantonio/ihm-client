import React, {useEffect, useState} from "react";
import Card from "../../components/animal_components/card";
import AnimalService from "../../services/animal_services/animal";
import {useCategory} from "../../states/category_context";
import error from "../../pages/Error";

const CardContainer = () => {
    const [animals, setAnimals] = useState([])
    const {category, setCategory} = useCategory()

    const loadAnimal = () => {
        const response = AnimalService.allAnimal(category)
        response.then((res)=>{
            setAnimals(res)
        }).catch((error)=>console.log(error))
    }

    useEffect(() => {
        loadAnimal()
    }, [category]);

    return (
        <div className={"flex items-center justify-center ml-[20%] pt-20 mt-2 h-[70%] w-[60%] p-2"}>
            <div className="flex flex-wrap justify-between gap-4">
                {
                    animals.map((item, key) => (
                        <Card
                            id={item.id}
                            description={item.description}
                            age={item.age}
                            poids={item.poids}
                            sante={item.sante}
                            vaccine={item.vaccine?"Oui":"Non"}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default CardContainer;