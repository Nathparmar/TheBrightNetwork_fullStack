import Message from "./Message";
import MessageForm from "./MessageForm";
import { Multiselect } from "multiselect-react-dropdown/dist/multiselect-react-dropdown.cjs.development";
import { useState } from "react"
const MessageList = ({chatRoomMessages, postMessage,usersNotInChatRoom,postUser, addedUsers,currentChatRoomName,chatRoomId}) => {

    const [usersToBeAdded, setUsersToBeAdded] = useState([])

    const messageData = chatRoomMessages.map((message) => (
       <Message 
        key={message.message_id} 
        messageContent={message.messageContent} 
        sender= {message.username}
        timeStamp = {message.timeStamp}
       />
    ))

    const handleChange = (event) => {
        event.preventDefault()
        console.log(event.target);
        const addingUsers = event.map((user) => {
            postUser(user);
        })
        
    }



    const handleFormSubmit = (event) => {

        event.preventDefault();
    

    }


    


    const updateAddedUser = (event) => {
       
        const userIds = event.map((user) => {
            return user.id
        })

        setUsersToBeAdded(userIds)
    }

    


    const getNames = addedUsers.map((user) => {
        return <li key={user.userId}>{user.name}</li>;
    })
    
    // const userOptions = usersNotInChatRoom.map((user) => {
    //     return <option key = {user.userId} value={user.id}> {user.name} </option>
    // })

    const userOptions = usersNotInChatRoom.map((user) => {
        
        return {
            name: user.name,
            id: user.id
        };

       
    })


    return (
        <>

            <h2>{currentChatRoomName}</h2>
            
           {/* { {(currentChatRoomName && !currentChatRoomName.includes("Private")) && } */}
            

            <form onSubmit={(event) => handleChange(event)}>
                

            <Multiselect 
                isObject = {true}

                options = {userOptions}
                selectedValues={{}} 
                onSelect={updateAddedUser}
                onRemove={updateAddedUser}
                displayValue="name" 
                placeholder="Add users here..."

            />


            <input type="submit" value={"Add user"}/> 
            </form>

            

            
            {messageData.reverse()}
           <MessageForm postMessage={postMessage}/>

           <ul>
                {getNames}

           </ul>
        </>
    );
}
 
export default MessageList;