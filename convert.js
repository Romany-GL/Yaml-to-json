console.log('Hello, World! -----');
var yaml = require('js-yaml');
var fs = require('fs');
var inputFile = './input.yml';
var outputFile = './output.json';
var yamlFile = fs.readFileSync(inputFile, 'utf8');
var data = yaml.load(yamlFile);
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log(data);
