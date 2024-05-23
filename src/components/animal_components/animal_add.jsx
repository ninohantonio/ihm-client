import React, {useEffect, useState} from "react";
import AnimalService from "../../services/animal_services/animal";
import {Bounce, toast, ToastContainer} from "react-toastify";
import {useCategory} from "../../states/category_context";
import ToastOptions from "../../services/toast_options";

const AddAnimalForm = (props) => {
    const [description, setDescription] = useState("")
    const [age, setAge] = useState(1)
    const [sexe, setSexe] = useState(1)
    const [poids, setPoids] = useState(1)
    const [vaccine, setVaccine] = useState("oui")
    const [sante, setSante] = useState("En bonne santé")
    const [photo, setPhoto] = useState(null)
    const [animalId, setAnimalId] = useState(null)
    const {category, setCategory} = useCategory()

    const handlePhotoChange = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleSanteChange = (e) => {
        setSante(e.target.value)
    }

    const sendNewAnimal = () => {



        const newAnimal = {
            description: description,
            age: age,
            sexe: sexe,
            poids: poids,
            vaccine: vaccine === "oui",
            sante: sante,
            category: category
        }

        if(!photo){
            toast.warning("pas de photo selectionner")
            try{
                const response = AnimalService.insertAnimal(newAnimal)
                response.then((result) => {
                    console.log("result ", result)
                    toast.success("Insertion des donnees de l'animal \n effectuer avec succes", ToastOptions)
                })
                props.closeAddContainer()
            }catch (e){
                toast.error("Une erreur s'est produit lors de l'insertion", ToastOptions)
            }
        }
        else{

            try {
                const response = AnimalService.insertAnimal(newAnimal)
                response.then((result) => {
                    console.log("result ", result)
                    const formData = new FormData();

                    formData.append('file', photo);

                    try {
                        AnimalService.setPhoto(result.id, formData)
                        console.log('Photo envoyée avec succès');
                        toast.success("Insertion des donnees de l'animal \n effectuer avec succes", ToastOptions)
                        props.closeAddContainer()
                    } catch (error) {
                        console.error('Erreur:', error);
                    }
                })
            }catch (e){
                toast.error("Le fichier que vous avez entrez est invalide", ToastOptions)
            }
        }
    }

    const threatDataForm = () => {
        setDescription("")
        setPoids(1)
        setSante("En bonne santé")
        setSexe(1)
        setAge(1)
        setVaccine("oui")
    }

    const handleSubmitAnimal = (e) => {
        e.preventDefault()
        sendNewAnimal()
    }

    useEffect(() => {
        threatDataForm()
    }, [props.open]);

    return (
        <>
            <div
                className={"w-[30vw] h-[48%] mt-[18%] left-[40vw] bg-gray-300 bg-opacity-100 rounded shadow-lg shadow-black text-black space-y-6 p-4"}>
                <div>
                    Nouvel animal
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                           type="text"
                           value={description}
                           onChange={(e)=>{setDescription(e.target.value)}}
                    />
                </div>
                <div className={"flex flex-row justify-between"}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                        <input
                            className="mt-1 block w-40 h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="number" min={1}
                            value={age}
                            onChange={(e) => {
                                setAge(parseInt(e.target.value))
                            }}
                        />
                    </div>
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">Poids</label>
                        <input
                            className="mt-1 block w-40 h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="number" min={1}
                            value={poids}
                            onChange={(e) => {
                                setPoids(parseInt(e.target.value))
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sexe : {sexe}</label>
                    <div className={"flex flex-row justify-between"}>
                        <label className={"font-medium text-black text-sm"} htmlFor={"male"}>Male</label>
                        <input className="mt-1 w-4 h-4 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                               type="radio" name={"sexe"} id={"male"} value={1} checked={sexe === 1}
                               onChange={(e)=> {setSexe(parseInt(e.target.value))}}
                        />
                        <label className={"font-medium text-black text-sm"} htmlFor={"femele"}>Femele</label>
                        <input className="mt-1 w-4 h-4 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                               type="radio" name={"sexe"} id={"femele"} value={2} checked={sexe === 2}
                               onChange={(e)=>{setSexe(parseInt(e.target.value))}}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vaccine : {vaccine}</label>
                    <div className={"flex flex-row justify-between"}>
                        <label className={"font-medium text-black text-sm"} htmlFor={"oui"}>Oui</label>
                        <input className="mt-1 w-4 h-4 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                               type="radio" name={"vaccine"} id={"oui"} value={"oui"} checked={vaccine === "oui"}
                                onChange={(e)=>{setVaccine(e.target.value)}}
                        />
                        <label className={"font-medium text-black text-sm"} htmlFor={"non"}>Non</label>
                        <input className="mt-1 w-4 h-4 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                               type="radio" name={"vaccine"} id={"non"} value={"non"} checked={vaccine === "non"}
                               onChange={(e)=>{setVaccine(e.target.value)}}
                        />
                    </div>
                </div>
                <div className={"flex flex-row justify-between"}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sante : {sante}</label>
                        <select
                            className="w-40 h-8"
                            value={sante}
                            onChange={handleSanteChange}
                        >
                            <option>En bonne santé</option>
                            <option>En traitement</option>
                            <option>Infecté de maladie</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                        <input className={"w-40 h-8 "} type={"file"} accept="image/jpeg, image/png, image/gif"
                            onChange={handlePhotoChange}
                        />
                    </div>
                </div>
                <div>
                    <button
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleSubmitAnimal}
                    >
                        Ajouter l'animal
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddAnimalForm