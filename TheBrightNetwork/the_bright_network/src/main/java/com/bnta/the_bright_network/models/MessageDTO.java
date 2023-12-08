package com.bnta.the_bright_network.models;

public class MessageDTO {

    private  Long userId;

    private String messageContent;

    public MessageDTO(Long userId  , String messageContent) {
        this.userId = userId;
        this.messageContent = messageContent;
    }

    public MessageDTO() {
    }

    public Long getuserId() {
        return userId;
    }
    public void setuserId(Long userId) {
        this.userId = userId;
    }

    public String getMessageContent() {
        return messageContent;
    }

    public void setMessageContent(String messageContent) {
        this.messageContent = messageContent;
    }
} //End
