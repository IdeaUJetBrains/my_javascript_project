const axios = require('axios');
var my_path = "/socket"

axios.get('/user', { params: { ID: 12345 }});
axios.get('/user?ID=12345');
axios.get('/user/test/test1', { params: { ID: 12345 }});
axios.post('/user', {firstName: 'Fred', lastName: 'Flintstone'});

function get1() {  return axios.get('/user/12345');}
function get2() {  return axios.get('/user/test/test1');}

axios.get(my_path);
function get_var() {  return axios.get(my_path);}


// wrong, because it is http protocol, not web sockets
axios.get('https://localhost:8080/test_postfix/socket');
axios.get('socket/');
axios.get('sock' + 'et/');


//concatenation
axios.get('/us' + 'er', { params: { ID: 12345 }});
axios.get('/user?' + 'ID=12345');
axios.get('/user/test/' + 'test1', { params: { ID: 12345 }});
axios.post('/us' + 'er', {firstName: 'Fred', lastName: 'Flintstone'});
function get11() {  return axios.get('/user/' + '12345');}
function get22() {  return axios.get('/user/12345/permis' + 'sions');}