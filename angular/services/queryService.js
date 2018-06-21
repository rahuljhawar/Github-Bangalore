myApp.service('apiService', function ($http){
    //base url
    let baseUrl = 'https://api.github.com/search/users';
    //location
    let location = "bangalore"; 
    //github client_id and secret
    let client_id =''; //input your client id here
    let client_secret =''; //input your client_secret here

    //request to get all users
    this.getAllUsers =  (pageNo) =>{
        return $http.get(`${baseUrl}?q=+location:${location}&page=${pageNo}&per_page=10&client_id=${client_id}&client_secret=${client_secret}` );
    };

    //request to search the users
    this.searchUsers =  (userName) =>{
        return $http.get(`${baseUrl}?q=+${userName} in:login+location:${location}&client_id=${client_id}&client_secret=${client_secret}` );
    };
}); // end api service