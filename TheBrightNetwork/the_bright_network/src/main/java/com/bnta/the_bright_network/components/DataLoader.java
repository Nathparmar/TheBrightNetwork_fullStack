package com.bnta.the_bright_network.components;

import com.bnta.the_bright_network.models.*;
import com.bnta.the_bright_network.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Component
public class DataLoader implements ApplicationRunner {



    @Autowired
    ChatRoomRepository chatRoomRepository;
    @Autowired
    SubscriptionRepository subscriptionRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    MessageRepository messageRepository;
    @Autowired
    ReactionRepository reactionRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        User user1 = new User("Rayster", 25, "Student");
        User user2 = new User("Sarah", 23, "Student");
        User user3 = new User("Faiz", 23, "Student");
        User user4 = new User("Annie", 26, "Student");
        User user5 = new User("Zsolt", 34, "Trainer");

        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);
        userRepository.save(user4);
        userRepository.save(user5);

        ChatRoom chatroom1 = new ChatRoom (" cohort 12 study group");
        ChatRoom chatroom2 = new ChatRoom (" cohort 11 chatroom");
        ChatRoom chatroom3 = new ChatRoom (" cohort 7 chatroom");
        ChatRoom chatroom4 = new ChatRoom (" Trainers with c12");

        chatRoomRepository.save(chatroom1);
        chatRoomRepository.save(chatroom2);
        chatRoomRepository.save(chatroom3);
        chatRoomRepository.save(chatroom4);

        Subscription subscription1 = new Subscription(user1,chatroom1);
        Subscription subscription2 = new Subscription(user2,chatroom1);
        Subscription subscription3 = new Subscription(user3,chatroom1);
        Subscription subscription4 = new Subscription(user4,chatroom1);

        subscriptionRepository.save(subscription1);
        subscriptionRepository.save(subscription2);
        subscriptionRepository.save(subscription3);
        subscriptionRepository.save(subscription4);

        Subscription subscription5 = new Subscription(user5,chatroom4);
        Subscription subscription6 = new Subscription(user2,chatroom4);
        Subscription subscription7 = new Subscription(user4,chatroom4);
        Subscription subscription8 = new Subscription(user1,chatroom4);

        subscriptionRepository.save(subscription5);
        subscriptionRepository.save(subscription6);
        subscriptionRepository.save(subscription7);
        subscriptionRepository.save(subscription8);

        Message message1 = new Message("I'm Sarah !", subscription2,LocalDateTime.now());
        Message message2 = new Message("Hi, everyone", subscription1,LocalDateTime.now());
        Message message3 = new Message("Hi, Rayster!", subscription3,LocalDateTime.now());
        Message message4 = new Message("Welcome!", subscription5,LocalDateTime.now());
        Message message5 = new Message("Hi Zsolt!", subscription7,LocalDateTime.now());

        messageRepository.save(message1);
        messageRepository.save(message2);
        messageRepository.save(message3);
        messageRepository.save(message4);
        messageRepository.save(message5);

        Reaction reaction1 = new Reaction("😂", user1, message3);
        reactionRepository.save(reaction1);
    }

}
