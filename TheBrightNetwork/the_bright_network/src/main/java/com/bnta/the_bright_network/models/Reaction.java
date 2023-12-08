package com.bnta.the_bright_network.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "reactions")
public class Reaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String reactionContent;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore(value = true)
    private User user;

    @ManyToOne
    @JoinColumn(name = "message_id")
    @JsonIgnore()
    private Message message;

    public Reaction(String reactionContent, User user, Message message) {
        this.reactionContent = reactionContent;
        this.user = user;
        this.message = message;
    }

    public Reaction() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReactionContent() {
        return reactionContent;
    }

    public void setReactionContent(String reactionContent) {
        this.reactionContent = reactionContent;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }
}
