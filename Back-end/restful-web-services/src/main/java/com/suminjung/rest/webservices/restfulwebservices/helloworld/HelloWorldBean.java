package com.suminjung.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

	public class print {

	}

	private String message;


	public HelloWorldBean(String message) {
		this.message = message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	
	public void print() {
		System.out.println("I am here");
	}

}
