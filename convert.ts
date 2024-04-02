console.log('Hello, World! -----');
const yaml = require('js-yaml');
const fs = require('fs');

const inputFile = './input.yaml';
const outputFile = './output.json';

const yamlFile = fs.readFileSync(inputFile, 'utf8');
const data = yaml.load(yamlFile);
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log('data:;>>', data);
