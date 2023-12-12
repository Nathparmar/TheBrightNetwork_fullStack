import User from "./User";

const UserList = ({allUsers}) => {
   //const clientUser = useContext(ClientUserContext);
    //console.log(chatRooms);

    const userData = allUsers.map((user => (
       <User key={user.id} userName={user.name} userRole={user.role}/>
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