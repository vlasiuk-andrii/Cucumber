$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleCalcDevide.feature");
formatter.feature({
  "line": 1,
  "name": "Check division in Google calculatorcontent",
  "description": "In order to verify that google calculator work correctly\r\nAs a user of google\r\nI should be able to get correct addition result",
  "id": "check-division-in-google-calculatorcontent",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7072738807,
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
  "duration": 1641853966,
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
  "duration": 358393328,
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
  "duration": 1337313668,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c0.6666[6666666]\u003e but was:\u003c0.6666[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat GoogleCalcStepDefinition.I_should_get_correct_result(GoogleCalcStepDefinition.java:47)\r\n\tat ✽.Then I should get result as \"0.6666\"(GoogleCalcDevide.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 248996282,
  "status": "passed"
});
formatter.before({
  "duration": 5672332774,
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
  "duration": 1480236718,
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
  "duration": 351093741,
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
  "duration": 1229424825,
  "status": "passed"
});
formatter.after({
  "duration": 290301802,
  "status": "passed"
});
formatter.before({
  "duration": 5547683129,
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
  "duration": 1694628870,
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
  "duration": 341653051,
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
  "duration": 1202469720,
  "status": "passed"
});
formatter.after({
  "duration": 241658086,
  "status": "passed"
});
formatter.before({
  "duration": 5584630204,
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
  "duration": 1350926597,
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
  "duration": 359187506,
  "status": "passed"
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_smile()"
});
formatter.result({
  "duration": 86504,
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
  "duration": 1344253066,
  "status": "passed"
});
formatter.after({
  "duration": 277822224,
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
  "duration": 5620042196,
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
  "duration": 1525294664,
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
  "duration": 334531849,
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
  "duration": 1261933795,
  "status": "passed"
});
formatter.after({
  "duration": 300326028,
  "status": "passed"
});
formatter.before({
  "duration": 6094933247,
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
  "duration": 1412556210,
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
  "duration": 321609486,
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
  "duration": 984196608,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c-1[]\u003e but was:\u003c-1[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat GoogleCalcStepDefinition.I_should_get_correct_result(GoogleCalcStepDefinition.java:47)\r\n\tat ✽.Then I should get result as \"-11\"(GoogleCalcMinus.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 295388445,
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
  "duration": 5585919460,
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
  "duration": 1654627267,
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
  "duration": 327191208,
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
  "duration": 1098259995,
  "status": "passed"
});
formatter.after({
  "duration": 277781171,
  "status": "passed"
});
formatter.before({
  "duration": 5642311901,
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
  "duration": 1424455182,
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
  "duration": 313560196,
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
  "duration": 1156155752,
  "status": "passed"
});
formatter.after({
  "duration": 314486329,
  "status": "passed"
});
formatter.before({
  "duration": 5565413561,
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
  "duration": 1653357561,
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
  "duration": 310362472,
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
  "duration": 1109206932,
  "status": "passed"
});
formatter.after({
  "duration": 284756735,
  "status": "passed"
});
formatter.before({
  "duration": 5262095562,
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
  "duration": 1422097087,
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
  "duration": 327425307,
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
  "duration": 1181204833,
  "status": "passed"
});
formatter.after({
  "duration": 279997048,
  "status": "passed"
});
formatter.before({
  "duration": 5445249427,
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
  "duration": 207400949,
  "status": "passed"
});
});