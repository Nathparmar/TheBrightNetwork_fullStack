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
        <section className="body">
            <div className="side-bar">
                <div className="dms">
                <ul>
                    <h2 className="direct-messages"> Direct Messages</h2>
                    {userData}
                    
                </ul>
                </div>
            </div>    
        </section>
    );
}
 
export default UserList;