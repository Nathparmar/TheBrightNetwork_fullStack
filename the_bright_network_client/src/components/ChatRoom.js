const ChatRoom = ({chatRoomName, clickChatRoom, chatRoomId}) => {
    return (
        <section className="chat-room">
       
        <button className="chat-room-btn" onClick={() => clickChatRoom(chatRoomId)}>{chatRoomName}</button>
        </section>
    );
}
 
export default ChatRoom;