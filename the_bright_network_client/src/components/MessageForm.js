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
        
        event.preventDefault();

        if(stateMessage.messageContent === ""){
            
            alert("Can't submit empty message")
            return;
        }

        postMessage(stateMessage);

 
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
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="name-input"></label>
            <input
                type="text"
                id= "message-content-input"
                placeholder="Type your message here:"
                onChange={handleChange}
                value={stateMessage.messageContent}
            />
            <input type="submit" value={"Send!"}/>
        </form>
        </section>
        );
}

export default MessageForm;