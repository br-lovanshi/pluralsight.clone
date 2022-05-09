
document.querySelector("form");
form.addEventListener("submit",function(event){
 // event.preventDefault(); 
event.preventDefault();

var signupDataObj = {
    username:form.username.value,
    number:form.number.value,
    pass:form.pass.value
}
// signupDataArr.push(signupDataObj); 
console.log(signupDataObj)

localStorage.setItem("signupdata",JSON.stringify(signupDataObj));
window.location.href="login.html" 

})