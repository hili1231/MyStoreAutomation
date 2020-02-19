Feature: Login To Account And Add Item To Cart

	@bsmoke
	Scenario: Successful Checkout Logged In
		Given I open the home page 'automationpractice'
		When I login with email 'chrishili@yopmail.com' and password 'Tester123'
		And I search for dress 'black dress'
		And I add item to cart
		And I search for dress 'blue dress'
		And I add item to cart
		And I click proceed to checkout
		Then item amount '2' should display in cart
		And I change the quantity of cart item number '2' to amount '2'
		Then the amount '1' should display for cart item number '2'
		And I remove cart item number '1' from cart
		Then item amount '1' should display in cart
		And I proceed to payments page
		Then payment page should open successfully
		And items in payment cart should display
		| items       | amount |
		| black dress | 2      |
