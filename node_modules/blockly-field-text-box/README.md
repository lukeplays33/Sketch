# blockly-field-text-box [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

A [Blockly](https://www.npmjs.com/package/blockly) true multiline text input.

## About

- Advanced multiline done right.
- More like native *textarea* input.
- Smart word wrap.
- No more ellipsis. Full-Text value on view and edit.
- Key code *ENTER* event adds new line.
- Line width can be configured.
- Unlimited lines.

![blockly-field-text-box](https://raw.githubusercontent.com/tomas-berg/blockly-field-text-box/main/docs/demo.png)

## Installation

### npm

```bash
npm install --save blockly-field-text-box
```

### yarn

```bash
yarn add blockly-field-text-box
```

## Build

```bash
npm run build
```

## Usage

### JavaScript

```js
import * as Blockly from 'blockly'
import {FieldTextBox} from 'blockly-field-text-box'

Blockly.Blocks['test_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Text block: ')
      .appendField(new FieldTextBox('Text value'), 'FIELDNAME')
  }
};
```

### JSON

```js
import * as Blockly from 'blockly'
import 'blockly-field-text-box'

Blockly.defineBlocksWithJsonArray([
    {
        "type": "test_field",
        "message0": "Text block: %1",
        "args0": [
            {
                "type": "field_text_box",
                "name": "FIELDNAME",
                "value": "Text value"
            }
        ]
    }])
```

### Run in browser

*You need to build the package first.*

```js
<script src="./dist/index.js"></script>
```

## License

Apache 2.0
