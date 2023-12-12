import Message from "./Message";
import MessageForm from "./MessageForm";
const MessageList = ({chatRoomMessages, postMessage,usersNotInChatRoom,postUser}) => {

    const messageData = chatRoomMessages.map((message) => (
       <Message 
        key={message.message_id} 
        messageContent={message.messageContent} 
        sender= {message.username}
        timeStamp = {message.timeStamp}
       />
    ))

    // const handleChange = (event) => {
    //     null
    //     // let propertyName = event.target.name;
    //     // let copiedChocolate = {...stateChocolate};
    //     // copiedChocolate[propertyName] = event.target.value;
    //     // setStateChocolate(copiedChocolate);
    // }
    
    const userOptions = usersNotInChatRoom.map((user) => {
        return <option key = {user.id} name={user.name}> {user.name} </option>
    })

    console.log(userOptions);

    return (
        <>


           <label htmlFor="addUser">Add User</label>
            <select 
                id="addUser" 
                name="addUserButton"
                defaultValue="Add users"
                //onChange={handleChange}
            >
                <option disabled-value="Add Users">Choose an User</option>
                {userOptions}
            </select>

            
            {messageData.reverse()}
           <MessageForm postMessage={postMessage}/>
        </>
    );
}
 
export default MessageList;