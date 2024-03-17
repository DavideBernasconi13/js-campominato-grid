let btnActived = document.getElementById('btn');
const grid = document.querySelector('.grid');




function generateCell(contatore) {
    // aggiungere l'elemento cell
    let cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.innerHTML = contatore + 1;
    return cell
}
//console.log(generateCell());

btnActived.addEventListener('click', function () {
    // rimuovo eventuali griglie generate
    // faccio apparire il contenitore della griglia
    grid.classList.toggle('d-none');

    //cliclo i numeri da 1 a 100 e li metto dentro le celle
    for (let i = 0; i < 100; i++) {
        const cellClicked = grid.appendChild(generateCell(i));
        cellClicked.addEventListener('click', function () {
            cellClicked.classList.add('clicked');
            console.log('Hai cliccato la cella:', i);
        })
    }

})




