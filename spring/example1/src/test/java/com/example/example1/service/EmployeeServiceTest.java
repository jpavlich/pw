package com.example.example1.service;

import com.example.example1.model.Company;
import com.example.example1.model.Employee;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class EmployeeServiceTest {

	@Autowired
	private MockMvc mvc;

	// https://www.baeldung.com/jackson-object-mapper-tutorial
	@Autowired
	private ObjectMapper objectMapper;

	@Test
	public void findEmployee() throws Exception {
		mvc.perform(get("/employees/-1")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(content().json("{'id': -1, 'name': 'employee2', 'age': 10, 'salary': 1000 }"));
	}

	@Test
	public void findEmployee2() throws Exception {
		String result = mvc.perform(get("/employees/-1")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)).andReturn().getResponse()
				.getContentAsString();
		Employee retrievedEmployee = objectMapper.readValue(result, Employee.class);
		System.out.println(retrievedEmployee.getName());
	}

	@Test
	public void findWrongEmployee() throws Exception {
		mvc.perform(get("/employees/1234")).andExpect(status().isNotFound());
	}

}
