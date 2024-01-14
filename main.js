let heroes = [];

let heroContainer = document.getElementById('containerHero');


  

function createCard(index){
    let card = document.createElement('div');
    card.classList = 'container_card';
    card.id = 'container_card';
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

document.getElementById('addHero').addEventListener('click',addHero)

function deleteHero() {
    heroes.pop(); // Удаляет последнего героя из массива
    console.dir(heroes); // Выводит массив героев после удаления
    return
  }
document.getElementById('remove_btn').addEventListener('click', deleteHero)
