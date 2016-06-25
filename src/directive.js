angular.module('DM').directive('postList', function() {
  return {
    restrict: 'E',
    templateUrl: '/src/views/postList.html',

    scope: {
      posts: '=',
      userName: '@'
    },

    link:function(scope,element,attrs) {
      console.log(scope.userName);
      scope.like = function() {
        console.log('like');
      }
      scope.unlike = function() {
        console.log('unlike');
      }
    }
  }
});
