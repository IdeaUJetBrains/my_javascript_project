//*********SERVER SIDE CONCATENATION AND VARS ***************************************************************************
//TODO for baseURL - see axios_baseUrl.js

//concat on the server side ///////////////////////////////////////
axios("/jaxrs_class_path_with_concat/c1_changed/c2");
axios.get("/jaxrs_class_path_with_concat/c1_changed/c2", false)
axios.create({
    url: '/jaxrs_class_path_with_concat/c1_changed/c2'
});
// concat in annotation
axios("/jaxrs_class_ann_concat/concat_part/");

//vars on server side //////////////////////////////////////////////
//TODO Note: refactor-rename doesn't rename the server endpoint set via var
// https://youtrack.jetbrains.com/issue/IDEA-232837
axios("/jaxrs_class_path_vars/var1/var2");
axios.get("/jaxrs_class_path_vars/var1/var2", false)
axios.create({
    url: '/jaxrs_class_path_vars/var1/var2'
});

