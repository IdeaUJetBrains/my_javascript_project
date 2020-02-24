package server.spring_mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/spring_mvc_class_path")
public class SpringMVC_HelloController {

    @RequestMapping(value = "/spring_mvc_method", method = RequestMethod.GET)
    public String printHello(ModelMap model) {
        model.addAttribute("message", "Ha ha ha!");
        model.addAttribute("message1", "Ola-la!");

        return "hello";
    }

}
