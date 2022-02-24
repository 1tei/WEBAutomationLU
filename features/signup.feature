Feature: Oracle sign up test

    @signup
    Scenario: Sign up with new user
        Given User has opened the Oracle Profile page
        When User presses the create account button
        And User fills out create account form
        And User presses the Sign Up button
        Then User is redirected to Check Your Email page