var stompClient = null;

function connect() {
    var url = 'ws://localhost'
    var socket_ws = new WebSocket(url);
    stompClient1 = Stomp.over(socket_ws);

    stompClient1.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient1.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
});

    new WebSocket('ws://localhost:8080/');
}



