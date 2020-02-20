import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { ShoppingCartPage } from "../pageObjects/ShoppingCartPage";

var shoppingCartPage = new ShoppingCartPage();

When('I search for dress {string}', (dress) => {
	shoppingCartPage.enterSearch(dress)
  });

When('I add item to cart', () => {
	shoppingCartPage.clickAddToCart()
  });

When('I click proceed to checkout', () => {
	shoppingCartPage.clickProceedToCheckout()
});

Then('item amount {int} should display in cart', (items) => {
	shoppingCartPage.itemAmountVisibleInCart(items)
});

When('I change the quantity of cart item number {int} to amount {int}', (number, amount) => {
	shoppingCartPage.updateItemNumberToAmountInCart(number, amount)
});

Then('amount {int} should display for cart item number {int}', (amount, itemNumber) => {
	shoppingCartPage.itemNumberUpdatedWithAmountVisibleInCart(amount, itemNumber)
});

When('I remove cart item number {int} from cart', (itemNumber) => {
	shoppingCartPage.clickRemoveItemNumberFromCart(itemNumber)
});

Then('item amount {int} should display in cart', (number) => {
	shoppingCartPage.itemAmountIsVisibleInCart(number)
});

When('I proceed to payments page', () => {
	shoppingCartPage.clickPaymentButton()
});

Then('payment page should open successfully', () => {
	shoppingCartPage.paymentPageOpens()
});

Then('items amount {int} should be displayed in payment cart', (amount) => {
	shoppingCartPage.itemAmountVisibleInPage(amount)
});
