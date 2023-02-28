const letters_div = document.getElementById('letters-div');
const word_div = document.getElementById('word-div');
const live_span = document.getElementById('lives');
const reset_btn = document.getElementById('reset-btn');
const notif = document.getElementById('notif');
const notif_content = document.getElementById('notif-content');
const notif_span = document.getElementById('notif-span');
const play_again = document.getElementById('play-again');
const message = document.getElementById('status')

let lives;
let letters = [];
let html = ""
let random_word = ""
let flag = false

const categories = {
    cities: ['MANCHESTER', 'MILAN', 'MADRID', 'AMSTERDAM', 'PRAGUE'],
    football_clubs: ['EVERTON', 'LIVERPOOL', 'SWANSEA', 'CHELSEA', 'HULL', 'MANCHESTERCITY', 'NEWCASTLEUNITED'],
    movies: ['ALIEN', 'DIRTYHARRY', 'GLADIATOR', 'FINDINGNEMO', 'JAWS']
}

const word_list = Object.keys(categories);
const getRandom = (x) => x[Math.floor(Math.random() * x.length)];
const random_category = getRandom(word_list);
//  random_word = getRandom(categories[random_category]);
console.log(random_word);

const init = (state) => {
    word_div.innerHTML = "";
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
        notif.classList.add('hidden')
    }

    random_word = getRandom(categories[random_category]);
    console.log(random_word)
    lives = 5

    live_span.textContent = lives

    for (let i = 0; i < random_word.length; i++) {
        html += `<p class="word" id="${i}">_</p>`;
    }
    word_div.insertAdjacentHTML('beforeend', html);

}


init('start');

letters = document.querySelectorAll('.alpha');
// console.log(letters)

const showNotif = (msg) => {
    notif.classList.remove('hidden');
    notif_span.textContent = random_word;
    notif_content.textContent = `you${msg}`;
    if(msg =='Won'){
        message.textContent = "Congratulations !!"
    }
    for (let i = 0; i < letters_div.children.length; i++) {
        if (letters_div.children[i].classList.add('disabled')) {
            value = false;
        }
    }
    
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
        if (value === letter) {
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
    // console.log(letters)
    // console.log(this.textContent)
    const letter = button_content
    let indexes_list = getIndexes(letter);
    if (random_word.includes(letter)) {

        // indexes_list.forEach((value,index) => {
        //     word_div.children[index].textContent = letter
        // })
        for (let i = 0; i < indexes_list.length; i++) {
            word_div.children[indexes_list[i]].textContent = letter
        }

        if (checkWord()) {
            showNotif('Won');
            
        }


    }
    else {
        decreaseLife();
        if(lives == 0){
            for(let i =0; i< letters_div.length; i++){
            letters_div.children[i].classList.add('disabled')
        }
    }
   // })
    }
    // indexes_list.forEach((val, index) => {
    //     console.log(indexes_list)
        btn_clicked.classList.add('disabled')
       
 
}
let button_content = "";
let btn_clicked;

letters.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        button_content = e.target.textContent
        btn_clicked = e.target
        console.log(button_content)
        letterPress()
    })
})

reset_btn.addEventListener('click', function () {
    init('reset');
})

play_again.addEventListener('click', function () {
    init('reset')
})



