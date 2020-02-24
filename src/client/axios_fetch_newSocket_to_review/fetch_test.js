
fetch('https://api.github.com/helloworld1/op1/');
fetch('http://localhost:8080/helloworld_my_path/user');


fetch('https://api.github.com/orgs/nodejs', {
    headers: new Headers({ 'User-agent': 'Mozilla/4.0 Custom User Agent' })
});

fetch('/test_postfix/socket', { credentials: 'include' });


var my_path = "/socket"

fetch('/user');
fetch('/user?ID=12345');
fetch('/user/test/test1');

function get1() {  return fetch('/user/test/test1');}
function get2() {  return fetch('/user');}

fetch(my_path);
function get_var() {  return fetch(my_path);}


// wrong, because it is http protocol, not web sockets
fetch('https://localhost:8080/test_postfix/socket');
fetch('socket/');
fetch('sock' + 'et/');

//concatenation
fetch('/use' + 'r');
fetch('/user?' + 'ID=12345');
fetch('/user/test/' + 'test1');
function get_var() {  return fetch('sock' + 'et/');}