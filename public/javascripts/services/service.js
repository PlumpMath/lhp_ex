app.factory('service', ['$http', '$window', function ($http, $window) {
	var service = {}

	service.addnew = function (contact) {
		return $http.post('/contacts', contact)
	}

	service.getcontacts = function () {
		return $http.get('/contactlist')
	}

	return service
}])