package server.jax_ws.endpoints;

import javax.xml.ws.Endpoint;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CalculatorServerMultiThreadedImpl {
	public static void main(String[] args) {
		ExecutorService es = Executors.newFixedThreadPool(5);
		Endpoint ep = Endpoint.create(new CalculatorServerImpl());
		ep.setExecutor(es);
		ep.publish("http://127.0.0.1:10000/calcServer");
	}
}
