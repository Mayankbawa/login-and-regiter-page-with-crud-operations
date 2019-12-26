function fnregister(){

	//Get Refrence of inputs
	var firstnameRef = document.getElementById('fname');
    var middlenameRef = document.getElementById('mname');
    var lastnameRef = document.getElementById('lname');
    var mobilenoref = document.getElementById('mobileno');
    var emailRef = document.getElementById('email');
    var passwordRef = document.getElementById('password');
    var confpasswordRef = document.getElementById('conf_password')

	//take values of inputs
	var first_name= firstnameRef.value;
    var middle_name =middlenameRef.value;
    var last_name = lastnameRef.value;
    var mobile_number = mobilenoref.value;
    var email = emailRef.value;
    var password = passwordRef.value;
    var confirm_password = confpasswordRef.value;

	/*--------------------------------------------------Perform validations on inputs------------------------------------------------*/

    if( first_name == '' || last_name == '' || mobile_number == '' || email == '' || password == '' || confirm_password == ''){
        alert('fill all the * fields');
        return;

    }



            var letters = /^[A-Za-z]+$/;
            var phoneno = /^\d{10}$/;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            if(first_name.match(letters))
            {
                 if(mobile_number.match(phoneno))
                    {
                        
                        if(email.match(mailformat))
                            {
                            
                            if(password.match(passw)) 
                                { 
                                 if (password != confirm_password) { 
                                    alert ("\nPassword did not match: Please try again...") 
                                                return false; 
                                    } 
  
                                }
                            else
                                { 
                                    alert('password must contain (A-Z,a-z,special character, length(6-20))')
                                    return false;
                                }

                            }
                        else
                            {
                            alert("You have entered an invalid email address!");
                            document.email.focus();
                            return false;
                            }

                    }
                 else
                    {
                    alert("mobile number in 10 digits");
                    return false;
                    }
            }
            else
                 {
            alert("alphabets only");
                 return false;
                }

/*----------------------------------------------------------validation end------------------------------------------------------------*/

       

    var dataObj={
      'first_name': first_name,
      'middle_name': middle_name,
      'last_name': last_name,
      'mobile_number': mobile_number,
      'email': email,
      'password': password
    }

    sendReq(
        'post',
        'http://localhost:2020/users/register',
        dataObj,
        function(res){
            debugger;
            if(res == ''){

                alert('please enter valid data')
                
            }else{
                
                alert('Created Successfully');
                 firstnameRef.value= " "
                middlenameRef.value= " "
                lastnameRef.value= " "
                mobilenoref.value= " "
                emailRef.value = " "
                passwordRef.value= " "
                confpasswordRef.value= " "
                location.href='index.html';
                
            }
        },
        
    )
}



