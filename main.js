let heroes = [];

let heroContainer = document.getElementById('containerHero');


  

function createCard(index){
    let card = document.createElement('div');
    card.classList = 'hero';
    card.id = 'hero';
    card.innerHTML = [`
    <img class="photo" src="img/${index}.jpg"></img>
    <h3>${heroes[index][0]}</h3>
    <p>${heroes[index][1]}</p>
    `];
    card.classList
    heroContainer.append(card);
}


function displayHero(){

    heroContainer.innerHTML = '';
    for (let i = 0; i < heroes.length; i++) {
    createCard(i);
    }
}

displayHero();


function addHero() {
    let nameInput = document.getElementById('nameHero');
    let classInput = document.getElementById('classHero');
    let newCard = [nameInput.value, classInput.value];

    if (nameInput.value && classInput.value) {
        heroes.push(newCard);
        displayHero();
    }
   nameInput.value = '';
    classInput.value = '';
}



function deleteHero(index) {
    heroes.splice(index, 1);
    displayHero();
}



document.getElementById('addHero').addEventListener('click',addHero);
document.getElementById('remove_btn').addEventListener('click', deleteHero);


let dropContainer = document.body;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  dropContainer.appendChild(document.getElementById(data));
}

let hers = document.querySelectorAll('.hero'); 

hers.forEach(hero => {
  hero.setAttribute('draggable', true);
  hero.addEventListener('dragstart', drag);
});

dropContainer.addEventListener('dragover', allowDrop);
dropContainer.addEventListener('drop', drop);
