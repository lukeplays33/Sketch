/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Example of including Blockly with using Webpack with
 *               defaults: (English lang & JavaScript generator).
 * @author samelh@google.com (Sam El-Husseini)
 */

import * as Blockly from 'blockly';
import * as LexicalVariables from '@mit-app-inventor/blockly-block-lexical-variables';
import {ScrollOptions, ScrollBlockDragger, ScrollMetricsManager} from '@blockly/plugin-scroll-options';
import {DisableTopBlocks} from '@blockly/disable-top-blocks';
import {FieldParameterFlydown} from '@mit-app-inventor/blockly-block-lexical-variables/src/fields/field_parameter_flydown';
import {
  FieldFlydown
} from '@mit-app-inventor/blockly-block-lexical-variables/src/fields/field_flydown';
import * as WarningHandler from '@mit-app-inventor/blockly-block-lexical-variables/src/warningHandler';
import {FieldGlobalFlydown} from '@mit-app-inventor/blockly-block-lexical-variables/src/fields/field_global_flydown';
import {
  FieldLexicalVariable,
  LexicalVariable,
} from '@mit-app-inventor/blockly-block-lexical-variables/src/fields/field_lexical_variable';
import * as Utilities from '@mit-app-inventor/blockly-block-lexical-variables/src/utilities';
import * as Shared from '@mit-app-inventor/blockly-block-lexical-variables/src/shared';

import * as ProcedureUtils from '@mit-app-inventor/blockly-block-lexical-variables/src/procedure_utils';
import {FieldNoCheckDropdown} from '@mit-app-inventor/blockly-block-lexical-variables/src/fields/field_nocheck_dropdown';

import fx from 'fireworks'

import { HolidayAPI } from 'holidayapi';

//rickroll everyone
{
    let roll = Math.floor(Math.random() * 1000) + 1
if (roll == 10) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
}
// Thunkable is da best

let thunkers = Math.floor(Math.random() * 350) + 1
if(thunkers == 1) {
window.setTimeout( function () {document.getElementById("thunkable").style.display = "none";}, 4500 );
} else {
document.getElementById("thunkable").style.display = "none";
}

//create menu
var icon = 1
var menu = document.getElementById("menu");
menu.onclick = function () {
    if(icon == 1) {
        icon = 0
        menu.style.backgroundImage =
    "url(Images/round_close_white_24dp.png)";
        document.getElementById("menuItems").style.display = "block";
    } else {
        icon = 1
        menu.style.backgroundImage =
    "url(Images/round_menu_white_24dp.png)";
            document.getElementById("menuItems").style.display = "none";
    }
    
}

//define generators

Blockly.JavaScript['get_propo'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + "." + dropdown_name2
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['api'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_t = block.getFieldValue('t');
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var e = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('e'), Blockly.VARIABLE_CATEGORY_NAME);
        var r = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('r'), Blockly.VARIABLE_CATEGORY_NAME);
        var s = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('s'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_t == "GET") {
  var code = "{\nlet " + r + " = 'No Data' \n let " + s + " = 'No Status'\n\nlet " + e + " = 'No Error'\nfetch(" + value_url + ")\n.then(async response => {\n " + r + " = response.json();\n  " + s + " = response.status; \n" + statements_name + "\n})\n.catch(error => {\n " + e + " = error\n});"
  }
  return code;
};

Blockly.JavaScript['set_prop'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_e = Blockly.JavaScript.valueToCode(block, 'e', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_name2 == "style.backgroundImage" ) {
  var code = value_name + "." + dropdown_name2 + " = `url(" + value_e + ")`;\n"
  } else if (dropdown_name2 == "opt") {
  var code = "var ddb = " + value_name + " \nfor (var i of ddb) { \nddb.remove(i);\n}\nfor (var i of" + value_e + ") {\n var opt = document.createElement('option');\nopt.innerHTML = i;\n" + value_name + ".appendChild(opt);\n}\n" 
  } else if (dropdown_name2 == "l") {
  var code = value_name + ".innerHTML = '';\nfor (var i of " + value_e + ") {\n var l = document.createElement('li');\nl.innerHTML = i;\n" + value_name + ".appendChild(l);\n}\n"
  } else {
  var code = value_name + "." + dropdown_name2 + " = " + value_e + ";\n"
  }
  return code;
};

Blockly.JavaScript['add_object'] = function(block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'to', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_to + "[" + value_i + "] = " + value_t + "\n"
  return code;
};

Blockly.JavaScript['set_object_prop'] = function(block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'to', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_t + "[" + value_i + "] = " + value_to + "\n"
  return code;
};

Blockly.JavaScript['get_object_prop'] = function(block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_t + "[" + value_i + "]"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_of_json'] = function(block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "JSON.parse(" + value_i + ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATMOIC];
};

