const grd1 = document.getElementById('grd1');
const grd2 = document.getElementById('grd2');
const grd3 = document.getElementById('grd3');

let expandedItem = null;

document.addEventListener('click', () => {
    if (expandedItem) {
        expandedItem.classList.remove('expanded');
        grd1.classList.remove('disappear');
        grd2.classList.remove('disappear');
        grd3.classList.remove('disappear');
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

grd2.addEventListener('click', (e) => {
    e.stopPropagation();
    grd2.classList.add('expanded');
    expandedItem = grd2;
    grd1.classList.add('disappear');
    grd3.classList.add('disappear');
});

grd3.addEventListener('click', (e) => {
    e.stopPropagation();
    grd3.classList.add('expanded');
    expandedItem = grd3;
    grd2.classList.add('disappear');
    grd1.classList.add('disappear');
});

