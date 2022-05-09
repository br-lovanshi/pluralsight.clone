
let otp =   document.querySelector("#otp").value;
document.querySelector("button").addEventListener("click",otpfun)
function otpfun(){

if(otp == null){
    alert("please retry!")
}
else if (otp == "1234"){
    alert("Payment Succesully done");
    console.log("paymet Done ");
}
else {
    alert("Payment Failed")
    console.log("invelid otp");
}} 