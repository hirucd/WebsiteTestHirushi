import { CheckboxesPage, LoginPage, DropdownPage,  KeyPressPage , AlertsPage } from '../support/locators';

describe('Automate selected elements on The Internet', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check Checkbox functionality', () => {
    cy.contains('Checkboxes').click();
    cy.get(CheckboxesPage.firstCheckbox).check().should('be.checked');
    cy.get(CheckboxesPage.lastCheckbox).uncheck().should('not.be.checked');
  });

  it('Login form with invalid credentials', () => {
    cy.contains('Form Authentication').click();
    cy.get(LoginPage.usernameInput).type('wronguser');
    cy.get(LoginPage.passwordInput).type('wrongpass');
    cy.get(LoginPage.submitButton).click();
    cy.get(LoginPage.flashMessage).should('contain.text', 'Your username is invalid!');
  });

  it('Dropdown selection', () => {
    cy.contains('Dropdown').click();
    cy.get(DropdownPage.dropdown).select('Option 2').should('have.value', '2');
  });


it('Key Presses validation', () => {
    cy.contains('Key Presses').click();
    cy.get(KeyPressPage.inputField).type('A');
    cy.get(KeyPressPage.resultText).should('contain.text', 'You entered: A');
  });

  it('JavaScript Alerts', () => {
    cy.contains('JavaScript Alerts').click();
    cy.get(AlertsPage.jsAlertButton).click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('I am a JS Alert');
    });
  });
});