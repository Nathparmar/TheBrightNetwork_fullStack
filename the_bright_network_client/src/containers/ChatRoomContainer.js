import { useEffect, useState ,useContext, createContext } from "react";
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";
import ChatRoomList from "../components/ChatRoomList";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "../components/Home";
import MessageList from "../components/MessageList";


export const ClientUserContext = createContext();

const ChatRoomContainer = () => {
    
    const [clientUser,setClientUser] = useState([
        
        {   
            name: null,
            id: null,
            role: null

        }
    ]);
    const [chatRooms,setChatRooms] = useState([]);
    const [allUsers,setAllUsers] = useState([]); 
    const [currentChatRoom, setCurrentChatRoom] = useState(null);
    const [chatRoomMessages, setChatRoomMessages] = useState([]);
    // const navigate = useNavigate();
   
    // const ClientUserContext = createContext();
    
    const clientUserId = () => {
        // const clientData = clientUser.id;
        return (<ClientUserContext.Provider value = {clientUser}>
                </ClientUserContext.Provider>)
              
    }

    const setLoginInUser = async (userId) => {
        const response = await fetch(`http://localhost:8080/users/${userId}`);
        const jsonData = await response.json();
        setClientUser({
            name: jsonData.name,
            id: jsonData.id,
            role: jsonData.role,
          });        
      
        
    }

    const getAllUserChatRooms = async () => {
        const response = await fetch(`http://localhost:8080/chatrooms`);
        const jsonData = await response.json();
        const userChatRooms = jsonData.filter((chatRoom) => {
            const subscriptions = chatRoom.subscriptions || [];
            return subscriptions.some((subscription) => subscription.user.id === clientUser.id);
        });

        setChatRooms([...userChatRooms]);
    }

    const getAllUsers = async () => {
        const response = await fetch(`http://localhost:8080/users`);
        const jsonData = await response.json();
        const users = jsonData.filter((user) => {
            return user.id !== clientUser.id
        });

        setAllUsers([...users])
    }

    const clickChatRoom = (chatRoomId) => {
        setCurrentChatRoom(chatRoomId);
    }


    const getMessagesByChatRoom = async (currentChatRoom) => {
        const response = await fetch(`http://localhost:8080/chatrooms/${currentChatRoom}/messages?userId=${clientUser.id}`,{
            method: "GET",
            headers: {"Content-Type":"application/json"}
        })
        console.log(clientUser.id);
        const messageData = await response.json();
        setChatRoomMessages([...messageData]);
    }

    const postMessage = async (newMessage) => {
        const response = await fetch(`http://localhost:8080/chatrooms/${currentChatRoom}/messages`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newMessage)
        })
        getMessagesByChatRoom(currentChatRoom)
    }

    useEffect(() => {
        clientUserId();
        getAllUserChatRooms();
        getAllUsers();
        

    },[clientUser])

    useEffect(() => {
        if(currentChatRoom){
            getMessagesByChatRoom(currentChatRoom);
        }
        
    },[currentChatRoom])

    const chatRoomRoutes = createBrowserRouter([
        {
            path: "/",
            element: <>
                    
                    <ClientUserContext.Provider value={clientUser}>
                    <Home allUsers={allUsers}/>,
                    </ClientUserContext.Provider>
                </>,
            children: [
                {
                    path: "/main-page",
                    element: <>
                    
                        <ClientUserContext.Provider value={clientUser}>
                        <ChatRoomList chatRooms={chatRooms} clickChatRoom={clickChatRoom}/>
                        </ClientUserContext.Provider>
                    </>
                },
                {
                    path: "/login",
                    element: <>
                    
                        <ClientUserContext.Provider value={clientUser}>
                        <LogInForm setLoginInUser={setLoginInUser} />
                        </ClientUserContext.Provider>
                    </>
                },
                {
                    path: "/chatrooms",
                    element: <>
                        <ClientUserContext.Provider value={clientUser}>
                        <MessageList chatRoomMessages={chatRoomMessages} postMessage={postMessage}/>
                        </ClientUserContext.Provider>
                    </>
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