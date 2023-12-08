package com.bnta.the_bright_network.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String messageContent;

    @ManyToOne
    @JoinColumn(name = "subscription_id")
    @JsonIgnoreProperties({"messages"})
    private Subscription subscription;

    @Column
    private LocalDateTime timeStamp;

    @OneToMany(mappedBy = "message")
    @JsonIgnoreProperties({"message"})
    private List<Reaction> reactions;

//    private List<Reaction> reactions;


    public Message(String messageContent, Subscription subscription, LocalDateTime timeStamp) {
        this.messageContent = messageContent;
        this.subscription = subscription;
        this.timeStamp = timeStamp;
        this.reactions = new ArrayList<>();
    }

    public Message() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMessageContent() {
        return messageContent;
    }

    public void setMessageContent(String messageContent) {
        this.messageContent = messageContent;
    }

    public Subscription getSubscription() {
        return subscription;
    }

    public void setSubscription(Subscription subscription) {
        this.subscription = subscription;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public List<Reaction> getReactions() {
        return reactions;
    }

    public void setReactions(List<Reaction> reactions) {
        this.reactions = reactions;
    }
}

