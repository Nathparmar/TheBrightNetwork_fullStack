const Message = ({ messageContent, timeStamp, sender }) => {
  
    const utcDate = new Date(timeStamp); // Create a Date object from the UTC string
      const localTime = utcDate.toLocaleString(); // Convert UTC time to local time
      
  
    return (
    <section className="message-list">
      <div className="wrapper">
        <div className="speechbubble">
        <span>{localTime}</span>
          <p>{messageContent}</p>
          <span className="username">{sender}</span>
          
        </div>
      </div>
    </section>
  );
};

export default Message;
