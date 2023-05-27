package com.example.PI_C3_E6_BACK;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.Clock;

@SpringBootApplication
public class PiC3E6BackApplication {

	public static void main(String[] args) {

		SpringApplication.run(PiC3E6BackApplication.class, args);
	}

	@Bean
	public Clock clock(){
		return Clock.systemDefaultZone();
	}
}
