package stepDefintions;

import io.cucumber.java.After;
import io.cucumber.java.Before;


public class Hooks {
	@Before
	public void beforeStart() {
		System.out.println("------BEFORE HOOK START-------");
	}
	
	@After
	public void afterFinish() {
		System.out.println("------AFTER HOOK FINISH-------");
	}
	
	@Before("@mobiletest")
	public void beforeMobileHookStart() {
		System.out.println("------BEFORE MOBILE TEST TAG HOOK START-------");
	}
	
	@After("@mobiletest")
	public void afterMobileHookFinish() {
		System.out.println("------AFTER MOBILE TEST TAG HOOK FINISHED-------");
	}
	
	
	@Before("@webtest")
	public void beforeHookStart() {
		System.out.println("------BEFORE WEB TEST TAG HOOK START-------");
	}
	
	@After("@webtest")
	public void afterHookFinish() {
		System.out.println("------AFTER WEB TEST TAG HOOK FINISHED-------");
	}

}
