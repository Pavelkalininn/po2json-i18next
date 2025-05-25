#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { parsePo, saveJson } = require('../lib/converter');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: po2json input.po output.json');
  process.exit(1);
}

const poContent = fs.readFileSync(args[0], 'utf8');
const { translations, language } = parsePo(poContent);
const outputData = {
  translation: translations
};

saveJson(args[1], outputData);
console.log(`Converted ${args[0]} -> ${args[1]}`);