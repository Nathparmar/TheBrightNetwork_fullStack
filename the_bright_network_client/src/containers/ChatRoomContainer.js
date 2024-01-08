import { useEffect, useState, createContext } from "react";
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";
import ChatRoomList from "../components/ChatRoomList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import MessageList from "../components/MessageList";
import ChatRoomForm from "../components/ChatRoomForm";


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
    
    const [currentChatRoomName, setCurrentChatRoomName] = useState(null);

    const [chatRoomMessages, setChatRoomMessages] = useState([]);
    const [usersNotInChatRoom,setUsersNotInChatRoom] = useState([]);
    const [addedUsers, setAddedUsers] = useState([]);

    const getUsersNotInChatRoom = async () => {
        const response = await fetch(`http://localhost:8080/chatrooms/${currentChatRoom}/users`);
        const jsonData = await response.json();

        const unAddedUsers = allUsers.filter((user) => {
            
            return !(jsonData.some((chatUser) => user.id === chatUser.userId));
        });
        
        setUsersNotInChatRoom([...unAddedUsers]);
        setAddedUsers([...jsonData]);

    }
    
    const clientUserId = () => {
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
            return subscriptions.some((subscription) => (subscription.user.id === clientUser.id || (clientUser.role == "Trainer" && !chatRoom.name.includes("Private"))));
        });
        console.log(userChatRooms);
        console.log(clientUser);
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
        try {

            const response = await fetch(`http://localhost:8080/chatrooms/${currentChatRoom}/messages?userId=${clientUser.id}`,{
                method: "GET",
                headers: {"Content-Type":"application/json"}
            })
            const messageData = await response.json();
            setChatRoomMessages([...messageData]);

        } catch (e) {
            const response = await fetch(`http://localhost:8080/chatrooms/${currentChatRoom}`);
            const jsonData = await response.json();
            const idOfUserInChat = jsonData.subscriptions[0].user.id //get ID of exisiting user to allow admin to load messages

            const adminResponse = await fetch(`http://localhost:8080/chatrooms/${currentChatRoom}/messages?userId=${idOfUserInChat}`,{
                method: "GET",
                headers: {"Content-Type":"application/json"}
            })
            const messageData = await adminResponse.json();
            setChatRoomMessages([...messageData]);
        };
    }
    

    const postMessage = async (newMessage) => {
        const response = await fetch(`http://localhost:8080/chatrooms/${currentChatRoom}/messages`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newMessage)
        })
        getMessagesByChatRoom(currentChatRoom)
    }

    const postUser = async (newUserId) => {
        const response = await fetch('http://localhost:8080/subscriptions',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    userId : newUserId,
                    chatroomId: currentChatRoom
                }
            )
        })

        getUsersNotInChatRoom()
    }

    const postNewChatroom = async (newChatroom) => {

        const response = await fetch('http://localhost:8080/chatrooms',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newChatroom)
        })
        const newChat = await response.json();
        
        setCurrentChatRoom(newChat.chatroomId)
        setCurrentChatRoomName(newChat.chatroomName)
    }

    const postNewUserSignUp = async (newSignUp) => {

        const response = await fetch('http://localhost:8080/users',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newSignUp)
        })
        const jsonData = await response.json();
        setClientUser({
            name: jsonData.name,
            id: jsonData.id,
            role: jsonData.role,
          });
        
        alert(`Your password is : ${jsonData.id}`)
    }

    const startPrivateChat = async (messagedUserId,messagedUserName) => {
        const privateChats = chatRooms.filter((chatRoom) => {
            return (chatRoom.name.includes("Private") && 
            chatRoom.subscriptions.some((subscription) => subscription.user.id === messagedUserId)
            );
        });
        if (privateChats.length === 0){
            postNewChatroom({
                    creatorId : clientUser.id,
                    chatroomName: `(Private) - ${clientUser.name} and ${messagedUserName} `,
                    userIds: [messagedUserId,clientUser.id]
            })
            
            getAllUserChatRooms()
        } else {
            setCurrentChatRoom(privateChats[0].id);
            
        }
    }

    const getChatRoomNameById = (chatRoomId) => {
        getAllUserChatRooms()
        
        let foundChatRoom = chatRooms.find((chatRoom) => chatRoom.id === chatRoomId);
        
        if (foundChatRoom){
            console.log(foundChatRoom.name);
            setCurrentChatRoomName(foundChatRoom.name)
            
        }
    };



    useEffect(() => {
        clientUserId();
        getAllUserChatRooms();
        getAllUsers();
        

    },[clientUser])

    useEffect(() => {
        if(currentChatRoom){
            getMessagesByChatRoom(currentChatRoom);
            getUsersNotInChatRoom();
            getChatRoomNameById(currentChatRoom)
        }
        
    },[currentChatRoom])

    const chatRoomRoutes = createBrowserRouter([
        {
            path: "/",
            element: <>
                    
                    <ClientUserContext.Provider value={clientUser}>
                        <Home allUsers={allUsers} startPrivateChat={startPrivateChat}/>
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
                    path: "/signup",
                    element: <>
                    
                        <ClientUserContext.Provider value={clientUser}>
                            <SignUpForm postNewUserSignUp={postNewUserSignUp}/>
                        </ClientUserContext.Provider>
                    </>
                },
                {
                    path: "/chatrooms",
                    element: <>
                        <ClientUserContext.Provider value={clientUser}>
                            <MessageList 
                                chatRoomMessages={chatRoomMessages} 
                                postMessage={postMessage} 
                                usersNotInChatRoom={usersNotInChatRoom} 
                                postUser={postUser} 
                                addedUsers={addedUsers}
                                currentChatRoomName={currentChatRoomName}
                            />
                        </ClientUserContext.Provider>
                    </>

                },
                {
                    path: "/create/chatrooms",
                    element: <>
                        <ClientUserContext.Provider value={clientUser}>
                        <ChatRoomForm
                            allUsers={allUsers}
                            postNewChatroom = {postNewChatroom}
                        />
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