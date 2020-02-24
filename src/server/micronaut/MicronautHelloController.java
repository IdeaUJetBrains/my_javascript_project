package server.micronaut;

import io.micronaut.cache.annotation.Cacheable;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.retry.annotation.CircuitBreaker;
import io.micronaut.retry.annotation.Retryable;
import io.micronaut.scheduling.annotation.Scheduled;

import javax.validation.constraints.NotBlank;

@Cacheable
@Controller("/micronaut_hello")
public class MicronautHelloController {

    @Get(produces = MediaType.TEXT_PLAIN)
    public String index() {
        return "Hello World";
    }


    @Get(produces = MediaType.TEXT_PLAIN, value = "/micronaut_method_path" + "")
    public void sayHello(@NotBlank String name) {
        System.out.println("Hello " + name);
    }
}