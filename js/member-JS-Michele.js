const placeholder = document.getElementById("Placeholder");
const placeholder2 = document.getElementById("Placeholder2");
const img = document.getElementById("img");
const img2 = document.getElementById("img2");

document.getElementById("imageToggle").addEventListener("click", ()=>{
    placeholder.classList.add("hidden-mich");
    img.classList.remove("hidden-mich");
});

document.getElementById("imageToggle2").addEventListener("click", ()=>{
    placeholder2.classList.add("hidden-mich");
    img2.classList.remove("hidden-mich");
});