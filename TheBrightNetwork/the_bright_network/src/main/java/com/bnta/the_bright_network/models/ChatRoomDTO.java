package com.bnta.the_bright_network.models;

import java.util.ArrayList;
import java.util.List;

public class ChatRoomDTO {

    private Long  chatroomId;

    private  String chatroomName;

    private List<Long> userIds;

    public ChatRoomDTO(long chatroomId, String name) {
        this.chatroomId = chatroomId;
        this.chatroomName = name;
        this.userIds = new ArrayList<>();
    }

    public ChatRoomDTO() {
    }
    public Long getChatroomId() {
        return chatroomId;
    }

    public void setChatroomId(Long chatroomId) {
        this.chatroomId = chatroomId;
    }

    public String getChatroomName() {
        return chatroomName;
    }

    public void setChatroomName(String chatroomName) {
        this.chatroomName = chatroomName;
    }

    public List<Long> getUserIds() {
        return userIds;
    }

    public void setUserIds(List<Long> userIds) {
        this.userIds = userIds;
    }
}
