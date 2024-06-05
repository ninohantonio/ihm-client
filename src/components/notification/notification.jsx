import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import {useTopicSocket} from "../../states/topics_context";



const NotificationComponent = () => {

    const topics = localStorage.getItem("topics")
    const [showNotif, setShowNotif] = useState(false);

    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = new Client({
        webSocketFactory: () => socket,
        debug: (str) => {
            console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
    });

    stompClient.onConnect = (frame) => {
        console.log('Connected ngeza beee: ' + frame);
        stompClient.subscribe("/user/" + topics + "/specific", (message) => {
            console.log('Received: ' + message.body);
        });
    };

    stompClient.activate();



    const sendMessage = () => {
        // if (stompClient && stompClient.connected) {
        //     stompClient.publish({
        //         destination: '/app/private',
        //         body: JSON.stringify({"message": "C'est l'heure du service"}),
        //     });
        // } else {
        //     console.log("La connexion n'est pas établie. Veuillez réessayer.");
        // }
        console.log("Topics = ", topics)
    };

    const notificationsData = [
        {title: "Heure d'alimentation", content: "Les animaux de categorie Bovin doivent manger a ", heure: "18h00"},
        {title: "Heure d'alimentation", content: "Les animaux de categorie Porcin doivent manger a ", heure: "18h00"},
        {title: "Heure d'alimentation", content: "Les animaux de categorie Bovin doivent manger a ", heure: "12h00"},
        {title: "Heure d'alimentation", content: "Les animaux de categorie Porcin doivent manger a ", heure: "12h00"},
        {title: "Heure d'alimentation", content: "Les animaux de categorie Porcin doivent manger a ", heure: "7h00"},
        {title: "Heure d'alimentation", content: "Les animaux de categorie Bovin doivent manger a ", heure: "7h00"},
    ]


    const handleShowNotification = () => {

    }

    useEffect(() => {

    }, []);

    return (
        <>
            <div
                className={"fixed left-[90%] top-3 items-center mx-auto pl-3.5 p-2 text-white cursor-pointer bg-gray-800 h-10 w-10 rounded"}
                onClick={()=>{setShowNotif(!showNotif)}}
            >
                <FontAwesomeIcon icon={faBell}/>
            </div>
            <div
                className={showNotif ? "fixed left-[82%] h-full overflow-y-scroll py-6 top-14 items-center mx-auto pl-3.5 p-2 text-white cursor-pointer z-10 bg-gray-200 w-60 rounded flex flex-col justify-around" : "hidden"}
            >
                <h1 className="text-blue-700">notifications :</h1>
                {
                    notificationsData.map((item, key)=>(
                        <div
                            className={"text-s text-blue-700 font-bold border-b-2 border-b-indigo-500 py-2 hover:bg-gray-300 w-full pl-2.5"}
                        >
                            <div>{item.title}</div>
                            <div className={"text-gray-800"}>{item.content}<span className="text-purple-800"> {item.heure} </span></div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NotificationComponent