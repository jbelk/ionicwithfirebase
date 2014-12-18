angular.module('starter.controllers', ['firebase', 'underscore'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('HomeCtrl', function($scope,  $firebase, _) {
 

var productsobj = $firebase(new Firebase("https://printaurasync1.firebaseio.com/listproducts")).$asObject();

     // to take an action after the data loads, use $loaded() promise
     productsobj.$loaded().then(function() {
        
        productsobj = JSON.parse(productsobj.$value);
        productsobj = productsobj.results;

        
        //console.log(productsobj);
        var newnew = [];
        angular.forEach(productsobj, function(value, key) {
        // 28 29 7 45 103 193 
          if (value.product_id == "28" || value.product_id == "29" || value.product_id == "7" || value.product_id == "45" || value.product_id == "103" || value.product_id == "193")  {
            newnew.push(value);

          }
       });
       $scope.clothing = newnew;
       console.log($scope.clothing);  

       $scope.myproduct ={};
       $scope.myproduct.name = $scope.clothing[2];
       $scope.myproduct.color = 15;
;       
     });

})

.controller('productsCtrl', function($scope,  $firebase) {
   var productsobj = $firebase(new Firebase("https://printaurasync1.firebaseio.com/listproducts")).$asObject();

     // to take an action after the data loads, use $loaded() promise
     productsobj.$loaded().then(function() {
        object= JSON.parse(productsobj.$value);
        $scope.products =object.results;
        //console.log($scope.products)
     });

})

.controller('listCtrl', function($scope,  $firebase) {
 
 var brandobj = $firebase(new Firebase("https://printaurasync1.firebaseio.com/listbrands")).$asObject();

     // to take an action after the data loads, use $loaded() promise
     brandobj.$loaded().then(function() {
        object= JSON.parse(brandobj.$value);
        $scope.brands =object.results;
        //console.log($scope.brands)
     });

var colorsobj = $firebase(new Firebase("https://printaurasync1.firebaseio.com/listcolors")).$asObject();

     // to take an action after the data loads, use $loaded() promise
     colorsobj.$loaded().then(function() {
        Cobject= JSON.parse(colorsobj.$value);
        $scope.colors =Cobject.results;
        //console.log($scope.colors)
     });

var sizesobj = $firebase(new Firebase("https://printaurasync1.firebaseio.com/listsizes")).$asObject();

     // to take an action after the data loads, use $loaded() promise
     sizesobj.$loaded().then(function() {
        Sobject= JSON.parse(sizesobj.$value);
        $scope.sizes =Sobject.results;
        //console.log($scope.sizes)
     });

});

