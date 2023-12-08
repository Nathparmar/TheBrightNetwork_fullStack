package com.bnta.the_bright_network.services;


import com.bnta.the_bright_network.models.*;
import com.bnta.the_bright_network.repositories.ChatRoomRepository;
import com.bnta.the_bright_network.repositories.SubscriptionRepository;
import com.bnta.the_bright_network.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {

    @Autowired
    SubscriptionRepository subscriptionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ChatRoomRepository chatRoomRepository;
    @Autowired
    ModelMapper modelMapper;

//    adding a new user to the chatroom
    @Transactional
    public SubscriptionReplyDTO addNewUserToChatroom(SubscriptionInputDTO subscriptionInputDTO) throws Exception{
        //refactor, add only the same user in one a chatroom function.
        Long userId = subscriptionInputDTO.getUserId();
        Long chatRoomId = subscriptionInputDTO.getChatroomId();
        Optional<User> user =  userRepository.findById(userId);
        Optional<ChatRoom> chatRoom = chatRoomRepository.findById(chatRoomId);
        List<Subscription> subscriptionOptional = subscriptionRepository.findByChatRoomIdAndUserId(chatRoomId, userId);
        if (user.isEmpty() || chatRoom.isEmpty() || !subscriptionOptional.isEmpty()){
            throw new Exception("Check if user is in the chatroom or if chatroom/user exists.");
        }

        Subscription subscription = new Subscription(user.get(), chatRoom.get());
        subscriptionRepository.save(subscription);
        SubscriptionReplyDTO subscriptionReplyDTO = new SubscriptionReplyDTO
                (
                subscription.getId(),
                subscription.getUser().getId(),
                subscription.getChatRoom().getId()
                );
        return subscriptionReplyDTO;
    }

    public List<Subscription> displayAllSubscriptions(){
        return subscriptionRepository.findAll();
    }






} //Last curly bracket
