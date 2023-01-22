let form=document.getElementById("login")
// let img=document.querySelector("img")


// let button=document.querySelector("button")
let arr=JSON.parse(localStorage.getItem("account-details")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let invalidmsg=document.getElementById("invalidmsg")
 arr.forEach(ele=>{
    if(ele.email===email && ele.password===password){
          window.location.href="./index.html"
    }else{
       invalidmsg.innerText="Invalid Credentials! Please Login Again."
    }
})

})


let loginbtn=document.getElementById("loginbtn").addEventListener("click",()=>{
    window.location.href="./CreateAccount.html"
    console.log("click")
})

let logimg=document.getElementById("logoimg").addEventListener("click",()=>{
    window.location.href="./index.html"
    console.log("click")
})