Blockly.JavaScript['object_to_json'] = function(block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "JSON.stringify(" + value_i + ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['create_object'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "{"
  for (var i = 1; i < this.objectCount_ + 1; i++) {
  var c = Blockly.JavaScript.valueToCode(block, 'o' + i, Blockly.JavaScript.ORDER_ATOMIC);
  code = code + "\n" + c
  }
  code = code + "\n}"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_list_of_objects'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_name == "p") {
  var code = "Object.values(" + value_name + ")"
  } else {
  var code = "Object.keys(" + value_name + ")"
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['object_key_val'] = function(block) {
  var value_k = Blockly.JavaScript.valueToCode(block, 'k', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v = Blockly.JavaScript.valueToCode(block, 'v', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_k + ":" + value_v
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['before_unload'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "window.addEventListener('beforeunload', e => { \ne.preventDefault();\n" + statements_name + "\ne.returnValue = 'only old browser have this';\n});\n"
  return code;
};

Blockly.JavaScript['save_item'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =  "window.localStorage.setItem(" + value_key + ", " + value_name + ");\n"
  return code;
};

Blockly.JavaScript['emove_item'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "window.localStorage.removeItem(" + value_key + ");\n"
  return code;
};

Blockly.JavaScript['clear_storage'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "window.localStorage.clear();\n"
  return code;
};

Blockly.JavaScript['get_item'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "window.localStorage.getItem(" + value_name + ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['device_manager'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_p = block.getFieldValue('p');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_p == "d") {
  var code = "navigator.platform"
  } 
  if(dropdown_p == "imd") {
  var code = "/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)"
  }
  if(dropdown_p == "hde") {
  var code = "window.matchMedia('(prefers-color-scheme: dark)').matches"
  }  if(dropdown_p == "ictan") {
  var code = "navigator.onLine"
  } else if (dropdown_p == "l") {
  var code = "navigator.language"
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_permison_staet'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_p = block.getFieldValue('p');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var eid = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('eid'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "navigator.permissions.query({name:'" + dropdown_p + "'}).then(function(result) {\nvar " + eid + " = result.state\n" + statements_name + "\n});\n"
  return code;
};

Blockly.JavaScript['get_elapsed_time'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "end - start"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['stop_start_timer'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_t = block.getFieldValue('t');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_t == "start") {
  var code = "start = new Date();\n"
  } else {
  var code = "end = new Date();\n"
  }
  return code;
};

Blockly.JavaScript['date_get_now'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "dateManager = new Date();\n"
  return code;
};

Blockly.JavaScript['date'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_p = block.getFieldValue('p');
  // TODO: Assemble JavaScript into code variable.
  var code = "dateManager.get" + dropdown_p + "()"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['screen'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_p = block.getFieldValue('p');
  // TODO: Assemble JavaScript into code variable.
  var code = "screen." + dropdown_p
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['title_favicon'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_t = block.getFieldValue('t');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_t == "t") {
  var code = "document.title = " + value_name +  ";\n"
  } else {
    var code = `var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = ` + value_name + `;`
  }
  return code;
};

Blockly.JavaScript['console'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_y = block.getFieldValue('y');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "console." + dropdown_y + "(" + value_name +  ");\n"
  return code;
};

Blockly.JavaScript['windew_height_width'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_y = block.getFieldValue('y');
  var dropdown_w = block.getFieldValue('w');
  // TODO: Assemble JavaScript into code variable.
  var code = "window." + dropdown_y + dropdown_w
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['alert'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "alert(" + value_name + ")\n"
  return code;
};

Blockly.JavaScript['show_propmt'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "prompt(" + value_name + ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['show_confirm'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "confirm(" + value_name + ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['repplace_text'] = function(block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_i + ".replace(" + value_t + ", " + value_w + ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tet_contains'] = function(block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_i + ".includes(" + value_t + ")"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['remove_duplicates'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "[... new Set(" + value_name + ")]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['switch_case'] = function(block) {
    var value_name1 = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_case1 = Blockly.JavaScript.statementToCode(block, 'case');
  // TODO: Assemble JavaScript into code variable.
  var code = "case " + value_name1 + ": {\n" + statements_case1 + "\nbreak;\n}"
  for( var i = 1; i < this.caseCount_ + 1; i++) {
        var value_name = Blockly.JavaScript.valueToCode(block, 'c' + i, Blockly.JavaScript.ORDER_ATOMIC);
  var statements_case = Blockly.JavaScript.statementToCode(block, 'DO' + i);
      var code = code + "\ncase " + value_name + ": {\n" + statements_case + "\nbreak;\n}"
  }
  return code;
};

Blockly.JavaScript['switch2'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_case = Blockly.JavaScript.statementToCode(block, 'case');
  // TODO: Assemble JavaScript into code variable.
  var code = "switch (" + value_name + ") {\n" + statements_case + "\n}\n"
  return code;
};

Blockly.JavaScript['new_line'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "'\\r\\n'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['create_listener'] = function(block) {
  var dropdown_e = block.getFieldValue('e');
  var statements_s = Blockly.JavaScript.statementToCode(block, 's');
        var eid = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('eid'), Blockly.VARIABLE_CATEGORY_NAME);
        var et = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('et'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "function ElementsEvents (" + et + ", " + eid + ") {\n" + statements_s + "\n}\n"
  return code;
};

Blockly.JavaScript['load_asset'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "assetsBase64[" + dropdown_name + "]"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['all_elements'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_e = block.getFieldValue('e');
  // TODO: Assemble JavaScript into code variable.
  var code = "document.getElementsByClassName('" + dropdown_e + "')\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['break_and_continue'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name + ";\n"
  return code;
};

Blockly.JavaScript['forever'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "while(true) {\n" + statements_name + "\n}\n"
  return code;
};

Blockly.JavaScript['body'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.body';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['clone'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + ".cloneNode(true)"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['remove'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + ".remove();\n"
  return code;
};

Blockly.JavaScript['apppend_elem'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_b + ".appendChild(" + value_name + ");\n"
  return code;
};

Blockly.JavaScript['create_elem'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_e = block.getFieldValue('e');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var eid = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('eid'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
    if (dropdown_e == "if") {
        var code = "{\nlet " + eid + " = document.createElement('iframe');\n" + eid + ".setAttribute('src', 'https://lukeplays33.github.io/Sketch/');\n" + eid + ".style.height = window.innerHeight + 'px';\n" + eid + ".style.width = window.innerWidth + 'px';\n"
    } else if (dropdown_e == "d") {
        var code = "{\nlet " + eid + " = document.createElement('div');\n"
    } else if (dropdown_e == "i") {
        var code = "{\nlet " + eid + " = document.createElement('img');\n" + eid + ".src = 'https://i.kym-cdn.com/photos/images/newsfeed/001/473/342/633.png';\n"
    } else if (dropdown_e == "p") {
        var code = "{\nlet " + eid + " = document.createElement('p');\n" + eid + ".innerHTML = 'I am a paragraph, oh yes I am';\n"
    } else if ( dropdown_e == "b") {
        var code = "{\nlet " + eid + " = document.createElement('button');\n" + eid + ".innerHTML = 'Never gonna give you up, Never gonna let you down';\n"
    } else if ( dropdown_e == "ddb") {
        var code = "{\nlet " + eid + " = document.createElement('select');\n             var newDropdownOption = document.createElement('option');\nnewDropdownOption.value = 'value1';\nnewDropdownOption.text = 'option 1';\n" + eid + ".add(newDropdownOption);\n"
        } else if ( dropdown_e == "cp") {
            var code = "{\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'color';\n"
    } else if ( dropdown_e == "dp") {
        var code = "{\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'date';\n"
    } else if ( dropdown_e == "tp") {
        var code = "{\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'time';\n"
    } else if ( dropdown_e == "tf2") {
        var code = "{\nlet " + eid + " = document.createElement('input');\n" + eid + ".placeholder = 'This is a placeholder, oh yes this is';\n"
    } else if ( dropdown_e == "c") {
        var code = "{\nlet " + eid + " = document.createElement('canvas');\n"
    } else if (dropdown_e == "s") {
        var code = "{\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'range';\n" + eid + ".max = 100;\n" + eid + ".value = 50;\n"
    } else if ( dropdown_e == "pb") {
        var code = "{\nlet " + eid + " = document.createElement('progress');\n"
    } else if ( dropdown_e == "cb") {
        var code = "{\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'checkbox';\n"
    } else if ( dropdown_e == "rb") {
        var code = "{\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'radio';\n"
    } else if( dropdown_e == "li") {
    var code = "{\nlet " + eid + " = document.createElement('div');\n"
    } else if (dropdown_e == "fab") {
    var code = "{\nlet " + eid + " = document.createElement('div');\n"
    } else if ( dropdown_e == "ul") {
    var code = "{\nlet " + eid + " = document.createElement('ul');\n"
    }else if ( dropdown_e == "ol") {
    var code = "{\nlet " + eid + " = document.createElement('ol');\n"
    } else if (dropdown_e == "a") {
    var code = "{\nlet " + eid + " = document.createElement('a');\n" + eid + ".href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'\n" + eid + ".innerHTML = 'This Is A HyperLink' \n"
    }
    
    var code = code + eid + ".className = '" + dropdown_e + "'\n" + statements_name + "\n}\n"
    
  return code;
};

Blockly.JavaScript['game_pad_button_change'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var id = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('id'), Blockly.VARIABLE_CATEGORY_NAME);
        var axesid = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('axesid'), Blockly.VARIABLE_CATEGORY_NAME);
        var axesvalue = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('axesvalue'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "function buttonChange (" + id + "," + axesid + "," + axesvalue + ") {\n" + statements_name + "}\n"
  return code;
};

Blockly.JavaScript['game_pad_connected'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
                    var id = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('id'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "window.addEventListener('gamepadconnected', e => {\nvar gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []); var gp = gamepads[0];\n var " + id + " = gp.id;\n"  + statements_name + "\nchangeGamepadAPiButton();\n});\n"
  return code;
};

Blockly.JavaScript['game_pad_disconnected'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "window.addEventListener('gamepaddisconnected', e => {\nwindow.cancelAnimationFrame(kccb);\n"  + statements_name + "\n});\n"
  return code;
};

Blockly.JavaScript['import'] = function(block) {
  var text_n = block.getFieldValue('n');
  var text_l = block.getFieldValue('l');
  // TODO: Assemble JavaScript into code variable.
  var code = "import " + text_n + " from '" + text_l + "';\n"
  return code;
};

Blockly.JavaScript['rnaf'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var id = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('id'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "var " + id + " = window.requestAnimationFrame(function () {\n" + statements_name + "}\n);\n"
  return code;
};
    
        Blockly.JavaScript['asd'] = function(block) {
  var text_js = block.getFieldValue('js');
  // TODO: Assemble JavaScript into code variable.
  var code = text_js + "\n"
  return code;
};
        Blockly.JavaScript['asd_left_output'] = function(block) {
  var text_js = block.getFieldValue('js');
  // TODO: Assemble JavaScript into code variable.
  var code = text_js
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
        Blockly.JavaScript['try_catch'] = function(block) {
  var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
  var statements_catch = Blockly.JavaScript.statementToCode(block, 'catch');
            var e = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('error'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "try {\n" + statements_try + "\n} catch (" + e + ") {\n" + statements_catch + "}\n"
  return code;
};
        Blockly.JavaScript['eval'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "eval(" + value_name + ");\n"
  return code;
};

Blockly.JavaScript['clearint'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
        if(dropdown_name == "ct") {
        var code = "clearInterval(" + value_name + ");\n"
    } else {
        var code = "window.cancelAnimationFrame(" + value_name + ");\n"
    }
  return code;
};
        Blockly.JavaScript['set_timeout'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('timeout'), Blockly.VARIABLE_CATEGORY_NAME);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_l = Blockly.JavaScript.valueToCode(block, 'l', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_s = Blockly.JavaScript.statementToCode(block, 's');
  // TODO: Assemble JavaScript into code variable.
  var code = "var " + variable_name + " = window.setInterval( function () {\n" + statements_s + "\nif(" + value_l + ") {\n} else {\n clearInterval(" + variable_name + ");\n}\n}, " + value_name + ");\n"  
  return code;
};
        Blockly.JavaScript['open_window'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_t = block.getFieldValue('t');
  // TODO: Assemble JavaScript into code variable.
            if (dropdown_t == "int") {
                var code = "window.open(" + value_name + ");"
                } else {
                    var code = "window.location.href = " + value_name
                    }
  return code;
};

Blockly.JavaScript['custom_events'] = function(block) {
  var text_c = block.getFieldValue('c');
  var text_e = block.getFieldValue('e');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_c + ".addEventListener('" + text_e +  "', e => {\n" + statements_name + "});\n"
  return code;
};
        
Blockly.JavaScript['key_changed'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    
                var name = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('keyname'), Blockly.VARIABLE_CATEGORY_NAME);
            var code = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('keycode'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "{\nvar " + name + " = `a`\n var " + code + " = `1`\nwindow.addEventListener(`keypress`, e => {\n" + name + " = e.key;\n" + code + " = e.code;\n" + statements_name + "\n});\n}"
  return code;
};
        
        Blockly.JavaScript['window_click'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
            var x = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('mousex'), Blockly.VARIABLE_CATEGORY_NAME);
            var y = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('mousey'), Blockly.VARIABLE_CATEGORY_NAME);
            var up = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('mouseup'), Blockly.VARIABLE_CATEGORY_NAME);
            var down = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('mousedown'), Blockly.VARIABLE_CATEGORY_NAME);
                        var scroll = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('mws'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "{\nvar " + scroll + " = 0;\nvar " + x + " = 0;\n var " + y +" = 0;\nvar " + up + " = true;\nvar " + down + " = false;\nfunction mouse_change_sup (event) {\n" + statements_name + "\n}\nwindow.addEventListener('mousemove', e => {\n" +  x + " = e.x;\n" + y + " = e.y;\nmouse_change_sup();\n});\nwindow.addEventListener(`mouseup`, e =>{\n" + up + " = true;\n" + down + " = false;\nmouse_change_sup();\n});\nwindow.addEventListener(`mousedown`, e =>{\n" + up + " = false;\n" + down + " = true;\nmouse_change_sup();\n});\nwindow.addEventListener('wheel', e =>{\n" + scroll + " = e.deltaY;\nmouse_change_sup();\n});\n}\n" 
  return code;
};
        
Blockly.JavaScript['initd'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "window.addEventListener(`load`, e => {\n" + statements_name + "\n});"
  return code;
};
        Blockly.JavaScript['change_d_var'] = function(block) {
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
            value_s = value_s.replace("'", "").replace("'", "");
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
            if(Math.sign(value_t) == 1 ) {
                var code = value_s + " += " + value_t + ";\n"
                } else {
                    var code = value_s + " -= " + value_t.replace("-", " ") + ";\n"
                    }
  return code;
};
        Blockly.JavaScript['change'] = function(block) {
            var v = getVariableName(block.getFieldValue('VAR'));
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
            if(Math.sign(value_name) == 1 ) {
                var code = v + " += " + value_name + ";\n"
                } else {
                    var code = v + " -= " + value_name.replace(`-`, ` `) + ";\n"
                    }
  return code;
};
        
Blockly.JavaScript['create_dynamic_var'] = function(block) {
  var value_s = Blockly.JavaScript.valueToCode(block, 's', Blockly.JavaScript.ORDER_ATOMIC);
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "var " + value_s.replace("'", "").replace("'", "") + " = " + value_t + ";\n" 
  return code;
};

        Blockly.JavaScript['get_d_var'] = function(block) {
  var value_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
            value_g = value_g.replace("'", "").replace("'", "");
  // TODO: Assemble JavaScript into code variable.
  var code = value_g
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
        
        Blockly.JavaScript['logic_compare'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + " " + dropdown_name + " " + value_2
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
        Blockly.JavaScript['logic_boolean'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
        Blockly.JavaScript['logic_null'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'null';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
        Blockly.JavaScript['logic_negate'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "!" + value_name
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
        Blockly.JavaScript['logic_operation'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + " " + dropdown_name + " " + value_2
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//variables

var events = ["initd", 'window_click', 'key_changed', 'game_pad_connected','game_pad_disconnected', 'game_pad_button_change', 'before_unload'];
var loops = ['controls_repeat', 'controls_repeat_ext', 'controls_forEach', 'controls_for', 'controls_whileUntil', 'forever'];
var projects = [];

var secretsMSG = ["I am a monster", "Well hello there, If you've found this then congratulations there is more to see than you think, Just giving you a hint ;).", "I'll marry her, I'lljust have to finda way", "02 x Sketch", "I'm in love with a fairytale, even tho it hurts, but I don't care if I lose my mind, I'm already cursed.","Hentai", "Hello There", "What is this?, I hate this feeling", "I think Sketch would make a great Game Theory episode","Zero Two is kinda Hot"];

var project = "";

function html () {
  var gen = `<!DOCTYPE html>
<title>`+ window.localStorage.getItem("projectName" + project) + `<\/title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" type="image/jpg" href="` + window.localStorage.getItem("icon" + project) + `"\/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
html, body {
margin: 0px;
  height: 100%;
width: 100%;
}

.li {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #008dcd; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fab {
  width: 58px;
  height: 58px;
  background-color: #008dcd;
  border-radius: 50%;
  font-size: 50px;
  color: white;
  text-align: center;

  position: fixed;
  right: 16px;
  bottom: 16px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
    z-index: 1;
}

<\/style>
<body>
<\/body>
<script type="module">
let spalsh = document.createElement('img');
spalsh.src = "https://media.discordapp.net/attachments/898978597996466189/900743720905900032/60d473a38f959300118b9c10.png";
spalsh.style.width = '35px';
spalsh.style.height = '35px';
spalsh.style.margin = '8px';
spalsh.style.position = 'fixed';
document.body.appendChild(spalsh);
spalsh.onclick = function () {
window.open("https://lukeplays33.github.io/Sketch/");
}
var kccb = '';
var dateManager = new Date();
var start, end
function changeGamepadAPiButton () {
var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
var gp = gamepads[0];
for (var i = 0; i < gp.buttons.length; i++) {
if (gp.buttons[i] == 0 || gp.buttons[i].value > 0 || gp.buttons[i].pressed == true) {
buttonChange(i,0 ,0);
}
}
for (var i = 0; i < gp.axes.length; i++) {
if (gp.axes[i] != 0){
buttonChange(0,i,gp.axes[i]);
}
}
kccb = window.requestAnimationFrame(changeGamepadAPiButton);
}
`
  return gen
}

const reader = new FileReader();

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(), 0, 1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var dd = new Date();

var assetsBlockDropdown = [["UploadAsset","OPTIONNAME"]];
var assetsBase64 = [];

var menuSize = navigator.userAgentData.mobile ? "420px" : "350px"

// change hue
Blockly.HSV_SATURATION = 0.56;
Blockly.HSV_VALUE = 0.83;

// Inject Blockly.

document.getElementById("blocklyContainer").style.height = (String((window.innerHeight) - 50) + 'px');
document.getElementById("editor").style.height = (String((window.innerHeight) - 50) + 'px');

const workspace = Blockly.inject("blocklyDiv", {
    grid:
         {spacing: window.localStorage.getItem("grid"),
          length: 8,
          colour: '#ccc',
          snap: window.localStorage.getItem("snap")
         },
  trashcan: false,
    
    theme: {
      'blockStyles' : {
          "logic_blocks": {
            "colourPrimary": "#F3AA44"
         },
                    "loop_blocks": {
            "colourPrimary": "#F3AA44"
         },
         "list_blocks": {
            "colourPrimary": "#76afc9"
         },
                   "math_blocks": {
            "colourPrimary": "#6789cc"
         },
                   "text_blocks": {
            "colourPrimary": "#DF6078"
         },
                             "colour_blocks": {
            "colourPrimary": "#7F7F7F"
         },
                                                 "variable_blocks": {
            "colourPrimary": "#CD5E94"
         },
                                                 "procedure_blocks": {
            "colourPrimary": "#7560A4"
         }
      },
      'componentStyles' : {
                   'flyoutOpacity': '0.0',
          'scrollbarOpacity' : '0.0',
      }
   },

  toolbox: document.getElementById("toolbox"),

  plugins: {
    // These are both required.

    blockDragger: ScrollBlockDragger,

    metricsManager: ScrollMetricsManager
  },

  move: {
    scrollbars: {
      horizontal: true,

      vertical: true
    },

    drag: true,

    wheel: true
  },

  zoom: {
    controls: false,

    wheel: false,

    startScale: 0.9,

    maxScale: 3,

    minScale: 0.3,

    scaleSpeed: 1.2,

    pinch: false
  },
  horizontalLayout: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ),

  toolboxPosition: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "end"
    : "start"
});

//init lexical var

LexicalVariables.init(workspace);

// Initialize scroll plugin.

const scrollOptionsPlugin = new ScrollOptions(workspace);

scrollOptionsPlugin.init({ enableWheelScroll: true, enableEdgeScroll: true });

// Add the disableOrphans event handler. This is not done automatically by
// the plugin and should be handled by your application.
workspace.addChangeListener(Blockly.Events.disableOrphans);

// The plugin must be initialized before it has any effect.
const disableTopBlocksPlugin = new DisableTopBlocks();
disableTopBlocksPlugin.init();

//initilize menu
workspace.configureContextMenu = configureContextMenu;

document.getElementById("blocklyContainer").style.display = "none";

// start site
function start() {
    var s = Math.floor(Math.random() * 450) + 1
    if (s == 1) {
        document.getElementById("challange").innerHTML = secretsMSG[Math.floor(Math.random() * secretsMSG.length)]
    } else {
    async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        document.getElementById("challange").innerHTML = data.content + " ~ " + data.author
    } else {
        document.getElementById("challange").innerHTML = secretsMSG[Math.floor(Math.random() * secretsMSG.length)]
    }
    }
    updateQuote();
    }
    
    document.getElementById("menu").style.display = "none";
    
                      document.getElementById("project").style.display = "none";
        document.getElementById("projectName").style.display = "none";
        document.getElementById("projectIcon").style.display = "none";
    document.getElementById("delete").style.display = "none";
    
            document.getElementById("reset").style.display = "none";
    document.getElementById("goHome").style.display = "none";
    
    
  document.getElementById("GoHome2").style.backgroundImage =
    "url(Images/round_home_white_24dp.png)";
    
    document.getElementById("upload").style.backgroundImage =
    "url(Images/round_file_Upload_white.png)";
    
  document.getElementById("Test").style.backgroundImage =
    "url(Images/round_play_arrow_white_24dp.png)";
  
  document.getElementById("download").style.backgroundImage =
    "url(Images/round_file_download_white_24dp.png)";
    
    document.getElementById("ssetings").style.backgroundImage =
    "url(Images/61818b07d54ef50010e42587-1.png)";
    
     document.getElementById("Switch").style.backgroundImage =
    "url(Images/round_extension_white.png)";
    
    document.getElementById("ssetings").style.display = "none";
    document.getElementById("GoHome2").style.display = "none";
        document.getElementById("download").style.display = "none";
        document.getElementById("Test").style.display = "none";
        document.getElementById("upload").style.display = "none";
    document.getElementById("Switch").style.display = "none";

  document.getElementById("Settings").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("Projects-list").style.display = "none";
  document.getElementById("home").style.display = "none";
    
  window.setTimeout(function () {
      
      document.getElementById("menu").style.display = "block";
          if(window.localStorage.getItem("welcome") == "" || window.localStorage.getItem("welcome") == null) {
        document.getElementById("welcome").style.display = "block";
    }
      var dismiss = document.getElementById("dismiss");
      dismiss.onclick = function (){
        document.getElementById("welcome").style.display = "none";
                  window.localStorage.setItem("welcome", true);
      }
      var join = document.getElementById("join");
      join.onclick=function () {
          window.open("https://discord.gg/r4jMcw7H4g");
      }
      
            var dis = document.getElementById("dis");
      dis.onclick=function () {
          window.open("https://discord.gg/r4jMcw7H4g");
      }
      
                  var diss = document.getElementById("dismisss");
      diss.onclick=function () {
          document.getElementById("creditsss").style.display = "none";
      }
      
            var docs = document.getElementById("docs");
      docs.onclick=function () {
          window.open("https://lukehoogenboom.gitbook.io/sketch-docs/");
      }
      
                  var docss = document.getElementById("docss");
      docss.onclick=function () {
          window.open("https://lukehoogenboom.gitbook.io/sketch-docs/");
      }
      
    document.getElementById("div").style.display = "none";
    document.getElementById("challange").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("home").style.display = "block";
    if (!window.localStorage.getItem("projects") == "") {
      projects = JSON.parse(window.localStorage.getItem("projects"));
            if(projects.length == 0 ) {
    } else {
        document.getElementById("no_project").style.display = "none";
    }
      for (var i of projects) {
        var neww_list_item = document.getElementById("Projects-list");
        var itemm = neww_list_item.cloneNode(true);
        neww_list_item.id = i;
        neww_list_item.style.display = "block";
        neww_list_item.onclick = lClick;
        const select = neww_list_item.querySelector("#Title");
        select.id = "Title" + i;
        document.getElementById("Title" + i).innerHTML = window.localStorage.getItem("projectName" + i );

        const select2 = neww_list_item.querySelector("#Description");
        select2.id = "Description" + i;
        document.getElementById(
          "Description" + i
        ).innerHTML = window.localStorage.getItem("created" + i);

        const select3 = neww_list_item.querySelector("#icon");
        select3.id = "icon" + i;
        document.getElementById("icon" + i).src = window.localStorage.getItem(
          "icon" + i
        );
        document.getElementById("home").appendChild(itemm);
      }
    }
  }, 6000);
}
start();

//create new project
function new_projectt() {
  var add = document.getElementById("c");
  add.onchange = function () {
      if(add.value == "Create New Project") {
    var new_project = prompt("New Project Name");
    if (new_project === `` || new_project == null) {
    } else {
        document.getElementById("no_project").style.display = "none";
      var new_list_item = document.getElementById("Projects-list");
      var item = new_list_item.cloneNode(true);
      new_list_item.id = new_project;
      new_list_item.style.display = "block";
 new_list_item.onclick = lClick;
      const select = new_list_item.querySelector("#Title");
      select.id = "Title" + new_project;
      document.getElementById("Title" + new_project).innerHTML = new_project;
        window.localStorage.setItem("projectName" + new_project, new_project);

      const select2 = new_list_item.querySelector("#Description");
      select2.id = "Description" + new_project;
      var date = new Date();
      document.getElementById("Description" + new_project).innerHTML =
        "Created: " +
        [
          days[dd.getDay()],
          " / ",
          monthNames[dd.getMonth()],
          " / ",
          dd.getFullYear(),
          " / ",
          dd.getHours(),
          ":",
          dd.getMinutes(),
          ":",
          dd.getMilliseconds()
        ].join("");
      projects.push(new_project);
      window.localStorage.setItem("projects", JSON.stringify(projects));
      window.localStorage.setItem(
        "created" + new_project,
        document.getElementById("Description" + new_project).innerHTML
      );

      const select3 = new_list_item.querySelector("#icon");
      select3.id = "icon" + new_project;

      window.localStorage.setItem(
        "icon" + new_project,
        document.getElementById("icon" + new_project).src
      );
      document.getElementById("home").appendChild(item);
      
        if (window.localStorage.getItem("open") == "") {
    
  } else {
       document.getElementById("home").style.display = "none";
          document.getElementById("blocklyContainer").style.display = "block";
          project = new_project
      workspace.clear();
      
      
      document.getElementById("menuItems").style.height = menuSize;
      
          document.getElementById("ssetings").style.display = "block";
    document.getElementById("GoHome2").style.display = "block";
        document.getElementById("download").style.display = "block";
        document.getElementById("Test").style.display = "block";
        document.getElementById("upload").style.display = "block";
      
                  document.getElementById("create").style.display = "none";
    document.getElementById("settings").style.display = "none";
  }
    }  
      }  else {
          let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      input.accept = "text/*";
      // you can use this method to get file and perform respective operations
      var files = Array.from(input.files);
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        reader.addEventListener(
          "load",
          function () {
                  var new_project = files[i].name.replace(".xml", "");
    if (new_project === `` || new_project == null) {
    } else {
        document.getElementById("no_project").style.display = "none";
      var new_list_item = document.getElementById("Projects-list");
      var item = new_list_item.cloneNode(true);
      new_list_item.id = new_project;
      new_list_item.style.display = "block";
 new_list_item.onclick = lClick;
      const select = new_list_item.querySelector("#Title");
      select.id = "Title" + new_project;
      document.getElementById("Title" + new_project).innerHTML = new_project;
        window.localStorage.setItem("projectName" + new_project, new_project);

      const select2 = new_list_item.querySelector("#Description");
      select2.id = "Description" + new_project;
      var date = new Date();
      document.getElementById("Description" + new_project).innerHTML =
        "Created: " +
        [
          days[dd.getDay()],
          " / ",
          monthNames[dd.getMonth()],
          " / ",
          dd.getFullYear(),
          " / ",
          dd.getHours(),
          ":",
          dd.getMinutes(),
          ":",
          dd.getMilliseconds()
        ].join("");
      projects.push(new_project);
      window.localStorage.setItem("projects", JSON.stringify(projects));
      window.localStorage.setItem(
        "created" + new_project,
        document.getElementById("Description" + new_project).innerHTML
      );

      const select3 = new_list_item.querySelector("#icon");
      select3.id = "icon" + new_project;

      window.localStorage.setItem(
        "icon" + new_project,
        document.getElementById("icon" + new_project).src
      );
      document.getElementById("home").appendChild(item);
      
        if (window.localStorage.getItem("open") == "") {
    
  } else {
                    window.localStorage.setItem(window.localStorage.getItem("created" + new_project) + "blocks", reader.result);
      
       document.getElementById("home").style.display = "none";
          document.getElementById("blocklyContainer").style.display = "block";
          project = new_project
      workspace.clear();
      
      
      document.getElementById("menuItems").style.height = menuSize;
        
      var xml = Blockly.Xml.textToDom(window.localStorage.getItem(window.localStorage.getItem("created" + project) + "blocks"));
    Blockly.Xml.domToWorkspace(xml, workspace);
      
          document.getElementById("ssetings").style.display = "block";
    document.getElementById("GoHome2").style.display = "block";
        document.getElementById("download").style.display = "block";
        document.getElementById("Test").style.display = "block";
        document.getElementById("upload").style.display = "block";
      
                  document.getElementById("create").style.display = "none";
    document.getElementById("settings").style.display = "none";
  }
    }  
                            window.localStorage.setItem(window.localStorage.getItem("created" + new_project) + "blocks", reader.result);
          },
          false
        );
        reader.readAsText(files[i]);
      }
    };
    input.click();
}
  };
}
new_projectt();

// add search projects option
function search() {
  document.getElementById("search").addEventListener("input", updateValue);

  function updateValue(e) {
    for (var i of projects) {
      document.getElementById(i).style.display = "none";
    }
    if (document.getElementById("search").value == "") {
      for (var i of projects) {
        document.getElementById(i).style.display = "block";
      }
    } else {
      for (var i of projects) {
        if (
          document
            .getElementById("Title" + i)
            .innerHTML.includes(document.getElementById("search").value)
        ) {
          document.getElementById(i).style.display = "block";
        }
      }
    }
  }
}
search();

// add settings page
function settings() {
var credits = document.getElementById("credits");
credits.onclick = function () {
document.getElementById("creditsss").style.display = "block";
}
    var vs = document.getElementById("vsStyle");
    vs.onclick = function () {
        if(window.localStorage.getItem("vsStyle") == null || window.localStorage.getItem("vsStyle") == "" ) {
            vs.innerHTML = "Use Fullscreen Visual Editor: On"
            window.localStorage.setItem("vsStyle", true);
        } else {
            vs.innerHTML = "Use Fullscreen Visual Editor: Off"
                window.localStorage.setItem("vsStyle", "");
        }
            if(!window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile) {
document.getElementById("editor").style.width = window.innerWidth + "px"
        } else {
            document.getElementById("editor").style.width = "350px"
        }
    }
    
    if(navigator.userAgentData.mobile) {
        document.getElementById("vsStyle").style.display = "none";
    } else {
        document.getElementById("Switch").style.opacity = "0.0";
    }
    
  var bgimage = document.getElementById("bgimage");
  bgimage.onclick = function () {
    if (!window.localStorage.getItem("BGImage") == "") {
      document.getElementById("bgimage").innerHTML =
        "Custom Background Image: Off";
      window.localStorage.setItem("BGImage", "");
      document.body.style.backgroundImage = "url(``)";
    } else {
      document.getElementById("BGImage").click();
    }
  };

  var BGImage = document.getElementById("BGImage");
  BGImage.onclick = function () {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      input.accept = "image/*";
      // you can use this method to get file and perform respective operations
      var files = Array.from(input.files);
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        reader.addEventListener(
          "load",
          function () {
            document.body.style.backgroundImage = "url(" + reader.result;
            +")";
            window.localStorage.setItem("BGImage", reader.result);
            document.getElementById("bgimage").innerHTML =
              "Custom Background Image: On";
          },
          false
        );
        reader.readAsDataURL(files[i]);
      }
    };
    input.click();
  };

  var theme = document.getElementById("theme");
  theme.onclick = function () {
    if (window.localStorage.getItem("DarkMode") == "") {
      window.localStorage.setItem("DarkMode", true);
      document.body.style.backgroundColor = "black";
      
      document.getElementById("header").style.backgroundColor = "#424242";
        
              document.getElementById("menu").style.backgroundColor = "#424242";
      document.getElementById("menuItems").style.backgroundColor = "#424242";
      
      document.getElementById("Test").style.backgroundColor = "#424242";
      document.getElementById("goHome").style.backgroundColor = "#424242";
      
      document.getElementById("dis").style.backgroundColor = "#424242";
      document.getElementById("docss").style.backgroundColor = "#424242";

      document.getElementById("GoHome2").style.backgroundColor = "#424242";

      document.getElementById("open").style.backgroundColor = "#424242";
      
            document.getElementById("credits").style.backgroundColor = "#424242";
    
    document.getElementById("e").style.color = "white";
        
        document.getElementById("no_project").style.color = "white";
        
      document.getElementById("add").style.backgroundColor = "#424242";

      document.getElementById("settings").style.backgroundColor = "#424242";

      document.getElementById("share").style.backgroundColor = "#424242";

      document.getElementById("reset").style.backgroundColor = "#424242";

      document.getElementById("BGImage").style.backgroundColor = "#424242";

      document.getElementById("bgimage").style.backgroundColor = "#424242";
      document.getElementById("theme").style.backgroundColor = "#424242";
      
      document.getElementById("download").style.backgroundColor = "#424242";
        
        document.getElementById("ssetings").style.backgroundColor = "#424242";
        
        document.getElementById("upload").style.backgroundColor = "#424242";
        
        document.getElementById("snap").style.backgroundColor = "#424242";
    document.getElementById("grid").style.backgroundColor = "#424242";
        document.getElementById("vsStyle").style.backgroundColor = "#424242";

      document.getElementById("theme").innerHTML = "Dark Theme: On";

      document.getElementById("siteSettings").style.color = "white";

      document.getElementById("challange").style.color = "white";

      document.getElementById("refrence").style.color = "white";
      document.getElementById("loading").style.borderTop = "8px solid #424242";

      document.getElementById("logo").src =
        "https://media.discordapp.net/attachments/898978597996466189/911561074178949150/Untitled116.png";
        
              document.getElementById("project").style.color = "white";
      document.getElementById("projectIcon").style.backgroundColor = "#424242";
        
        document.getElementById("delete").style.backgroundColor = "#ad0e0e";
        
        document.getElementById("yt").style.backgroundColor = "#424242";
      document.getElementById("twitter").style.backgroundColor = "#424242";
    } else {
      window.localStorage.setItem("DarkMode", "");
      document.body.style.backgroundColor = "white";
      
      document.getElementById("open").style.backgroundColor = "#008dcd";
      
            document.getElementById("dis").style.backgroundColor = "#008dcd";
      document.getElementById("docss").style.backgroundColor = "#008dcd";
      
      document.getElementById("yt").style.backgroundColor = "#008dcd";
      document.getElementById("twitter").style.backgroundColor = "#008dcd";
      
      document.getElementById("credits").style.backgroundColor = "#008dcd";
    
    document.getElementById("e").style.color = "#008dcd";
      
      document.getElementById("header").style.backgroundColor = "#008dcd";
        
        document.getElementById("ssetings").style.backgroundColor = "#008dcd";
        
        document.getElementById("no_project").style.color = "#008dcd";

      document.getElementById("Test").style.backgroundColor = "#008dcd";
      document.getElementById("goHome").style.backgroundColor = "#008dcd";
        
        document.getElementById("vsStyle").style.backgroundColor = "#008dcd";

        document.getElementById("upload").style.backgroundColor = "#008dcd";
        
      document.getElementById("GoHome2").style.backgroundColor = "#008dcd";
        
        document.getElementById("snap").style.backgroundColor = "#008dcd";
    document.getElementById("grid").style.backgroundColor = "#008dcd";
        
              document.getElementById("menu").style.backgroundColor = "#008dcd";
      document.getElementById("menuItems").style.backgroundColor = "#008dcd";

      document.getElementById("add").style.backgroundColor = "#008dcd";

      document.getElementById("BGImage").style.backgroundColor = "#008dcd";

      document.getElementById("share").style.backgroundColor = "#008dcd";
      
      document.getElementById("download").style.backgroundColor = "#008dcd";
      document.getElementById("bgimage").style.backgroundColor = "#008dcd";
      document.getElementById("theme").style.backgroundColor = "#008dcd";

      document.getElementById("theme").innerHTML = "Dark Theme: Off";

      document.getElementById("siteSettings").style.color = "#008dcd";

      document.getElementById("challange").style.color = "#008dcd";

      document.getElementById("refrence").style.color = "#008dcd";
      document.getElementById("settings").style.backgroundColor = "#008dcd";
      document.getElementById("reset").style.backgroundColor = "#008dcd";
      document.getElementById("logo").src =
        "https://media.discordapp.net/attachments/898978597996466189/909471139921793044/Untitled183_20210624211409.png";

      document.getElementById("loading").style.borderTop = "8px solid #008dcd";
        
              document.getElementById("project").style.color = "#008dcd";
      document.getElementById("projectIcon").style.backgroundColor = "#008dcd";
        document.getElementById("delete").style.backgroundColor = "#fc0303";
    }
  };
    
    var snap = document.getElementById("snap");
    snap.onclick = function () {
        if (window.localStorage.getItem("snap") == "false" || window.localStorage.getItem("snap") == null ) {
            window.localStorage.setItem("snap", true);
            snap.innerHTML = "Snap To Place: On"
        } else {
            window.localStorage.setItem("snap", "false");
            snap.innerHTML = "Snap To Place: Off"
        }
        window.location.reload();
    }

    var grid = document.getElementById("grid");
    grid.onclick = function () {
        if (window.localStorage.getItem("grid") == 0 || window.localStorage.getItem("grid") == null) {
            window.localStorage.setItem("grid", 40);
            grid.innerHTML = "Grid: On"
        } else {
            window.localStorage.setItem("grid", 0);
            grid.innerHTML = "Grid: Off"
        }
        window.location.reload();
    }

  var settings = document.getElementById("settings");

  settings.onclick = function () {
  document.getElementById("goHome").style.backgroundImage = "url(Images/round_home_white_24dp.png)";
  
    document.getElementById("home").style.display = "none";
    document.getElementById("Settings").style.display = "block";
      
                  document.getElementById("reset").style.display = "block";
    document.getElementById("goHome").style.display = "block";
      
                  document.getElementById("create").style.display = "none";
    document.getElementById("settings").style.display = "none";
  };

  var goHome = document.getElementById("goHome");

  goHome.onclick = function () {
      
                                  document.getElementById("reset").style.display = "none";
    document.getElementById("goHome").style.display = "none";
      
      if (project == "") {
          
                    document.getElementById("goHome").style.backgroundImage = "url(Images/round_home_white_24dp.png)";
          
    document.getElementById("home").style.display = "block";
    document.getElementById("Settings").style.display = "none";
          
                            document.getElementById("reset").style.display = "none";
    document.getElementById("goHome").style.display = "none";
      
                  document.getElementById("create").style.display = "block";
    document.getElementById("settings").style.display = "block";
          
                                  document.getElementById("ssetings").style.display = "none";
    document.getElementById("GoHome2").style.display = "none";
        document.getElementById("download").style.display = "none";
        document.getElementById("Test").style.display = "none";
        document.getElementById("upload").style.display = "none";
      
                  document.getElementById("create").style.display = "block";
    document.getElementById("settings").style.display = "block";
          
          
      } else { 
          
          document.getElementById("goHome").style.backgroundImage = "url(Images/round_edit_white.png)";
          
          document.getElementById("menuItems").style.height = menuSize;
          
              document.getElementById("blocklyContainer").style.display = "block";
    document.getElementById("Settings").style.display = "none";
          
                  document.getElementById("project").style.display = "none";
        document.getElementById("projectName").style.display = "none";
        document.getElementById("projectIcon").style.display = "none";
          document.getElementById("delete").style.display = "none";
          
                        document.getElementById("ssetings").style.display = "block";
    document.getElementById("GoHome2").style.display = "block";
        document.getElementById("download").style.display = "block";
        document.getElementById("Test").style.display = "block";
        document.getElementById("upload").style.display = "block";
          document.getElementById("Switch").style.display = "block";
      
                  document.getElementById("create").style.display = "none";
    document.getElementById("settings").style.display = "none";
          
                            document.getElementById("reset").style.display = "none";
    document.getElementById("goHome").style.display = "none";
      }
      
  };
  
  var yt = document.getElementById("yt");
  yt.onclick = function () {
  window.open("https://www.youtube.com/channel/UCdI5Lpnho7khE1DnDyrD6Ig");
  }
  
    var twitter = document.getElementById("twitter");
  twitter.onclick = function () {
  window.open("https://twitter.com/Sketch27295830");
  }

  var reset = (document.getElementById("reset").onclick = function () {
    if (confirm("WARNING: If you continue all data will be reset.")) {
      window.localStorage.clear();
      window.location.reload();
    } else {
    }
  });
  var share = document.getElementById("share");
  share.onclick = function () {
    navigator.share({
      title: "Sketch",
      text: "Create fantastic Games and Websites using Sketch!",
      url: "https://lukeplays33.github.io/Sketch/"
    });
  };
  
  var open = document.getElementById("open");
  open.onclick = function () {
    if (window.localStorage.getItem("open") == "") {
      document.getElementById("open").innerHTML =
      "Open editor after new project has been created: On";
      window.localStorage.setItem("open", true);
    } else {
      document.getElementById("open").innerHTML =
      "Open editor after new project has been created: Off";
      window.localStorage.setItem("open", "");
    }
  }
    
    var rename = document.getElementById("projectName");
    rename.addEventListener("input", e => {
        window.localStorage.setItem("projectName" + project, document.getElementById("projectName").value);
        document.getElementById("Title" + project).innerHTML = document.getElementById("projectName").value
        document.getElementById("project").innerHTML = document.getElementById("projectName").value
    });
    
    var changeFav = document.getElementById("projectIcon");
    changeFav.onclick = function () {
         let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      input.accept = "image/*";
      // you can use this method to get file and perform respective operations
      var files = Array.from(input.files);
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        reader.addEventListener(
          "load",
          function () {
              window.localStorage.setItem("icon" + project, reader.result);
              document.getElementById("icon" + project).src = reader.result
          },
          false
        );
        reader.readAsDataURL(files[i]);
      }
    };
    input.click();
    }
    
    var del = document.getElementById("delete");
    del.onclick = function () {
        if(confirm("Delete Project?")) {
            var p = projects.indexOf(project);
            projects.splice(p, 1);
            window.localStorage.setItem("projects", JSON.stringify(projects));
            
                        var d = document.getElementById(project);
            d.remove();
            
                          document.getElementById("home").style.display = "block";
    document.getElementById("Settings").style.display = "none";
          
                  document.getElementById("project").style.display = "none";
        document.getElementById("projectName").style.display = "none";
        document.getElementById("projectIcon").style.display = "none";
          document.getElementById("delete").style.display = "none";
            
                        if(projects.length == 0 ) {
                            document.getElementById("no_project").style.display = "block";
    } else {
    }
        }
    }
}
settings();

function setBGImage() {
  if (window.localStorage.getItem("BGImage") == "" || window.localStorage.getItem("BGImage") == null) {
    document.getElementById("bgimage").innerHTML =
      "Custom Background Image: Off";
  } else {
    document.body.style.backgroundImage =
      "url(" + window.localStorage.getItem("BGImage") + ")";
    document.getElementById("bgimage").innerHTML =
      "Custom Background Image: On";
  }
}

setBGImage();

function Dtheme() {
  if (window.localStorage.getItem("DarkMode") == "true") {
      
      document.getElementById("no_project").style.color = "white";
    
    document.body.style.backgroundColor = "black";
    document.getElementById("header").style.backgroundColor = "#424242";
      
      document.getElementById("upload").style.backgroundColor = "#424242";
    
    document.getElementById("download").style.backgroundColor = "#424242";
    
    document.getElementById("credits").style.backgroundColor = "#424242";
    
    document.getElementById("Test").style.backgroundColor = "#424242";
    document.getElementById("goHome").style.backgroundColor = "#424242";
    
    document.getElementById("yt").style.backgroundColor = "#424242";
      document.getElementById("twitter").style.backgroundColor = "#424242";
      
      document.getElementById("snap").style.backgroundColor = "#424242";
    document.getElementById("grid").style.backgroundColor = "#424242";
      document.getElementById("vsStyle").style.backgroundColor = "#424242";

    document.getElementById("GoHome2").style.backgroundColor = "#424242";
      
      document.getElementById("ssetings").style.backgroundColor = "#424242";

    document.getElementById("add").style.backgroundColor = "#424242";

    document.getElementById("settings").style.backgroundColor = "#424242";
    
    document.getElementById("open").style.backgroundColor = "#424242";
    
    document.getElementById("e").style.color = "white";

    document.getElementById("BGImage").style.backgroundColor = "#424242";

    document.getElementById("bgimage").style.backgroundColor = "#424242";

    document.getElementById("theme").style.backgroundColor = "#424242";

    document.getElementById("share").style.backgroundColor = "#424242";

    document.getElementById("theme").innerHTML = "Dark Theme: On";

    document.getElementById("siteSettings").style.color = "white";
      
      document.getElementById("project").style.color = "white";
      document.getElementById("projectIcon").style.backgroundColor = "#424242";
      
            document.getElementById("dis").style.backgroundColor = "#424242";
      document.getElementById("docss").style.backgroundColor = "#424242";

    document.getElementById("refrence").style.color = "white";
    document.getElementById("challange").style.color = "white";

    document.getElementById("loading").style.borderTop = "8px solid #424242";

    document.getElementById("logo").src =
      "Images/Untitled116-1.png";
      
      document.getElementById("delete").style.backgroundColor = "#ad0e0e";

    document.getElementById("reset").style.backgroundColor = "#424242";
      
      document.getElementById("menu").style.backgroundColor = "#424242";
      document.getElementById("menuItems").style.backgroundColor = "#424242";
  } else {
      document.getElementById("delete").style.backgroundColor = "#fc0303";
  }
}
Dtheme();

//BGImage from URL
function BGIfURL() {
  document.getElementById("BGImageURL").addEventListener("input", updateValue);
  function updateValue(e) {
    document.body.style.backgroundImage =
      "url(" + document.getElementById("BGImageURL").value + ")";
    window.localStorage.setItem(
      "BGImage",
      document.getElementById("BGImageURL").value
    );
    document.getElementById("bgimage").innerHTML =
      "Custom Background Image: On";
  }
}
BGIfURL();

function editor() {
    var s = document.getElementById("Switch");
    var cl = 0
    s.onclick = function () {
        if(cl == 0) {
            cl = 1
            s.style.backgroundImage = "url(Images/round_edit_white.png)";
            document.getElementById("editor").style.display = "none";
        } else {
            cl = 0
            s.style.backgroundImage = "url(Images/round_extension_white.png)";
            document.getElementById("editor").style.display = "block";
        }
    }
  var goHome = document.getElementById("GoHome2");
goHome.onclick = function () {
        
    document.getElementById("menuItems").style.height = "170px";
    
  document.getElementById("home").style.display = "block";
  document.getElementById("blocklyContainer").style.display = "none";
  project = "";
              document.getElementById("ssetings").style.display = "none";
    document.getElementById("GoHome2").style.display = "none";
        document.getElementById("download").style.display = "none";
        document.getElementById("Test").style.display = "none";
        document.getElementById("upload").style.display = "none";
        document.getElementById("Switch").style.display = "none";
      
                  document.getElementById("create").style.display = "block";
    document.getElementById("settings").style.display = "block";
    
                                document.getElementById("reset").style.display = "none";
    document.getElementById("goHome").style.display = "none";
    

};
  var test = document.getElementById("Test");
  test.onclick = function () {
     if(!getWarnings().length == 0) {
          if(confirm('WARNING: there are ' + getWarnings().length + ' warnings found.\nAre you sure you want to coninue testing?\nTesting with warnings may break your project.')) {
    var w = window.open();
w.document.open();
    w.document.write(html() + Blockly.JavaScript.workspaceToCode(workspace) + "<\/script>");
    w.document.close();
          }
      } else {
              var w = window.open();
w.document.open();
    w.document.write(html() + Blockly.JavaScript.workspaceToCode(workspace) + "<\/script>");
    w.document.close();
      }
  }
  var d = document.getElementById("down");
  d.onchange = function () {
      if(d.value == "Project HTML") {
    downloadHTML();
      } else {
                  var dom = Blockly.Xml.workspaceToDom(workspace);
                  var t = Blockly.Xml.domToText(dom);
          download(window.localStorage.getItem("projectName" + project) + ".xml", t);
          }
  }
    
    var se = document.getElementById("ssetings");
    se.onclick = function () {
            document.getElementById("blocklyContainer").style.display = "none";
    document.getElementById("Settings").style.display = "block";
        
        document.getElementById("project").style.display = "block";
        document.getElementById("projectName").style.display = "block";
        document.getElementById("projectIcon").style.display = "block";
        document.getElementById("delete").style.display = "block";
        
        document.getElementById("project").innerHTML = window.localStorage.getItem("projectName" + project)
        document.getElementById("projectName").value = window.localStorage.getItem("projectName" + project)
        
                      document.getElementById("ssetings").style.display = "none";
    document.getElementById("GoHome2").style.display = "none";
        document.getElementById("download").style.display = "none";
        document.getElementById("Test").style.display = "none";
        document.getElementById("upload").style.display = "none";
        document.getElementById("Switch").style.display = "none";
      
                  document.getElementById("reset").style.display = "block";
    document.getElementById("goHome").style.display = "block";
        
        document.getElementById("menuItems").style.height = "170px";
        
            if(project == "") {
       document.getElementById("goHome").style.backgroundImage = "url(Images/round_home_white_24dp.png)";
       } else {
           document.getElementById("goHome").style.backgroundImage = "url(Images/round_edit_white.png)";
    }
    }
}
editor();

if (window.localStorage.getItem("grid") == 0 || window.localStorage.getItem("grid") == null ) {
} else {
    document.getElementById("grid").innerHTML = "Grid: On"
}

if (window.localStorage.getItem("snap") == "false" || window.localStorage.getItem("snap") == null ) {
} else {
    document.getElementById("snap").innerHTML = "Snap To Place: On"
}

        if(!window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile) {
            document.getElementById("vsStyle").innerHTML = "Use Fullscreen Visual Editor: On"
        } else {
            document.getElementById("vsStyle").innerHTML = "Use Fullscreen Visual Editor: Off"
        }

//context menu
function configureContextMenu(menuOptions) {
  var screenshotOption = {
    text: "Download Workspace As PNG Image",
    enabled: workspace.getTopBlocks().length,
    callback: function () {
      Blockly.downloadScreenshot(workspace);
    }
  };
  menuOptions.push(screenshotOption);
}

// create download png function
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Download screenshot.
 * @author samelh@google.com (Sam El-Husseini)
 */
("use strict");

/**
 * Convert an SVG datauri into a PNG datauri.
 * @param {string} data SVG datauri.
 * @param {number} width Image width.
 * @param {number} height Image height.
 * @param {!Function} callback Callback.
 */
function svgToPng_(data, width, height, callback) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var img = new Image();

  var pixelDensity = 10;
  canvas.width = width * pixelDensity;
  canvas.height = height * pixelDensity;
  img.onload = function () {
    context.drawImage(
      img,
      0,
      0,
      width,
      height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    try {
      var dataUri = canvas.toDataURL("image/png");
      callback(dataUri);
    } catch (err) {
      console.warn("Error converting the workspace svg to a png");
      callback("");
    }
  };
  img.src = data;
}

/**
 * Create an SVG of the blocks on the workspace.
 * @param {!Blockly.WorkspaceSvg} workspace The workspace.
 * @param {!Function} callback Callback.
 */
function workspaceToSvg_(workspace, callback, customCss) {
  // Go through all text areas and set their value.
  var textAreas = document.getElementsByTagName("textarea");
  for (var i = 0; i < textAreas.length; i++) {
    textAreas[i].innerHTML = textAreas[i].value;
  }

  var bBox = workspace.getBlocksBoundingBox();
  var x = bBox.x || bBox.left;
  var y = bBox.y || bBox.top;
  var width = bBox.width || bBox.right - x;
  var height = bBox.height || bBox.bottom - y;

  var blockCanvas = workspace.getCanvas();
  var clone = blockCanvas.cloneNode(true);
  clone.removeAttribute("transform");

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.appendChild(clone);
  svg.setAttribute("viewBox", x + " " + y + " " + width + " " + height);

  svg.setAttribute(
    "class",
    "blocklySvg " +
      (workspace.options.renderer || "geras") +
      "-renderer " +
      (workspace.getTheme ? workspace.getTheme().name + "-theme" : "")
  );
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("style", "background-color: transparent");

  var css = [].slice
    .call(document.head.querySelectorAll("style"))
    .filter(function (el) {
      return (
        /\.blocklySvg/.test(el.innerText) || el.id.indexOf("blockly-") === 0
      );
    })
    .map(function (el) {
      return el.innerText;
    })
    .join("\n");
  var style = document.createElement("style");
  style.innerHTML = css + "\n" + customCss;
  svg.insertBefore(style, svg.firstChild);

  var svgAsXML = new XMLSerializer().serializeToString(svg);
  svgAsXML = svgAsXML.replace(/&nbsp/g, "&#160");
  var data = "data:image/svg+xml," + encodeURIComponent(svgAsXML);

  svgToPng_(data, width, height, callback);
}

/**
 * Download a screenshot of the blocks on a Blockly workspace.
 * @param {!Blockly.WorkspaceSvg} workspace The Blockly workspace.
 */
Blockly.downloadScreenshot = function (workspace) {
  workspaceToSvg_(workspace, function (datauri) {
    var a = document.createElement("a");
    a.download = "screenshot.png";
    a.target = "_self";
    a.href = datauri;
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
  });
};

// create get var for any input block
function registerFirstContextMenuOptions() {
  const workspaceItem = {
    displayText: "Hello World",
    preconditionFn: function (scope) {
      return "enabled";
    },
    callback: function (scope) {},
    scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
    id: "hello_world",
    weight: 100
  };
}

const lClick = function () {
    
        document.getElementById("menuItems").style.height = menuSize;
    
   document.getElementById("home").style.display = "none";
          document.getElementById("blocklyContainer").style.display = "block";
    
          project = this.id
    workspace.clear();
    var xml = Blockly.Xml.textToDom(window.localStorage.getItem(window.localStorage.getItem("created" + project) + "blocks"));
    Blockly.Xml.domToWorkspace(xml, workspace);
            if(!window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile) {
document.getElementById("editor").style.width = window.innerWidth + "px"
        } else {
            document.getElementById("editor").style.width = "350px"
        }
    
        
              document.getElementById("ssetings").style.display = "block";
    document.getElementById("GoHome2").style.display = "block";
        document.getElementById("download").style.display = "block";
        document.getElementById("Test").style.display = "block";
        document.getElementById("upload").style.display = "block";
    document.getElementById("Switch").style.display = "block";
    
        
        if(project == "Zero Two <3") {
        document.body.style.backgroundImage = "url(Images/787c0db55da7773662b0d02d2420900d.jpg)";
    }
      
                  document.getElementById("create").style.display = "none";
    document.getElementById("settings").style.display = "none";
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function downloadHTML () {
    if(!getWarnings().length == 0) {
        if(confirm('WARNING: there are ' + getWarnings().length + ' warnings found.\nAre you sure you want to coninue downloading?\nDownloading with warnings may break your project.')) {
            download(window.localStorage.getItem("projectName" + project) + ".html", html() + Blockly.JavaScript.workspaceToCode(workspace) + "<\/script>");
        }
    } else {
download(window.localStorage.getItem("projectName" + project) + ".html", html() + Blockly.JavaScript.workspaceToCode(workspace) + "<\/script>");
    }
}

function open () {
  if (!window.localStorage.getItem("open") == "" || window.localStorage.getItem("open") == null) {
      document.getElementById("open").innerHTML =
      "Open editor after new project has been created: On";
    } else {
      document.getElementById("open").innerHTML =
      "Open editor after new project has been created: Off";
    }
  }
open();

function save () {
    var xml = Blockly.Xml.workspaceToDom(workspace);
  var text = Blockly.Xml.domToText(xml);
    window.localStorage.setItem(window.localStorage.getItem("created" + project) + "blocks", text);
}

workspace.addChangeListener(save);

// upload assets
  var as = document.getElementById("upload");
  as.onclick = function () {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      input.accept = "image/*";
      // you can use this method to get file and perform respective operations
      var files = Array.from(input.files);
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        reader.addEventListener(
          "load",
          function () {
              assetsBase64.push(reader.result);
             assetsBlockDropdown.push([files[i].name, "" + assetsBase64.indexOf(reader.result) + ""]);
          },
          false
        );
        reader.readAsDataURL(files[i]);
      }
    };
    input.click();
  };

//get warnings

function getWarnings() {
  var blocks = workspace.getAllBlocks();
  var warnings = [];
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].warning) {
      warnings.push(blocks[i].warning);
    }
  }
  return warnings;
}

//alert user of hiden warnings

function warning () {
    if(!getWarnings().length == 0) {
        document.getElementById('warnings').innerHTML = '⚠️ There are a total of ' + getWarnings().length + ' warning(s) ⚠️';
        document.getElementById('warnings').style.display = "block";
    } else {
         document.getElementById('warnings').style.display = "none";
    }
}

workspace.addChangeListener(warning);

//block checker
function checkBlocks (t) {
    var bb = workspace.getAllBlocks();
    var blocks = [];
    for (var i of bb) {
        if (i.type == t) {
            blocks.push(i);
        }
    }
    return blocks
}

//event errors

function check () {
    for (var i of events) {
        var more = checkBlocks(i);
        if (more.length > 1) {
            for (var i of more) {
                i.setWarningText("There can only be one event handler for this event");
            }
        } else {
            for (var i of more) {
                i.setWarningText(null);
            }
        }
    }
}

workspace.addChangeListener(check);

// loop errors


function loop_errors () {
    var blocks = workspace.getAllBlocks();
    for (var i of blocks) {
    if ( i.type == "break_and_continue") {
    } else if (i.type == "clearint") {
    
    } else if (i.type == "get_d_var") {
    if(i.getRootBlock().type == "global_declaration" || i.getRootBlock().type == "create_dynamic_var") {
    i.setWarningText("This block cannot be in a definition");
    } else {
    i.setWarningText(null);
    }
    }
    }
}
    
    workspace.addChangeListener(loop_errors);

//get vars
function getVariableName(name) {
  const pair = Shared.unprefixName(name);
  const prefix = pair[0];
  const unprefixedName = pair[1];
  if (prefix === Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX ||
      prefix === Shared.GLOBAL_KEYWORD) {
    return unprefixedName;
  } else {
    return (Shared.possiblyPrefixGeneratedVarName(prefix))(unprefixedName);
  }
}


// define blocks

Blockly.Blocks['asd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("add scource directly")
        .appendField(new Blockly.FieldTextInput("alert(\"Hi There\");"), "js");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("Inject a piece of JavaScript code that doesn't exist in SKetch yet");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['asd_left_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("add scource directly")
        .appendField(new Blockly.FieldTextInput("'Zero Two is cute?' == true"), "js");
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("Inject a piece of JavaScript code that doesn't exist in SKetch yet");
 this.setHelpUrl("");
  }
};
        
Blockly.Blocks['try_catch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("try")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput("try")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("catch")
      .appendField(
            new FieldParameterFlydown('error', true, FieldFlydown.DISPLAY_BELOW),
            'error');
    this.appendStatementInput("catch")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("Try to execute a piece of code, if it fails do some statements in the `catch` section");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
            if (this.getInputTargetBlock('catch') === child) {
                const params = this.declaredNames();
                // not arguments_ instance var
                for (let i = 0; i < params.length; i++) {
                    proc(params[i], '');
                }
            }
        },
  getVars: function() {
    return [
      this.getFieldValue('error'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('catch');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
      this.getFieldValue('error'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('error'))) {
      this.setFieldValue(newName, 'error');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};

Blockly.Blocks['eval'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("eval");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("Evaluate a piece of code");
 this.setHelpUrl("");
  }
};

        Blockly.Blocks['logic_compare'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=","=="], ["<","<"], [">",">"], ["≠","!="], ["≥",">="], ["≤","<="]]), "NAME");
    this.appendValueInput("2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#45B4A9");
 this.setTooltip("Returns true when the inputs are equals, greater or smaller from each other");
 this.setHelpUrl("");
  }
};
        Blockly.Blocks['logic_operation'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["and","&&"], ["or","||"]]), "NAME");
    this.appendValueInput("2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#45B4A9");
 this.setTooltip("Returns true when either one or both inputs return true");
 this.setHelpUrl("");
  }
};
        Blockly.Blocks['logic_negate'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("not");
    this.setOutput(true, null);
    this.setColour("#45B4A9");
 this.setTooltip("Returns true if the input is false, returns false if the input is true");
 this.setHelpUrl("");
  }
};
        Blockly.Blocks['logic_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "NAME");
    this.setOutput(true, "Boolean");
    this.setColour("#45B4A9");
 this.setTooltip("Returns either true or false");
 this.setHelpUrl("");
  }
};
        Blockly.Blocks['logic_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("null");
    this.setOutput(true, null);
    this.setColour("#45B4A9");
 this.setTooltip("Returns null");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clearint'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["clearTimeout","ct"], ["cancelAnimationFrame","caf"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setColour("#F3AA44");
 this.setTooltip("Stop the current timeout or animation frame requests");
 this.setHelpUrl("");
  }
};
        
