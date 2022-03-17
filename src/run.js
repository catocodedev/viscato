const { argv,exit } = require('process');
const process = require('./processer');
const fs = require('fs');
main(argv);
async function main(args) {
    if (args.length < 3) {
        console.log('Usage: node run.js <input-filename> *without the .catv');
        exit(1);
    }
var neew = await process.run(args[2]+'.catv');
// write neww result to file
if(fs.existsSync('rendered')){

}else{
    fs.mkdirSync('rendered');
}
fs.writeFile('./rendered/'+args[2]+'.html', neew, function(err) {
    if (err) throw err;
    console.log('Rendered!');
});
}