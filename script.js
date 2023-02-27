const letters_div = document.getElementById('letters-div');
const word_div = document.getElementById('word-div');
const live_span = document.getElementById('lives');
const reset_btn = document.getElementById('reset-btn');
const notif = document.getElementById('notif');
const notif_content = document.getElementById('notif-content');
const notif_span = document.getElementById('notif-span');
const play_again =  document.getElementById('play-again');

let letters;
let lives;


const categories = {
    cities : ['Manchester', 'Milan', 'Madrid','Amsterdam','Prague'],
    football_clubs: ['Everton','Liverpool','Swansea','Chelsea','Hull','Manchester city','Newcastle united'],
    movies: ['Alien','Dirty harry','Gladiotor','Finding-nemo','Jaws']
}

const word_list = Object.keys(categories);
const getRandom = (x) => x[Math.floor(Math.random() * x.length)];
const random_category = getRandom(word_list);
const random_word = getRandom(categories[random_category]);
console.log(random_word);

const init = (state) => {
    // word_div.innerHTML = "";
    if (state == 'start') {
        for (let i of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'){
            const html = `<button class="alpha">${i}</button`;
            letters_div.insertAdjacentHTML('beforeend', html);
        }
    }
    else if (state =='reset'){
        letters.forEach(btn => {
            btn.classList.remove('disabled');
        });
    }
        notif.classList.add('hidden')
        lives = 5

        letters = document.querySelectorAll('.alpha');
        live_span.innerText = lives

        for (let i=0 ; i < random_word.length; i++){
            const html =`<p class="word">_</p>`;
            word_div.insertAdjacentElement('beforeend', html);
        }
}

init('start')
 



