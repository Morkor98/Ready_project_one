const placeholder = document.getElementById("Placeholder");
const img = document.getElementById("img");

document.getElementById("imageToggle").addEventListener("click", ()=>{
    placeholder.classList.add("hidden");
    img.classList.remove("hidden");
});