
//1         /////////////////////////////////////
//JAX-RS    /////////////////////////////////////
fetch("jaxrs_employee/")

//2         /////////////////////////////////////
// SWAGGER  /////////////////////////////////////
// Annotated Resources
fetch("swagger_annot_res/myEntity1/")
//Open API
fetch("swagger_file/pets/variableBefore")


//3         /////////////////////////////////////
// Spring MVC  /////////////////////////////////////
fetch("spring_mvc_only_method_path")
fetch("spring_mvc_class_path/spring_mvc_method")


//4         /////////////////////////////////////
// Helidon  /////////////////////////////////////
fetch("greet/greeting")

//5         /////////////////////////////////////
// jax-ws  ///////////////////////////////////////
// CHeck - NO WEB SOCKETS in the completion list!!!
fetch("http://localhost:8080/web")


//4         /////////////////////////////////////
// micronaut  /////////////////////////////////////
//TODO Note: no endpoints with placeholders in the completion list if there is only a placeholder as a path
// https://youtrack.jetbrains.com/issue/IDEA-224007
fetch("micronaut_hello/micronaut_method_path")
fetch("micronaut_with_placeholder/smth_real_after_fix/hello_pldr")


/////////////////////////////////////////////////////////////
//TODO FOR NOW:  NO http client endpoints for other clients!!!!!!  BUG:
// for example  microProfile:
fetch("/microprofile_path")



