const square=document.getElementById("square");
const dash=document.querySelector(".name");
let frank = null;


document.getElementById("Dashboard_Frank_grid").addEventListener("click", function(){
square.classList.remove("disappear");
dash.classList.add("disappear");
frank = square;
})


document.addEventListener('click', () => {
    if (frank) {
        frank.classList.add('disappear');
        dash.classList.remove('disappear');
        frank = null;
    }
});

