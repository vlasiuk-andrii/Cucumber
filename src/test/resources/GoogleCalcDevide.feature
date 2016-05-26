Feature: Check division in Google calculatorcontent
In order to verify that google calculator work correctly
As a user of google
I should be able to get correct addition result

  Scenario: Devide_1
    Given I open google
    When I enter "2/3=" in search textbox
    Then I should get result as "0.6666"

  Scenario: Devide_2
    Given I open google
    When I enter "3/3=" in search textbox
    Then I should get result as "1"

  Scenario: Devide_3
    Given I open google
    When I enter "3/1=" in search textbox
    Then I should get result as "3"

  Scenario: Devide_4
    Given I open google
    When I enter "3/1=" in search textbox
    And I smile
    Then I should get result as "3"