const ChatRoom = ({chatRoomName}) => {
    return (
        <section className="chat-room">
       
        <button className="chat-room-btn">{chatRoomName}</button>
        </section>
    );
}
 
export default ChatRoom;