
let socket = new WebSocket("wss://javascript.info/test_postfix/socket");
new WebSocket("ws://localhost:8080/socket");
new WebSocket("socket/");
new WebSocket("ws://localhost:8080/test_postfix/");
new WebSocket("wss://localhost:8080/test_postfix/", "protocolOne");
new WebSocket("test_postfix/socket", ["test", "test"]);


//concatenation
let socket1 = new WebSocket("wss://javascript.info/test_" + "postfix/socket");
new WebSocket("ws://localhost:8080/" + "socket");
new WebSocket("sock" + "et/");
new WebSocket("test_postfix/" + "socket", ["test", "test"]);

//vars
var my_path_to_socket = "/socket"
new WebSocket(my_path_to_socket);

//wrong should not suggest http methods
new WebSocket("wss://localhost:8080/helloworld1/op1/");
new WebSocket("wss://localhost:8080/" + "helloworld1/op1/");
new WebSocket("wss://localhost:8080/hello" + "world1/op1/");
new WebSocket("wss://localhost:8080/helloworld1/" + "op1/");









socket.onerror = function(error) {    alert(`[error] ${error.message}`);};
socket.onmessage = function(event) {
    alert(`[message] Data received from server: ${event.data}`);
};
socket.onclose = function(event) {
    if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        alert('[close] Connection died');
    }
};
socket.onopen = function(e) {
    alert("[open] Connection established");
    alert("Sending to server");
    socket.send("My name is John");
};
