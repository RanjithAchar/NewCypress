Feature: Agreements Test Suite
    This feature file will validate Agreements of user details functionality

    Scenario Outline: User enter an valid email and password then verifying the behaviour of the fields and next button should be enabled
        Given User is on the Login page
        When User types Email as "<email>"
        And User types Password as "<password>"
        And Clicks on the Next Button
        And User types otp as "<verificationcode>"
        Then User should be logged in Successfully

        Examples:
            | email             | password    | verificationcode |
            | qa105@yopmail.com | Admin@12345 | 123456           |

    Scenario Outline: User navigate to the Merchant dashboard and click on the Agreements then verifying the text
        When User clicks on the Request Dropdown
        And Clicks on the Agreements tab
        Then User should be on the Agreements page and verifying the response of TOS and PP Agreement
        And Verifying the TOS and PP agreements texts

    Scenario Outline: User should be able to download TOS agreements
        When User click on the download button of TOS agreement
        Then TOS agreement should be Successfully downloaded

    Scenario Outline: User should be able to download PP agreements
        When User click on the download button of PP agreement
        Then PP agreement should be Successfully downloaded

#Scenario Outline: User click on the TOS agreement and verifying the agreement tree
#When User is able to view the old agreement tree of terms of service agreement
#Then User is able to download the old Tos agreements

#Scenario Outline: User click on the PP agreement and verifying the agreement tree
#When User is able to view the old agreement tree of privacy policy agreement
#Then User is able to download the old Pp agreements

