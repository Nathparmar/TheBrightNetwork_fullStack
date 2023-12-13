const User = ({userName,userRole,userId,startPrivateChat}) => {
    
    const onButtonClick = () =>{
        startPrivateChat(userId);
    }
    
    return (
        <section className="chat-room">
       
        <button className="chat-room-btn" onClick={onButtonClick}>{`${userName} : ${userRole}`}</button>
        </section>
    );
}
 
export default User;