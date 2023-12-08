package com.bnta.the_bright_network.services;

import com.bnta.the_bright_network.models.*;
import com.bnta.the_bright_network.repositories.MessageRepository;
import com.bnta.the_bright_network.repositories.ReactionRepository;
import com.bnta.the_bright_network.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReactionService {
    @Autowired
    ReactionRepository reactionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    MessageRepository messageRepository;

    public ReactionOutputDTO saveReaction(ReactionDTO reactionDTO){
        Optional<User> user = userRepository.findById(reactionDTO.getUserId());
        Optional<Message> message = messageRepository.findById(reactionDTO.getMessageId());

        if (user.isEmpty()|| message.isEmpty()){
            return null;
        }

        Reaction reaction = new Reaction(reactionDTO.getReactionContent(), user.get(),message.get());
        reactionRepository.save(reaction);

        ReactionOutputDTO reactionOutputDTO = new ReactionOutputDTO(
                reaction.getId(),
                reaction.getMessage().getId(),
                reaction.getUser().getId(),
                reaction.getReactionContent());

        return reactionOutputDTO;
    }
}
