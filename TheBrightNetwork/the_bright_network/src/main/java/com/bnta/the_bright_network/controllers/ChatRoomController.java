package com.bnta.the_bright_network.controllers;

import com.bnta.the_bright_network.models.*;
import com.bnta.the_bright_network.services.ChatRoomService;
import com.bnta.the_bright_network.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chatrooms")
public class ChatRoomController {

    @Autowired
    ChatRoomService chatRoomService;
    @Autowired
    MessageService messageService;

    //Creating a message in the chatroom
    @PostMapping (value = "/{id}/messages")
    public ResponseEntity<Message> addNewMessage(@PathVariable Long id, @RequestBody MessageDTO messageDTO){
        try {
            Message message = messageService.saveMessage(id, messageDTO);
            return new ResponseEntity<>(message, HttpStatus.CREATED);
        } catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
    @GetMapping
    public  ResponseEntity<List<ChatRoom>> getAllChatrooms(){
        List<ChatRoom> chatRooms = chatRoomService.getAllChatrooms();
        return new ResponseEntity<>(chatRooms, HttpStatus.OK);
    }

    //display a chatroom by id
    @GetMapping(value = "/{id}")
    public ResponseEntity<ChatRoom> getChatRoomById(@PathVariable Long id){
        Optional<ChatRoom> chatRoom = chatRoomService.findChatRoomById(id);

        if (chatRoom.isPresent()){
            return new ResponseEntity<>(chatRoom.get(), HttpStatus.OK);
        } return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{id}/messages")
    public ResponseEntity <List<MessageReplyDTO>> getAllMessagesInOrder(
            @PathVariable long id,
            @RequestParam Optional<String> keyword,
            @RequestBody MessageDTO messageDTO){
        List<MessageReplyDTO> orderedMessages = chatRoomService.getOrderedMessages(id, messageDTO);
        if (keyword.isPresent()){
            List<MessageReplyDTO> filteredMessages= chatRoomService.filterMessages(orderedMessages, keyword.get());
        return new ResponseEntity<>(filteredMessages, filteredMessages==null?HttpStatus.NOT_FOUND:HttpStatus.OK);
        }

        return new ResponseEntity<>(orderedMessages, orderedMessages==null?HttpStatus.FORBIDDEN:HttpStatus.OK);
    }

    //Display all user in a selected chatroom
    @GetMapping(value = "/{id}/users")
    public ResponseEntity<List<UserDTO>> getAllUsersInSpecificChatroom(@PathVariable long id){
        List<UserDTO> users = chatRoomService.allUsersInChatroom(id);
        return new ResponseEntity<>(users, users==null?HttpStatus.BAD_REQUEST:HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ChatRoomDTO> createChatRoom(@RequestBody ChatRoomInputDTO chatRoomInputDTO){
        ChatRoomDTO createdChatRoom = chatRoomService.saveChatRoom(chatRoomInputDTO);
        if (createdChatRoom != null) {
            return new ResponseEntity<>(createdChatRoom, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}//end