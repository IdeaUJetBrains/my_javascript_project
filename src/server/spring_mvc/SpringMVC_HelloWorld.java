package server.spring_mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class SpringMVC_HelloWorld {

    @RequestMapping("/spring_mvc_welcome")
    public ModelAndView helloWorld() {

        String message = "<br><div style='text-align:center;'>"
                + "<h3>********** Hello World, Spring MVC Tutorial</h3>This message is coming **********</div><br><br>";
        return new ModelAndView("welcome", "message", message);
    }
}

