const person ={
    'name':'yogi',
    'age':21,
    'height':"6'0\"",
    'speak': function(want="cookies"){
        console.log(`Meow, I want ${want}`);
    },
    talk(to="yogi"){
        console.log(`I am talking to ${to}`);
    }
}

person['favFood']="Pizza";
console.log(person['favFood']);