const User = ({userName,userRole}) => {
    return (
        <section className="chat-room">
       
        <button className="chat-room-btn">{`${userName} : ${userRole}`}</button>
        </section>
    );
}
 
export default User;