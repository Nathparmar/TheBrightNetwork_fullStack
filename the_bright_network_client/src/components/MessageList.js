import Message from "./Message";
import MessageForm from "./MessageForm";
const MessageList = ({chatRoomMessages, postMessage}) => {
    

    // const clientUser = useContext(ClientUserContext);

    const messageData = chatRoomMessages.map((message) => (
       <Message 
        key={message.message_id} 
        messageContent={message.messageContent} 
        sender= {message.username}
        timeStamp = {message.timeStamp}
       />
    ))

    return (
        <>
           {messageData.reverse()}
           <MessageForm postMessage={postMessage}/>
        </>
    );
}
 
export default MessageList;