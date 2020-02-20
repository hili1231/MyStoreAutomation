export class LoginPage {

	logoutButtonIsVisible() {
		cy.get(`.logout`, {timeout:6000}).should('be.visible');
	}

	errorMessageIsVisible() {
		cy.get(`.alert alert-danger`, {timeout:6000}).should('be.visible');
	}

	getEmailError() {
		return cy.get(`[data-testid=SignInEmailError]`);
	}

	getPasswordError() {
		return cy.get(`[data-testid=SignInPasswordError]`);
	}

	fillEmail(email) {
		const field = cy.get('[id=email]');
		field.clear();
		field.type(email);
		return this;
	}

	fillPassword(password) {
		const field = cy.get('[id=passwd]');
		field.clear();
		field.type(password);
		return this;
	}

	clickSubmit() {
		cy.get('[id=SubmitLogin]').click()
	}

	clickLoginButton() {
		cy.get('.login').click()
	}
}
