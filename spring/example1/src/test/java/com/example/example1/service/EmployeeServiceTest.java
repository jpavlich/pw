
package com.example.example1.service;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.example1.model.Employee;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

// (1) https://spring.io/guides/gs/testing-web/#_test_the_application
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
// (2)
// https://stackoverflow.com/questions/34617152/how-to-re-create-database-before-each-test-in-spring
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class EmployeeServiceTest {

	@Autowired
	private MockMvc mvc;

	// (3) https://www.baeldung.com/jackson-object-mapper-tutorial
	@Autowired
	private ObjectMapper objectMapper;

	@Test
	public void deleteEmployee() throws Exception {
		mvc.perform(delete("/employees/-1")).andExpect(status().isOk());
	}

	@Test
	public void findEmployee() throws Exception {
		mvc.perform(get("/employees/-1")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(content().json("{'id': -1, 'name': 'employee1', 'age': 40, 'salary': 1000 }"));
	}

	@Test
	public void findEmployee2() throws Exception {
		String result = mvc.perform(get("/employees/-1")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)).andReturn().getResponse()
				.getContentAsString();

		// (4) https://www.baeldung.com/jackson-object-mapper-tutorial
		Employee retrievedEmployee = objectMapper.readValue(result, Employee.class);

		// (5) https://www.baeldung.com/junit-assertions
		assertEquals("employee1", retrievedEmployee.getName());
		assertEquals(40, retrievedEmployee.getAge().intValue());
		assertEquals(1000, retrievedEmployee.getSalary().intValue());
	}

	@Test
	public void findNonExistentEmployee() throws Exception {
		mvc.perform(get("/employees/1234")).andExpect(status().isNotFound());
	}

	@Test
	public void deleteNonExistentEmployee() throws Exception {
		mvc.perform(delete("/employees/1234")).andExpect(status().isNotFound());
	}

}
