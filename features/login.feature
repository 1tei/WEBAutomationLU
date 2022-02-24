Feature: Oracle Login test

  @login
  Scenario Outline: Invalid login with user
    Given User has opened the Oracle Profile page
    When User inputs <email> as the email
    And User inputs <password> as the password
    And User presses the sign in button
    Then User sees invalid credentials message

    Examples:
      | email            | password       |
      | sandis@gmail.com | passtheword    |
      # | reinis@gmail.com | pass123word    |
      # | maris@gmail.com  | 123thewordpass |
