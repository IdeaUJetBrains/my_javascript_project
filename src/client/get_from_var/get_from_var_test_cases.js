
// simple for diff endpoints  ///////////////////////////////////////
$.get("http://api.example.com/swagger_annot_res/myEntity1/")
$.get("http://api.example.com/swagger_file/pets")
$.get("http://localhost:8080/jaxrs_class_path_simple/ref1")


//vars, bug https://youtrack.jetbrains.com/issue/IDEA-233487
var urlref = 'swagger_file/pets/';
$.get(urlref)
$.get(urlref + '')

//concatenation
$.get("http://api.example.com/" + "swagger_annot_res/myEntity1/")
$.get("http://api.example.com/" + "swagger_file/pets")
$.get("http://localhost:8080/jaxrs_class_path_simple/" + "ref1")

//concat on the server side
$.get("/jaxrs_class_path_with_concat/c1_changed/c2");
//vars on the server side
$.get("/jaxrs_class_path_vars/var1/var2");

