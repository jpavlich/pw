package com.example.example1.service;

import com.example.example1.model.Company;
import com.example.example1.model.CompanyRepository;
import com.example.example1.model.Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
class CompanyService {

    @Autowired
    private CompanyRepository repository;

    @GetMapping("/companies")
    public Iterable<Company> findAllCompanies() {
        return repository.findAll();
    }

    @GetMapping("/companies/{id}/employees")
    public Iterable<Employee> findAllEmployees(@PathVariable("id") Long companyId) {
        // What happens if the company does not exist in the DB?
        return repository.findById(companyId).get().getEmployees();
    }

}