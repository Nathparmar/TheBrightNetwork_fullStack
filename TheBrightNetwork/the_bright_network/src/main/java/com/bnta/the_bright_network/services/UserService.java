package com.bnta.the_bright_network.services;

import com.bnta.the_bright_network.models.User;
import com.bnta.the_bright_network.models.UserDTO;
import com.bnta.the_bright_network.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    //Displaying all users
    public List<User> displayAllUsers(){
        return userRepository.findAll();

    }

    //Getting users by their ID
    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }

    //Create a new user in the db
    public User createNewUser(User user){
        return userRepository.save(user);
    }

//    allow a user to update there profile information
    public UserDTO updateProfileInfo(long id, UserDTO userDTO){
     Optional<User> currentUser = userRepository.findById(id);
       if(currentUser.isPresent()){
           User user = currentUser.get();
           user.setName(userDTO.getName());
           user.setAge(userDTO.getAge());
           user.setRole(userDTO.getRole());
           userRepository.save(user);
           UserDTO updateUser = new UserDTO(user.getId(), user.getName(), user.getAge(),user.getRole()); //converts a user to a userDTO
           return updateUser;
       }
       return null;
    }


} //End
