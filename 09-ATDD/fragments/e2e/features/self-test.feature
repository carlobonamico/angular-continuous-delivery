Feature: gulp-cucumber
  comment string


  Scenario: creating a new scenario
    When the features files are piped to gulp-cucumber
    Then Cucumber should create a template

  Scenario: Using gulp-cucumber
    When the features files are piped to gulp-cucumber
    Then Cucumber should run the features

  Scenario: Using variables
    comment text

    When I read a param "value1"
    Then Cucumber should get it in the steps

  Scenario: Using tables
    When I load an entity from a table
      | product | price |
      | coffee | 1 |
      | donut  | 2 |
    Then Cucumber should get all products and prices

  Scenario: Using plain text
    When I load an entity from a text
      """
        multi line
        text
      """
    Then Cucumber should get all text
      """
        multi line
        text
      """

  Scenario Outline: eating
    Given there are <start> cucumbers
    When I eat <eat> cucumbers
    Then I should have <left> cucumbers

    Examples:
      | start | eat | left |
      |  12   |  5  |  7   |
      |  20   |  5  |  15  |
