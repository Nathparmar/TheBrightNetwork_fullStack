import { useContext } from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";

const ChatRoomList = ({chatRooms}) => {

    // const clientId = useContext(ClientUserContext);
    const clientUser = useContext(ClientUserContext);
    // console.log(clientId);

    return ( 
        <>
            <h2>Test</h2>
            <ul>{clientUser ? clientUser.id : "No user ID available"}</ul>
            
        </>
    );
}
 
export default ChatRoomList;