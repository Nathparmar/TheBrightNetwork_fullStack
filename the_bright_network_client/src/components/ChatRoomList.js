import { useContext } from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import ChatRoom from "./ChatRoom";

const ChatRoomList = ({chatRooms}) => {

    const clientUser = useContext(ClientUserContext);

    const chatRoomData = chatRooms.map((chatRoom) => (
       <ChatRoom key={chatRoom.id} chatRoomName={chatRoom.name}/>
    ))

    return ( 
        <>
            <h2 className="main-header" >Welcome to your BNTA Chat Rooms</h2>
            <ul className="client-name">{clientUser.name ? clientUser.name : "Not logged in"}</ul>
            <ul>{chatRoomData}</ul>
        </>
    );
}

export default ChatRoomList;