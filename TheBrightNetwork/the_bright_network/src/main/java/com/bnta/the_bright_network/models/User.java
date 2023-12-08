package com.bnta.the_bright_network.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private int age;

    @Column
    private String role;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    private List<Subscription> subscriptions;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    private List<Reaction> reactions;
    //default constructor

    public User() {
    }

    //constructor

    public User(String name, int age, String role) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.subscriptions = new ArrayList<>();
        this.reactions = new ArrayList<>();
    }

    //getters n setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Subscription> getSubscriptions() {
        return subscriptions;
    }

    public void setSubscriptions(List<Subscription> subscriptions) {
        this.subscriptions = subscriptions;
    }

    public List<Reaction> getReactions() {
        return reactions;
    }

    public void setReactions(List<Reaction> reactions) {
        this.reactions = reactions;
    }
} // last curly bracket
