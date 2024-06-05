import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleRight,
    faArrowRight, faCocktail,
    faCoins, faContactCard, faCopyright, faCow, faFaceGrinBeam, faFeatherAlt, faKiss, faKiwiBird,
    faLeaf, faMailBulk, faMessage, faPhoneAlt, faPiggyBank,
    faSheetPlastic,
    faSignIn, faSmile, faTruckLoading,
    faUser,
    faUserCheck, faX
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../states/is_authenticate";
import AuthService from "../services/auth_services/auth";

const Home = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(1)
    const [isAuth, setAuth] = useState(false)
    const loadauth = async () => {
        const response = await AuthService.isauth()
        setAuth(response)
    }
    useEffect(() => {
        loadauth()
        console.log(isAuth)
    }, []);
    const activeSectionStyle = "ml-16 border-b-2 border-green-400"

    return (
        <div>
            <div className="p-5 h-16 bg-gray-200 fixed w-full">
                <span className={"text-green-700 mr-2 text-xl"}>
                    <FontAwesomeIcon icon={faLeaf}/>
                </span>
                <a name={"home"}>.</a>
                <span className={"text-lg text-yellow-600 inline font-bold text-[26px]"}>Ferme Data</span>
                <a href={"#"} onClick={()=>{setActive(1)}} className={active === 1 ?"ml-40 border-b-2 border-green-400":"ml-40 mb-8"}>Acceuil</a>

                <a href={"#introduction"} onClick={()=>{setActive(2)}} className={active === 2 ?activeSectionStyle:"ml-16"}>A Propos</a>

                <a href={"#service"} onClick={()=>{setActive(3)}} className={active === 3 ? activeSectionStyle : "ml-16"}>Nos Services</a>

                <a href={"#footer"} onClick={()=>{setActive(4)}} className={active === 4 ? activeSectionStyle : "ml-16"}>Nous Contacter</a>
                {!isAuth ?
                    <div className={"ml-3 border-b-2 inline float-right mr-6 cursor-pointer right-0"} onClick={() => {
                        navigate("/login")
                    }}><span className={"mr-2"}>Se connecter</span> <FontAwesomeIcon icon={faSignIn}/></div>
                    :
                    <div className={"ml-3 border-b-2 border-green-500 inline float-right mr-6 cursor-pointer right-0"}>
                        <span className={"w-2.5 h-2 rounded-b-full text-green-600 mr-2"}><FontAwesomeIcon
                            icon={faUserCheck}/></span>
                        <span>{localStorage.getItem("email")}</span>
                    </div>
                }
            </div>
            <div className={"w-full h-[100vh] pt-60 left-side-bg"}>
                <div className={"ml-60 backdrop-blur-sm z-0 py-10 px-16 inline-block"}>
                    <h1 className={"text-green-600 text-[40px] font-bold"}>Bienvenue <span
                        className={"text-white"}>Sur</span></h1>
                    <h1 className={"text-white text-[40px] font-bold"}>La Firme de l'Elevage</h1>
                    <p className={"text-yellow-500 mt-6"}> "La bonne gestion est la cle de la reussite" </p>
                    <a
                        href={"/animal"}
                        className={"block bg-green-600 text-gray-200 hover:text-white hover:transition-colors mt-7 rounded-md py-2 pl-2 cursor-pointer"}
                    >
                        Entrer dans l'application <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </a>
                </div>
            </div>

            <div className={"flex flex-row items-center justify-center w-full h-[100vh] pt-20"} id={"introduction"}>
                <div className={"py-10 px-16 inline-block h-[70%] basis-[33%] rounded-md left-side-bg2"}>
                    <div
                        className={"bg-green-600 h-20 mt-[80%] bottom-0 text-white hover:text-white hover:transition-colors rounded-md pt-4 text-center pl-2 cursor-pointer"}>
                        <span className={"text-3xl mr-4"}><FontAwesomeIcon icon={faCoins}/></span>
                        <div className={"w-[60%] justify-around inline-flex flex-col h-[100%]"}>
                            <span className={"font-bold text-2xl"}>+101</span>
                            <span>Entrer dans l'application</span>
                        </div>
                    </div>
                </div>
                <div className={"h-[70%] px-16 inline-block"}>
                    <p>Notre introduction</p>
                    <h1 className={"text-green-600 text-[20px] font-bold"}>Nous contribuons <span
                        className={"text-black"}>aux</span></h1>
                    <h1 className={"text-[20px] font-bold"}>developpement et a l'innovation de l'elevage</h1>
                    <p className={"text-yellow-600 mt-6"}> FermeData est une large organisation d'agriculteur </p>
                    <p className={"mt-4 text-sm text-gray-600"}>
                        Nous avons eu en 2 ans plus 100 agriculteur professionnel <br/>
                        repartis dans differents etats du pays. Plusieurs variations <br/>
                        de categories d'animal sont regroupes dans une meme <br/>
                        pour pouvoir mieux gerer l'etat et l'evolution de <br/>
                        l'elevage
                    </p>
                    <div className={"flex flex-row mt-6 pt-1"}>
                        <div className={"flex flex-row basis-[50%] rounded-md"}>
                            <span className={"text-green-500 text-4xl mt-1 mr-3"}><FontAwesomeIcon icon={faCow}/></span>
                            <p className={"text-sm"}>Developpement de <br/> technique</p>
                        </div>
                        <div className={"flex flex-row basis-[50%] rounded-md ml-3"}>
                            <span className={"text-green-500 text-4xl mt-1 mr-3"}><FontAwesomeIcon icon={faPiggyBank}/></span>
                            <p className={"text-sm"}>Assurer la <br/> rentabilite</p>
                        </div>
                    </div>
                    <a
                        href={"/animal"}
                        className={"block bg-green-600 text-gray-200 hover:text-white hover:transition-colors mt-8 rounded-md py-2 pl-2 cursor-pointer"}
                    >
                        Entrer dans l'application <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </a>
                </div>
            </div>

            <div className={"flex flex-row items-center justify-around w-full h-[15vh] bg-green-500 rounded-md"}>
                <div className={"flex flex-col items-center justify-center text-gray-200"}>
                    <span className={"text-3xl font-semibold"}>101+</span>
                    <p className={"font-mono"}>Producteurs agricole</p>
                </div>

                <div className={"flex flex-col items-center justify-center text-gray-200"}>
                    <span className={"text-3xl font-semibold"}>408+</span>
                    <p className={"font-mono"}>Projet accomplit</p>
                </div>

                <div className={"flex flex-col items-center justify-center text-gray-200"}>
                    <span className={"text-3xl font-semibold"}>730+</span>
                    <p className={"font-mono"}>Partenaire satisfait</p>
                </div>

                <div className={"flex flex-col items-center justify-center text-gray-200"}>
                    <span className={"text-3xl font-semibold"}>50+</span>
                    <p className={"font-mono"}>Fermier expert</p>
                </div>

            </div>

            <div className={"w-full h-[100vh] pt-10 left-side-bg3"} id={"service"}>
                <p className={"text-white text-center text-sm"}>Nos Services</p>
                <h1 className={"text-green-600 text-[27px] font-bold text-center text-shadow"}>Ce que Nous Offrons <span
                    className={"text-black"}>aux</span></h1>
                <div className={"w-full flex flex-row justify-center pt-8 h-[60vh]"}>
                    <div className={"bg-white basis-[20%] h-[100%] rounded-md mr-4"}>
                        <p className={"text-3xl text-center text-green-600 mt-4"}><FontAwesomeIcon
                            icon={faTruckLoading}/></p>
                        <p className={"text-yellow-600 mt-6 text-lg font-bold text-center"}>Aide aux bon gestion des
                            animaux</p>
                        <p className={"mt-4 text-sm text-gray-600 text-center px-2.5"}>
                            Nous avons eu en 2 ans plus 100 agriculteur professionnel
                            repartis dans differents etats du pays. Plusieurs variations
                            de categories d'animal sont regroupes dans une meme <br/>
                            pour pouvoir mieux gerer l'etat et l'evolution de
                            l'elevage
                        </p>
                        <p className={"text-center inline-block ml-[45%] w-8 h-8 pt-1 mt-4 rounded-full bg-green-600 text-white"}> > </p>
                    </div>

                    <div className={"bg-white basis-[20%] h-[100%] rounded-md mr-4"}>
                        <p className={"text-3xl text-center text-green-600 mt-4"}><FontAwesomeIcon
                            icon={faFeatherAlt}/></p>
                        <p className={"text-yellow-600 mt-6 text-lg font-bold text-center"}>Aide aux bon gestion des
                            animaux</p>
                        <p className={"mt-4 text-sm text-gray-600 text-center px-2.5"}>
                            Nous avons eu en 2 ans plus 100 agriculteur professionnel
                            repartis dans differents etats du pays. Plusieurs variations
                            de categories d'animal sont regroupes dans une meme <br/>
                            pour pouvoir mieux gerer l'etat et l'evolution de
                            l'elevage
                        </p>
                        <p className={"text-center inline-block ml-[45%] w-8 h-8 pt-1 mt-4 rounded-full bg-green-600 text-white"}> > </p>
                    </div>

                    <div className={"bg-white basis-[20%] h-[100%] rounded-md mr-4"}>
                        <p className={"text-3xl text-center text-green-600 mt-4"}><FontAwesomeIcon
                            icon={faCow}/></p>
                        <p className={"text-yellow-600 mt-6 text-lg font-bold text-center"}>Aide aux bon gestion des
                            animaux</p>
                        <p className={"mt-4 text-sm text-gray-600 text-center px-2.5"}>
                            Nous avons eu en 2 ans plus 100 agriculteur professionnel
                            repartis dans differents etats du pays. Plusieurs variations
                            de categories d'animal sont regroupes dans une meme <br/>
                            pour pouvoir mieux gerer l'etat et l'evolution de
                            l'elevage
                        </p>
                        <p className={"text-center inline-block ml-[45%] w-8 h-8 pt-1 mt-4 rounded-full bg-green-600 text-white"}> > </p>
                    </div>

                    <div className={"bg-white basis-[20%] h-[100%] rounded-md mr-4"}>
                        <p className={"text-3xl text-center text-green-600 mt-4"}><FontAwesomeIcon
                            icon={faCoins}/></p>
                        <p className={"text-yellow-600 mt-6 text-lg font-bold text-center"}>Aide aux bon gestion des
                            animaux</p>
                        <p className={"mt-4 text-sm text-gray-600 text-center px-2.5"}>
                            Nous avons eu en 2 ans plus 100 agriculteur professionnel
                            repartis dans differents etats du pays. Plusieurs variations
                            de categories d'animal sont regroupes dans une meme <br/>
                            pour pouvoir mieux gerer l'etat et l'evolution de
                            l'elevage
                        </p>
                        <p className={"text-center inline-block ml-[45%] w-8 h-8 pt-1 mt-4 rounded-full bg-green-600 text-white"}> > </p>
                    </div>

                </div>
                <a
                    href={"/animal"}
                    className={"text-center inline-block ml-[43.5%] w-40 h-12 pt-3.5 mt-8 hover:transition-colors hover:bg-green-700 cursor-pointer rounded-full bg-green-600 text-white"}
                >
                    Beneficier <FontAwesomeIcon
                    icon={faSmile}/></a>
            </div>

            <div className={"flex flex-row items-center justify-around w-full h-[20vh] bg-white rounded-md"}>
                <div className={"flex flex-col items-center justify-center text-black"}>
                    <span className={"text-3xl font-semibold"}><FontAwesomeIcon icon={faLeaf}/></span>
                    <p className={"font-mono"}>Producteurs agricole</p>
                </div>

                <div className={"flex flex-col items-center justify-center text-black"}>
                    <span className={"text-3xl font-semibold"}><FontAwesomeIcon icon={faCocktail}/></span>
                    <p className={"font-mono"}>Projet accomplit</p>
                </div>

                <div className={"flex flex-col items-center justify-center text-black"}>
                    <span className={"text-3xl font-semibold"}><FontAwesomeIcon icon={faFeatherAlt}/></span>
                    <p className={"font-mono"}>Partenaire satisfait</p>
                </div>

                <div className={"flex flex-col items-center justify-center text-black"}>
                    <span className={"text-3xl font-semibold"}>50+</span>
                    <p className={"font-mono"}>Fermier expert</p>
                </div>

            </div>

            <div className={"flex flex-row items-center justify-center w-full h-[70vh] bg-black bg-gradient-to-r"} id={"footer"}>
                <div className={"h-[70%] px-16 inline-block"}>
                    <h1 className={"text-green-600 text-[34px] font-bold"}><span
                        className={"text-green-600 mr-1"}><FontAwesomeIcon icon={faLeaf}/></span>FermeData </h1>
                    <p className={"text-yellow-600 mt-6 text-sm"}> FermeData est une large organisation
                        d'agriculteur </p>
                    <p className={"mt-4 text-xs text-gray-600"}>
                        Nous avons eu en 2 ans plus 100 agriculteur professionnel <br/>
                        repartis dans differents etats du pays. Plusieurs variations <br/>
                        de categories d'animal sont regroupes dans une meme <br/>
                        pour pouvoir mieux gerer l'etat et l'evolution de <br/>
                        l'elevage
                    </p>
                    <div className={"flex flex-row justify-start items-center mt-6 pt-1"}>
                        <div
                            className={"flex flex-row basis-[14%] mr-2 rounded-full bg-gray-700 text-white text-center h-11 pt-3 pl-3.5"}>
                            <p className={""}><FontAwesomeIcon icon={faMessage}/></p>
                        </div>
                        <div
                            className={"flex flex-row basis-[14%] mr-2 rounded-full bg-gray-700 text-white text-center h-11 pt-3 pl-3.5"}>
                            <p className={""}><FontAwesomeIcon icon={faPhoneAlt}/></p>
                        </div>
                        <div
                            className={"flex flex-row basis-[14%] mr-2 rounded-full bg-gray-700 text-white text-center h-11 pt-3 pl-3.5"}>
                            <p className={""}><FontAwesomeIcon icon={faKiwiBird}/></p>
                        </div>
                        <div
                            className={"flex flex-row basis-[14%] mr-2 rounded-full bg-gray-700 text-white text-center h-11 pt-3 pl-3.5"}>
                            <p className={""}><FontAwesomeIcon icon={faContactCard}/></p>
                        </div>
                    </div>
                    <div
                        className={"text-sm font-mono text-gray-700 hover:text-white hover:transition-colors mt-20"}>
                        <span><FontAwesomeIcon icon={faCopyright}/></span> Copyright 04/2024 Razafimamy Antonino
                    </div>
                </div>
                <div className={"h-[70%] px-16 inline-block"}>
                    <h1 className={"text-gray-300 text-[20px] mt-3 font-bold"}><span
                        className={"text-green-600 mr-1"}></span>Partenaires </h1>
                    <p className={"text-gray-500 mt-7 text-sm"}>MimoAssociation</p>
                    <p className={"text-gray-500 text-sm"}>ExpressAgro</p>
                    <p className={"text-gray-500 text-sm"}>AgroicAlim</p>
                    <p className={"text-gray-500 text-sm"}>AgroTech</p>
                    <p className={"text-gray-500 text-sm"}>SismotechA</p>
                </div>
                <div className={"h-[70%] px-16 inline-block"}>
                    <h1 className={"text-gray-300 text-[20px] mt-3 font-bold"}><span
                        className={"text-green-600 mr-1"}></span>Directive de navigation </h1>
                    <ul>
                        <li><a className={"text-gray-500 mt-7 text-sm"} href={"#"} onClick={()=>{setActive(1)}}>Acceuil</a></li>
                        <li><a className={"text-gray-500 text-sm"} href={"#introduction"} onClick={()=>{setActive(2)}}>A propos</a></li>
                        <li><a className={"text-gray-500 text-sm"} href={"#service"} onClick={()=>{setActive(3)}}>Nos Service</a></li>
                        <li><a className={"text-gray-500 text-sm"} href={"#footer"} onClick={()=>{setActive(4)}}>Nos Contacter</a></li>
                    </ul>
                    <a
                        className={"block bg-green-600 text-gray-200 hover:text-white hover:transition-colors mt-7 rounded-md py-2 pl-2 cursor-pointer"}
                        href={"/animal"}
                    >
                        Entrer dans l'application <span><FontAwesomeIcon icon={faArrowRight}/></span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Home;