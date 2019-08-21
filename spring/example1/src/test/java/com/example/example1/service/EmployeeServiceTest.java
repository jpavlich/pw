
package com.example.example1.service;

import com.example.example1.model.Employee;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

/**
 * EmployeeServiceTest
 * https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-testing.html
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class EmployeeServiceTest {
    @Autowired
    private MockMvc mvc;

    Employee employee;
    Employee employee2;

    @Before
    public void prepareEmployee() {
        employee = new Employee();
        employee.setId(-1l);
        employee.setName("employee1");
        employee.setAge(10);
        employee.setSalary(1000);
    }

    @Before
    public void prepareEmployee2() {
        employee = new Employee();
        employee.setId(-1l);
        employee.setName("employee2");
        employee.setAge(10);
        employee.setSalary(1000);
    }

    @Test
    public void getEmployeeById() {
        mvc.perform(get("/employees/-1")).andExpect(status().isOk())
        .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(content().string("{
  "id": -1,
  "name": "employee1",
  "age": 10,
  "salary": 1000
}"));

    }

    @Test
    public void getWrongEmployeeById() {
    }
}