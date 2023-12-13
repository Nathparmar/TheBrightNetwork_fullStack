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

        // const copiedUnAddedUsers = UnAddedUsers.filter((user) => {
        //     return (event[0].id != user.id)
        // })

        // setUnAddedUsers([...copiedUnAddedUsers])

        

    }


    const handleFormSubmit = (event) => {

        event.preventDefault();
        
        if(stateChatRoom.chatroomName==="" || AddedUsers.length<2){
            alert("Need to provide all details")
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

    <section>
        
        <h2>Log in to chatroom:</h2>
        
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="name-input">Name:</label>
            <input
                type="text"
                id= "name-input"
                onInput={(event) => updateChatRoomName(event)}
                value={stateChatRoom.name}
                placeholder="Chat name"
            />

            <Multiselect 
                isObject = {true}

                options = {userOptions}
                selectedValues={{}} // Preselected value to persist in dropdown
                onSelect={updateAddedUser} // Function will trigger on select event
                onRemove={updateAddedUser} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                placeholder="Add users here..."
            
            />
           

            <input type="submit" value={"create room"}/> 
        </form>
      
        </section>
        );
}
 
export default ChatRoomForm;