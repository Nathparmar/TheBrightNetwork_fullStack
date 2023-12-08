package com.bnta.the_bright_network.models;

import java.util.List;

public class ChatRoomInputDTO {

    private Long  creatorId;

    private String chatroomName;
    private List<Long> userIds;

    public ChatRoomInputDTO(long creatorId, String name, List<Long> userIds) {
        this.creatorId = creatorId;
        this.chatroomName = name;
        this.userIds = userIds;
    }

    public ChatRoomInputDTO() {
    }

    public List<Long> getUserIds() {
        return userIds;
    }

    public void setUserIds(List<Long> userIds) {
        this.userIds = userIds;
    }

    public Long getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Long creatorId) {
        this.creatorId = creatorId;
    }

    public String getChatroomName() {
        return chatroomName;
    }

    public void setChatroomName(String chatroomName) {
        this.chatroomName = chatroomName;
    }
}
