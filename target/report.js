$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleCalcDevide.feature");
formatter.feature({
  "line": 1,
  "name": "Check division in Google calculatorcontent",
  "description": "In order to verify that google calculator work correctly\r\nAs a user of google\r\nI should be able to get correct addition result",
  "id": "check-division-in-google-calculatorcontent",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6739517717,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Devide_1",
  "description": "",
  "id": "check-division-in-google-calculatorcontent;devide-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"2/3\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get result as \"0.6666\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1547760835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2/3\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 348922827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.6666",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1064118686,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c0.6666[6666666]\u003e but was:\u003c0.6666[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat GoogleCalcStepDefinition.I_should_get_correct_result(GoogleCalcStepDefinition.java:47)\r\n\tat ✽.Then I should get result as \"0.6666\"(GoogleCalcDevide.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 237559154,
  "status": "passed"
});
formatter.before({
  "duration": 5387542318,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Devide_2",
  "description": "",
  "id": "check-division-in-google-calculatorcontent;devide-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"3/3\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get result as \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1568228125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3/3\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 347428308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1270909218,
  "status": "passed"
});
formatter.after({
  "duration": 239220328,
  "status": "passed"
});
formatter.before({
  "duration": 5274688035,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Devide_3",
  "description": "",
  "id": "check-division-in-google-calculatorcontent;devide-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter \"3/1\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should get result as \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1531396388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3/1\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 342610951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1139866080,
  "status": "passed"
});
formatter.after({
  "duration": 238310323,
  "status": "passed"
});
formatter.before({
  "duration": 5334511811,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Devide_4",
  "description": "",
  "id": "check-division-in-google-calculatorcontent;devide-4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I enter \"3/1\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I smile",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should get result as \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1825314750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3/1\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 365064416,
  "status": "passed"
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_smile()"
});
formatter.result({
  "duration": 121693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1329170542,
  "status": "passed"
});
formatter.after({
  "duration": 235868657,
  "status": "passed"
});
formatter.uri("GoogleCalcMinus.feature");
formatter.feature({
  "line": 1,
  "name": "Check substration in Google calculatorcontent",
  "description": "In order to verify that google calculator work correctly\r\nAs a user of google\r\nI should be able to get correct addition result",
  "id": "check-substration-in-google-calculatorcontent",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5227333574,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Minus_1",
  "description": "",
  "id": "check-substration-in-google-calculatorcontent;minus-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"2-2\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get result as \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1510263945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2-2\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 314005912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1180746898,
  "status": "passed"
});
formatter.after({
  "duration": 311387327,
  "status": "passed"
});
formatter.before({
  "duration": 6049147591,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Minus_2",
  "description": "",
  "id": "check-substration-in-google-calculatorcontent;minus-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"1-2\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get result as \"-11\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1548421103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1-2\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 359266679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-11",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1027935976,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c-1[]\u003e but was:\u003c-1[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat GoogleCalcStepDefinition.I_should_get_correct_result(GoogleCalcStepDefinition.java:47)\r\n\tat ✽.Then I should get result as \"-11\"(GoogleCalcMinus.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 285527454,
  "status": "passed"
});
formatter.uri("GoogleCalcPlus.feature");
formatter.feature({
  "line": 1,
  "name": "Check addition in Google calculatorcontent",
  "description": "In order to verify that google calculator work correctly\r\nAs a user of google\r\nI should be able to get correct addition result",
  "id": "check-addition-in-google-calculatorcontent",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5463140651,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Addition_1",
  "description": "",
  "id": "check-addition-in-google-calculatorcontent;addition-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"2+2\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get result as \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1543142391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2+2\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 318796389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1305454702,
  "status": "passed"
});
formatter.after({
  "duration": 292590499,
  "status": "passed"
});
formatter.before({
  "duration": 5238111901,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Addition_2",
  "description": "",
  "id": "check-addition-in-google-calculatorcontent;addition-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"2+0\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get result as \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1571500623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2+0\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 347910190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1198538909,
  "status": "passed"
});
formatter.after({
  "duration": 245457918,
  "status": "passed"
});
formatter.before({
  "duration": 5392099184,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Addition_3",
  "description": "",
  "id": "check-addition-in-google-calculatorcontent;addition-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter \"0+0\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should get result as \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1490356734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0+0\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 320843656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1341443389,
  "status": "passed"
});
formatter.after({
  "duration": 283086764,
  "status": "passed"
});
formatter.before({
  "duration": 5108333094,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Addition_4",
  "description": "",
  "id": "check-addition-in-google-calculatorcontent;addition-4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I enter \"-1+7\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should get result as \"6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 1672481346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1+7\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 339764620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 1167049419,
  "status": "passed"
});
formatter.after({
  "duration": 278738583,
  "status": "passed"
});
formatter.before({
  "duration": 5243382794,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Addition_5",
  "description": "",
  "id": "check-addition-in-google-calculatorcontent;addition-5",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "PENDING: I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I enter \"-1+7\u003d\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should get result as \"6\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "-1+7\u003d",
      "offset": 9
    }
  ],
  "location": "GoogleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "GoogleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 206748991,
  "status": "passed"
});
});