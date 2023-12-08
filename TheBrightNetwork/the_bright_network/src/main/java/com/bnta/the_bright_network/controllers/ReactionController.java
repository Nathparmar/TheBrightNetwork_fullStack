package com.bnta.the_bright_network.controllers;

import com.bnta.the_bright_network.models.Reaction;
import com.bnta.the_bright_network.models.ReactionDTO;
import com.bnta.the_bright_network.models.ReactionOutputDTO;
import com.bnta.the_bright_network.services.ReactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reactions")
public class ReactionController {

    @Autowired
    ReactionService reactionService;

    @PostMapping
    public ResponseEntity<ReactionOutputDTO> addAReaction(@RequestBody ReactionDTO reactionDTO){
        return new ResponseEntity<>(reactionService.saveReaction(reactionDTO), HttpStatus.OK);
    }
}
