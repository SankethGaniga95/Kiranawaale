let login=document.getElementById("Dropbutton")
login.addEventListener("click", ()=>{
  
  document.getElementById("myDropdown").classList.toggle("show");  
})
 window.addEventListener("click",(e)=>{
   if(!e.target.matches("#Dropbutton")){
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }

 })

//  async function FetchData(){
//   try{
//     let res=await fetch("./data/Categories.json")
//     res=await res.json()
//     console.log(res);
//     DisplayCategory(res.data)
   
//   }catch(err){
//     console.log(err)
//   }
//  }
// FetchData()

// let container=document.getElementById("category-container");
// function DisplayCategory(data){
//   container.innerHTML="";
//   data.forEach((cate)=>{
//     let card=document.createElement("div")
//     let img=document.createElement("img")
//     img.src=cate.img
     
//     let name1=document.createElement("h4")
//     name1.textContent=cate.name
//     card.addEventListener("click",()=>{
//       window.location.href="./"
//     })

//     card.append(img,name1)
//     container.append(card)
//   })
 
// }
// ----------------redirecting through cards------



let food=document.getElementById("Food & Beverages")
food.addEventListener("click",()=>{
  window.location.href="./Food.html"
})
let Personal=document.getElementById("Personal Care")
Personal.addEventListener("click",()=>{
  window.location.href="./Personal.html"
})
let Health=document.getElementById("Health")
Health.addEventListener("click",()=>{
  window.location.href="./Health.html"
})
let Beauty=document.getElementById("Beauty")
Beauty.addEventListener("click",()=>{
  window.location.href="./Beauty.html"
})
let Toys=document.getElementById("Toys")
Toys.addEventListener("click",()=>{
  window.location.href="./Toys.html"
})
let Household=document.getElementById("Household")
Household.addEventListener("click",()=>{
  window.location.href="./Household.html"
})
let Cleaning=document.getElementById("Cleaning")
Cleaning.addEventListener("click",()=>{
  window.location.href="./Cleaning.html"
})
let Baby=document.getElementById("Baby")
Baby.addEventListener("click",()=>{
  window.location.href="./Food.html"
})
let Party=document.getElementById("Party & Occasions")
Party.addEventListener("click",()=>{
  window.location.href="./Party.html"
})


// ------------redirecting through nav bars----
let foo=document.getElementById("Food & Beverage")
foo.addEventListener("click",()=>{
  window.location.href="./Food.html"
})
let Persona=document.getElementById("Personal Car")
Persona.addEventListener("click",()=>{
  window.location.href="./Personal.html"
})
let Healt=document.getElementById("Healt")
Healt.addEventListener("click",()=>{
  window.location.href="./Health.html"
})
let Beaut=document.getElementById("Beaut")
Beaut.addEventListener("click",()=>{
  window.location.href="./Beauty.html"
})
let Toy=document.getElementById("Toy")
Toy.addEventListener("click",()=>{
  window.location.href="./Toys.html"
})
let Househol=document.getElementById("Househol")
Househol.addEventListener("click",()=>{
  window.location.href="./Household.html"
})
let Cleanin=document.getElementById("Cleanin")
Cleanin.addEventListener("click",()=>{
  window.location.href="./Cleaning.html"
})
let Bab=document.getElementById("Bab")
Bab.addEventListener("click",()=>{
  window.location.href="./Food.html"
})
let Part=document.getElementById("Party & Occasion")
Part.addEventListener("click",()=>{
  window.location.href="./Party.html"
})