Blockly.Blocks['set_timeout'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".setTimeout")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("l")
        .setCheck("Boolean")
        .appendField("loops")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(
            new FieldParameterFlydown('TimeoutID', true, FieldFlydown.DISPLAY_BELOW),
            'timeout');
    this.appendStatementInput("s")
        .setCheck(null)
        .appendField("do");
      this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F3AA44");
 this.setTooltip("Wait the specified amount of time before performing the next action.");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
            if (this.getInputTargetBlock('s') === child) {
                const params = this.declaredNames();
                // not arguments_ instance var
                for (let i = 0; i < params.length; i++) {
                    proc(params[i], '');
                }
            }
        },
  getVars: function() {
    return [
      this.getFieldValue('timeout'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('s');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
      this.getFieldValue('timeout'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('timeout'))) {
      this.setFieldValue(newName, 'timeout');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};
                Blockly.Blocks['open_window'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"Zero Two is cute"]]), "NAME")
        .appendField(".openLink");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["inNewTab","int"], ["inCurrentTab","ict"]]), "t");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F3AA44");
 this.setTooltip("Open a link in a new tab or current tab");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['custom_events'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldTextInput(""), "c")
        .appendField(".")
        .appendField(new Blockly.FieldTextInput(""), "e");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when the given event fires");
 this.setHelpUrl("");
  }
};
        Blockly.Blocks['key_changed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"Sup?"]]), "NAME")
        .appendField(".keyChange")
      .appendField(
            new FieldParameterFlydown('KeyName', true, FieldFlydown.DISPLAY_BELOW),
            'keyname')
            .appendField(
            new FieldParameterFlydown('KeyCode', true, FieldFlydown.DISPLAY_BELOW),
            'keycode');
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when a key on the keyboard is pressed");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
    const params = this.declaredNames();
    // not arguments_ instance var
    for (let i = 0; i < params.length; i++) {
      proc(params[i], '');
    }
  },
  getVars: function() {
    return [
            this.getFieldValue('keyname'),
        this.getFieldValue('keycode'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
            this.getFieldValue('keyname'),
        this.getFieldValue('keycode'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('keyname'))) {
      this.setFieldValue(newName, 'keyname');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('keycode'))) {
      this.setFieldValue(newName, 'keycode');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};
        
        Blockly.Blocks['window_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"I´ll marry her, I´ll just have to find a way"]]), "NAME")
        .appendField(".mouseChange")
      .appendField(
            new FieldParameterFlydown('MouseX', true, FieldFlydown.DISPLAY_BELOW),
            'mousex')
            .appendField(
            new FieldParameterFlydown('MouseY', true, FieldFlydown.DISPLAY_BELOW),
            'mousey')
            .appendField(
            new FieldParameterFlydown('MouseDown', true, FieldFlydown.DISPLAY_BELOW),
            'mousedown')
            .appendField(
            new FieldParameterFlydown('MouseUp', true, FieldFlydown.DISPLAY_BELOW),
            'mouseup')
                  .appendField(
            new FieldParameterFlydown('MouseWheelScroll', true, FieldFlydown.DISPLAY_BELOW),
            'mws');
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when the mouse changed");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
    const params = this.declaredNames();
    // not arguments_ instance var
    for (let i = 0; i < params.length; i++) {
      proc(params[i], '');
    }
  },
  getVars: function() {
    return [
      this.getFieldValue('mousex'),
        this.getFieldValue('mousey'),
        this.getFieldValue('mouseup'),
        this.getFieldValue('mousedown'),
        this.getFieldValue('mws'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
            this.getFieldValue('mousex'),
        this.getFieldValue('mousey'),
        this.getFieldValue('mouseup'),
        this.getFieldValue('mousedown'),
        this.getFieldValue('mws'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('mousex'))) {
      this.setFieldValue(newName, 'mousex');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('mousey'))) {
      this.setFieldValue(newName, 'mousey');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('mouseup'))) {
      this.setFieldValue(newName, 'mouseup');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('mousedown'))) {
      this.setFieldValue(newName, 'mousedown');
    }
                if (Blockly.Names.equals(oldName, this.getFieldValue('mws'))) {
      this.setFieldValue(newName, 'mws');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};
        
        Blockly.Blocks['initd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"I'll always do"]]), "NAME")
        .appendField(".load");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when the page finished loading.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['change_d_var'] = {
  init: function() {
    this.appendValueInput("s")
        .setCheck("String")
        .appendField("change dynamic");
    this.appendValueInput("t")
        .setCheck("Number")
        .appendField("by");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Change a dynamic variable by the given value");
 this.setHelpUrl("");
  }
};
        
        Blockly.Blocks['change'] = {
  init: function() {
      this.fieldVar_ = new FieldLexicalVariable(' ');
    this.fieldVar_.setBlock(this);
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("change")
        .appendField(this.fieldVar_, 'VAR')
        .appendField("by");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Change a variable by the given value");
 this.setHelpUrl("");
this.errors = [
      {func: WarningHandler.checkIsInDefinition},
      {
        func: WarningHandler.checkDropDownContainsValidValue,
        dropDowns: ['VAR'],
      },
    ];
    this.setOnChange(function(changeEvent) {
      WarningHandler.checkErrors(this);
    });
  },
  referenceResults: Blockly.Blocks.lexical_variable_get.referenceResults,
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameLexicalVar: Blockly.Blocks.lexical_variable_get.renameLexicalVar,
  renameFree: function(freeSubstitution) {
    // potentially rename the set variable
    const prefixPair = Blockly.unprefixName(this.getFieldValue('VAR'));
    const prefix = prefixPair[0];
    // Only rename lexical (nonglobal) names
    if (prefix !== Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX) {
      const oldName = prefixPair[1];
      const newName = freeSubstitution.apply(oldName);
      if (newName !== oldName) {
        this.renameLexicalVar(oldName, newName);
      }
    }
    // [lyn, 06/26/2014] Don't forget to rename children!
    this.getChildren().map(function(blk) {
      LexicalVariable.renameFree(blk, freeSubstitution);
    });
  },
  freeVariables: function() { // return the free lexical variables of this block
    // [lyn, 06/27/2014] Find free vars of *all* children, including subsequent
    // commands in NEXT slot.
    const childrenFreeVars = this.getChildren().map(function(blk) {
      return LexicalVariable.freeVariables(blk);
    });
    const result = Blockly.NameSet.unionAll(childrenFreeVars);
    const prefixPair = Blockly.unprefixName(this.getFieldValue('VAR'));
    const prefix = prefixPair[0];
    // Only return lexical (nonglobal) names
    if (prefix !== Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX) {
      const oldName = prefixPair[1];
      result.insert(oldName);
    }
    return result;
  }
};
        
Blockly.Blocks['create_dynamic_var'] = {
  init: function() {
    this.appendValueInput("s")
        .setCheck("String")
        .appendField("set dynamic");
    this.appendValueInput("t")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CD5E94");
 this.setTooltip("changes a dynamic variable to the given value(creates one when it doesn't exist)");
 this.setHelpUrl("");
  }
};
        
        Blockly.Blocks['get_d_var'] = {
  init: function() {
    this.appendValueInput("g")
        .setCheck("String")
        .appendField("get");
    this.setOutput(true, null);
    this.setColour("#CD5E94");
 this.setTooltip("Returns the value of a dynamic variable");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput(""), "n")
        .appendField("from")
        .appendField(new Blockly.FieldTextInput(""), "l");
    this.setColour(270);
 this.setTooltip("Import any javascript libary from skypack");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rnaf'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".requestAnimationFrame")
      .appendField(
                  new FieldParameterFlydown('AnimationId', true, FieldFlydown.DISPLAY_BELOW),
            'id');
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when a Animation Frame Iis requested");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
            if (this.getInputTargetBlock('NAME') === child) {
                const params = this.declaredNames();
                // not arguments_ instance var
                for (let i = 0; i < params.length; i++) {
                    proc(params[i], '');
                }
            }
        },
  getVars: function() {
    return [
      this.getFieldValue('id'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
      this.getFieldValue('id'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('id'))) {
      this.setFieldValue(newName, 'id');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};

Blockly.Blocks['game_pad_connected'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"I'll always do"]]), "NAME")
        .appendField(".gamepadConnected")
                  .appendField(
                  new FieldParameterFlydown('ControllerId', true, FieldFlydown.DISPLAY_BELOW),
            'id');
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when a controler has been connected");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
    const params = this.declaredNames();
    // not arguments_ instance var
    for (let i = 0; i < params.length; i++) {
      proc(params[i], '');
    }
  },
  getVars: function() {
    return [
      this.getFieldValue('id'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
      this.getFieldValue('id'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('id'))) {
      this.setFieldValue(newName, 'id');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};

Blockly.Blocks['game_pad_disconnected'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"I'll always do"]]), "NAME")
        .appendField(".gamepadDisconnected")
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when a controler has been disconnected");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['game_pad_button_change'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"I'll always do"]]), "NAME")
        .appendField(".gamepadButtonChange")
                        .appendField(
                  new FieldParameterFlydown('ButtonId', true, FieldFlydown.DISPLAY_BELOW),
            'id')
                              .appendField(
                  new FieldParameterFlydown('AxesId', true, FieldFlydown.DISPLAY_BELOW),
            'axesid')
                              .appendField(
                  new FieldParameterFlydown('AxesValue', true, FieldFlydown.DISPLAY_BELOW),
            'axesvalue');
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when a button on the controller is pressed");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
    const params = this.declaredNames();
    // not arguments_ instance var
    for (let i = 0; i < params.length; i++) {
      proc(params[i], '');
    }
  },
  getVars: function() {
    return [
      this.getFieldValue('id'),
        this.getFieldValue('axesid'),
        this.getFieldValue('axesvalue'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
            this.getFieldValue('id'),
        this.getFieldValue('axesid'),
        this.getFieldValue('axesvalue'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('id'))) {
      this.setFieldValue(newName, 'id');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('axesid'))) {
      this.setFieldValue(newName, 'axesid');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('axesvalue'))) {
      this.setFieldValue(newName, 'axesvalue');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};

