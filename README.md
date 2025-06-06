# po2json-i18next

[![npm version](https://img.shields.io/npm/v/po2json-i18next.svg)](https://www.npmjs.com/package/po2json-i18next)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Convert Django `.po` files to i18next-compatible JSON with zero dependencies.

## Features

- 🚀 **Blazing fast** - Pure Node.js implementation
- 📦 **Zero dependencies**
- 🌍 **Automatic language detection** from PO metadata
- 💡 **Supports basic PO syntax** (msgid, msgstr)
- 🔧 **Flexible output** - CLI or programmatic use


## QuickStart

```bash

  npx po2json-i18next input.po output.json

```

### Option 2: Package Scripts
Add to your package.json:

```json
{
  "scripts": {
    "convert-po": "po2json-i18next locales/input.po public/locales/output.json"
  }
}
```

### Then run:

```bash

  npm run convert-po
  Option 4: Programmatic Use
  javascript
  const { parsePo } = require('po2json-i18next');
  const fs = require('fs');

  const poContent = fs.readFileSync('input.po', 'utf8');
  const { translations } = parsePo(poContent);

  console.log(translations); // { "Hello": "Hello", ... }

```

### CLI Options

  Parameter	Description	Example
  <input.po>	Path to source .po file	locales/en.po
  <output.json>	Path for output JSON	public/locales/en.json
  --pretty	Pretty-print JSON output	po2json input.po output.json --pretty

### Example
input.po:

  msgid "Hello"
  msgstr "Hello"

  msgid "Welcome"
  msgstr "Welcome"

output.json:

  {
    "translation": {
      "Hello": "Hello",
      "Welcome": "Welcome"
    }
  }

### Development

Clone the repository:

```bash
git clone https://github.com/your/po2json-i18next.git
cd po2json-i18next
```

Install dependencies:

```bash
  npm install
```

Run tests:

```bash
  npm test
```

### Contributing
Pull requests are welcome! For major changes, please open an issue first.

License
MIT © 2023 [Pavel Kalinin]
