import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = { "pretty", "html:target/", "json:target/cucumber.json"}
    )
public class GoogleCalcTest {
}

// pretty report: java -jar cucumber-sandwich-0.0.4.jar -n -f D:/Cucumber/target/ -o D:/Cucumber/target

// test commit