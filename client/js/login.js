function fnlogin(){
    debugger
	//Get Refrence of inputs
	var emailRef = document.getElementById('email')
	var passwordRef = document.getElementById('password')

	//take values of inputs
	var email = emailRef.value;
	var password = passwordRef.value;

	/*Perform validations on inputs*/
	if( email == '' || password == ''){
        alert('fill emailid or password');
        return;

    }

    var dataObj={
        email: email,
        password: password
    }

    sendReq(
        'post',
        'http://localhost:2020/users/login',
        dataObj,
        function(res){
            debugger;
            if(res == ''){
                document.getElementById('msg').innerText = "Entered userid or password is wrong"
                emailRef.value = ''
                passwordRef.value = ''
            }else{
            	var res = JSON.parse(res)
                sessionStorage.setItem('email',res.email);
                sessionStorage.setItem('password',res.password);
                sessionStorage.isLoggedIn=true;
                 location.href='crud.html';
                
                
            }
        },
        function(res){
            debugger;
        }

    )
}


