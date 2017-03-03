app.controller("mainCtrl", ['$scope', '$state', 'service', function($scope, $state, service) {

  $scope.notImported = true;

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

  $scope.import = function () {
    for (var j=0; j<hardcoded.length; j++) {
      service.addnew(hardcoded[j])
    }

    $scope.notImported = false;

    service.getcontacts().then(function (data) {
      $scope.contactList = data.data
    })
  }

  var hardcoded = [
    {
      "name" : "Adele Szewc",
      "email" : "adele@szewc.com"
    },
    {
      "name" : "Agnes Adamík",
      "email" : "agnes@adamík.com"
    },
    {
      "name" : "Billy Sunil",
      "email" : "billy@sunil.com"
    },
    {
      "name" : "Bob Archambault",
      "email" : "bob@archambault.com"
    },
    {
      "name" : "Christina Yehoyakhin",
      "email" : "christina@yehoyakhin.com"
    },
    {
      "name" : "Cardea Vazquez",
      "email" : "cardea@vazquez.com"
    },
    {
      "name" : "Eadric Labelle",
      "email" : "eadric@Labelle.com"
    },
    {
      "name" : "Haven Bourke",
      "email" : "haven@bourke.com"
    },
    {
      "name" : "Thietmar Beverley",
      "email" : "thietmar@beverley.com"
    },
    {
      "name" : "Norma Morrison",
      "email" : "norma@morrison.com"
    },
    {
      "name" : "Svea Kranz",
      "email" : "svea@kranz.com"
    },
    {
      "name" : "Emmett Benenati",
      "email" : "emmett@benenati.com"
    },
    {
      "name" : "Sunil Lindholm",
      "email" : "sunil@lindholm.com"
    },
    {
      "name" : "Mykhailo Hirsch",
      "email" : "mykhailo@hirsch.com"
    }
  ]



}])
