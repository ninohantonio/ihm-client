import React, {useEffect, useState} from "react";
import AnimalService from "../../services/animal_services/animal";
import {Bounce, toast, ToastContainer} from "react-toastify";
import {useCategory} from "../../states/category_context";
import {useNavigate} from "react-router-dom";
import ToastOptions from "../../services/toast_options";

const EditAnimalForm = (props) => {

    const redirect = useNavigate()

    const [description, setDescription] = useState("")
    const [age, setAge] = useState(1)
    const [sexe, setSexe] = useState(1)
    const [poids, setPoids] = useState(1)
    const [vaccine, setVaccine] = useState("")
    const [sante, setSante] = useState("")
    const [photo, setPhoto] = useState(null)
    const [animalId, setAnimalId] = useState(null)
    const {category, setCategory} = useCategory()

    const threatDataForm = () => {
        setDescription(props.description)
        setPoids(props.poids)
        setSante(props.sante)
        setSexe(props.sexe)
        setAge(props.age)
        setVaccine(props.vaccine? "oui" : "non")
        setAnimalId(props.id)
    }


    const handlePhotoChange = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleSanteChange = (e) => {
        setSante(e.target.value)
    }

    const handleSaveEditChange = (e) => {
        e.preventDefault()
        const dataForChange = {
            description: description,
            age: age,
            sexe: sexe,
            poids: poids,
            vaccine: vaccine === "oui",
            sante: sante,
        }
        try{
            const response = AnimalService.updateAnimal(animalId, dataForChange)
            response.then((result) => {
                toast.info("Modification enregistrer", ToastOptions)
                props.onEditSubmitAnimal()
            })
        }catch (e){
            toast.error("Une erreur s'est produit lors de l'insertion", ToastOptions)
        }
        if(!photo){
            props.closeEditForm()
        }
        else{

            try {
                const formData = new FormData();

                formData.append('file', photo);

                try {
                    const response = AnimalService.setPhoto(animalId, formData)
                    response.then((res)=>{
                        toast.info("Modification de photo enregistrer", ToastOptions)
                        props.onEditSubmitAnimal()
                        props.closeEditForm()
                    })
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }catch (e){
                toast.error("Le fichier que vous avez entrez est invalide", ToastOptions)
            }
        }
    }



    useEffect(() => {
        threatDataForm()

    }, [props.open]);

    return (
        <>
            <div
                className={"w-[30vw] h-[80%] left-[40vw] bg-gray-300 opacity-100 rounded shadow-lg shadow-black text-black space-y-6 p-4"}>
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
                        <label className={"font-medium text-black text-sm"} htmlFor={"masculin"}>Male</label>
                        <input className="mt-1 w-4 h-4 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                               type="radio" name={"sex"} id={"masculin"} value={1}
                               onChange={(e)=> {setSexe(1)}}
                        />
                        <label className={"font-medium text-black text-sm"} htmlFor={"feminin"}>Femele</label>
                        <input className="mt-1 w-4 h-4 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                               type="radio" name={"sex"} id={"feminin"}  value={2}
                               onChange={(e)=>{setSexe(2)}}
                        />
                    </div>
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vaccine : {vaccine}</label>
                    <div className={"flex flex-row justify-between"}>
                        <label className={"font-medium text-black text-sm"} htmlFor={"yes"}>Oui</label>
                        <input className="mt-1 w-4 h-4 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                               type="radio" name={"vaccin"} id={"yes"} value={"oui"}
                               onChange={(e)=>{setVaccine(e.target.value)}}
                        />
                        <label className={"font-medium text-black text-sm"} htmlFor={"no"}>Non</label>
                        <input className="mt-1 w-4 h-4 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                               type="radio" name={"vaccin"} id={"no"} value={"non"}
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
                        onClick={handleSaveEditChange}
                    >
                        Enregistrer les modifications
                    </button>
                </div>
            </div>
        </>
    )
}

export default EditAnimalForm