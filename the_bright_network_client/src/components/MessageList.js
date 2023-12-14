import AddUserForm from "./AddUserForm";
import Message from "./Message";
import MessageBox from "./MessageBox";
import MessageForm from "./MessageForm";
import NamesInChat from "./NamesInChat";
const MessageList = ({chatRoomMessages, postMessage,usersNotInChatRoom,postUser, addedUsers,currentChatRoomName,chatRoomId}) => {

    const messageData = chatRoomMessages.map((message) => (
       <Message 
        key={message.message_id} 
        messageContent={message.messageContent} 
        sender= {message.username}
        timeStamp = {message.timeStamp}
       />
    ))

    return (
        <section>
            <div className="chatroom-title">
                <h2>{currentChatRoomName}</h2>
            </div>
    
            <div className="submit-users-box">
           { (currentChatRoomName && !currentChatRoomName.includes("Private")) && 
    
                <AddUserForm postUser={postUser} usersNotInChatRoom={usersNotInChatRoom}/>
                }
                
                <NamesInChat addedUsers={addedUsers}/>
            </div>
            <MessageBox listOfMessages={messageData.reverse()}/>
            <MessageForm postMessage={postMessage}/>

        </section>
    );
}
 
export default MessageList;