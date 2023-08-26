const bars = document.querySelector(".fa-bars");

const mobilMenu = document.querySelector(".MobilMenu");
const close = document.querySelector(".fa-x");
bars.onclick = () => {
  mobilMenu.classList.add("showMobilmenu");
};

close.onclick = () => {
  mobilMenu.classList.remove("showMobilmenu");
};


const porducts=document.querySelector(".workscards1")
const right=document.querySelector(".fa-right-long")
const left =document.querySelector(".fa-left-long")

const productsprode=[
  {
    id:0,
    img:"../img/Mask Group (2).png",
    tittle:"Televizor təmiri"
  },
  {
    id:1,
    img:"../img/Mask Group (1).png",
    tittle:"Paltaryuyan təmiri"
  },
  {
    id:2,
    img:"../img/Mask Group (1).png",
    tittle:"Paltaryuyan təmiri"
  },
  {
    id:3,
    img:"../img/Mask Group (1).png",
    tittle:"Paltaryuyan təmiri"
  },
  {
    id:4,
    img:"../img/Mask Group (1).png",
    tittle:"Paltaryuyan təmiri"
  },
  {
    id:5,
    img:"../img/Mask Group (1).png",
    tittle:"Paltaryuyan təmiri"
  },
  {
    id:6,
    img:"../img/Mask Group (1).png",
    tittle:"Paltaryuyan təmiri"
  },
  {
    id:7,
    img:"../img/Mask Group (1).png",
    tittle:"Paltaryuyan təmiri"
  },





]


right.onclick=()=>{
  
  productsprode.forEach((prodct)=>{
    let data=`
    <div class="workscards1">
        <div class="mask">
    
            <img src="${prodct.img}" alt="">
        </div>
    
    <div class="ptextd">
        <p>${prodct.tittle}</p>
    </div>
    </div>
    
    `
    porducts.innerHTML+=data
      })
    
}

