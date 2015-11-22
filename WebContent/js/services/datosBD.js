app.factory('datosBD', function ($http) {
    return {
        getDatos: function (uri) {
            return $http.get(uri)
                .success(function (response) {
                    return response;
                })
                .error(function (response) {
                    return response;
                });
        }
    }
});
