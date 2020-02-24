//*********URLS completion, rename, find usages***************************************************************************


//Test baseURL  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO BUG - completion is absent
//  https://youtrack.jetbrains.com/issue/IDEA-233564
axios.baseURL = '';
axios.defaults.baseURL = 'http://example.com/';
var instance = axios.create({
    baseURL: 'http://test.com/'
});
axios({
    baseURL: 'https://localhost:8080/',
    method: 'get'
})
axios.create({baseURL: this.baseURL});



//Test simple URLs  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
axios('/swagger_file/some/users');


//Test URL in json objects like {url: "http://google.com" } ////////////////////////////////////////////////////////////////
//works only for axios for random objects doesn’t work

//axios //////////////////////
// with a full url
axios({
    url: 'https://localhost:8080/jaxrs_employee/1',
    method: 'get'
})

// without / before
axios({
    url: 'swagger_file/pets/',
    method: 'get'
})
// with / before
axios({
    url: '/swagger_file/pets',
    method: 'get'
})

//axios.create////////////
axios.create({
    url: 'https://localhost:8080/jaxrs_employee/1'
});
// without / before
axios.create({
    url: 'swagger_file/pets/'
});
// with / before
axios.create({
    url: '/swagger_annot_res/myEntity1/'
});


// Test GET, POST  /////////////////

// GET
//Open API
axios.get("swagger_annot_res/myEntity1/", { params: BODY })
    .then(handleSuccess)
    .catch(handleFailure);
axios.get("swagger_annot_res/myEntity1/")
//jax-rs
axios.get("/jaxrs_employee/", { params: BODY })
axios.get('/jaxrs_employee/');

// POST
//Open API
axios.post("swagger_file/pets/variableBefore/", BODY)
    .then(handleSuccess)
    .catch(handleFailure);
axios.post('swagger_file/pets/variableBefore/');
//jax-rs
axios.post('/jaxrs_employee/', 'fizz=buzz');
axios.post('/jaxrs_employee/');
axios.post('/jaxrs_employee/', null, null)

//OTHERS
axios.delete("/swagger_file/pets")
axios.delete("/swagger_file/pets", null)

axios.head("/swagger_file/pets")
axios.head("/swagger_file/pets", null)

axios.options("/swagger_file/pets")
axios.options("/swagger_file/pets", null)

axios.put("/swagger_file/pets")
axios.put("/swagger_file/pets", null)
axios.put("/swagger_file/pets", null, null)

axios.patch("/swagger_file/pets")
axios.patch("/swagger_file/pets", null)
axios.patch("/swagger_file/pets", null, null)




