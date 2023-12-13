import {Link, Outlet} from "react-router-dom";

const User = ({userName,userRole,userId,startPrivateChat}) => {
    
    const onButtonClick = () =>{
        startPrivateChat(userId,userName);
    }
    
    return (
        <>

        
        <section className="chat-room">
        
        

        <Link to="/chatrooms"><button className="chat-room-btn" onClick={onButtonClick}>{`${userName} : ${userRole}`}</button></Link>

        {/* <Outlet /> */}

        </section>

        </>
    );
}
 
export default User;