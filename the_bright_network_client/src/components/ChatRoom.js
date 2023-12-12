const ChatRoom = ({chatRoomName, clickChatRoom}) => {
    return (
        <section className="chat-room">
       
        <button className="chat-room-btn" onClick={() => clickChatRoom(chatRoomName)}>{chatRoomName}</button>
        </section>
    );
}
 
export default ChatRoom;