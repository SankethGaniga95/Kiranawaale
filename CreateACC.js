let form=document.getElementById("AccountPage")
let img=document.querySelector("img")
let name1=document.getElementById("name")
let mobile=document.getElementById("mobile")
let email=document.getElementById("email")
let password=document.getElementById("password")
let button=document.querySelector("button")
let arr=JSON.parse(localStorage.getItem("account-details")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault();
 let formDetails={
    name: name1.value,
    mobile:mobile.value,
    email:email.value,
    password:password.value,
 }
 arr.push(formDetails)
 localStorage.setItem("account-details",JSON.stringify(arr));
 functionAlert()
// window.location.href="./index.html"
})
function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
       confirmBox.hide();
       window.location.href="./login.html"
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
 }

img.addEventListener("click",(e)=>{
   
    console.log("click")
    window.location.href="./index.html"
    
})

