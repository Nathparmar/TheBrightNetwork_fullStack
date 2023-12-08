package com.bnta.the_bright_network.models;

public class SubscriptionInputDTO {

    private long userId;
    private long chatroomId;

    public SubscriptionInputDTO(long userId, long chatroomId) {
        this.userId = userId;
        this.chatroomId = chatroomId;
    }

    public SubscriptionInputDTO() {
    }


    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getChatroomId() {
        return chatroomId;
    }

    public void setChatroomId(long chatroomId) {
        this.chatroomId = chatroomId;
    }
}
