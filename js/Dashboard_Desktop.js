const grd1 = document.getElementById('grd1');
const grd2 = document.getElementById('grd2');
const grd3 = document.getElementById('grd3');
const secondLine = document.getElementById('second-line-grid');
const MichName = document.getElementById("Mich-name2")

let expandedItem = null;

document.addEventListener('click', () => {
    if (expandedItem) {
        expandedItem.classList.remove('expanded');
        grd1.classList.remove('disappear');
        grd2.classList.remove('disappear');
        grd3.classList.remove('disappear');
        secondLine.classList.add('disappear');
        MichName.classList.add('absolute-name');
        expandedItem = null;
    }
});

grd1.addEventListener('click', (e) => {
    e.stopPropagation();
    grd1.classList.add('expanded');
    expandedItem = grd1;
    grd2.classList.add('disappear');
    grd3.classList.add('disappear');
});

grd3.addEventListener('click', (e) => {
    e.stopPropagation();
    grd3.classList.add('expanded');
    expandedItem = grd3;
    grd2.classList.add('disappear');
    grd1.classList.add('disappear');
    secondLine.classList.remove('disappear');
    MichName.classList.remove('absolute-name');
});

