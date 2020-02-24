
//1         /////////////////////////////////////
//JAX-RS    /////////////////////////////////////
axios('jaxrs_employee/');

//2         /////////////////////////////////////
// SWAGGER  /////////////////////////////////////
// Annotated Resources
axios("swagger_annot_res/myEntity1/")
//Open API
axios('swagger_file/pets/variableBefore');

//3         /////////////////////////////////////
// Spring MVC  /////////////////////////////////////
axios('spring_mvc_only_method_path');
axios('spring_mvc_class_path/spring_mvc_method');

//4         /////////////////////////////////////
// Helidon  /////////////////////////////////////
axios('greet/greeting');

//5         /////////////////////////////////////
// jax-ws  ///////////////////////////////////////
// CHeck - NO WEB SOCKETS in the completion list!!!
axios('http://localhost:8080/web');


//4         /////////////////////////////////////
// micronaut  /////////////////////////////////////
//TODO Note: no endpoints with placeholders in the completion list if there is only a placeholder as a path
// https://youtrack.jetbrains.com/issue/IDEA-224007
axios('micronaut_hello/micronaut_method_path');
axios('micronaut_with_placeholder/smth_real_after_fix/hello_pldr');


/////////////////////////////////////////////////////////////
//TODO FOR NOW:  NO http client endpoints for other clients!!!!!!  BUG:
// for example  microProfile:
axios('microprofile_path');

/////////////////////////////////////////////////////////////
//TODO  NO completion for url vars, bug:
var url = 'http://localhost:8080/'; // Change this to your URL
axios(url);

