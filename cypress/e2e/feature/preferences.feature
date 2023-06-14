Feature: Preferences Test Suite
  This feature file will validate Preferences functionality

  Scenario Outline: Successful login
    It will validate the login functionality for each set of values defined in the examples block
    Given User is on the login home page
    When user types email as "<email>"
    And user types password as "<password>"
    And clicks on the Next button
    And user types OTP as "<verificationcode>"
    Then user should be logged in successfully

    Examples:
      | email             | password   | verificationcode |
      | qa22@yopmail.com  | Admin@123  | 123456           |

  Scenario Outline: Preferences
    It will validate the preferences functionality
    When user clicks on the request dropdown
    And clicks on the preferences tab
    Then user should be on the preferences page
    And the Save button should be disabled
    When user clicks on the default account dropdown
    And selects any merchant user
    And clicks on the save button
    Then the message "Preferences updated successfully" is displayed
    And user clicks on the request dropdown again
    And clicks on the Sign out button