Blockly.Blocks['create_elem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".createNew")
        .appendField(new Blockly.FieldDropdown([["Iframe","if"], ["Div","d"], ["Image","i"], ["Paragraph","p"], ["Button","b"], ["DropDownButton","ddb"], ["ColorPicker","cp"], ["DatePicker","dp"], ["TimePicker","tp"], ["TextField","tf2"], ["Canvas","c"], ["Slider","s"], ["ProgressBar","pb"], ["Checkbox","cb"], ["RadioButton","rb"], ["LoadignIcon","li"], ["FAB", "fab"], ["UnorderedList", "ul"], ["OrderedList", "ol"], ["HyperLink", "a"]]), "e")
        .appendField("Element")
      .appendField(
                  new FieldParameterFlydown('ElementId', true, FieldFlydown.DISPLAY_BELOW),
            'eid');
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("Creatte a new element");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
            if (this.getInputTargetBlock('NAME') === child) {
                const params = this.declaredNames();
                // not arguments_ instance var
                for (let i = 0; i < params.length; i++) {
                    proc(params[i], '');
                }
            }
        },
  getVars: function() {
    return [
      this.getFieldValue('eid'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
      this.getFieldValue('eid'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('eid'))) {
      this.setFieldValue(newName, 'eid');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};

Blockly.Blocks['apppend_elem'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
.appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".appendElement");
    this.appendValueInput("b")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("Add a newly created element to the body or element");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remove'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".removeElement");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("Removes an element");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clone'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".cloneElement");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("Clones an element");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("body");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("Return the location of the documents body");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['forever'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("forever");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F3AA44");
 this.setTooltip("Runs the blocks until there is a break block");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['break_and_continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Break out of","break"], ["Continue with","continue"]]), "NAME")
        .appendField("loop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F3AA44");
 this.setTooltip("Stop or continue with the current loop");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['all_elements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".getAll")
.appendField(new Blockly.FieldDropdown([["Iframe","if"], ["Div","d"], ["Image","i"], ["Paragraph","p"], ["Button","b"], ["DropDownButton","ddb"], ["ColorPicker","cp"], ["DatePicker","dp"], ["TimePicker","tp"], ["TextField","tf2"], ["Canvas","c"], ["Slider","s"], ["ProgressBar","pb"], ["Checkbox","cb"], ["RadioButton","rb"], ["LoadignIcon","li"], ["FAB", "fab"], ["UnorderedList", "ul"], ["OrderedList", "ol"], ["HyperLink", "a"]]), "e")
        .appendField("Elements");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("Return a list a all elements");
 this.setHelpUrl("");
  }
};

//case block

Blockly.Blocks['switch_case'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("case");
    this.appendStatementInput("case")
        .setCheck(null)
              .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
      this.setMutator(new Blockly.Mutator(['case']));
 this.setTooltip("If the case value matches the switch value run the blocks");
 this.setHelpUrl("");
  },
    updateShape_: function() {
    for (let i = 1; this.getInput('c' + i); i++) {
      this.removeInput('c' + i);
      this.removeInput('DO' + i);
    }
    // Rebuild block.

    // Observe how it is looking at the `this.elseifCount_` property
    for (let i = 1; i <= this.caseCount_; i++) {
      this.appendValueInput('c' + i).appendField("case").setAlign(Blockly.ALIGN_RIGHT);
      this.appendStatementInput('DO' + i).appendField("do");
    }
    },
decompose: function(workspace) {
  var topBlock = workspace.newBlock('switch');
  topBlock.initSvg();
  var connection = topBlock.getInput('case').connection;
  for (var i = 0; i < this.caseCount_; i++) {
    var c = workspace.newBlock('case');
    c.initSvg();
    connection.connect(c.previousConnection);
    connection = c.nextConnection;
  }
  return topBlock;
},
    compose: function(topBlock) {
         // This line changed. Now you should actually be accessing the first case min-block
         let toppBlock = topBlock.getInputTargetBlock('case');

    // Count number of inputs.
    this.caseCount_ = 0;
    const valueConnections = [null];
    const statementConnections = [null];
    while (toppBlock && !toppBlock.isInsertionMarker()) {
      switch (toppBlock.type) {
        case 'case':
          this.caseCount_++;
          valueConnections.push(toppBlock.valueConnection_);
          statementConnections.push(toppBlock.statementConnection_);
          break;
        default:
          throw TypeError('Unknown block type: ' + toppBlock.type);
      }
      toppBlock = toppBlock.nextConnection &&
          toppBlock.nextConnection.targetBlock();
    }

    // Observe how it calls `updateShape_`
    this.updateShape_();
            this.reconnectChildBlocks_(
        valueConnections, statementConnections);
},
    mutationToDom: function() {
  // You *must* create a <mutation></mutation> element.
  // This element can have children.
  var container = Blockly.utils.xml.createElement('mutation');
  container.setAttribute('items', this.caseCount_);
  return container;
},

domToMutation: function(xmlElement) {
  this.caseCount_ = parseInt(xmlElement.getAttribute('items'), 10);
  // This is a helper function which adds or removes inputs from the block.
  this.updateShape_();
},  
      /**
   * Reconnects child blocks.
   * @param {!Array<?RenderedConnection>} valueConnections List of
   * value connections for 'if' input.
   * @param {!Array<?RenderedConnection>} statementConnections List of
   * statement connections for 'do' input.
   * @param {?RenderedConnection} elseStatementConnection Statement
   * connection for else input.
   * @this {Block}
   */
    reconnectChildBlocks_: function(
      valueConnections, statementConnections) {
    for (let i = 1; i <= this.caseCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'c' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
  },
     saveConnections: function(topBlock) {
    let clauseBlock = topBlock.getInputTargetBlock('case');
    let i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'case': {
          const inputIf = this.getInput('c' + i);
          const inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        }
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
};

//mutator block

Blockly.Blocks['case'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("case");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("If the case value matches the switch value run the blocks");
 this.setHelpUrl("");
  }
};

//mutator top block

Blockly.Blocks['switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("switch");
    this.appendStatementInput("case")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['switch2'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("switch");
    this.appendStatementInput("case")
        .setCheck("switch_case")
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("If the case value matches the switch value run the blocks");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['load_asset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(this.getAssets), "NAME");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("Load an asset");
 this.setHelpUrl("");
  },
    getAssets: function () {
        return assetsBlockDropdown
    }
};

function pickAssets (e) {
if(e.type == Blockly.Events.SELECTED) {
    if(workspace.getBlockById(e.newElementId).type == "load_asset") {
        if(workspace.getBlockById(e.newElementId).getFieldValue("NAME") == "OPTIONNAME") {
            as.click();
        }
       }
}
}

workspace.addChangeListener(pickAssets);

Blockly.Blocks['create_listener'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([["Iframe","if"], ["Div","d"], ["Image","i"], ["Paragraph","p"], ["Button","b"], ["DropDownButton","ddb"], ["ColorPicker","cp"], ["DatePicker","dp"], ["TimePicker","tp"], ["TextField","tf2"], ["Canvas","c"], ["Slider","s"], ["ProgressBar","pb"], ["Checkbox","cb"], ["RadioButton","rb"], ["LoadignIcon","li"], ["FAB", "fab"], ["UnorderedList", "ul"], ["OrderedList", "ol"], ["HyperLink", "a"]]), "e")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["option","OPTIONNAME"], ["option","OPTIONNAME"], ["option","OPTIONNAME"]]), "e")
        .appendField(
                  new FieldParameterFlydown('ElementId', true, FieldFlydown.DISPLAY_BELOW),
            'eid');
    this.appendStatementInput("s")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when an event for an element fires");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
    const params = this.declaredNames();
    // not arguments_ instance var
    for (let i = 0; i < params.length; i++) {
      proc(params[i], '');
    }
  },
  getVars: function() {
    return [
      this.getFieldValue('eid'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
            this.getFieldValue('eid'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('eid'))) {
      this.setFieldValue(newName, 'eid');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};

Blockly.Blocks['new_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new line");
    this.setOutput(true, null);
    this.setColour("#DF6078");
 this.setTooltip("Return a newline string, used as a delimeter");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remove_duplicates'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("remove duplicates of");
    this.setOutput(true, null);
    this.setColour("#76afc9");
 this.setTooltip("Removes all duplicates from an list");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['repplace_text'] = {
  init: function() {
    this.appendValueInput("i")
        .setCheck("String")
        .appendField("in text");
    this.appendValueInput("t")
        .setCheck("String")
        .appendField("replace");
    this.appendValueInput("w")
        .setCheck("String")
        .appendField("with");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#DF6078");
 this.setTooltip("Replace the given text string with a new piece of text");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tet_contains'] = {
  init: function() {
    this.appendValueInput("i")
        .setCheck("String")
        .appendField("does");
    this.appendValueInput("t")
        .setCheck("String")
        .appendField("contain");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour("#DF6078");
 this.setTooltip("Reeturn true if the given piece of text is inside of a string");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_object_prop'] = {
  init: function() {
    this.appendValueInput("i")
        .setCheck("String")
        .appendField("set key")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("t")
        .setCheck(null)
        .appendField("of object")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("to")
        .setCheck(null)
        .appendField("to")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F99EA3");
 this.setTooltip("Set a property of an object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_object_prop'] = {
  init: function() {
    this.appendValueInput("i")
        .setCheck("String")
        .appendField("get key")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("t")
        .setCheck("String")
        .appendField("of object")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true, null);
    this.setColour("#F99EA3");
 this.setTooltip("Get a property of an objects field");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_of_json'] = {
  init: function() {
    this.appendValueInput("i")
        .setCheck("String")
        .appendField("get object or list from JSON");
    this.setOutput(true, null);
    this.setColour("#F99EA3");
 this.setTooltip("Get a object or list from a JSON string");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['object_to_json'] = {
  init: function() {
    this.appendValueInput("i")
      .setCheck(null)
        .appendField("generate JSON from object or list");
    this.setOutput(true, null);
    this.setColour("#F99EA3");
 this.setTooltip("Trun an object or list into an JSON string");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['create_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create object");
    this.setOutput(true, null);
    this.setColour("#F99EA3");
 this.setTooltip("Create a new object with some value's (optionally) ");
 this.setHelpUrl("");
      this.setMutator(new Blockly.Mutator(['object']));
  },
    updateShape_: function() {
    for (let i = 1; this.getInput('o' + i); i++) {
      this.removeInput('o' + i);
    }
    // Rebuild block.

    // Observe how it is looking at the `this.elseifCount_` property
    for (let i = 1; i <= this.objectCount_; i++) {
      this.appendValueInput('o' + i).appendField("").setAlign(Blockly.ALIGN_RIGHT);
    }
    },
decompose: function(workspace) {
  var topBlock = workspace.newBlock('object_top_block');
  topBlock.initSvg();
    var connection =  topBlock.getInput('NAME').connection;
  for (var i = 0; i < this.objectCount_; i++) {
    var o = workspace.newBlock('object');
    o.initSvg();
    connection.connect(o.previousConnection);
    connection = o.nextConnection;
  }
  return topBlock;
},
    compose: function(topBlock) {
         // This line changed. Now you should actually be accessing the first case min-block
         let toppBlock = topBlock.getInputTargetBlock('NAME');

    // Count number of inputs.
    this.objectCount_ = 0;
    const valueConnections = [null];
    while (toppBlock && !toppBlock.isInsertionMarker()) {
      switch (toppBlock.type) {
        case 'object':
          this.objectCount_++;
          valueConnections.push(toppBlock.valueConnection_);
          break;
        default:
          throw TypeError('Unknown block type: ' + toppBlock.type);
      }
      toppBlock = toppBlock.nextConnection &&
          toppBlock.nextConnection.targetBlock();
    }

    // Observe how it calls `updateShape_`
    this.updateShape_();
            this.reconnectChildBlocks_(
        valueConnections);
},
    mutationToDom: function() {
  // You *must* create a <mutation></mutation> element.
  // This element can have children.
  var container = Blockly.utils.xml.createElement('mutation');
  container.setAttribute('items', this.objectCount_);
  return container;
},

domToMutation: function(xmlElement) {
  this.objectCount_ = parseInt(xmlElement.getAttribute('items'), 10);
  // This is a helper function which adds or removes inputs from the block.
  this.updateShape_();
},  
      /**
   * Reconnects child blocks.
   * @param {!Array<?RenderedConnection>} valueConnections List of
   * value connections for 'if' input.
   * @param {!Array<?RenderedConnection>} statementConnections List of
   * statement connections for 'do' input.
   * @param {?RenderedConnection} elseStatementConnection Statement
   * connection for else input.
   * @this {Block}
   */
    reconnectChildBlocks_: function(
      valueConnections ) {
    for (let i = 1; i <= this.objectCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'o' + i);
    }
  },
     saveConnections: function(topBlock) {
    let clauseBlock = topBlock.getInputTargetBlock('NAME');
    let i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'object': {
          const inputIff = this.getInput('o' + i);
          clauseBlock.valueConnection_ =
              inputIff && inputIff.connection.targetConnection;
          i++;
          break;
        }
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
};

Blockly.Blocks['get_list_of_objects'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("get list of ")
        .appendField(new Blockly.FieldDropdown([["Values","p"], ["Keys","k"]]), "NAME")
        .appendField("of object");
    this.setOutput(true, null);
    this.setColour("#F99EA3");
 this.setTooltip("Return a list of an objects properties or keys");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("object");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F99EA3");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['object_top_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("object");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour("#F99EA3");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['object_key_val'] = {
  init: function() {
    this.appendValueInput("k")
        .setCheck("String")
        .appendField("key");
    this.appendValueInput("v")
        .setCheck(null)
        .appendField("value");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour("#F99EA3");
 this.setTooltip("Add a pair to the object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['alert'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".showAlert");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Show a pop up dialog with the given massage");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['show_propmt'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".showPrompt");
    this.setOutput(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Show a pop up dailog requesting the user to input some text");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['show_confirm'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".confrim");
    this.setOutput(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Shows a popup asking the user to confirm a decision");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['console'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".console")
        .appendField(new Blockly.FieldDropdown([["Log","log"], ["Warn","warn"], ["Error","error"]]), "y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Log a message to the browsers console");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['windew_height_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".getWindow")
        .appendField(new Blockly.FieldDropdown([["Outer","outer"], ["Inner","inner"]]), "y")
        .appendField(new Blockly.FieldDropdown([["Width","Width"], ["Height","Height"]]), "w");
    this.setOutput(true, null);
    this.setColour("#9596EB");
 this.setTooltip("return the windows inner or outerwidth or height");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['title_favicon'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".set")
        .appendField(new Blockly.FieldDropdown([["Title","t"], ["FavIcon","f"]]), "t")
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Set either the project title or favIcon");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['screen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["ScreenManger","OPTIONNAME"]]), "NAME")
        .appendField(".get")
        .appendField(new Blockly.FieldDropdown([["Width","width"], ["Height","height"], ["AvaibleWidth","availWidth"], ["AvaibleHeight","availHeight"], ["ColorDepth","colorDepth"], ["PixelDepth","pixelDepth"]]), "p");
    this.setOutput(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Call the ScreenManager to return the value of the given property");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['date'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["DateManager","OPTIONNAME"]]), "NAME")
        .appendField(".get")
        .appendField(new Blockly.FieldDropdown([["Date","Date"], ["Day","Day"], ["FullYear","FullYear"], ["Hour","Hours"], ["MilliSeconds","Milliseconds"], ["Minute","Minutes"], ["Month","Month"], ["Seconds","Seconds"]]), "p");
    this.setOutput(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Call the DateManager to return the given propry it's value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['date_get_now'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["DateManager","OPTIONNAME"]]), "NAME")
        .appendField(".getNow");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Call the DateManger to get the current date");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stop_start_timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["DateManager","OPTIONNAME"]]), "NAME")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["Start","start"], ["Stop","stop"]]), "t")
        .appendField("Timer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Start or stop the timer");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_elapsed_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["DateManager","OPTIONNAME"]]), "NAME")
        .appendField(".getElapsedTime");
    this.setOutput(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Return the time that has been elapsed after the timer is stopped(in Milliseconds)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_permison_staet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["PermisionsManager","OPTIONNAME"]]), "NAME")
        .appendField(".get")
        .appendField(new Blockly.FieldDropdown([["Accelerometer","accelerometer"], ["Camera","camera"], ["ReadClipboard","clipboard-read"], ["WriteClipboard", "clipboard-write"], ["GeoLocation", "geolocation"], ["Notifications", "notifications"], ["Magnetometer", "magnetometer"], ["Microphone", "microphone"]]), "p")
        .appendField("PermisionState")
              .appendField(
                  new FieldParameterFlydown('State', true, FieldFlydown.DISPLAY_BELOW),
            'eid');
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Check the granted state of a permison(return either prompt, granted or denied)");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
            if (this.getInputTargetBlock('NAME') === child) {
                const params = this.declaredNames();
                // not arguments_ instance var
                for (let i = 0; i < params.length; i++) {
                    proc(params[i], '');
                }
            }
        },
  getVars: function() {
    return [
      this.getFieldValue('eid'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
      this.getFieldValue('eid'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('eid'))) {
      this.setFieldValue(newName, 'eid');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};

Blockly.Blocks['device_manager'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["DeviceManager","OPTIONNAME"]]), "NAME")
        .appendField(".get")
        .appendField(new Blockly.FieldDropdown([["DeviceOS","d"], ["IsMobileDevice","imd"], ["HasDarkModeEnabled","hde"], ["IsConnectedToANetwork","ictan"], ["DeviceLanguage","l"]]), "p");
    this.setOutput(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Calls the device manager to return the status of the property");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['save_item'] = {
  init: function() {
    this.appendValueInput("key")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["StorageManager","OPTIONNAME"]]), "NAME")
        .appendField(".saveKey");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("WithValue");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Store the given value for the given key to local storage");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['emove_item'] = {
  init: function() {
    this.appendValueInput("key")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["StorageManager","OPTIONNAME"]]), "NAME")
        .appendField(".removeKey");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Remove the key from local storage");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clear_storage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["StorageManager","OPTIONNAME"]]), "NAME")
        .appendField(".clearStorage");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9596EB");
 this.setTooltip("Delete all stored data stored in the application WARNING: using this block while live testing will delete all data from Sketch aswel USE AT OWN RISK");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_item'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["StorageManager","OPTIONNAME"]]), "NAME")
        .appendField(".getKey");
    this.setOutput(true, null);
    this.setColour("#9596EB");
 this.setTooltip("GEt the value of the given key");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['before_unload'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".beforeUnload");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour("#F3AA44");
 this.setTooltip("Do some statements when the page it's contents are about to be unloaded  (ask the user if he wants to leave the page +  will fire on both cancel and confirm) ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['add_object'] = {
  init: function() {
    this.appendValueInput("i")
        .setCheck("String")
        .appendField("add key")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("t")
        .setCheck("String")
        .appendField("with value")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("to")
        .setCheck(null)
        .appendField("to object")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#F99EA3");
 this.setTooltip("Add a new key with a value to an object");
 this.setHelpUrl("");
  }
};

  var options = [["Body", "body"],["Iframe","if"], ["Div","d"], ["Image","i"], ["Paragraph","p"], ["Button","b"], ["DropDownButton","ddb"], ["ColorPicker","cp"], ["DatePicker","dp"], ["TimePicker","tp"], ["TextField","tf2"], ["Canvas","c"], ["Slider","s"], ["ProgressBar","pb"], ["Checkbox","cb"], ["RadioButton","rb"], ["LoadignIcon","li"], ["FAB", "fab"], ["UnorderedList", "ul"], ["OrderedList", "ol"], ["HyperLink", "a"]];
  
  var opt = [["BackgroundColor", "style.backgroundColor"], ["BackgroundImage", "style.backgroundImage"], ["BackgroundImagePosition", "style.backgroundPosition"], ["BackgroundImageRepeat", "style.backgroundRepeat"], ["Width", "style.width"], ["Height", "style.height"], ["Margin", "style.margin"], ["MarginLeft", "style.marginLeft"], ["MarginRight", "style.marginRight"],["MarginTop", "style.marginTop"], ["MarginBottom", "style.marginBottom"], ["Padding", "style.padding"], ["PaddingLeft", "style.paddingLeft"],["PaddingRight", "style.paddingRight"], ["PaddingTop", "style.paddingTop"], ["PaddingBottom", "style.paddingBottom"], ["Top", "style.top"], ["Bottom", "style.bottom"], ["Left", "style.left"], ["Right", "style.right"],["BorderColor", "style.borderColor"], ["BorderWidth", "style.borderWidth"], ["BorderRadius", "style.borderRadius"], ["BorderStyle", "style.borderStyle"], ["Position", "style.position"]];
  
  var p = [["MaxValue", "max"], ["MinVlaue", "min"], ["Value", "value"]];
  
  
  var text = [["Text", "innerHTML"], ["TextColor", "style.color"], ["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]];

Blockly.Blocks['set_prop'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set")
        .appendField(new Blockly.FieldDropdown(options, this.validate), "NAME");
    this.appendValueInput("e")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown(opt), "NAME2")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("Sets the propety its value for the element");
 this.setHelpUrl("");
  },
  validate: function(newValue) {
  this.getSourceBlock().updateConnections(newValue);
  return newValue;
},
updateConnections: function(newValue) {
  this.removeInput('e', /* no error */ true);
  if ( newValue == "if") {
  var opti = opt.concat([["AllowFeaturePolicy", "allow"], ["AllowFullscreen", "allowfullscreen"], ["AllowPaymentRequest", "allowpaymentrequest"], ["URL", "src"], ["HTMLFile", "srcdoc"], ["FrameBorder", "frameBorder"]]);
  }else if (newValue == "i") {
  var opti = opt.concat([["Image", "src"], ["ImagePosition", "style.objectFit"]]);
  }else if (newValue == "p" || newValue == "b") {
  var opti = opt.concat(text);
  } else if (newValue == "ddb") {
  var opti = opt.concat(text).concat([["Options", "opt"]]);
  } else if ( newValue == "tf2") {
  var opti = opt.concat([["Text", "value"], ["TextColor", "style.color"], ["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]]).concat([["Hint", "placeholder"]]);
  } else if ( newValue == "s"|| newValue == "pb") { 
  var opti = opt.concat(p);
  } else if (newValue == "cb" || newValue == "rb") {
  var opti = opt.concat(text).concat([["Checked" , "checked"]]);
  } else if ( newValue == "li") {
  var opti = opt.concat([["BorderBackgroundColor", "style.borderTop"]])
  }else if (newValue == "ul" || newValue == "ol") {
  var opti = opt.concat([["TextColor", "style.color"], ["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]]).concat([["Options", "l"]]);
  } else if (newValue == "a") {
  var opti = opt.concat(text).concat([["Link", "href"]]);
  } else {
  var opti = opt
  }
    this.appendValueInput("e")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown(opti), "NAME2")
        .appendField("to");
}
};

Blockly.Blocks['get_propo'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("get")
                .appendField(new Blockly.FieldDropdown(options, this.validate), "NAME");
    this.appendDummyInput("e")
        .appendField(new Blockly.FieldDropdown(opt), "NAME2");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("Return the propety its value for the element");
 this.setHelpUrl("");
  },
  validate: function(newValue) {
  this.getSourceBlock().updateConnections(newValue);
  return newValue;
},
updateConnections: function(newValue) {
  this.removeInput('e', /* no error */ true);
  if ( newValue == "if") {
  var opti = opt.concat([["AllowFeaturePolicy", "allow"], ["AllowFullscreen", "allowfullscreen"], ["AllowPaymentRequest", "allowpaymentrequest"], ["URL", "src"], ["HTMLFile", "srcdoc"], ["FrameBorder", "frameBorder"]]);
  }else if (newValue == "i") {
  var opti = opt.concat([["Image", "src"], ["ImagePosition", "style.objectFit"]]);
  }else if (newValue == "p" || newValue == "b") {
  var opti = opt.concat(text);
  } else if (newValue == "ddb") {
  var opti = opt.concat(text).concat([["Value", "value"]]);
  } else if ( newValue == "tf2") {
  var opti = opt.concat([["Text", "value"], ["TextColor", "style.color"], ["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]]).concat([["Hint", "placeholder"]]);
  } else if ( newValue == "s"|| newValue == "pb") { 
  var opti = opt.concat(p);
  } else if (newValue == "cb" || newValue == "rb") {
  var opti = opt.concat(text).concat([["Checked" , "checked"]]);
  } else if ( newValue == "li") {
  var opti = opt.concat([["BorderBackgroundColor", "style.borderTop"]])
  }else if (newValue == "ul" || newValue == "ol") {
  var opti = opt.concat([["TextColor", "style.color"], ["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]]).concat([["Options", "l"]]);
  } else if (newValue == "a") {
  var opti = opt.concat(text).concat([["Link", "href"]]);
  } else {
  var opti = opt
  }
    this.appendDummyInput("e")
    .appendField(new Blockly.FieldDropdown(opti), "NAME2");
}
};

Blockly.Blocks['api'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".makeApi")
        .appendField(new Blockly.FieldDropdown([["Get","GET"], ["Post","POST"], ["Patch","PATCH"], ["Put","PUT"], ["Delete","DELETE"]]), "t")
        .appendField("Request");
    this.appendValueInput("url")
        .setCheck(null)
        .appendField("URL")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("h")
        .setCheck(null)
        .appendField("header")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("b")
        .setCheck(null)
        .appendField("body")
        .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput()
              .appendField(
                  new FieldParameterFlydown('Response', true, FieldFlydown.DISPLAY_BELOW),
            'r')
                  .appendField(
                  new FieldParameterFlydown('Status', true, FieldFlydown.DISPLAY_BELOW),
            's')
                  .appendField(
                  new FieldParameterFlydown('Error', true, FieldFlydown.DISPLAY_BELOW),
            'e')
            .setAlign(Blockly.ALIGN_RIGHT);
            this.setInputsInline(false);
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("9596EB");
 this.setTooltip("Make a apio Get, Put, Post, Patch and Delete request");
 this.setHelpUrl("");
  },
  withLexicalVarsAndPrefix: function(child, proc) {
            if (this.getInputTargetBlock('NAME') === child) {
                const params = this.declaredNames();
                // not arguments_ instance var
                for (let i = 0; i < params.length; i++) {
                    proc(params[i], '');
                }
            }
        },
  getVars: function() {
    return [
      this.getFieldValue('r'),
      this.getFieldValue('s'),
      this.getFieldValue('e'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('NAME');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
            this.getFieldValue('r'),
      this.getFieldValue('s'),
      this.getFieldValue('e'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('r'))) {
      this.setFieldValue(newName, 'r');
    }
        if (Blockly.Names.equals(oldName, this.getFieldValue('s'))) {
      this.setFieldValue(newName, 's');
    }
        if (Blockly.Names.equals(oldName, this.getFieldValue('e'))) {
      this.setFieldValue(newName, 'e');
    }
  },
  renameBound: function(boundSubstitution, freeSubstitution) {
    const paramSubstitution = boundSubstitution.restrictDomain(
        this.declaredNames());
    this.renameVars(paramSubstitution);
    const newFreeSubstitution = freeSubstitution.extend(paramSubstitution);
    LexicalVariable.renameFree(
        this.getInputTargetBlock(this.bodyInputName), newFreeSubstitution);
  },
  renameFree: function(freeSubstitution) {
    // There shouldn't be any free variables
  },
  freeVariables: function() { // return the free variables of this block
    // There shouldn't be any free variables, so this should return an empty set.
    // Should return the empty set: something is wrong if it doesn't!
    return new Blockly.NameSet();
  }
};