package com.bnta.the_bright_network.controllers;

import com.bnta.the_bright_network.models.User;
import com.bnta.the_bright_network.models.UserDTO;
import com.bnta.the_bright_network.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping ("/users")
public class UserController {

    @Autowired
    UserService userService;

    //Getting all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.displayAllUsers();
        return new ResponseEntity<>(users, users.isEmpty() ? HttpStatus.NOT_FOUND: HttpStatus.OK);
    }

    //Display a user by ID
    @GetMapping (value = "/{id}")
    public ResponseEntity<User> getUserById(@PathVariable long id){
        Optional<User> user = userService.getUserById(id);
        if(user.isPresent()){
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }
        return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    //Create a new user
    @PostMapping
    public ResponseEntity<User> createANewUser(@RequestBody User user){
        userService.createNewUser(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

//    update a users information
    @PatchMapping(value = "/{id}")
    public ResponseEntity<UserDTO> updateUserInfo(@PathVariable long id, @RequestBody UserDTO userDTO){
        UserDTO update = userService.updateProfileInfo(id, userDTO);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

} //end
