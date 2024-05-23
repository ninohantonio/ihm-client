import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import {useTopicSocket} from "../../states/topics_context";



const NotificationComponent = () => {

    const topics = localStorage.getItem("topics")

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




    useEffect(() => {

    }, []);

    return (
        <>
            <div
                className={"fixed left-[90%] top-3 items-center mx-auto pl-3.5 p-2 text-white cursor-pointer bg-gray-800 h-10 w-10 rounded"}
                onClick={sendMessage}
            >
                <FontAwesomeIcon icon={faBell}/>
            </div>
        </>
    )
}

export default NotificationComponent