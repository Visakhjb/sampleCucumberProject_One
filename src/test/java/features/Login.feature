@Test
Feature: Validate Application Login functionality

@Smoke
Scenario: Validate successfull login
Given User is on loginpage
When user enter username as "test" and password as "testpassword"
Then user clicks on login button
And homepage is displayed
And user clicks on button 3 times
And user verify "pass" message

@Regression
Scenario: Validate successfull login
Given User is on loginpage
When user enter username as "testinvalid" and password as "testpassword"
Then user clicks on login button
And homepage is not displayed
And user clicks on button 3 times
And user verify "fail" message

@RegressionTest
Scenario: Validate successfull login
Given User is on loginpage
When user enter username as "testinvalid" and password as "testpassword"
Then user clicks on login button
And homepage is not displayed
And user clicks on button 3 times
And user verify "fail" message
