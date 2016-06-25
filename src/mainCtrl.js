angular.module('DM').controller('homeCtrl', function($scope, mainService) {
  // $scope.test = 'hey man';
  var count = 0;
  $scope.posts = mainService.getPosts();

  document.cookie "userCount=" + count;
  console.log(document.cookie)
})
