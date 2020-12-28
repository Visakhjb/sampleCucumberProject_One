$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/CreateCustomer.feature");
formatter.feature({
  "name": "Validate Application Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@webtest"
    }
  ]
});
formatter.step({
  "name": "Enter the \u003cCustomer Name\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the \u003cCustomer Address\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the \u003cCustomer Phone\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Customer Name",
        "Customer Address",
        "Customer Phone"
      ]
    },
    {
      "cells": [
        "TestCustomer1",
        "TestAddress1",
        "TestPhone1"
      ]
    },
    {
      "cells": [
        "TestCustomer2",
        "TestAddress2",
        "TestPhone2"
      ]
    },
    {
      "cells": [
        "TestCustomer3",
        "TestAddress3",
        "TestPhone3"
      ]
    },
    {
      "cells": [
        "TestCustomer4",
        "TestAddress4",
        "TestPhone4"
      ]
    }
  ]
});
formatter.background({
  "name": "Background Steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"test\" and password as \"testpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_enter_login_credentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on button 3 times",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_button_times(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"pass\" message",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_verify_something_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    },
    {
      "name": "@webtest"
    }
  ]
});
formatter.step({
  "name": "Enter the TestCustomer1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the TestAddress1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the TestPhone1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Background Steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"test\" and password as \"testpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_enter_login_credentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on button 3 times",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_button_times(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"pass\" message",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_verify_something_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    },
    {
      "name": "@webtest"
    }
  ]
});
formatter.step({
  "name": "Enter the TestCustomer2",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the TestAddress2",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the TestPhone2",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Background Steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"test\" and password as \"testpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_enter_login_credentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on button 3 times",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_button_times(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"pass\" message",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_verify_something_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    },
    {
      "name": "@webtest"
    }
  ]
});
formatter.step({
  "name": "Enter the TestCustomer3",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the TestAddress3",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the TestPhone3",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Background Steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"test\" and password as \"testpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_enter_login_credentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on button 3 times",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_button_times(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"pass\" message",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_verify_something_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    },
    {
      "name": "@webtest"
    }
  ]
});
formatter.step({
  "name": "Enter the TestCustomer4",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the TestAddress4",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the TestPhone4",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Background Steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"test\" and password as \"testpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_enter_login_credentials(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on button 3 times",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_clicks_on_button_times(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"pass\" message",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.user_verify_something_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create customer data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    },
    {
      "name": "@mobiletest"
    }
  ]
});
formatter.step({
  "name": "Enter customer information in page",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefintions.stepDefinition.enterCustomerInformaton(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});