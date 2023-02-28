const letters_div = document.getElementById('letters-div');
const word_div = document.getElementById('word-div');
const live_span = document.getElementById('lives');
const reset_btn = document.getElementById('reset-btn');
const notif = document.getElementById('notif');
const notif_content = document.getElementById('notif-content');
const notif_span = document.getElementById('notif-span');
const play_again = document.getElementById('play-again');


let lives;
let letters = [];
let html =""


const categories = {
    cities: ['Manchester', 'Milan', 'Madrid', 'Amsterdam', 'Prague'],
    football_clubs: ['Everton', 'Liverpool', 'Swansea', 'Chelsea', 'Hull', 'Manchester city', 'Newcastle united'],
    movies: ['Alien', 'Dirty harry', 'Gladiotor', 'Finding-nemo', 'Jaws']
}

const word_list = Object.keys(categories);
const getRandom = (x) => x[Math.floor(Math.random() * x.length)];
const random_category = getRandom(word_list);
const random_word = getRandom(categories[random_category]);
console.log(random_word);

const init = (state) => {
    // word_div.innerHTML = "";
    if (state == 'start') {
        for (let i of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
            const html = `<button class="alpha">${i}</button`;
            letters_div.insertAdjacentHTML('beforeend', html);
        }
    }
    else if (state == 'reset') {
        letters.forEach(btn => {
            btn.classList.remove('disabled');
        });
        html = ""

    }

    notif.classList.add('hidden')
    const random_word = getRandom(categories[random_category]);
    lives = 5

    live_span.textContent = lives
    
    for (let i = 0; i < random_word.length; i++) {
     html += `<p class="word" id="${i}">_</p>`;
    }
    word_div.insertAdjacentHTML('beforeend', html);

}


init('start');

letters = document.querySelectorAll('.alpha');
console.log(letters)

const showNotif = (msg) => {
    notif.classList.remove('hidden');
    notif_span.textContent = random_word;
    notif_content.textContent = `you${msg}`;
}

const decreaseLife = () => {
    lives--;
    live_span.textContent = lives;
    if (lives == 0) {
        showNotif('lost')
    }

}

const getIndexes = (letter) => {
    let indexes = [];
    [...random_word].forEach((value, i) => {
        if (value == letter) {
            const index = i;
            indexes.push(index)
        }
    })
    return indexes;
}

const checkWord = () => {
    let value = true;
    for (let i = 0; i < word_div.children.length; i++) {
        if (word_div.children[i].textContent == '_') {
            value = false;
        }
    }
    return value;
}


const letterPress = () => {
    console.log(letters)
    console.log(this.textContent)
    const letter = button_content

    if (random_word.includes(letter)) {
        const indexes_list = getIndexes(letter);
        indexes_list.forEach((value) => {
            word_div.children[value].textContent = letter
        })
        if (checkWord()) {
            showNotif('Won');
        }
        else {
            decreaseLife();
        }
    }
    console.log(this)
    letters.classList.add('disabled');
}
let button_content = "";

letters.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        button_content = e.target.textContent
        console.log(button_content)
        letterPress
    })
})

reset_btn.addEventListener('click', function () {
    init('reset');
})

play_again.addEventListener('click', function () {
    init('reset')
})



