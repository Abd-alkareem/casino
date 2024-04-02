//logic for the minu btn
document.querySelector(".minu-btn").addEventListener("click",()=>{
    document.querySelector(".links").classList.toggle("active");
    document.querySelector(".minu-btn").classList.toggle("active");
})

//items's background in game section
let img = ["images/img-2.png","images/img-3.png","images/img-4.png","images/img-5.png"];
document.querySelectorAll(".game .holder .coll .item ").forEach((item,ind)=>{
    item.style.background = `url(${img[ind]})`;
})


//logic for the testimoniols section
let next = document.querySelector(".testimoniols .next-slide");
let prev = document.querySelector(".testimoniols .prev-slide");
let holder  = document.querySelector(".testimoniols .content");
let holderWidth = holder.clientWidth;
let count = holder.childElementCount;
let currentCount = 1;
next.addEventListener("click",(e)=>{
    holder.scrollLeft += holderWidth;
    currentCount++;
    prev.classList.remove("full");
    if(currentCount == count){
        next.classList.add("full");
    }
})
prev.addEventListener("click",(e)=>{
    holder.scrollLeft -= holderWidth;
    currentCount--;  
    next.classList.remove("full");
    if(currentCount == 1){
        prev.classList.add("full");
    }
})