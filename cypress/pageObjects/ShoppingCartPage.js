export class ShoppingCartPage {


	fillSearchField(dress) {
		const field = cy.get('#search_query_top');
		field.clear();
		field.type(dress);
		return this;
	}

	clickAddToCartButton(item) {
		cy.get('button[id="category"]').click();
	}

	clickSearchButton() {
		cy.get('#searchbox > .btn').click();
	}

	clickProceedToCheckoutButton() {
		cy.get('[id=SubmitLogin]').click();
	}

	itemAmountVisibleInCart(items) {
		itemAmountInCart = cy.get(`.logout`.amount);
		itemAmountInCart = items;
	}

	updateDressNameToAmountInCart(dressName, amount) {
		//get dress which requires updating
		dressLocator = cy.get('li').eq(1).should('contain', dressName)
		//get amount for item set in cart
		var itemAmountInCart = cy.get(`.logout`.amount);

		while(itemAmountInCart != amount)
		{
			if (itemAmountInCart < amount)
			{
			cy.get('"DressLocator".icon-plus').click();
			itemAmountInCart = cy.get(`.logout`.amount);
			//check if amount updated otherwise fail test
			}
			else
			{
			cy.get('"DressLocator".icon-minus').click();
			itemAmountInCart = cy.get(`.logout`.amount);
			//check if amount updated otherwise fail test
			}
		}
	}

	itemNumberUpdatedWithAmountVisibleInCart(number, amount) {
		cy.get(`#center_column > div.alert.alert-danger`, {timeout:6000}).should('be.visible');
	}

	clickRemoveItemNumberFromCartButton(itemNumber) {
		cy.get('[id=SubmitLogin]').click();
	}

	itemAmountIsVisibleInCart(number) {
		cy.get(`#center_column > div.alert.alert-danger`, {timeout:6000}).should('be.visible');
	}

	clickPaymentButton() {
		cy.get('[id=SubmitLogin]').click();
	}

	paymentPageOpens() {
		cy.get(`.logout`, {timeout:6000}).should('be.visible');
	}

	itemAmountVisibleInPage(amount) {
		var itemAmount = cy.get(`.logout`.amount);
		itemAmount = amount;
	}
}