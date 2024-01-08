import {Link} from "react-router-dom";

const User = ({userName,userRole,userId,startPrivateChat}) => {
    
    const onButtonClick = () =>{
        startPrivateChat(userId,userName);
    }
    
    return (
        <>

        
        <section className="user">
        
            <Link to="/chatrooms">
                <button 
                    className="user-list-btn" onClick={onButtonClick}>
                        <b>{userName}</b>
                        <p className="user-role">{userRole}</p>
                </button>
            </Link>


        </section>

        </>
    );
}
 
export default User;