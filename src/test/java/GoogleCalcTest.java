import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = { "pretty", "html:target/", "json:target/cucumber.json"}
    )
//@CucumberOptions(strict = true,
//        //features = {"classpath:com/automationrhapsody/cucumber/parallel/tests/wikipedia/ignored.feature"},
//        format = {"json:target/cucumber.json", "html:target/", "pretty"},
//        monochrome = false,
//        tags = {"~@ignored"},
//        glue = { "com.automationrhapsody.cucumber.parallel.tests" })
public class GoogleCalcTest {
}

// pretty report: java -jar cucumber-sandwich-0.0.4.jar -n -f D:/Cucumber/target/ -o D:/Cucumber/target
