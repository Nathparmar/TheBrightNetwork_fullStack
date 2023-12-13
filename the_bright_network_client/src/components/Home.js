import {Link, Outlet} from "react-router-dom";
import UserList from "./UserList";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import { useContext } from "react";


const Home = ({allUsers, startPrivateChat}) => {
    const clientUser = useContext(ClientUserContext);

    return ( 
        <>
        <header>
       
        <>
            <Link to="/login">Login</Link>
        </>
        <>
            <Link to="/main-page">Home</Link>
        </>
        <Outlet />
        </header>
        <>
            <ul className="client-name">{clientUser.name ? clientUser.name : "Not logged in"}</ul>
            {clientUser.id? <UserList allUsers={allUsers} startPrivateChat={startPrivateChat}/>:null}
        </>

        </>

     );
}
 
export default Home;