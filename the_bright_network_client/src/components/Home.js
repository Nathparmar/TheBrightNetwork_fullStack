import {Link, Outlet} from "react-router-dom";
import UserList from "./UserList";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import { useContext } from "react";


const Home = ({allUsers}) => {
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
            {clientUser.id? <UserList allUsers={allUsers}/>:null}
        </>

        </>

     );
}
 
export default Home;