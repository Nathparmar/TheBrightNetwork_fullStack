import { useContext, useState} from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import { Multiselect } from "multiselect-react-dropdown/dist/multiselect-react-dropdown.cjs.development";
import {  useNavigate } from "react-router-dom";

const ChatRoomForm = ({allUsers,postNewChatroom}) => {
    const clientUser = useContext(ClientUserContext);
    const navigate = useNavigate();

    const [AddedUsers,setAddedUsers] = useState([])

    const userOptions = [clientUser,...allUsers].map((user) => {
        return {
            name: user.name,
            id: user.id
        };       
    })
  
    const [stateChatRoom,setStateChatRoom] = useState({
        chatroomName: "",
        userIds: []
    }) 

    const updateChatRoomName = (event) => {
        let copiedChatRoom = {...stateChatRoom}
        copiedChatRoom.chatroomName = event.target.value;
        setStateChatRoom(copiedChatRoom);
    }

    const updateAddedUser = (event) => {
        const userIds = event.map((user) => {
            return user.id
        })

        setAddedUsers(userIds)
    }


    const handleFormSubmit = (event) => {
        
        event.preventDefault();

        if(stateChatRoom.chatroomName==="" || AddedUsers.length<3){
            alert("Need to provide name and add at least 3 users")
            return;
        }
        
        postNewChatroom({
            creatorId: clientUser.id,
            chatroomName: stateChatRoom.chatroomName,
            userIds: AddedUsers
        })
        
        setStateChatRoom ({
            creatorId: clientUser.id,
            chatroomName: "",
            userIds: []
        })

        navigate("/main-page");
    }

    return ( 
        <section className="chatroom-form">
            <div className="chatroom-title">
                <h2>Create new chatroom:</h2>
            </div>
            
            <form className="create-chatroom-form" onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor="name-input"></label>
                <input
                    type="text"
                    id= "name-input"
                    onInput={(event) => updateChatRoomName(event)}
                    value={stateChatRoom.name}
                    placeholder="Chat name"
                    className="chat-name"
                />

                <Multiselect 
                    isObject = {true}

                    options = {userOptions}
                    selectedValues={{}} 
                    onSelect={updateAddedUser} 
                    onRemove={updateAddedUser} 
                    displayValue="name" 
                    placeholder="Add users here..."
                    
                
                />
            

                <input className="create-room-button" type="submit" value={"CREATE ROOM"}/> 
            </form>

            <img className="bnta-banner" 
                src="https://media.licdn.com/dms/image/C4E1BAQF4FdpCO4wXaw/company-background_10000/0/1614874706306/bright_network_technology_academy_cover?e=2147483647&v=beta&t=wNmnZAhZ0hbDoHQsnqVNftuoQbGCNksBfpaOJH8oX3k" 
                alt="BNTA-banner"
            />
        
        </section>
    );
}
 
export default ChatRoomForm;