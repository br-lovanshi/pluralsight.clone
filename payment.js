document.querySelector("form").addEventListener("submit",formfun);
function formfun(){
    event.preventDefault()
    
        const paymentobj = {
            number:form.number.value,
            date:form.date.value,
            cvv:form.cvv.value,
            name:form.name.value

        }
        console.log(paymentobj);
        localStorage.setItem("paymentData",JSON.stringify(paymentobj))
        window.location.href="otp.html"
}