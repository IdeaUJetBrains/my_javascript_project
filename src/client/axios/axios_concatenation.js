//*********CONCATENATION***************************************************************************
//TODO for baseURL - see axios_baseUrl.js

//TODO BUG: NOT OK - the completion is absent in both concatenated parts
// https://youtrack.jetbrains.com/issue/IDEA-233687
axios({
    url: 'swagger_file/' +'',
    method: 'get'
})
axios({
    url: "/swagger_file/" + "",
    method: 'get'
})
axios.create({
    url: "/jaxrs_class_path_with_concat/" + "c1/c2"
});


//OK:
axios('/swagger_file/' + 'pets');
axios.get("/jaxrs_class_path_with_concat/" + "c1_changed/c2", false)
axios.get("/jaxrs_class_path_with_concat/" + "c1_changed/c2");
axios.post("/jaxrs_class_path_with_concat/" + "c1_changed/c2", false);
axios.post("/jaxrs_class_path_with_concat/" + "c1_changed/c2");
axios.delete("/swagger_file/" + "pets")
axios.head("/swagger_file/" + "pets")
axios.options("/swagger_file/" + "pets")
axios.put("/swagger_file/" + "pets/variableBefore")
axios.patch("/swagger_file/" + "pets")


