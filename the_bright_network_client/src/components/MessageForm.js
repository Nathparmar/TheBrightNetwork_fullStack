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
        <section className="input-message-box">
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <div className="message-bar">
                    <label htmlFor="message-input"></label>
                    <input
                        className="message-input"
                        type="text"
                        id= "message-content-input"
                        placeholder="Type your message here:"
                        onChange={handleChange}
                        value={stateMessage.messageContent}
                    />
                    <input className="message-button" type="submit" value={"Send!"}/>
                </div>
            </form>
        </section>
    );
}

export default MessageForm;