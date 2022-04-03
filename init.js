var propertiesReader = require('properties-reader');
var properties = propertiesReader('.catv_config.ini');
var index = properties.get('main.indexpage');

console.log(index);

