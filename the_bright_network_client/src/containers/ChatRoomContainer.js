import { useEffect, useState } from "react";
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";
import ChatRoomList from "../components/ChatRoomList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "../components/Home";

const ChatRoomContainer = () => {
    
    const [clientUser,setClientUser] = useState([]);
    const [chatRooms,setChatRooms] = useState([]);
    
    const setLoginInUser = async (userId) => {
        const response = await fetch(`http://localhost:8080/users/${userId}`);
        const jsonData = await response.json();
        setClientUser({
            name: jsonData.name,
            id: jsonData.id,
            role: jsonData.role,
          });        
    }

    const getAllChatRooms = async () => {
        const response = await fetch(`http://localhost:8080/chatrooms`);
        const jsonData = await response.json();
        
        setChatRooms(jsonData);
    }

    // useEffect(() => {
    //     console.log(clientUser)
    // },[clientUser])

    // useEffect(() => {
    //     getAllChatRooms()
    //     console.log(chatRooms);
    // },[])

    const chatRoomRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/main-page",
                    element: <ChatRoomList chatRooms={chatRooms} />
                },
                {
                    path: "/login",
                    element: <LogInForm setLoginInUser={setLoginInUser} />
                }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router = {chatRoomRoutes} />
        </>
    );
}
 
export default ChatRoomContainer;