import { useContext, useState} from "react";
import { ClientUserContext } from "../containers/ChatRoomContainer";
const MessageForm = ({postMessage}) => {
    
    const clientUser = useContext(ClientUserContext);

    const [stateMessage, setStateMessage] = useState(
        {
            messageContent: "",
            userId: clientUser.id
        }
    )    

    const handleFormSubmit = (event) => {
        
        if(stateMessage.messageContent === ""){
            alert("Can't submit empty message")
            return;
        }

        postMessage(stateMessage);

        event.preventDefault();
 
        setStateMessage({
            messageContent: "",
            userId: clientUser.id
        })
    }

    const handleChange = (event) => {
        let copiedMessage = {...stateMessage};
        copiedMessage.messageContent = event.target.value;
        setStateMessage(copiedMessage);
    }

    return ( 

    <section>
        <h2>Log in to chatroom:</h2>
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="name-input">Name:</label>
            <input
                type="text"
                id= "message-content-input"
                onChange={handleChange}
                value={stateMessage.messageContent}
            />
            <input type="submit" value={"Log in"}/>
        </form>
        </section>
        );
}

export default MessageForm;