import User from "./User";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import { useContext } from "react";

const UserList = ({allUsers, startPrivateChat}) => {
//    const clientUser = useContext(ClientUserContext);
    //console.log(chatRooms);

    const userData = allUsers.map((user => (
       <User key={user.id} userName={user.name} userRole={user.role} userId={user.id} startPrivateChat={startPrivateChat}/>
       )
    ))

    return ( 
        <section className="sidebar">
        <li >
            <h2 > list of users</h2>
            {userData}
            
        </li>
        </section>
    );
}
 
export default UserList;