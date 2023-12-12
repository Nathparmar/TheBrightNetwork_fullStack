import Message from "./Message";
const MessageList = ({chatRoomMessages}) => {
    

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
           {messageData}
        </>
    );
}
 
export default MessageList;