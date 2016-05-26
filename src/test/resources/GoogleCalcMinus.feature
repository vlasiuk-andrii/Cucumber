Feature: Check substration in Google calculatorcontent
In order to verify that google calculator work correctly
As a user of google
I should be able to get correct addition result

  Scenario: Minus_1
    Given I open google
    When I enter "2-2=" in search textbox
    Then I should get result as "0"

  Scenario: Minus_2
    Given I open google
    When I enter "1-2=" in search textbox
    Then I should get result as "-11"

