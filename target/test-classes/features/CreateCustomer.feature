@Test
Feature: Validate Application Login functionality

Background: Background Steps
Given User is on loginpage
When user enter username as "test" and password as "testpassword"
Then user clicks on login button
And homepage is displayed
And user clicks on button 3 times
And user verify "pass" message

@webtest
Scenario Outline: Create customer data
Then Enter the <Customer Name>
Then Enter the <Customer Address>
Then Enter the <Customer Phone>

Examples:
|Customer Name|Customer Address|Customer Phone|
|TestCustomer1|TestAddress1|TestPhone1|
|TestCustomer2|TestAddress2|TestPhone2|
|TestCustomer3|TestAddress3|TestPhone3|
|TestCustomer4|TestAddress4|TestPhone4|

@mobiletest
Scenario: Create customer data
Then Enter customer information in page
|TestCustomer|TestAddress|TestPhone|

@Regression
@Sanity
Scenario: Create New customer data
Then Enter New customer information in page
|TestCustomer|TestAddress|TestPhone|

@Regression
@Sanity
Scenario: Create New customer data based on heading
Then Enter New heading customer information in page
|Customer Name|Customer Address|Customer Phone|
|TestCustomer1|TestCustomer1|TestCustomer1|

@Sanity
Scenario: Create New customer data based on heading
Then Enter New heading customer information in page
|Customer Name|Customer Address|Customer Phone|
|TestCustomer2|TestCustomer2|TestCustomer2|