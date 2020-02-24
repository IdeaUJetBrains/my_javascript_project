package server.jax_ws.endpoints;


import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService(endpointInterface = "server.jax_ws.endpoints.HelloWorldImpl")
public class HelloWorldImpl implements HelloWorld {
    private String message = new String("Hello, ");

    @WebMethod()
    public String sayHello1еуые(String name) {        return message + name + "1.";    }
}
