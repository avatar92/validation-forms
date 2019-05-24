// let x = document.querySelectorAll(".sendEvent");

            

sendForm=()=>
{
    //if (document.forms.myForm.elements.fullname.value=='') {alert('enter name')}
    //if (document.forms.myForm.elements.validMail.value=='') {alert('enter mail')}
    //if (document.forms.myForm.elements.validMail.value != /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/) {alert("alros ?")}
    var emailRegex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;     
    var emailAdr = document.getElementById('emailAdress').value; 
    var emailResult = emailRegex.test(emailAdr);
    var passwordRegex =/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{3,8})$/; 
    var password=document.getElementById('inputPassword').value; 
    var passwordResult=passwordRegex.test(password); 
    if (document.getElementById('firstName').value==""){
        alert("enter name");
         
    }
    if (emailResult==false){
        alert("wrong mail")
    }
    if (passwordResult==false){
        alert('u need to put a strong password')
    }
    

}
