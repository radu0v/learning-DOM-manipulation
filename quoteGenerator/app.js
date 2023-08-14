// variables

let btn = document.getElementById('new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [{
    quote:`“The Society that separates its scholars from its warriors will have its thinking done by cowards and its fighting done by fools.”`,
    author:`Thucydides`
},{
    quote:`“You should punish in the same manner those who commit crimes with those who accuse falsely.”`,
    author:`Thucydides`
},{
    quote:`“Men who are capable of real action first make their plans and then go forward without hesitation while their enemies have still not made up their minds.”`,
    author:`Thucydides`
},{
    quote:`"Enthusiasm is common. Endurance is rare."`,
    author:`Angela Duckworth`
},{
    quote:`"Everything you want is on the other side of fear."`,
    author:`Jack Canfield`
},{
    quote:`"He who has a why to live for can bear with almost any how"`,
    author:`Nietzsche`
},{
    quote:`"What you have experienced, no power on earth can take from you"`,
    author:`Viktor E.Frankl`
},{
    quote:`“No man should judge unless he asks himself in absolute honesty whether in a similar situation he might not have done the same.”`,
    author:`Viktor E.Frankl`

},{
    quote:`“Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.”`,
    author:`Viktor E.Frankl`
},{
    quote:`"A person who is not inwardly prepared for the use of violence against him is always weaker than the person who is committing the crime"`,
    author:`Aleksandr Isaevič Solženicyn`
},{
    quote:`"I have often laughed at the weiklings who tought themselves good because they had no claws"`,
    author: `"Nietzsche"`
},{
    quote:`"The journey of a thousand miles begins with one step."`,
    author:`Lao Tzu`
},];

btn.addEventListener("click",function(){
    let rand = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[rand].quote;
    author.innerText = quotes[rand].author;
})
