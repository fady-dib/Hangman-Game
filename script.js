const letters_div = document.getElementById('letters-div');
const word_div = document.getElementById('word');
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


 



