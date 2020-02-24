//*********URLS completion, rename, find usages***************************************************************************
// TODO BUG - completion is absent
//  https://youtrack.jetbrains.com/issue/IDEA-233564

//Test baseURL  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


//*********CONCATENATION***************************************************************************

axios({
    baseURL: 'https://localhost:8080/' + '',
    method: 'get'
})
axios.baseURL = '' + '';
axios.defaults.baseURL = 'https://localhost:8080/'  + '';


//SERVER SIDE CONCATENATION AND VARS //////////////////////////////////////////////////////////////////////

//concat on the server side /////////////
axios({
    baseURL: 'https://localhost:8080/jaxrs_class_path_with_concat/c1/c2',
    method: 'get'
})
axios.baseURL = 'https://localhost:8080/jaxrs_class_path_with_concat/c1/c2';
axios.defaults.baseURL = 'https://localhost:8080/jaxrs_class_path_with_concat/c1/c2';


//vars on server side //////////////////////////////////////////////
axios({
    baseURL: 'https://localhost:8080/jaxrs_class_path_vars/var1/var2',
    method: 'get'
})
axios.baseURL = 'https://localhost:8080/jaxrs_class_path_vars/var1/var2';
axios.defaults.baseURL = 'https://localhost:8080/jaxrs_class_path_vars/var1/var2';


//WITH vars
//baseURL
//TODO support for it https://youtrack.jetbrains.com/issue/IDEA-233564
var urlpartbase  = "jaxrs_class_path_vars/var1/var2"
axios({
    baseURL: 'https://localhost:8080/' + urlpartbase,
    method: 'get'
})
axios.baseURL = 'https://localhost:8080/' + urlpartbase;
axios.defaults.baseURL = 'https://localhost:8080/'  + urlpartbase;