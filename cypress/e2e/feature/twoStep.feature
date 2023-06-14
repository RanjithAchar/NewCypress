Feature: 2 step authentication Test Suite
    This feature file will validate 2 step authentication of user details functionality

    Scenario Outline: User enter an valid email and password then verifying the behaviour of the fields and next button should be enabled
        Given User is on the Login screen
        When User enters merchant Email as "<email>"
        And User enters merchant Password as "<password>"
        And User Clicks on the Next button
        And User enters verification code as "<verificationcode>"

        Examples:
            | email             | password    | verificationcode |
            | qa105@yopmail.com | Admin@12345 | 123456           |

    Scenario Outline: User navigate to the Merchant dashboard and click on the 2 step Authentication button then verifying the reconfigure screen
        Given User is on the merchant dashbord
        When User clicks on the two step button
        And reconfigure screen is displayed
        Then User clicks on the Reconfigure button

    Scenario Outline: User navigate to the phone verification screen and verifying the behaviour of the page
        When user is on the phone verification screen
        When user enters valid verification code as "<code>"
        Then Reconfigure two step screen is displayed

        Examples:
            | code   |
            | 123456 |

    Scenario Outline: User is validating the API response
        When User enters verification code then verifying the response

    Scenario Outline: User navigate to the reconfigure two step authentication screen
        When User is on the reconfigure screen
        When user enters verification code as "<code>"
        Then Verify that two step authentication was reconfigured successfully

        Examples:
            | code   |
            | 123456 |

