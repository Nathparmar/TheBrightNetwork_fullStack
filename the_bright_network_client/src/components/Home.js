import {Link, Outlet} from "react-router-dom";
import UserList from "./UserList";
import { ClientUserContext } from "../containers/ChatRoomContainer";
import { useContext } from "react";


const Home = ({allUsers, startPrivateChat}) => {
    const clientUser = useContext(ClientUserContext);

    return ( 
        <>  
            <section className="header-block">
            <header className="header-nav-bar">
                <Link to="/login"><button className="header-button">Login</button></Link>
        
                <Link to="/main-page"><button className="header-button">Home</button></Link>
                    
                <Link to="/signup"><button className="header-button">Sign Up</button></Link>
            </header>
            </section>
           

            <main className="home-main"> 
                <section className="side-bar">
                    <p className="client-name"><b>{clientUser.name ? clientUser.name : "Not logged in"}</b></p>
                    {clientUser.id? <UserList allUsers={allUsers} startPrivateChat={startPrivateChat}/>:null}
                </section>

                <section className="home-outlet">
                    <Outlet />
                </section>    
            </main>

            <footer className="footer">
                Bright Network
            </footer>

        </>

     );
}
 
export default Home;