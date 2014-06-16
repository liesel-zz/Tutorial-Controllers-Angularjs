angular.module('pizzaria', [])
	.config(pizzariRouter);

	function pizzariRouter($routeProvider){
		$routeProvider
		.when('/detalhesPizza', {
			templateUrl: 'views/detalhesPizza.html',
			controller: 'DetalhesPizzaCtrl'
		}).when('/', {
			templateUrl: 'views/pizzas.html',
			controller: 'PizzaCtrl'
		})
	}