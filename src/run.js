const process = require('./processer');
const fs = require('fs');
main();
async function main() {
var neew = await process.run('examples/home.catv');
console.log(neew);
// write neww result to file
fs.writeFile('examples/rendered/home.html', neew, function(err) {
    if (err) throw err;
    console.log('Saved!');
});
}