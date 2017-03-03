app.controller("mainCtrl", ['$scope', '$state', 'service', function($scope, $state, service) {

  service.getcontacts().then(function (data) {
    $scope.contactList = data.data
  })

  $scope.search = function (input) {
    var filter = input.toUpperCase();
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
      var a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
    }
  }

  $scope.newContact = function (contact) {

    service.addnew(contact).then(function () {
      $state.go('home');
    })
  }




}])
