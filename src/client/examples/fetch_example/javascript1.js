function testfetch1(){
    fetch('http://localhost:8080/my_javascript_project_war_exploded/rest/employee/2', { mode: 'no-cors'})
        .then(response => response.json ())
        .then(data => {
            console.log(data); // Prints result from `response.json()` in getRequest
            return data;
        })
}

function testfetch3() {
    fetch('http://api.example.com/my_javascript_project_war_exploded/rest/employee/3', {
        mode: 'no-cors',
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(value => {console.log(value);})
}