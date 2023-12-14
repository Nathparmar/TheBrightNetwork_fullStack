import {Link, Outlet} from "react-router-dom";

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
                        {userName}
                        <p className="user-role">{userRole}</p>
                </button>
            </Link>

        {/* <Outlet /> */}

        </section>

        </>
    );
}
 
export default User;