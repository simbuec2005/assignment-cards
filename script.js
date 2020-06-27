
const colorPalette = ['#2B8EAD', '#6F98A8', '#BFBFBF', '#2F454E'];
const cards = [...new Array(9)].map((value, i) => {
    return {
        value: i + 1,
        color: chooseColor(i)
    }
});

function render() {
    clear(); // removes card's children before render

    cards.forEach(item => {
        const card = createCard(item);
        document.querySelector('#cards').appendChild(card);
    })
}

function clear() {
    document.querySelector('#cards').innerHTML = '';
}

function createCard(item) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.style.backgroundColor = item.color;
    card.style.borderLeft = `5px solid ${item.color}`;
    card.appendChild(document.createTextNode(item.value));

    return card;
}


// choose color from pallete
function chooseColor(index){
    const randomIndex = index > colorPalette.length - 1 ? index - colorPalette.length : index;

    if(randomIndex > colorPalette.length - 1){
        return chooseColor(randomIndex);
    }

    return colorPalette[randomIndex];
}

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        [cards[randomIndex], cards[i]] = [cards[i], cards[randomIndex]]; // array destructing assignment
    }
    render(); // re-render cards
}

function sortCards() {
    cards.sort((card1, card2) => {
        return card1.value - card2.value;
    });
    render(); // re-render cards
}