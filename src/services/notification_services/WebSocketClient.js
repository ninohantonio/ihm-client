// import SockJS from 'sockjs-client'
// import {Client} from '@stomp/stompjs'
// import {useEffect, useState} from "react";
//
// const useWebSocket = () => {
//     const [message, setMessage] = useState('');
//
//     useEffect(() => {
//         const socket = new SockJS('http://localhost:8080/ws')
//         const stompClient = new Client({
//             brokerURL: 'http://localhost:8080/ws',
//             webSocketFactory: () => socket,
//             debug: (str) => console.log("debug mande ",str),
//             reconnectDelay: 5000,
//             heartbeatIncoming: 4000,
//             heartbeatOutgoing: 4000
//         });
//
//         stompClient.onConnect = (frame) => {
//             stompClient.subscribe("/user/ninohantonio@gmail/specific", (notification)=>{
//                 const data = JSON.stringify(notification.body)
//                 console.log("data socket ", data)
//                 setMessage("Nino")
//             })
//         }
//
//         stompClient.activate()
//
//
//     }, []);
//
//     return message
// }
//
// export default useWebSocket