package com.example.example2.service;

import java.util.Optional;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Employee;
import com.example.example2.model.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * EmployeeService
 */
@RestController
public class EmployeeService {

    @Autowired
    EmployeeRepository repository;

    @GetMapping("/employees")
    Iterable<Employee> getEmployees() {
        return repository.findAll();
    }

    @GetMapping("/employees/{id}")
    Employee findEmployee(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Employee not found"));
    }

    @PostMapping("/employees")
    Employee createEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    @PutMapping("/employees/{id}")
    Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employee.setId(id);
        return repository.save(employee);
    }

    @DeleteMapping("/employees/{id}")
    void deleteEmployee(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}