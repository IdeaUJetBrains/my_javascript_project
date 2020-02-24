//TODO  NO completion for url vars, bug: https://youtrack.jetbrains.com/issue/IDEA-233487

function test_no_completion() {
    var url = 'http://localhost:8080/'; // Change this to your URL
    fetch(url, { mode: 'no-cors'})
        .then(
            response => response.text() // .json(), etc.
            // same as function(response) {return response.text();}
        ).then(
        html => {console.log(html);
            return html;}

    );
}

/////////////////////////////////////////////////////////////
var url = 'http://localhost:8080/';
fetch(url )

//url parts
var urlpartfetch = 'swagger_file/pets/';
fetch('http://localhost:8080/' + urlpartfetch )

var url1 = 'http://localhost:8080/';
var urlpartfetch1 = 'swagger_file/pets/';
fetch(url1  + urlpartfetch1)
