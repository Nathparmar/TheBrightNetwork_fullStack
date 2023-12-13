import Message from "./Message";
import MessageForm from "./MessageForm";
const MessageList = ({chatRoomMessages, postMessage,usersNotInChatRoom,postUser, addedUsers, getChatRoomNameById,chatRoomId}) => {

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

    const nameOfChat = getChatRoomNameById(chatRoomId)

    const getNames = addedUsers.map((user) => {
        return <ul>{user.name}</ul>;
    })
    
    const userOptions = usersNotInChatRoom.map((user) => {
        return <option key = {user.id} value={user.id}> {user.name} </option>
    })

    return (
        <>

            <h2>{nameOfChat}</h2>
            
            {!nameOfChat.includes("(Private)") && (
            <>
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
            </>
            )}

            
            {messageData.reverse()}
           <MessageForm postMessage={postMessage}/>

           <div>
                {getNames}

           </div>
        </>
    );
}
 
export default MessageList;