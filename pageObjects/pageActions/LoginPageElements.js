// Import the element locators for the Login page from the JSON file
import loginElementLocators from '../pageElements/LoignPageElements.json';

// Define a class for handling interactions with the Login page
class LoginPageElements {
    // Set the value of the username input field
    setUsername(username) {
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(username);
    }

    // Set the value of the password input field
    setPassword(password) {
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(password);
    }

    // Click the "Login" button
    clickLoginButton() {
        cy.get(loginElementLocators.LoginPageLocators.login_button).click();
    }

    // Navigate to the Login page using the provided base URL
    navigateToLoginPage(baseUrl) {
        cy.visit(baseUrl);
    }

    // Verify the header text on the successful login page
    verifyLoginHeaderText(textMessage) {
        cy.get(loginElementLocators.LoginPageLocators.success_login_page_text).should("have.text", textMessage);
    }

    // Verify the error message text on the login page
    verifyLoginErrorText(textMessage) {
        cy.get(loginElementLocators.LoginPageLocators.error_login_page_text).should("have.text", textMessage);
    }
}

// Export the LoginPageElements class to make it accessible in other parts of the code
export default LoginPageElements;