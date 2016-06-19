app.service('loginService', function () {
    
     
	this.getUsers = function () {
        return myusers;
    };

	this.submit = function(username, password)
	 {

      var user = username;
      var pass = password;

      myusers.push({
        username: user,
        password: pass
      });
    };

 this.change = function(user,newUsername, newPassword)
 {
	 user.oldUserName = user.username;
	 user.oldPassword = user.password;
	 
	for (var i in myusers) {
     if (myusers[i].username == user.username) {
        myusers[i].username = newUsername;
		 myusers[i].password = newPassword;
        break; //Stop this loop, we found it!
     }
   }
 };
 
 this.deleteUser= function(user)
 {
 	for (var i in myusers) {
     if (myusers[i].username == user.username) 
	 {
	    myusers.splice(i, 1);
	 }
   }
 };
   var myusers = [
         {
           username: 'user1',
           password: '12323'
         },
		 {
           username: 'user2',
           password: '12323'
        }
    ];

});