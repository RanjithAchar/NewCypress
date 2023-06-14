Feature: Merchant Accounts Test Suite
    This feature file will validate Merchant Accounts of user details functionality

    Scenario Outline: User enter an valid email and password then verifying the behaviour of the fields and next button should be enabled
        Given User is on the Login home page
        When User types email as "<email>"
        And User types password as "<password>"
        And Clicks on the Next button
        And User types OTP as "<verificationcode>"
        Then User should be logged in successfully

        Examples:
            | email             | password    | verificationcode |
            | qa105@yopmail.com | Admin@12345 | 123456           |

    Scenario Outline: User navigate to the Merchant dashboard and click on the merchant accounts then verifying the entire screen
        It will validate the Merchant Accounts functionality
        When user clicks on the Request dropdown
        And clicks on the Merchant Accounts tab
        Then user should be on the Merchant Accounts page
        And the Merchant Setting button should be disabled for the under review, cancelled, unverified, terminated, declined account
        When user clicks on the Merchant Settings Button for the active account
        Then the company Information screen should be displayed
        When User click on the Go to Merchant Button
        Then Token Account screen should be displayed for the Active Account
        And cancelled screen should be displayed for the cancel account
        And Merchant Application tracker screen should be displayed for the unverified Account
        And Terminated screen should be displayed for the terminated account
        And Declined screen should be displayed for the Declined account
        And Under Review screen should be displayed for the under review account