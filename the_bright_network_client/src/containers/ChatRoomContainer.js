import { useEffect, useState } from "react";
import SignUpForm from "../components/SignUpForm";

const ChatRoomContainer = () => {
    
    const [clientUser,setClientUser] = useState([]);
    
    const setLoginInUser = async (userId) => {
        const response = await fetch(`http://localhost:8080/users/${userId}`);
        const jsonData = await response.json();
        setClientUser({
            name: jsonData.name,
            id: jsonData.id,
            role: jsonData.role,
          });        
    }

    // useEffect(() => {
    //     setLoginInUser(1)
    // },[])

    return (
        <>
            <SignUpForm setLoginInUser={setLoginInUser} />
        </>
    );
}
 
export default ChatRoomContainer;