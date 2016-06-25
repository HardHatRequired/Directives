var data = [
  {
    name:'Sally Rally',
    post:'something awesome about my dog',

  },
  {
    name:'Chris Cally',
    post:'something awesome about my cat',
  },
  {
    name:'Frank Bill',
    post:'something awesome about my hamster',
  },
];

angular.module('DM').service('mainService', function($http) {
  this.getPosts = function() {
    // return $http.get(data).then(function(data) {
      return data;
    // })
  }
})
