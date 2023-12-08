package com.bnta.the_bright_network.models;

public class ReactionOutputDTO {
    private Long reactionId;
    private Long messageId;
    private Long userId;
    private String reactionContent;

    public ReactionOutputDTO(Long reactionId, Long messageId, Long userId, String reactionContent) {
        this.reactionId = reactionId;
        this.messageId = messageId;
        this.userId = userId;
        this.reactionContent = reactionContent;
    }

    public ReactionOutputDTO() {
    }

    public Long getReactionId() {
        return reactionId;
    }

    public void setReactionId(Long reactionId) {
        this.reactionId = reactionId;
    }

    public Long getMessageId() {
        return messageId;
    }

    public void setMessageId(Long messageId) {
        this.messageId = messageId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getReactionContent() {
        return reactionContent;
    }

    public void setReactionContent(String reactionContent) {
        this.reactionContent = reactionContent;
    }
}
