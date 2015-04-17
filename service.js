var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
	var deferred = $q.defer();
  	this.getUsers = function() {
    	$http({
        	method: 'GET',
        	url: 'http://reqr.es/api/users?page=1'
    	}).then(function(response){
    		response = response.data.data
    		for(var i = 0; i < response.length; i++){
    			response[i].first_name = 'Ralf'
    			response[i].last_name = "Machio"
    			response[i].avatar = src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAB4CAMAAAA6wwf8AAAAUVBMVEWAgYP///96e319foB3eHp0dXdxcnRub3H7+/vNzc6Gh4n19fW0tLXj4+Tb29zX19jv7+/Hx8jo6emTlJasrK6foKLBwcKZmZuMjY+mp6i6ursaXAPKAAADnUlEQVRoge2Z2Y6rMAyGQzb2rQvQvv+DHkIIpS3YhlBpdMR/M9LMNF/iLY7Lgh+LnYAT8L8BoqqI47K8pD8BVPWVKWmk+bWJDgZEdaK5YE6Ch/fqQECUCck+JFR2GOAZ8s/ljbggHIIAiLqv3Tup4giAFGvrM6Zrf8AVWL8nxL6ARkHrMxaWngANr98T4KzDAM/F+HlT4gVAl2dMNh6AEvGANZIH4A6G0CgOHQEBhIT1YS/AgJxioT6hL3sBNR5DmI1gAMkFfWG97wV0NADkBBAQ0ZbvU2EnIF2t0x8CMgEEVGgh8gSktCDq43QnIEho64vrXgAxTPlzL6CmeXl/Jqe/rkW0TONQg4TdBxQbaag9QgARIVChGEIBGQUAlDoUADdFzkRQ53IEwOfKJGUa2FYggBsJ4GGihlLuJNRjI4D413lAait8Gi/SpQk2p1hvSsg0cfMBBLiN4HcUCigwAgdLEeEJhUYq/HHCIxBuLVTuDQD9zEEP0wAp5IUQm1lQXvpAQQJvSzKgWr/6JTrYIc0qVo8AX2Z0wGXNCwIfuJAAqz0qeJcdAZDYpMLXROBdtgEQr50AS2MqYLW30Pj4kXaCtXIUAm31BkC0NjRSWY1ONym1qLfDfcELkvX7P2CkFgyx3n4ShB5+H2FxhANi+wju3gmys+YvNGIkFJBLZTd5n7VIYuoWO+TGRAHGvWNbkk1FVXUuPEvFFFwu4Id4I41hXNuQM263/yoQJkH0vq4iKm+JsnYXD/fLW58Qqn1ll+0swXxeBuRZEs4GvnxaskjYPGxcQrN6tT1dAKRPt/XJ5tOil0TMtvtqjbnusuVzfAHK9nvULtrxj1H4NrqZt96CK3UrvmP2HXC5MbVU2Fz/3Ir5HfDV2wvF7/EHYwaoGrG4urGArQixLUnTZxckZNi9OWT67/qq1hus0UZ2x+4Ia4+T3lhdU70BoqI3PPgak+YDrsUbvQA0fILrpE4d4JItG34uHs9e/XIwGDZ15rI1ccXyTpPmWsFrMmKjFn9CC5UUAYNNM8l8S5C7i20IONJQWHWk1dk41LLXjg0pwhcLmyS6wI057XyrJc5syRqWHbYthvCgTjzJGmxUDEeIyC7YJDnllgGQZgzbZKr+YKLhTXC4C+x7+yFGEnmqvUljcpkwJQ0Lt6q/modRs7lBf2Ahs/BYjST1y6Ot0uO4X+WkMdJ2iYc9AX8+fmEhQ/j4eerUqVOnTp06deoP6R9Z3CoIBoolvAAAAABJRU5ErkJggg=="
    		}
    		deferred.resolve(response)
    	})
    	return deferred.promise;
  }
});