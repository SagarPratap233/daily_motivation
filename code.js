const messages = require('./quotes')
let size = messages.length;
// console.log(size);

function dailyquote(){
    const index = Math.floor(Math.random()*175);
    console.log(`"${messages[index].quote}" : ${messages[index].author}`);
}
dailyquote();