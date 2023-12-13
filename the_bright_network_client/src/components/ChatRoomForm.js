import { useContext, useState} from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";

const ChatRoomForm = ({allUsers,postNewChatroom}) => {
    const clientUser = useContext(ClientUserContext);

    const [UnAddedUsers, setUnAddedUsers] = useState([clientUser,...allUsers]);
    const [AddedUsers,setAddedUsers] = useState([])

    const userOptions = [clientUser,...allUsers].map((user) => {
        return <option key = {user.id} value={user.id}> {user.name} </option>
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

        setAddedUsers([event.target.value, ...AddedUsers])

        const copiedUnAddedUsers = UnAddedUsers.filter((user) => {
            return (event.target.value != user.id)
        })

        setUnAddedUsers([...copiedUnAddedUsers])

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

            <label htmlFor="addUser">Add User</label>
            <select 
                id="addUser" 
                name="addUserButton"
                defaultValue="Add users"
                onChange={updateAddedUser}
            >
                <option disabled-value="Add Users">Choose an User</option>
                {userOptions}
            </select>

            <input type="submit" value={"Log in"}/>
        </form>
        </section>
        );
}
 
export default ChatRoomForm;