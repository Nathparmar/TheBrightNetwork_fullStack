const Message = ({ messageContent, timeStamp, sender }) => {
  
    const utcDate = new Date(timeStamp); // Create a Date object from the UTC string
    const localTime = utcDate.toLocaleString(); // Convert UTC time to local time
      
  
    return (
        <section className="message-list">
            <div className="wrapper">
                <span className="username"><b>{sender}</b></span>
                <p>{messageContent}</p>
                <div className="time-div">
                   <span className="time">{localTime}</span>
                </div>
            </div>
        </section>
    );
};

export default Message;