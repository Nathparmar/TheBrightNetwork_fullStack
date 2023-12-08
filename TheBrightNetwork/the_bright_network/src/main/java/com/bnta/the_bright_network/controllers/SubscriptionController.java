package com.bnta.the_bright_network.controllers;
import com.bnta.the_bright_network.models.Subscription;
import com.bnta.the_bright_network.models.SubscriptionInputDTO;
import com.bnta.the_bright_network.models.SubscriptionReplyDTO;
import com.bnta.the_bright_network.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.modelmapper.ModelMapper;

import java.util.List;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionController {

    @Autowired
    SubscriptionService subscriptionService;

    @Autowired
    ModelMapper modelMapper;

    @PostMapping
    public ResponseEntity<SubscriptionReplyDTO> addPersonToChatroom(@RequestBody SubscriptionInputDTO subscriptionInputDTO){
        try {
        SubscriptionReplyDTO subscriptionReplyDTO = subscriptionService.addNewUserToChatroom(subscriptionInputDTO);
        return new ResponseEntity<>(subscriptionReplyDTO, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<List<Subscription>> getAllSubscriptions(){
        List<Subscription> subscriptions = subscriptionService.displayAllSubscriptions();
//                .stream()
//                .map(subscription -> modelMapper.map(subscription, SubscriptionReplyDTO.class))
//                .toList();

        return new ResponseEntity<>(subscriptions, HttpStatus.OK);
    }
}
