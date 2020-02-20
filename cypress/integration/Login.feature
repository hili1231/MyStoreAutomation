Feature: Login To Account

	@smoke
	Scenario: Successful Login
		Given I open the home page 'automationpractice'
		When I login with email 'chrishili@yopmail.com' and password 'Tester123'
		Then user should be logged in successfully

	@smoke
	Scenario: Unsuccessful Login
		Given I open the home page 'automationpractice'
		When I login with email 'chrishili@yopmail.com' and password 'Tester12354'
		Then error message should be visible
