package com.bnta.the_bright_network;

import com.bnta.the_bright_network.models.Subscription;
import com.bnta.the_bright_network.repositories.SubscriptionRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class TheBrightNetworkApplicationTests {

    @Autowired
	SubscriptionRepository subscriptionRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canGetByChatRoomIdFromSubscriptions(){
		List<Subscription> subscriptions = subscriptionRepository.findByChatRoomId((long) 1);
		assertThat(subscriptions.size()).isEqualTo(4);
	}
	@Test
	public void canGetByChatRoomIdAndUserIdFromSubscriptions(){
		List<Subscription> subscriptions = subscriptionRepository.findByChatRoomIdAndUserId((long) 1, (long) 1);
		assertThat(subscriptions.size()).isEqualTo(1);
	}

}
