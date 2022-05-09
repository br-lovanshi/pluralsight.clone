var signupdata = JSON.parse(localStorage.getItem("signupdata"));
document.querySelector("form");
   form.addEventListener("submit",function(event){
   event.preventDefault();

   var userDataObj ={
       username:form.username.value,
       pass:form.pass.value
   }
   // userDataArr.push(userDataObj);
   // localStorage.setItem("userdata",JSON.stringify(userDataArr)); 

 

       if(signupdata === null){
           alert("please creat account")
           window.location.href= "signup.html"
       }
       else if(signupdata.username === userDataObj.username && signupdata.pass === userDataObj.pass ){
           alert("login successfully Done");
           localStorage.setItem("logindata",JSON.stringify(signupdata)) 
           window.location.href="index.html"
       }
       else{
           alert("wrong Password please tyr again")
       }

   // window.location.href="" 

});