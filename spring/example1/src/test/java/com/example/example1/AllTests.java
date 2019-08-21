package com.example.example1;

import com.example.example1.service.EmployeeServiceTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

/**
 * AllTests
 */
@RunWith(Suite.class)
@SuiteClasses({ EmployeeServiceTest.class })
public class AllTests {

}