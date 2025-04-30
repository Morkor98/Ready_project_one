const square=document.getElementById("square");
const dash=document.querySelector(".name");
const image=document.querySelector(".image-wrapper");
const image1=document.querySelector(".img1");
const image2=document.querySelector(".img2");
let frank = null;


document.getElementById("Dashboard_Frank_grid").addEventListener("click", function(){
square.classList.remove("disappear");
dash.classList.add("disappear");
frank = square;
})

image.addEventListener("click", function(){
    image1.classList.toggle("click");
    image2.classList.toggle("click1");
})
document.addEventListener('click', () => {
    if (frank) {
        frank.classList.add('disappear');
        dash.classList.remove('disappear');
        frank = null;
    }
});

