package com.bnta.the_bright_network.repositories;

import com.bnta.the_bright_network.models.Reaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReactionRepository extends JpaRepository<Reaction,Long> {
}
