package server.jax_ws.endpoints;

import javax.jws.WebService;

@WebService(endpointInterface = "server.jax_ws.endpoints.HelloWorldImpl")
public class CalculatorServerImpl implements CalculatorServer {
	private int atest;
	@Override
	public int sum(int a, int b) {
		return a+b;
	}

	@Override
	public int diff(int a, int b) {
		return a-b;
	}

	@Override
	public int multiply(int a, int b) {
		return a*b;
	}

	@Override
	public int divide(int a, int b) {
		return a/b;
	}

	public int getAtest() {
		return atest;
	}

	public void setAtest(int atest) {
		this.atest = atest;
	}
}