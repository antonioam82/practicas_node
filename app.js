const {frutas, dinero} = require('./frutas.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "What's up dude!",
    e : "oO",
    T : "U "
}));

frutas.forEach(item => {
    console.count(item)
 });
console.log(dinero);
