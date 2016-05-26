$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleCalcDevide.feature");
formatter.feature({
  "line": 1,
  "name": "Check division in Google calculatorcontent",
  "description": "In order to verify that google calculator work correctly\r\nAs a user of google\r\nI should be able to get correct addition result",
  "id": "check-division-in-google-calculatorcontent",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7033496861,
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
