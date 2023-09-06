/// <reference types="Cypress" />

// Import the Page Object class for the login page
import LoginPageElements from "../../../pageObjects/pageActions/LoginPageElements";

// Create an instance of the Page Object class for the login page
const loginPage = new LoginPageElements();

// Define the base URL for the application
const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// Test suite for login functionality
describe('Page Object Model Tutorial', () => {
    // Test case: Login with valid credentials
    it('Login with valid credentials', () => {
        // Visit the login page
        cy.visit(baseUrl);

        // Perform login actions
        loginPage.setUsername('Admin');
        loginPage.setPassword('admin123');
        loginPage.clickLoginButton();

        // Verify successful login by checking for the "Dashboard" header
        loginPage.verifyLoginHeaderText('Dashboard');
    });

    // Test case: Login with invalid credentials
    it('Login with invalid credentials', () => {
        // Visit the login page
        cy.visit(baseUrl);

        // Perform login actions with invalid credentials
        loginPage.setUsername('InvalidUser');
        loginPage.setPassword('InvalidPassword');
        loginPage.clickLoginButton();

        // Verify that an error message is displayed for invalid credentials
        loginPage.verifyLoginErrorText('Invalid credentials');
    });
});