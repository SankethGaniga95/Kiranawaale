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
    password:password,
 }
 arr.push(formDetails)
 localStorage.setItem("account-details",JSON.stringify(arr));
 alert("Your Account has been created Sucessfully!")
window.location.href="./index.html"
})

img.addEventListener("click",(e)=>{
   
    console.log("click")
    window.location.href="./index.html"
    
})

