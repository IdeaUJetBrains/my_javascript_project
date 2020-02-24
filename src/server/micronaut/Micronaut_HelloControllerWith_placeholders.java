package server.micronaut;

import io.micronaut.context.annotation.EachProperty;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;

//In the above case if hello.controller.path is specified in configuration then the controller will be mapped to the path specified
// otherwise it will be mapped to /hello
//BY ME: hello.controller.path is specified in the application.yml
@Controller("/micronaut_with_placeholder/${micronaut.placeholder.path.from.file}/hello_pldr")
@EachProperty("test.datasource")
public class Micronaut_HelloControllerWith_placeholders {

    @Get(produces = MediaType.TEXT_PLAIN)
    public String index() {
        return "Hello World";
    }


}