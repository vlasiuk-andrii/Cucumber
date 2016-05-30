$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleCalcDevide.feature");
formatter.feature({
  "line": 1,
  "name": "Check division in Google calculatorcontent",
  "description": "In order to verify that google calculator work correctly\r\nAs a user of google\r\nI should be able to get correct addition result",
  "id": "check-division-in-google-calculatorcontent",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8261683079,
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
  "duration": 1840213025,
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
  "duration": 370649559,
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
  "duration": 1183593717,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c0.6666[6666666]\u003e but was:\u003c0.6666[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat GoogleCalcStepDefinition.I_should_get_correct_result(GoogleCalcStepDefinition.java:47)\r\n\tat ✽.Then I should get result as \"0.6666\"(GoogleCalcDevide.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 240142551,
  "status": "passed"
});
formatter.before({
  "duration": 6154250216,
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
  "duration": 1489467745,
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
  "duration": 337799948,
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
  "duration": 1380981681,
  "status": "passed"
});
formatter.after({
  "duration": 278518657,
  "status": "passed"
});
formatter.before({
  "duration": 5637626500,
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
  "duration": 1676774302,
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
  "duration": 340475226,
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
  "duration": 1181849949,
  "status": "passed"
});
formatter.after({
  "duration": 224953485,
  "status": "passed"
});
formatter.before({
  "duration": 5346367776,
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
  "duration": 1571310510,
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
  "duration": 352148896,
  "status": "passed"
});
formatter.match({
  "location": "GoogleCalcStepDefinition.I_smile()"
});
formatter.result({
  "duration": 103121,
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
  "duration": 1114420644,
  "status": "passed"
});
formatter.after({
  "duration": 239741308,
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
  "duration": 5350310804,
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
  "duration": 1421763288,
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
  "duration": 311520260,
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
  "duration": 1208227870,
  "status": "passed"
});
formatter.after({
  "duration": 235496248,
  "status": "passed"
});
formatter.before({
  "duration": 5329496032,
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
  "duration": 1306122299,
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
  "duration": 316883033,
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
  "duration": 1406660239,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c-1[]\u003e but was:\u003c-1[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat GoogleCalcStepDefinition.I_should_get_correct_result(GoogleCalcStepDefinition.java:47)\r\n\tat ✽.Then I should get result as \"-11\"(GoogleCalcMinus.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 281266754,
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
  "duration": 8768236140,
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
  "duration": 2070805902,
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
  "duration": 306722452,
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
  "duration": 1223590433,
  "status": "passed"
});
formatter.after({
  "duration": 225233525,
  "status": "passed"
});
formatter.before({
  "duration": 6039157576,
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
  "duration": 1610643537,
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
  "duration": 314582118,
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
  "duration": 1135510567,
  "status": "passed"
});
formatter.after({
  "duration": 279582121,
  "status": "passed"
});
formatter.before({
  "duration": 5471402048,
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
  "duration": 1496619737,
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
  "duration": 346014917,
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
  "duration": 1139285476,
  "status": "passed"
});
formatter.after({
  "duration": 276771956,
  "status": "passed"
});
formatter.before({
  "duration": 5956012849,
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
  "duration": 1400033624,
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
  "duration": 326742070,
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
  "duration": 1136221173,
  "status": "passed"
});
formatter.after({
  "duration": 274180739,
  "status": "passed"
});
formatter.before({
  "duration": 5166335393,
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
  "duration": 192813992,
  "status": "passed"
});
});