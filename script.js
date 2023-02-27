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

 



