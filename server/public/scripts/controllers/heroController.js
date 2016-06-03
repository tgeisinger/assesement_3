app.controller('heroController', ['$scope', '$http', function($scope, $http) {
    $scope.heroes = [];
    $scope.heroInfo= {};

    getHeroes();

    $scope.addHero = function() {
        var data = $scope.heroInfo;
        $http.post('/hero', data)
            .then(function() {
                console.log(data);
                getHeroes();
            });
    };



    $scope.deleteHero = function(id) {
        $http.delete('/movies/' + id)
            .then(function(response) {
                console.log('DELETE /hero ', id);

            });
    };



    function getHeroes() {
        $http.get('/hero')
            .then(function(response) {
                $scope.heroes = response.data;
                console.log(response.data);

            });
    }
}]);
