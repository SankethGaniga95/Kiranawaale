
let fetch1=[]
async function FetchData(){
    try{
        let res=await fetch("./data/Food.json")
        res=await res.json()
        console.log(res);
        fetch1=res.data;
        filterData(res.data)
        //  DisplayFood(res.data)
        sortData(res.data)
    }catch(err){
        console.log(err)
    }
   
}
 FetchData()


 let filterBy=document.getElementById("filter")
 filterBy.addEventListener("change",()=>{
    FetchData()
 })
 function filterData(data){
    let filterValue=filterBy.value
    if(filterValue===""){
        DisplayFood(data)
    }else{
        data=data.filter((food)=>{
            return food.rating==filterValue
        })
        DisplayFood(data)
    }
 }


 let searchForm=document.querySelector("form");
 searchForm.addEventListener("submit",(e)=>{
   e.preventDefault()
   let searchParams=searchForm.Search.value;

   let filt=fetch1.filter((element)=>{
     if(element.name.toUpperCase().includes(searchParams.toUpperCase())===true){
       return true
     }else {
       return false
     }
     
   })
   DisplayFood(filt)
 })


 let cartArr=JSON.parse(localStorage.getItem("cart")) || []
 let container=document.getElementById("foodcontainer");
  function DisplayFood(data){
    container.innerHTML=null;
    data.forEach((food)=>{
        let card=document.createElement("div")
        let imgdiv=document.createElement("div")
        let img=document.createElement("img")
        img.src=food.img;

        let name=document.createElement("h2")
        name.textContent=food.name;

        let price=document.createElement("h4")
        price.textContent=`₹${food.price}`;

        let rating=document.createElement("h4")
        rating.textContent=`Rating:-${food.rating}/5`;

        let desc=document.createElement("p")
        desc.textContent=food.desc;
         
        let addToCart=document.createElement("button")
        addToCart.textContent="Add to Cart"

        addToCart.addEventListener("click",()=>{
            if(checkDuplicate(food)){
                alert("Product Already in Cart")
            }else{
                cartArr.push({...food,quantity:1})
            localStorage.setItem("cart",JSON.stringify(cartArr))
            alert("Product Added in Cart")
            }
        })
        imgdiv.append(img)
        card.append(imgdiv,name,price,rating,desc,addToCart)
        container.append(card)

    })
 }

 function checkDuplicate(food){
    for(let i=0;i<cartArr.length;i++){
        if(cartArr[i].id===food.id){
            return true
        }
    }
    return false
 }


//  -----------------------sidepopup---------------------------
 const open_btn = document.querySelector('.open-btn');
    const close_btn = document.querySelector('.close-btn');
    const popup = document.querySelector('.popup');
    const main_popup = document.querySelector('.main-popup');
    
    open_btn.addEventListener('click', () => {
      popup.style.display = 'flex';
      main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
    });
    
    close_btn.addEventListener('click', () => {
      main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    });
    
    window.addEventListener('click', (e) => {
      if (e.target == document.querySelector('.popup-overlay')) {
        main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
        setTimeout(() => {
          popup.style.display = 'none';
        }, 500);
      }
    });


    // ---------------------------------sorting-----------------------------
    let sortasc=document.getElementById("sort");
    let h2l=document.getElementById("hightolow");
    let l2h=document.getElementById("lowtohigh");
   
    sortasc.addEventListener("submit",(e)=>{
        e.preventDefault()
      FetchData();
    })
    function sortData(fetch1){
      let sortvalue=sortasc.value
      if(sortvalue===""){
        DisplayFood(fetch1)
      }else if(h2l.checked == true){
      const asc= fetch1.sort((a,b)=> {return (b.price)-(a.price)});
      DisplayFood(asc)
      
      }else if(l2h.checked == true){
       let desc=fetch1.sort((a,b)=> {return (a.price)-(b.price)});
       DisplayFood(desc)
      }
        
      }


      let refresh=document.getElementById("refresh")
refresh.addEventListener("click", ()=>{
  window.location.href="./index.html"  
})
let Cart=JSON.parse(localStorage.getItem("cart"));
let carticon=document.getElementById("lblCartCount")
carticon.textContent=Cart.length
     
    