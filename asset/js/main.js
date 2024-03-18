let btnActived = document.getElementById('btn');
const grid = document.querySelector('.grid');
const level = parseInt(document.getElementById('level').value);
console.log('Il livello è', level);


function generateCell(contatore) {
    // aggiungere l'elemento cell
    let cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.innerHTML = contatore + 1;
    return cell;
}

btnActived.addEventListener('click', function () {

    // faccio apparire il contenitore della griglia
    grid.classList.toggle('d-none');

    // cancello eventuali griglie generate
    grid.innerHTML = '';

    //cliclo i numeri da 1 a 100 e li metto dentro le celle
    for (let i = 0; i < 100; i++) {
        const cellClicked = grid.appendChild(generateCell(i));
        cellClicked.addEventListener('click', function () {
            cellClicked.classList.add('clicked');
            console.log('Hai cliccato la cella:', i + 1);
        })
    }

})

function generateUniqueRandomNumber(min, max, blackList) {

    for (let i = 0; i < max; i++) {
        let numberRandom = parseInt(Math.random() * max);

        if (blackList.includes(numberRandom)) {
            console.log(numberRandom, 'Il numero generato è incluso nella blacklist');
        } else {
            console.log('Il numero generato è:', numberRandom);
        }
    }
}

generateUniqueRandomNumber(1, 10, [2, 4, 6, 8]);



