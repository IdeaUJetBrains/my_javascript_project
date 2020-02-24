//*********CONCATENATION***************************************************************************

fetch('swagger_file/' + 'pets',null);
fetch('/swagger_file/' + 'pets',null);
fetch('swagger_file/' + 'pets');

//with vars on server side
//TODO - Note: refactor-rename doesn't rename the server endpoint set via var
// https://youtrack.jetbrains.com/issue/IDEA-232837
fetch("jaxrs_class_path_vars/var1/var2")

//with concats on server side
fetch("/jaxrs_class_path_with_concat/" + "c1_changed/c2")




//full example
function test_no_completion() {

    fetch('http://localhost:8080/' + 'swagger_file/'+'pets/variableBefore', { mode: 'no-cors'})
        .then(
            response => response.text() // .json(), etc.
            // same as function(response) {return response.text();}
        ).then(
        html => {console.log(html);
            return html;}

    );
}

