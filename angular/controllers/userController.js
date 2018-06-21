myApp.controller('usersController', ['apiService', function (apiService) {
    let user = this;
    //initializing all the required variables
    this.usersArray = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.userName = '';
    this.searchedResults = [];
    this.showSearchedResult = false;
    this.userNotFound = false;
    //get all the users
    this.getTheUsers = () =>{
        apiService.getAllUsers(user.currentPage).then(function successCallback(response) {
            let allUsers= response.data;
            user.totalCount = allUsers.total_count;
            user.totalPages = Math.ceil(user.totalCount / user.itemsPerPage)
            allUsers.items.forEach(uelem => {
                user.usersArray.push(uelem);
            });
            },
            //handling the error
            function errorCallback(response) {
                alert("some error occurred. Check the console.");
                console.log(response);
            });
    
    }
      //call
    this.getTheUsers();
    //search the user
    this.searchTheUsers = () => {
        user.searchedResults = [];
        apiService.searchUsers(user.userName).then(function successCallback(response) {
            if(response.data.items.length > 0){
                response.data.items.forEach(uelem =>{
                    user.searchedResults.push(uelem);
               });
               user.currentPage = 1;
               user.showSearchedResult = true;
            }
            else{
                user.userNotFound = true;
                user.showSearchedResult = true;
            }
      
        },
        //handling the error
        function errorCallback(response) {
            alert("some error occurred. Check the console.");
            console.log(response);
        });

    }
  
    //on page change for pagination configuration
    this.pageChanged = () => {
        user.usersArray = [];
        user.getTheUsers();
    }

}]);