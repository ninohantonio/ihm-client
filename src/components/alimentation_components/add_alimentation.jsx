import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {useCategory} from "../../states/category_context";
import ProduitService from "../../services/aliment_service/produit";
import {type} from "@testing-library/user-event/dist/type";
import {toast} from "react-toastify";
import ToastOptions from "../../services/toast_options";
import AlimentationService from "../../services/alimentation_services/alimentation";

const AddAlimentationForm = (props) => {

    const {category, setCategory} = useCategory()
    const [heure, setHeure] = useState("")
    const [quantite, setQuantite] = useState(0)
    const [ageMin, setAgeMin] = useState(0)
    const [ageMax, setAgeMax] = useState(0)
    const [produit, setProduit] = useState("")
    const [productPrompt, setProductPrompt] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [objectSelected, setObjectSelected] = useState({designation:"", stock:""})
    const [isSelect, setIsSelect] = useState(true)

    const handleProductFieldChange = (e) => {
        setProduit(e.target.value)
        const response = ProduitService.searchProduct(produit)
        response.then((res)=>{
            setProductPrompt(res)
        }).catch(err => console.error("avereno"))
    }


    const handleNewProductSubmit = (e) => {
        e.preventDefault()
        if(heure !== "" && quantite > 0 && ageMin > 0 && ageMax > 0 && selectedProduct !== null){
            if(ageMax > ageMin){
                const newAlimentation = {
                    heure: heure + ":00",
                    quantite: quantite,
                    ageMin: ageMin,
                    ageMax: ageMax,
                    category: category,
                    product: selectedProduct
                }
                if(window.confirm("Ajoutee le programme " + newAlimentation.product + " a : " + newAlimentation.heure)){
                    const response = AlimentationService.insertAlimentation(newAlimentation)
                    response.then((res)=>{
                        console.log("insert response " + res)
                        props.onAddSubmit()
                        props.onCloseAddForm()
                    }).catch((err) => {
                        console.error("Error insert this data " + err)
                    })
                }
            }else{
                toast.warning("L'age Max doit etre superieur a la minimum!", ToastOptions)
            }
        }else{
            toast.warning("Veuillez bien remplir toutes les champs!", ToastOptions)
        }
    }

    return (
        <>
            <div className={"z-10 bg-gray-800 justify-center opacity-90 flex flex-row items-center edit-center-form"}>
                <div className={"rounded-full bg-blue-700 px-3 py-1.5 absolute left-[32%] top-4"}
                     onClick={props.onCloseAddForm}>
                    <FontAwesomeIcon icon={faClose}/>
                </div>
                <div
                    className={"w-[30vw] h-[90%] left-[40vw] bg-gray-300 bg-opacity-100 rounded shadow-lg shadow-black text-black space-y-6 p-4 mx-auto"}>
                    <div>
                        Nouvelle Programme Alimentaire
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Heure de consommation *</label>
                        <input
                            className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="time"
                            value={heure}
                            onChange={(e)=>{
                                setHeure(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Quantite en Kg *</label>
                        <input
                            className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="number"
                            value={quantite}
                            min={0}
                            onChange={(e)=>{
                                setQuantite(parseInt(e.target.value))
                            }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age minimum de consommation
                            *</label>
                        <input
                            className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="number"
                            min={0}
                            value={ageMin}
                            onChange={(e)=>{
                                setAgeMin(parseInt(e.target.value))
                            }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age maximun de consommation
                            *</label>
                        <input
                            className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="number"
                            min={0}
                            value={ageMax}
                            onChange={(e)=>{
                                setAgeMax(parseInt(e.target.value))
                            }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Produit a consommer
                            *</label>
                        {isSelect ? <input
                            className="mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white pl-2.5"
                            type="text"
                            value={produit}
                            onChange={handleProductFieldChange}
                        /> :
                            <div className={"mt-1 block w-full h-10 border-2 bg-gray-700 rounded-md text-sm text-white py-2 pl-2.5"}>
                                <span className={"mx-3 bg-amber-200 text-black py-0.5 px-1 cursor-pointer rounded-full"} onClick={()=>{
                                    setIsSelect(true)
                                    setSelectedProduct(null)
                                }}>
                                    <FontAwesomeIcon icon={faClose}/>
                                </span>
                                {objectSelected.designation} : {objectSelected.stock}kg en stock
                            </div>

                        }
                    </div>
                    <div>
                        <button
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleNewProductSubmit}
                        >
                            Ajouter le programme
                        </button>
                    </div>
                </div>
                <div
                    className={"absolute left-[66%] top-[66%] w-80 h-40 bg-white flex-col justify-center rounded-md pl-2 overflow-y-scroll"}>
                    {
                        productPrompt.map((item, key) => (
                            <div
                                className={"pb-[2px] hover:bg-gray-300 hover:transition cursor-pointer border-b-2 border-gray-500"}
                                onClick={()=>{
                                    setObjectSelected({
                                        designation: item.designation,
                                        stock: item.quantite
                                    })
                                    setSelectedProduct(item.id)
                                    setIsSelect(false)
                                }}
                            >
                                {item.designation} : {item.quantite} kg
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AddAlimentationForm