package co.edu.javeriana.myapp.server.myappserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;

@SpringBootApplication(exclude = RepositoryRestMvcAutoConfiguration.class)
public class MyappServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyappServerApplication.class, args);
	}
}
