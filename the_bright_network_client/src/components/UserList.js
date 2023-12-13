import User from "./User";

const UserList = ({allUsers, startPrivateChat}) => {
   //const clientUser = useContext(ClientUserContext);
    //console.log(chatRooms);

    const userData = allUsers.map((user => (
       <User key={user.id} userName={user.name} userRole={user.role} userId={user.id} startPrivateChat={startPrivateChat}/>
       )
    ))

    return ( 
        <>
            <h2 className="list-of-User" > list of users</h2>
            <ul>{userData}</ul>
        </>
    );
}
 
export default UserList;