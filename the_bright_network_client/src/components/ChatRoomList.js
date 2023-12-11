import { useContext } from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";

const ChatRoomList = ({chatRooms}) => {

    // const clientId = useContext(ClientUserContext);
    const clientUser = useContext(ClientUserContext);
    console.log(chatRooms);

    return ( 
        <>
            <h2>Test</h2>
            <ul>{clientUser ? clientUser.id : "No user ID available"}</ul>
            <p>
                {chatRooms.map((chatRoom) => (
                <div key={chatRoom.id}>
                <p>ID: {chatRoom.id}</p>
                <p>Name: {chatRoom.name}</p>
                </div>
            ))}
            </p>        
            </>
    );
}
 
export default ChatRoomList;