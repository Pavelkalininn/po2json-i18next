const { expect } = require('chai');
const { parsePo } = require('../lib/converter');

describe('PO to JSON Converter', () => {
  it('should parse simple .po file', () => {
    const po = `
msgid "Hello"
msgstr "Привет"

msgid "Welcome"
msgstr "Добро пожаловать"
    `;
    const result = parsePo(po);
    expect(result.translations).to.deep.equal({
      "Hello": "Привет",
      "Welcome": "Добро пожаловать"
    });
  });
});