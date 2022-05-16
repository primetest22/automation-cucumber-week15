$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "As a user, I want to create account successfully on automation website.",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14536631800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can create account successfully.",
  "description": "",
  "id": "create-account-test;user-can-create-account-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter email to create account email field \"abc0010101@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter first name \"Mahendra\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter last name \"Dhoni\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password name \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select day for date of birth \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select month for date of birth \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select year for date of birth \"2000\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on news letter checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on special offer checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter address \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter city \"New York\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select state \"32\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter zip code \"00000\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter mobile number \"000000000\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I see My account text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 204015400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 13239132100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc0010101@yahoo.com",
      "offset": 45
    }
  ],
  "location": "CreateAccountTest.iEnterEmailToCreateAccountEmailField(String)"
});
formatter.result({
  "duration": 313542600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 207298900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnMaleRadioButton()"
});
formatter.result({
  "duration": 6263194400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahendra",
      "offset": 20
    }
  ],
  "location": "CreateAccountTest.iEnterFirstName(String)"
});
formatter.result({
  "duration": 146338900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhoni",
      "offset": 19
    }
  ],
  "location": "CreateAccountTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 134873500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "CreateAccountTest.iEnterPasswordName(String)"
});
formatter.result({
  "duration": 144020800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "CreateAccountTest.iSelectDayForDateOfBirth(String)"
});
formatter.result({
  "duration": 256573300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    }
  ],
  "location": "CreateAccountTest.iSelectMonthForDateOfBirth(String)"
});
formatter.result({
  "duration": 256033700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 33
    }
  ],
  "location": "CreateAccountTest.iSelectYearForDateOfBirth(String)"
});
formatter.result({
  "duration": 337557200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnNewsLetterCheckbox()"
});
formatter.result({
  "duration": 112960500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnSpecialOfferCheckbox()"
});
formatter.result({
  "duration": 84820300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 17
    }
  ],
  "location": "CreateAccountTest.iEnterAddress(String)"
});
formatter.result({
  "duration": 105759700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 14
    }
  ],
  "location": "CreateAccountTest.iEnterCity(String)"
});
formatter.result({
  "duration": 138108300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 16
    }
  ],
  "location": "CreateAccountTest.iSelectState(String)"
});
formatter.result({
  "duration": 284076700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000",
      "offset": 18
    }
  ],
  "location": "CreateAccountTest.iEnterZipCode(String)"
});
formatter.result({
  "duration": 128524100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "000000000",
      "offset": 23
    }
  ],
  "location": "CreateAccountTest.iEnterMobileNumber(String)"
});
formatter.result({
  "duration": 121823000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 3515816600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.iSeeMyAccountText()"
});
formatter.result({
  "duration": 52380200,
  "error_message": "org.junit.ComparisonFailure: error expected:\u003cM[y account]\u003e but was:\u003cM[Y ACCOUNT]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.steps.CreateAccountTest.iSeeMyAccountText(CreateAccountTest.java:98)\r\n\tat ✽.Then I see My account text(createaccount.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1342733400,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Log In Test",
  "description": "As a user, I want to log in on automation website",
  "id": "log-in-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5441215500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to sign in page successfully",
  "description": "",
  "id": "log-in-test;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I see authentication text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 67300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3159226900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iSeeAuthenticationText()"
});
formatter.result({
  "duration": 54680500,
  "status": "passed"
});
formatter.after({
  "duration": 745194900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 20,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 21,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 22,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 23,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 24,
      "id": "log-in-test;verify-error-messages-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5106506200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 74200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4869312100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 84244900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 113544400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3560524500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 28
    }
  ],
  "location": "LoginPageTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 36533900,
  "status": "passed"
});
formatter.after({
  "duration": 736727500,
  "status": "passed"
});
formatter.before({
  "duration": 7356361000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 52800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3535156400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 171879700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 92901400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1293806600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    }
  ],
  "location": "LoginPageTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 87095000,
  "status": "passed"
});
formatter.after({
  "duration": 748448800,
  "status": "passed"
});
formatter.before({
  "duration": 4842607900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2253639200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 134824200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 142916200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1787599400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 28
    }
  ],
  "location": "LoginPageTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 85414700,
  "status": "passed"
});
formatter.after({
  "duration": 811611100,
  "status": "passed"
});
formatter.before({
  "duration": 8882163300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify error messages with invalid credentials",
  "description": "",
  "id": "log-in-test;verify-error-messages-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 58200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4608825800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 259549000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 244039700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1328375500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 28
    }
  ],
  "location": "LoginPageTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 85054400,
  "status": "passed"
});
formatter.after({
  "duration": 817197400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "User should log in successfully with valid credentials",
  "description": "",
  "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see sign out link is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35,
      "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "abcxyz01@yahoo.com",
        "primetest"
      ],
      "line": 36,
      "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5824537700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should log in successfully with valid credentials",
  "description": "",
  "id": "log-in-test;user-should-log-in-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter username \"abcxyz01@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"primetest\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 53800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2408354800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcxyz01@yahoo.com",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 280954800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primetest",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 176812500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3053438300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeSignOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 65056300,
  "status": "passed"
});
formatter.after({
  "duration": 762994500,
  "status": "passed"
});
formatter.before({
  "duration": 7202222200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User should log out successfully",
  "description": "",
  "id": "log-in-test;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter username \"abc0010@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see sign in link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 38300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1702834100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc0010@yahoo.com",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 258193800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 249042100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1884044300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 2246453600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeSignInLinkIsDisplayed()"
});
formatter.result({
  "duration": 56491100,
  "status": "passed"
});
formatter.after({
  "duration": 753968600,
  "status": "passed"
});
formatter.uri("womencategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test",
  "description": "As a user, I want to navigate to women category page",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5170809500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to women category successfully.",
  "description": "",
  "id": "women-category-page-test;user-should-navigate-to-women-category-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on women tab link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I see women text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 108400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTabLink()"
});
formatter.result({
  "duration": 2186081700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iSeeWomenText()"
});
formatter.result({
  "duration": 98431200,
  "status": "passed"
});
formatter.after({
  "duration": 815072600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should able to add product to cart successfully.",
  "description": "",
  "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I see the message Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on X button and close the popup",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 24,
      "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 25,
      "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 26,
      "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 27,
      "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 28,
      "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5170307300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should able to add product to cart successfully.",
  "description": "",
  "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I see the message Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on X button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 78400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTabLink()"
});
formatter.result({
  "duration": 3950594900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1768154500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 1825078300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSize(String)"
});
formatter.result({
  "duration": 350539400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 3144409500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 4085755900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iSeeTheMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 39642300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 63528400,
  "status": "passed"
});
formatter.after({
  "duration": 753837100,
  "status": "passed"
});
formatter.before({
  "duration": 5024632800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should able to add product to cart successfully.",
  "description": "",
  "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I see the message Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on X button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 65100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTabLink()"
});
formatter.result({
  "duration": 2077004900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 3669993200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 1901354400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSize(String)"
});
formatter.result({
  "duration": 328406700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 3152867800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 4075514600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iSeeTheMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 65796900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 119598200,
  "status": "passed"
});
formatter.after({
  "duration": 759592900,
  "status": "passed"
});
formatter.before({
  "duration": 5333630900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should able to add product to cart successfully.",
  "description": "",
  "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I see the message Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on X button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 67700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTabLink()"
});
formatter.result({
  "duration": 5586721400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 3588987300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 1909587600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSize(String)"
});
formatter.result({
  "duration": 272473400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 3132554700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 4089443300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iSeeTheMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 70410300,
  "error_message": "org.junit.ComparisonFailure: error expected:\u003c[Product successfully added to your shopping cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.steps.WomenCategoryPageTest.iSeeTheMessageProductSuccessfullyAddedToYourShoppingCart(WomenCategoryPageTest.java:53)\r\n\tat ✽.And I see the message Product successfully added to your shopping cart(womencategory.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1045728900,
  "status": "passed"
});
formatter.before({
  "duration": 10315366500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should able to add product to cart successfully.",
  "description": "",
  "id": "women-category-page-test;user-should-able-to-add-product-to-cart-successfully.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I see the message Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on X button and close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTabLink()"
});
formatter.result({
  "duration": 8900988800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 330281100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 20050395000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027quantity_wanted\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-19PL7GD\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [89cf81f4cf41ea092f9cb5d644883b93, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027quantity_wanted\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\iamcp\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58929}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58929/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 89cf81f4cf41ea092f9cb5d644883b93\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:60)\r\n\tat com.automation.pages.ProductPage.clkOnQnt(ProductPage.java:44)\r\n\tat com.automation.steps.WomenCategoryPageTest.iChangeQuantity(WomenCategoryPageTest.java:31)\r\n\tat ✽.And I change quantity \"2\"(womencategory.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iSeeTheMessageProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1423347500,
  "status": "passed"
});
});