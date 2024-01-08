import { useContext } from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import ChatRoom from "./ChatRoom";
import { Link, Outlet } from "react-router-dom";

const ChatRoomList = ({chatRooms, clickChatRoom}) => {

    const clientUser = useContext(ClientUserContext);

    const filteredRooms = chatRooms.filter((chatroom) => {
        return chatroom.subscriptions.length > 2
    })
    
    const chatRoomData = filteredRooms.map((chatRoom) => (
        <ChatRoom key={chatRoom.id} chatRoomName={chatRoom.name} chatRoomId = {chatRoom.id} clickChatRoom={clickChatRoom}/>

    ))

    return ( 
        <>
            
            <h2 className="chat-room-header" >Welcome to your BNTA Chat Rooms</h2>
            {clientUser.role === "Trainer"? <Link to="/create/chatrooms"><button className="create-chat-button" >Create new chatroom</button></Link> :null} 

            <section className="chat-room-body">
            {chatRoomData}
            </section>

            <Outlet/>
        </>
    );
}

export default ChatRoomList;