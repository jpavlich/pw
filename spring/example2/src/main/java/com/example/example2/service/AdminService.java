package com.example.example2.service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/admin")
class AdminService {


    @GetMapping("/test")
    public String test() {
        return "admin OK";
    }

}