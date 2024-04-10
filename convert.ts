console.log('Hello, World! -----');
const yaml = require('js-yaml');
const fs = require('fs');

const inputFile = './input.yaml';
const outputFile = './output.json';

const test = () => {
  if (1 !== 1) {
    return 1;
  }
  if (2 === 2 && 3 === 3) {
    return 2;
  }
  console.log('test');
};

const yamlFile = fs.readFileSync(inputFile, 'utf8');
const data = yaml.load(yamlFile);
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log('data:;>>', data);
