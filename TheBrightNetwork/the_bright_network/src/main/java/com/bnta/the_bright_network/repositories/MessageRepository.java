package com.bnta.the_bright_network.repositories;

import com.bnta.the_bright_network.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

//    SELECT * FROM messages WHERE message_content LIKE "{keyword}"
//    List<Message> findByMessageContentContains(String keyword);
    List<Message> findByMessageContentContainingIgnoreCase(String keyword);

//    List<Message> findBySubscriptionIdIsAndMessageContentContains(Long subscriberId, String keyword);
}
