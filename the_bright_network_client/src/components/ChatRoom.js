import { Link, Outlet } from "react-router-dom";
const ChatRoom = ({chatRoomName, clickChatRoom, chatRoomId}) => {
    return (

        <section className="chat-room">
        <Link to="/chatrooms"><button className="chat-room-btn" onClick={() => clickChatRoom(chatRoomId)}>{chatRoomName}</button></Link>
        <Outlet />
        </section>
        
    );
}
 
export default ChatRoom;