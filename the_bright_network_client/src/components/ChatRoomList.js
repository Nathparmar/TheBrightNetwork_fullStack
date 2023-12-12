import { useContext } from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import ChatRoom from "./ChatRoom";

const ChatRoomList = ({chatRooms}) => {

    // const clientId = useContext(ClientUserContext);
    const clientUser = useContext(ClientUserContext);
    console.log(chatRooms);

    const chatRoomData = chatRooms.map((chatRoom) => (
       <ChatRoom key={chatRoom.id} chatRoomName={chatRoom.name}/>
    ))

    // const checkUser = () => {
    //     if(clientUser.name){
    //     return "Not logged in"
    // } else{
        
    


    return ( 
        <>
            <h2 className="main-header" >Welcome to your BNTA Chat Rooms</h2>
            <ul className="client-name">{clientUser ? clientUser.name : "Not logged in"}</ul>
            {/* <ul className="client-name">{clientUser ? clientUser.name : <p className="not-logged-in"> Not logged in</p>}</ul> */}
            <ul>{chatRoomData}</ul>
        </>
    );
}

export default ChatRoomList;