Feature: Change Password Test Suite
    This feature file will validate Change Password of user details functionality

    Scenario Outline: User enter an valid email and password then verifying the behaviour of the fields and next button should be enabled
        Given User is on the Login Page
        When User enters Email as "<email>"
        And User enters Password as "<password>"
        And User Clicks on the Next Button
        And User enters otp as "<verificationcode>"
        Then User should be logged in Successfully to the merchant portal

        Examples:
            | email             | password    | verificationcode |
            | qa105@yopmail.com | Admin@12345 | 123456           |

    Scenario Outline: User navigate to the Merchant dashboard and click on the Change Password button then verifying the verify Identity screen
        When User clicks on the change Password button
        And Verify your identity screen is displayed
        Then verifying the text

    Scenario Outline: User is able to enter invalid verification code
        When User enter invalid verification code as "<vcode>"
        Then error message should be displayed as "<error>"

        Examples:
            | vcode  | error               |
            | 234567 | Verification Failed |

    Scenario Outline: User click on the Get an SMS code link then phone verification screen should be displayed and verifying the text
        When User click on the Get an SMS code link
        And Phone verification screen is displayed
        Then verifying the text in the screen

    Scenario Outline: User is able to click on the resend verification code button then verifying the behaviour of the button
        When User click on the resend button
        Then Relevent message should be displayed as "<message>"

        Examples:
            | message                                |
            | The verification code has been resent. |

    Scenario Outline: User clicks on the resend verification code and verifying the api response
        Then Verifying the api response of resend button


    Scenario Outline: User is able to enter invalid phone verification code
        When User enters invalid phone verification code as "<vcode>"
        Then Error message should be displayed as "<error>"

        Examples:
            | vcode  | error               |
            | 345678 | Verification Failed |

    Scenario Outline: User is able to enter valid phone verification code
        When User enter valid phone verification code as "<vcode>"
        Then message should be displayed as "<success>"

        Examples:
            | vcode  | success                 |
            | 123456 | Verification Successful |

    Scenario Outline: User is able to view the toast message and verifying the toast
        When User is able to view the toast message
        And User is clicking on the cross button in toast then verifying the toast is closed successfully

    Scenario Outline: User should redirected to the change password screen then verifying the texts
        When User is able to verify the change password screen

    Scenario Outline: User enter a null data for all the field then verifying the behaviour of fields and Save button should not be enabled
        When User enter the "<text>" data in "<field>" field
        Then Verifying the proper error message as "<error>"
        And Save button should not be enabled

        Examples:
            | text | field            | error                              |
            | a    | Current Password | Please enter your current password |
            | a    | New Password     | Password is required               |
            | a    | Confirm Password | Confirm password is required       |

    Scenario Outline: User enter a invalid data in new and confirm password text field then verifying the behaviour of fields and save button should not be enabled
        When User enter a invalid "<text>" in "<field>" field
        Then Verifying the new and Confirm field error message as "<error>"
        And Save button should be disabled

        Examples:
            | text       | field            | error                                      |
            | 1234567890 | New Password     | Invalid password format. Please try again. |
            | 2345678907 | Confirm Password | Error: Passwords do not match.             |

    Scenario Outline: User enter less than 8 characters in new password then verifying the error message
        When User enter a less than 8 charactor "<text>" in "<field>" text field
        Then Verifying the Error Message as "<error>"

        Examples:
            | text | field        | error                                  |
            | 12   | New Password | Password must be at least 8 characters |

    Scenario Outline: User enter same old password in new password text field then verifying the error message
        When User enter "<text>" same old password in "<field>" text field
        Then Verifying the Error message as "<error>"

        Examples:
            | text        | field        | error                                           |
            | Admin@12345 | New Password | New password should not match with old password |

    Scenario Outline: User is able to view the eye icon in text fields and verifying the behaviour of the icon
        When user clicks on the eye icon
        And Entered data should be unmasked
        Then again click on the eye icon then data should be masked

    Scenario Outline: User enter valid data for all the field then verifying the behaviour of fields and Save button should be enabled
        When User enter the valid password in text field
        And Save button should be enabled and click on the button
        Then Page should navigate to the password changed screen then redirect to the login page




