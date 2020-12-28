package stepDefintions;


import java.util.List;
import java.util.Map;

import javax.sound.midi.Soundbank;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class stepDefinition {
	
	
    @Given("^User is on loginpage$")
    public void user_is_on_loginpage() throws Throwable {
    	
    	System.out.println("User is on loginpage");
       
    }

    @When("^user enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void user_enter_login_credentials(String username ,String password) throws Throwable {
    	System.out.println("user enter login credentials are username "+username+" and passowrd is "+password);
       
    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button() throws Throwable {
    	System.out.println("user clicks on login button");
       
    }

    @And("^homepage is displayed$")
    public void homepage_is_displayed() throws Throwable {
    	System.out.println("homepage is displayed");
       
    }

    @Then("user clicks on button {int} times")
    public void user_clicks_on_button_times(Integer int1) {
    	System.out.println("Button is clicked "+int1+" times.");
        
    }
    
    @And("^homepage is not displayed$")
    public void homepage_is_not_displayed() throws Throwable {
    	System.out.println("homepage is not displayed");
    }
    
    @And("^user verify \"([^\"]*)\" message$")
    public void user_verify_something_message(String msg) {
    	
    	System.out.println("Message displayed is "+ msg);
    
    }
    
    @Then("^Enter the (.+)$")
    public void enter_the(String customername) {
        System.out.println("The value is"+customername);
    }

    
    @Then("Enter customer information in page")
    public void enterCustomerInformaton(DataTable customerData) {
        List<List<String>> custobj= customerData.asLists();
        String customername = custobj.get(0).get(0);
        String customeraddess = custobj.get(0).get(1);
        String customerphone = custobj.get(0).get(2);
        System.out.println("The details are "+ customername + " "+ customeraddess+" "+ customerphone);
    }
    
    @Then("Enter New customer information in page")
    public void enterNewCustomerInformaton(DataTable customerData) {
        List<String> custobj= customerData.asList();
        String customername = custobj.get(0);
        String customeraddess = custobj.get(1);
        String customerphone = custobj.get(2);
        System.out.println("The details are "+ customername + " "+ customeraddess+" "+ customerphone);
    }
    
    @Then("Enter New heading customer information in page")
    public void enterNewHeadingCustomerInformaton(DataTable customerData) {
        List<Map<String,String>> custobj= customerData.asMaps();
        String customername = custobj.get(0).get("Customer Name");
        String customeraddess = custobj.get(0).get("Customer Address");
        String customerphone = custobj.get(0).get("Customer Phone");
        System.out.println("The details are "+ customername + " "+ customeraddess+" "+ customerphone);
    }


}
