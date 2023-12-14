const NamesInChat = ({addedUsers}) => {
    
    const nameList = addedUsers.map((user)=>{
        return <li>{user.name}</li>;
    });

    return (
        <>
            <h3>Chat Participants:</h3>
            <div className="names-in-chat">
                
                <div className="names-scroll">
                    <ul>
                        {nameList}
                    </ul>
                </div>
            </div>
        </>
    );
}
 
export default NamesInChat;