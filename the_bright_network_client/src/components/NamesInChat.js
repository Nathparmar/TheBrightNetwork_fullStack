const NamesInChat = ({addedUsers}) => {
    
    const nameList = addedUsers.map((user)=>{
        return <li>{user.name}</li>;
    });

    return (
        <>
            <div className="names-in-chat">
            <h3>Chat participants:</h3>
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