export default($scope, $state, hService) => {
	'ngInject';
	$scope.title = "公安";
	// 上一级路由
	$scope.toH = () => {
		$state.go(hService.state());
	}
};