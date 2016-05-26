import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class GoogleCalcStepDefinition {
    protected WebDriver driver;

    @Before
    public void setup() {
        driver = new FirefoxDriver();
    }

    @Given("^I open google$")
    public void I_open_google() {
        //Set implicit wait of 10 seconds and launch google
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("https://www.google.com.ua");
    }

    @When("^I enter \"([^\"]*)\" in search textbox$")
    public void I_enter_in_search_textbox(String additionTerms) {
        WebElement googleTextBox = driver.findElement(By.id("lst-ib"));
        googleTextBox.sendKeys(additionTerms);
        googleTextBox.sendKeys(Keys.RETURN);
    }

    @When("^I smile$")
    public void I_smile(){
        // TBD
    }

    @Then("^I should get result as \"([^\"]*)\"$")
    public void I_should_get_correct_result(String expectedResult) {
        WebElement calculatorTextBox = driver.findElement(By.id("cwos"));
        String result = calculatorTextBox.getText();
        Assert.assertEquals(result, expectedResult);
        driver.close();
    }

    @After public void closeBrowser() {
        driver.quit();
        Runtime rt = Runtime.getRuntime();
        try {
            Process pr = rt.exec("java -jar cucumber-sandwich-0.0.4.jar -n -f D:/Cucumber/target/ -o D:/Cucumber/target");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}