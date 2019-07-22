package com.example.example1.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Employee
 */
@Entity
public class Employee {
    @Id
    @GeneratedValue
    Long id;

    String name;
    Integer age;
    Integer salary;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @return the age
     */
    public Integer getAge() {
        return age;
    }

    /**
     * @return the salary
     */
    public Integer getSalary() {
        return salary;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @param age the age to set
     */
    public void setAge(Integer age) {
        this.age = age;
    }

    /**
     * @param salary the salary to set
     */
    public void setSalary(Integer salary) {
        this.salary = salary;
    }

}