
// jax-ws  ///////////////////////////////////////
new WebSocket('jax_ws_web_socket_chat/');
new WebSocket('ws://localhost:8080/jax_ws_web_socket_chat/');
new WebSocket('ws://api.example.com/jax_ws_web_socket_chat/');
new WebSocket('ws://api.NotExample.com/jax_ws_web_socket_chat/');



//JAX-RS   NO Completion
new WebSocket('jaxrs');
// SWAGGER  v for  Annotated Resources and  Open API
new WebSocket('swagger_');
// Spring MVC  NO Completion
new WebSocket('spring_mvc_');
// Helidon  NO Completion
new WebSocket('greet/');
// micronaut  NO Completion
new WebSocket('micronaut_');


/////////////////////////////////////////////////////////////
//  NO Completion for http client endpoints, for example microprofile:
new WebSocket('microprofile_');

/////////////////////////////////////////////////////////////
//TODO  NO completion for url vars, bug:
var url = 'ws://localhost:8080/web_';
new WebSocket(url);

