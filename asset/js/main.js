let btnActived = document.getElementById('btn');
const grid = document.querySelector('.grid');


btnActived.addEventListener('click', function () {
    // faccio apparire il contenitore della griglia
    grid.classList.toggle('d-none');
})

function generateCell() {
    // aggiungere l'elemento cell
    let cell = document.createElement('div');
    return cell
}
console.log(generateCell());