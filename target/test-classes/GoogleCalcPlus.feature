Feature: Check addition in Google calculatorcontent
In order to verify that google calculator work correctly
As a user of google
I should be able to get correct addition result

  Scenario: Addition_1
    Given I open google
    When I enter "2+2=" in search textbox
    Then I should get result as "4"

  Scenario: Addition_2
    Given I open google
    When I enter "2+0=" in search textbox
    Then I should get result as "2"

  Scenario: Addition_3
    Given I open google
    When I enter "0+0=" in search textbox
    Then I should get result as "0"

  Scenario: Addition_4
    Given I open google
    When I enter "-1+7=" in search textbox
    Then I should get result as "6"

  Scenario: Addition_5
    Given PENDING: I open google
    When I enter "-1+7=" in search textbox
    Then I should get result as "6"
