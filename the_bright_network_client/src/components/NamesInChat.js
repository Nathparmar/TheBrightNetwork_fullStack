const NamesInChat = ({addedUsers}) => {
    
    const nameList = addedUsers.map((user)=>{
        return <ul>{user.name}</ul>;
    });

    return (
        <>
            <h3>Chat Participants:</h3>
            <div className="names-in-chat">
                <div className="names-scroll">
                        {nameList}
                </div>
            </div>
        </>
    );
}
 
export default NamesInChat;