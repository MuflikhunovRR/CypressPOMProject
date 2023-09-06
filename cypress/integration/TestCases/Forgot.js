/// <reference types="Cypress" />

// Import necessary Page Object classes for the tests
import ForgotPageElements from "../../../pageObjects/pageActions/ForgotPageElements";
import LoginPageElements from "../../../pageObjects/pageActions/LoginPageElements.js";

// Create instances of the Page Object classes
const forgotPage = new ForgotPageElements(); // Create an instance for the Forgot Page
const loginPage = new LoginPageElements(); // Create an instance for the Login Page

// Define the base URL for the application
const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// Test suite for Forgot Password functionality
describe('Page Object Model Tutorial', () => {
    it('Forgot Page', () => {
        // Visit the base URL
        cy.visit(baseUrl);
       
        // Perform actions on the Forgot Password page
        forgotPage.clickForgotPasswordButton(); // Click the "Forgot Password" button
        forgotPage.verifyHeaderText('Reset Password'); // Verify the expected header text
        forgotPage.enterUsername('Admin'); // Enter a username
        forgotPage.clickLoginButton(); // Click the login button on the Forgot Password page
        forgotPage.verifyHeaderText('Reset Password link sent successfully'); // Verify success message
        
        // Navigate back to the Login Page using the Page Object
        loginPage.navigateToLoginPage(baseUrl);
    });

    it('Empty Fields for Forgot Password', () => {
        // Visit the base URL
        cy.visit(baseUrl);

        // Perform actions on the Forgot Password page
        forgotPage.clickForgotPasswordButton(); // Click the "Forgot Password" button
        forgotPage.clickLoginButton(); // Submit the form without entering any information
        forgotPage.verifyEmptyMessageText('Required'); // Verify the expected error message
        
    });
});