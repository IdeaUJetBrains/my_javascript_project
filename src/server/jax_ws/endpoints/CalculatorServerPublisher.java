package server.jax_ws.endpoints;

import javax.xml.ws.Endpoint;

public class CalculatorServerPublisher {
	public static void main(String[] args) throws InterruptedException {
		Endpoint ep = Endpoint.create(new CalculatorServerImpl());
		
		ep.publish("http://127.0.0.1:10000/calcServer");
		System.out.println( ep.getProperties() );
Thread.sleep(10000);
//		System.out.println( ep.getEndpointReference(, ) );
		//Do something
		
		//Comment below line if service is meant to be running always
		ep.stop();
	}
}
