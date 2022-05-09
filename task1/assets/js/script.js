// const buttons = document.querySelectorAll(".btn");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     let giftItem = document.getElementById(`${btn.dataset.targetId}`);
//     giftItem.style.filter = "none";
//     btn.style.opacity = "0";
//     btn.setAttribute("disabled", "true");
//   });
// });

let button1 = document.getElementById("button-1")
button1.addEventListener("click",function(){
    document.getElementById("image-1").style.filter = "none"
    document.getElementById("text-1").style.display = "block"
    document.getElementById("text-2").style.display = "none"
    document.getElementById("text-3").style.display = "none"
    document.getElementById("text-4").style.display = "none"
    document.getElementById("image-2").style.filter = "blur(25px)"
    document.getElementById("image-3").style.filter = "blur(25px)"
    document.getElementById("image-4").style.filter = "blur(25px)"

})

let button2 = document.getElementById("button-2")
button2.addEventListener("click",function(){
    document.getElementById("image-1").style.filter = "blur(25px)"
    document.getElementById("image-2").style.filter = "none"
    document.getElementById("image-3").style.filter = "blur(25px)"
    document.getElementById("image-3").style.filter = "blur(25px)"
    document.getElementById("text-1").style.display = "none"
    document.getElementById("text-2").style.display = "block"
    document.getElementById("text-3").style.display = "none"
    document.getElementById("text-4").style.display = "none"

})

let button3 = document.getElementById("button-3")
button3.addEventListener("click",function(){
    document.getElementById("image-1").style.filter = "blur(25px)"
    document.getElementById("image-2").style.filter = "blur(25px)"
    document.getElementById("image-3").style.filter = "none"
    document.getElementById("image-4").style.filter = "blur(25px)"
    document.getElementById("text-1").style.display = "none"
    document.getElementById("text-2").style.display = "none"
    document.getElementById("text-3").style.display = "block"
    document.getElementById("text-4").style.display = "none"
  

})

let button4 = document.getElementById("button-4")
button4.addEventListener("click",function(){
    document.getElementById("image-1").style.filter = "blur(25px)"
    document.getElementById("image-2").style.filter = "blur(25px)"
    document.getElementById("image-3").style.filter = "blur(25px)"
    document.getElementById("image-4").style.filter = "none"
    document.getElementById("text-1").style.display = "none"
    document.getElementById("text-2").style.display = "none"
    document.getElementById("text-3").style.display = "none"
    document.getElementById("text-4").style.display = "block"
  

})
