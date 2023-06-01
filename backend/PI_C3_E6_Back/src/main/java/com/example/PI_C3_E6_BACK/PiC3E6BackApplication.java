package com.example.PI_C3_E6_BACK;

import com.example.PI_C3_E6_BACK.OpenApi.OpenApi;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import java.time.Clock;

@SpringBootApplication
@Import(OpenApi.class)
public class PiC3E6BackApplication {

	public static void main(String[] args) {

		SpringApplication.run(PiC3E6BackApplication.class, args);
	}

	@Bean
	public Clock clock(){
		return Clock.systemDefaultZone();
	}
}
