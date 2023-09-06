// Import the element locators for the "Forgot Password" page from the JSON file
import forgotElementLocators from '../../../pageElements/ForgotPasswordElements.json';

// Define a class for handling interactions with the "Forgot Password" page
class ForgotPageElements {
    // Click the "Forgot Password" button
    clickForgotPasswordButton() {
        cy.get(forgotElementLocators.ForgotPageLocators.forgot_password_button).click();
    }

    // Verify the header text on the page
    verifyHeaderText(textMessage) {
        cy.get(forgotElementLocators.ForgotPageLocators.reset_password_text).should("have.text", textMessage);
    }

    // Verify an empty message text on the page
    verifyEmptyMessageText(textMessage) {
        cy.get(forgotElementLocators.ForgotPageLocators.empty_reset_text).should("have.text", textMessage);
    }

    // Enter a username into the corresponding input field
    enterUsername(username) {
        cy.get(forgotElementLocators.ForgotPageLocators.username_text_forgot).type(username);
    }

    // Click the "Reset Password" button
    clickLoginButton() {
        cy.get(forgotElementLocators.ForgotPageLocators.reset_password_button).click();
    }
}

// Export the ForgotPageElements class to make it accessible in other parts of the code
export default ForgotPageElements;