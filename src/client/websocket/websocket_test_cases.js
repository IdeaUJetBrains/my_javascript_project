
// jax-ws  ///////////////////////////////////////
new WebSocket('jax_ws_web_socket_chat/');
new WebSocket('ws://localhost:8080/jax_ws_web_socket_chat/');
//swagger file
new WebSocket('ws://api.example.com/jax_ws_web_socket_chat/');
new WebSocket('wss://api.NotExample.com/jax_ws_web_socket_chat/');


//Vars   and  concatenation /////////////////////////////////////////////////

//vars
// todo no completion - bug
var urlwebsocket1 = 'ws://localhost:8080/';
new WebSocket( urlwebsocket1 );
new WebSocket( urlwebsocket1 + '');
//swagger file
var urlwebsocket2 = 'ws://api.example.com/';
new WebSocket(urlwebsocket2 + 'jax_ws_web_socket_chat');


//concatenation
new WebSocket("/socket");
new WebSocket("wss://localhost:8080/" + "jax_ws_websocket1");
new WebSocket("wss://api.example.com/" + "jax_ws_web_socket_chat/", ["test", "test"]);
new WebSocket("wss://api.example.com/jax_ws_web_socket_chat2/" + "test", ["test", "test"]);

//concat on the server side
new WebSocket("wss://api.example.com/jax_ws_web_socket_chat3_concat/test_concat1/test_concat2");



