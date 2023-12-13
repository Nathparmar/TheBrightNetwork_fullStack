import Message from "./Message";
import MessageForm from "./MessageForm";
const MessageList = ({chatRoomMessages, postMessage,usersNotInChatRoom,postUser, addedUsers,currentChatRoomName,chatRoomId}) => {

    const messageData = chatRoomMessages.map((message) => (
       <Message 
        key={message.message_id} 
        messageContent={message.messageContent} 
        sender= {message.username}
        timeStamp = {message.timeStamp}
       />
    ))

    const handleChange = (event) => {

        postUser(event.target.value);
    }

    const getNames = addedUsers.map((user) => {
        return <li key={user.userId}>{user.name}</li>;
    })
    
    const userOptions = usersNotInChatRoom.map((user) => {
        return <option key = {user.userId} value={user.id}> {user.name} </option>
    })

    return (
        <>

            <h2>{currentChatRoomName}</h2>
            
           {(currentChatRoomName && !currentChatRoomName.includes("Private")) && 
            <form>
                <label htmlFor="addUser">Add User</label>
                <select
                id="addUser"
                name="addUserButton"
                defaultValue="Add users"
                onChange={handleChange}
                >
                <option disabled value="Add Users">
                    Choose an User
                </option>
                {userOptions}
                </select>
            </form>
            }

            
            {messageData.reverse()}
           <MessageForm postMessage={postMessage}/>

           <ul>
                {getNames}

           </ul>
        </>
    );
}
 
export default MessageList;