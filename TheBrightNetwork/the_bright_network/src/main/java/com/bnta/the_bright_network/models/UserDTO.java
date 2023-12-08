package com.bnta.the_bright_network.models;

public class UserDTO {

    private Long userId;
    private String name;
    private int age;
    private String role;

    public UserDTO(Long userId, String name, int age, String role) {
        this.userId = userId;
        this.name = name;
        this.age = age;
        this.role = role;
    }

    public UserDTO() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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
}
