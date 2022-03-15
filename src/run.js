const { argv } = require('process');
const process = require('./processer');
const fs = require('fs');
console.log(argv);
main(argv);
async function main(args) {
var neew = await process.run(args[2]+'.catv');
// write neww result to file
fs.writeFile('./rendered/'+args[2]+'.html', neew, function(err) {
    if (err) throw err;
    console.log('Rendered!');
});
}