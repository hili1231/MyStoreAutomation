import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../pageObjects/LoginPage";

var loginPage = new LoginPage();

Given('I open the home page', () => {
	var url = "http://automationpractice.com/";
  cy.visit(url)
});

Given('I open the home page {string}', (url) => {
	url = "http://" + url + ".com/";
	cy.visit(url)
  });

When('I login with email {string} and password {string}', (email, password) => {
	loginPage.clickLoginButton()
	loginPage.fillEmail(email)
	loginPage.fillPassword(password)
	loginPage.clickSubmit()
  });

  Then('user should be logged in successfully', () => {
	loginPage.logoutButtonIsVisible()
  });

  Then('error message should be visible', () => {
	loginPage.errorMessageIsVisible()
  });