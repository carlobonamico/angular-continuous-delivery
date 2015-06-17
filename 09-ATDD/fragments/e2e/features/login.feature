@security
Feature: Authentication

  Scenario: Logging-in
    Given that the user opens the Login page
    When the user logs in with valid credentials
    Then the application shows the menu view
    And the url contains menu

  Scenario: Wrong credentials
    Given that the user opens the Login page
    When the user logs in with wrong credentials
    Then the login page displays an error message
