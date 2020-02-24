function testfetch2() {
    var url = 'http://localhost:8080/my_javascript_project_war_exploded/rest/employee/1'; // Change this to your URL
    fetch(url, { mode: 'no-cors'})
        .then(
            response => response.text() // .json(), etc.
            // same as function(response) {return response.text();}
        ).then(
        html => {console.log(html);
            return html;}

    );
}

