//*********URLS completion, rename, find usages ***************************************************************************

// TODO BUG - completion is absent https://youtrack.jetbrains.com/issue/IDEA-233487
//TODO for baseURL - see axios_baseUrl.js

//Test urls via vars ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var url1 = 'http://localhost:8080/';
axios({
    url: url1,
    method: 'get'
})


var url2 = '/swagger_file/pets/variableBefore';
axios(url2);
axios.get(url2)
axios.delete(url2)
axios.head(url2)
axios.options(url2)
axios.post(url2)
axios.put(url2)
axios.patch(url2)
axios.get(url2, null)
axios.delete(url2, null)
axios.head(url2, null)
axios.options(url2, null)
axios.post(url2, null)
axios.put(url2, null)
axios.patch(url2, null)
axios.post(url2, null, null)
axios.put(url2, null, null)
axios.patch(url2, null, null)

//json form with an url part
var urlpart = 'pets/variableBefore';
axios({
    url: 'swagger_file/' + urlpart,
    method: 'get'
})
axios.create({
    url: "/swagger_file/" + urlpart
});

