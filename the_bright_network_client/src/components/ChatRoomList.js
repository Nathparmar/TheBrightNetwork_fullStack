import { useContext } from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import ChatRoom from "./ChatRoom";

const ChatRoomList = ({chatRooms, clickChatRoom}) => {

    const clientUser = useContext(ClientUserContext);

    const chatRoomData = chatRooms.map((chatRoom) => (
       <ChatRoom key={chatRoom.id} chatRoomName={chatRoom.name} chatRoomId = {chatRoom.id} clickChatRoom={clickChatRoom}/>
    ))

    return ( 
        <>
            <h2 className="main-header" >Welcome to your BNTA Chat Rooms</h2>
            
            <ul>{chatRoomData}</ul>
        </>
    );
}

export default ChatRoomList;