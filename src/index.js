"use strict";

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
import * as Instrument from '@mit-app-inventor/blockly-block-lexical-variables/src/instrument';
import '@mit-app-inventor/blockly-block-lexical-variables/src/instrument';

import * as ProcedureUtils from '@mit-app-inventor/blockly-block-lexical-variables/src/procedure_utils';
import {FieldNoCheckDropdown} from '@mit-app-inventor/blockly-block-lexical-variables/src/fields/field_nocheck_dropdown';
import {FieldTextBox} from 'blockly-field-text-box'
import {FieldProcedureName} from '@mit-app-inventor/blockly-block-lexical-variables/src/fields/field_procedurename';

import interact from 'interactjs'

import fx from 'fireworks'

import { HolidayAPI } from 'holidayapi';

import {loops as loop} from 'blockly/blocks';
loop.loopTypes.add('forever');

//custom .js file imports
import {blockColors} from 'BlockColors';
import {OtherBlocks} from 'OtherBlocks';

//get x, y values

var x, y

window.addEventListener('mousemove', e => {
x = e.x;
y = e.y;
});

// refresh page when size changes

window.onresize = function () {
if(window.location.href == 'http://localhost:3000/index.html') {
window.location.reload();
}
}

// cheat code
var w = 0
var s = 0
var a = 0
var d = 0
window.addEventListener('keydown', e => {
if( w == 2) {
if( s == 2) {
if( a == 2) {
if( d <= 2) {
alert("H Wq xlto swhchtz,\nehjhtz shcr lgc roi aooqa ehyo ocoitwe ugtharqotc bli srwc hj'o xlto.\nQwkvo vihtzhtz roi cl ehjo shee roeu?");
d = 0
} else {
if(e.kay == "d") {
d++
}
}
} else {
if(e.key == "a") {
a++
}
}
} else {
if(e.key == "s") {
s++
}
}
} else {
if(e.key == "w") {
w++
}
}
});

function editProject(x,y,p) {
createContextMenuI(x,y,['Rename Project','Delete Project','Change Owner-Ship-Tag','Change Project Description','Change FavIcon']);
document.getElementById('4').onclick = function () {
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
              window.localStorage.setItem("icon" + p, reader.result);
              document.getElementById("icon" + p).src = reader.result
          },
          false
        );
        reader.readAsDataURL(files[i]);
      }
    };
    input.click();
}
document.getElementById('3').onclick = function () {
var des = prompt('Change Project Description' , window.localStorage.getItem('projectdes' + p));
window.localStorage.setItem('projectdes' + p, des);
}
document.getElementById('2').onclick = function () {
var tag = prompt(' Change Project Owner-Ship-Tag' , window.localStorage.getItem('projecttag' + p));
window.localStorage.setItem('projecttag'  + p, tag);
}
document.getElementById('1').onclick = function () {
if(confirm("Delete Project?")) {
            var pp = projects.indexOf(p);
            projects.splice(pp, 1);
            window.localStorage.setItem("projects", JSON.stringify(projects));
            
                        var d = document.getElementById(p);
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
document.getElementById('0').onclick = function () {
var name = prompt('Rename Project', window.localStorage.getItem('projectName' + p));
        window.localStorage.setItem("projectName" + p, name);
        document.getElementById("Title" + p).innerHTML = name
        document.getElementById("project").innerHTML = name
}
}

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

//toolbox icons
class CustomCategory extends Blockly.ToolboxCategory {
addColourBorder_(colour){
  this.rowDiv_.style.backgroundColor = "TRANSPARENT";
}
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }
}

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory, true);

// context menu func
var child = 0

function createContextMenu(x, y, options) {
document.getElementById("CloseMenu").style.display = "block"
for(var i = 0; i < child; i++) {
document.getElementById(i).remove(true);
}
document.getElementById("CloseMenu").style.display = "none"
document.getElementById("dropdownMenu2").style.display = "none"
document.getElementById("dropdownMenu").style.display = "block"
child = 0
for(var i of options) {
var e = document.createElement("p");
e.innerHTML = i
e.id = child
e.style.color = "white";
e.style.textAlign = "left";
e.style.fontSize = "20px"
e.style.margin = "0px"
e.style.marginBottom = "8px"
child = child + 1
document.getElementById("dropdownMenu").appendChild(e);
}

document.getElementById("dropdownMenu").style.bottom = y
document.getElementById("dropdownMenu").style.right = x

document.getElementById("CloseMenu").style.display = "block"
document.getElementById("CloseMenu").onclick = function () {
document.getElementById("CloseMenu").style.display = "none"
}
}

function createContextMenuI(x, y, options) {
document.getElementById("CloseMenu").style.display = "block"
for(var i = 0; i < child; i++) {
document.getElementById(i).remove(true);
}
document.getElementById("CloseMenu").style.display = "none"
document.getElementById("dropdownMenu").style.display = "none"
document.getElementById("dropdownMenu2").style.display = "block"
child = 0
for(var i of options) {
var e = document.createElement("p");
e.innerHTML = i
e.id = child
e.style.color = "white";
e.style.textAlign = "left";
e.style.fontSize = "20px"
e.style.margin = "0px"
e.style.marginBottom = "8px"
child = child + 1
document.getElementById("dropdownMenu2").appendChild(e);
}

document.getElementById("dropdownMenu2").style.top = y
document.getElementById("dropdownMenu2").style.left = x

document.getElementById("CloseMenu").style.display = "block"
document.getElementById("CloseMenu").onclick = function () {
document.getElementById("CloseMenu").style.display = "none"
}
}

//define generators

Blockly.JavaScript['isfullscreen'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'isFullscreen == 0'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['fullscreen'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_t = block.getFieldValue('t');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_t == 'exit') {
  var code = 'document.exitFullscreen();\nisFullscreen = 0;\n'
  } else {
  var code = 'document.body.requestFullscreen();\nisFullscreen = 1;\n'
  }
  return code;
};

Blockly.JavaScript['get_all_items'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Object.entries(window.localStorage)'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dismiss_notification'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'nm.close();\n'
  return code;
};

Blockly.JavaScript['notification'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_titke = Blockly.JavaScript.valueToCode(block, 'titke', Blockly.JavaScript.ORDER_ATOMIC);
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  var value_icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Notification.requestPermission();\nlet nm = new Notification(' + value_titke + ',{\nbody: ' + value_message + ',\nicon: ' + value_icon + '});\nnm.onclick = function () {\neventnmclick();\n}\nnm.onerror = function () {\neventnmerror();\n}\nnm.onclose = function () {\neventnmclose();\n}\nnm.onshow = function () {\neventnmshow();\n}\n'
  return code;
};

Blockly.JavaScript['touch_start'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.ontouchstart = function () {\n' + statements_name + '\n}\n'
  return code;
};

Blockly.JavaScript['touch_end'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.ontouchend = function () {\n' + statements_name + '\n}\n'
  return code;
};

Blockly.JavaScript['touch_cancel'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.ontouchcancel = function () {\n' + statements_name + '\n}\n'
  return code;
};

Blockly.JavaScript['touch_move'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var x = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('x'), Blockly.VARIABLE_CATEGORY_NAME);
      var y = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('y'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.ontouchmove = function (e) {\nlet ' + x + ' = e.touches[0].clientX\nlet ' + y + ' = e.touches[0].clientX\n' + statements_name + '\n}\n'
  return code;
};

Blockly.JavaScript['geolocation'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var la = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('la'), Blockly.VARIABLE_CATEGORY_NAME);
      var lo = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('lo'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = `navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition (position) { let ` + la + ` = position.coords.latitude\nlet ` + lo + ` = position.coords.longitude\n` + statements_name + `\n}\n`
  return code;
};

Blockly.JavaScript['writeclipboard'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'navigator.clipboard.writeText(' + value_name + ');\n'
  return code;
};

Blockly.JavaScript['istestting'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = ' window.location.href == "http://localhost:3000/index.html" || window.location.href == "https://lukeplays33.github.io/Sketch/" ? true : false'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['to_string'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'String(' + value_name + ')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['to_number'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Number(' + value_name + ')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['typeof'] = function(block) {
var v = getVariableName(block.getFieldValue('VAR'));
  // TODO: Assemble JavaScript into code variable.
  var code = 'typeof ' + v
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['speed_loop'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_t = block.getFieldValue('t');
  var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + "." + dropdown_t + "(" + value_t + ")\n"
  return code;
};

Blockly.JavaScript['play_pause'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_t = block.getFieldValue('t');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + "." + dropdown_t + "();\n"
  
  return code;
};

Blockly.JavaScript['load_audio'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'new Audio(' + value_name + ')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['window_resize'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var ww = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('ww'), Blockly.VARIABLE_CATEGORY_NAME);
      var wh = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('wh'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = "window.onresize = function () {\nlet " + ww + " = window.innerWidth\nlet " + wh + " = window.innerHeight\n" + statements_name + "}\n"
  return code;
};

Blockly.JavaScript['show_snackbar'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_done = Blockly.JavaScript.statementToCode(block, 'done');
  // TODO: Assemble JavaScript into code variable.
  var code = "document.getElementById('snackbarText').innerHTML = " + value_name + "\ndocument.getElementById('sckb').style.display = 'block'\ndocument.getElementById('close').style.display = 'block'\ndocument.getElementById('close').onclick = function () {\ndocument.getElementById('sckb').style.display = 'none'\ndocument.getElementById('close').style.display = 'none'\n" + statements_done + "\n}\n"
  return code;
};

Blockly.JavaScript['create_list_with'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_l = Blockly.JavaScript.valueToCode(block, 'l', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + ".concat(" + value_l + ")"
  for (var i = 0; i < this.listCount_ + 1; i++) {
  var value_li = Blockly.JavaScript.valueToCode(block, 'li' + i, Blockly.JavaScript.ORDER_ATOMIC);
  var code = code + ".concat(" + value_li + ")"
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['share'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "navigator.share(" + value_name + ");\n"
  return code;
};

Blockly.JavaScript['click'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_d = block.getFieldValue('d');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_d == "ce") {
  var code = value_name + ".click();\n"
  } else if(dropdown_d == 'ri') {
  var code = value_name + '.src = ' + value_name + '.src\n'
  } else if(dropdown_d == 'dmk') {
  var code = 'captionHideKb();\n'
  } else {
  var code = value_name + "." + dropdown_d + "();\n"
  }
  return code;
};

Blockly.JavaScript['toast'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "document.getElementById('toasttext').innerHTML = " + value_name + ";\ndocument.getElementById('toast').style.display = 'block'\nwindow.setTimeout(function () {\ndocument.getElementById('toast').style.display = 'none'\n}, 2000);"
  return code;
};

Blockly.JavaScript['create_listener'] = function(block) {
  var dropdown_e = block.getFieldValue('e');
  var dropdown_name2 = block.getFieldValue('NAME2');
  var statements_s = Blockly.JavaScript.statementToCode(block, 's');
  if(block.getField('eid')) {
  var eid = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('eid'), Blockly.VARIABLE_CATEGORY_NAME);
      } else {
      var eid = 'component'
      }
  // TODO: Assemble JavaScript into code variable.
  var code = "function event" + dropdown_e + dropdown_name2 + " (" + eid + ") {\n" + statements_s + "\n}\n"
  return code;
};

Blockly.JavaScript['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  const funcName = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME);
  let xfix1 = '';
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    xfix1 += Blockly.JavaScript.injectId(JavaScript.STATEMENT_PREFIX, block);
  }
  if (Blockly.JavaScript.STATEMENT_SUFFIX) {
    xfix1 += JavaScript.injectId(JavaScript.STATEMENT_SUFFIX, block);
  }
  if (xfix1) {
    xfix1 = Blockly.JavaScript.prefixLines(xfix1, JavaScript.INDENT);
  }
  let loopTrap = '';
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    loopTrap = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.injectId(JavaScript.INFINITE_LOOP_TRAP, block),
        Blockly.JavaScript.INDENT);
  }
  const branch = Blockly.JavaScript.statementToCode(block, 'STACK');
  let returnValue =
      Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_NONE) || '';
  let xfix2 = '';
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
  var rr = returnValue.includes('function') ? '()\n' : '\n'
    returnValue = Blockly.JavaScript.INDENT + 'let c = ' + returnValue + '\nreturn c' + rr;
  }
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] = Blockly.JavaScript.nameDB_.getName(variables[i], NameType.VARIABLE);
  }
  let code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' + xfix1 +
      loopTrap + branch + xfix2 + returnValue + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.JavaScript.definitions_['%' + funcName] = code;
  return null;
};

Blockly.JavaScript['function_var'] = function(block) {
  var statements_d = Blockly.JavaScript.statementToCode(block, 'd');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "function () {\n" + statements_d + "\nreturn " + value_name + "\n}"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pick_file'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var fn = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('fn'), Blockly.VARIABLE_CATEGORY_NAME);
      var bb = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('64'), Blockly.VARIABLE_CATEGORY_NAME);
      var ft = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('ft'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  var code = `    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      input.accept = "image/*";
      // you can use this method to get file and perform respective operations
      var files = Array.from(input.files);
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        reader.addEventListener(
          "load",
          function () {\n let ` + fn + ` = files[i].name
          let ` + bb + ` = reader.result
          let ` + ft + ` = files[i].type
              ` + statements_name + `
          },
          false
        );
        reader.readAsDataURL(files[i]);
      }
    };
    input.click();`
  return code;
};

Blockly.JavaScript['download_file'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "download(" + value_name + ", " + value_c + ");\n"
  return code;
};

Blockly.JavaScript['get_propo'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_name2 == 's' || dropdown_name2 == 'd' || dropdown_name2 == 'R' || dropdown_name2 == 'lo' || dropdown_name2 == 'a' || dropdown_name2 == 'p') {
  var code = value_name + 'LP' + dropdown_name2
  } else if(dropdown_name2 == 'dd') {
  var code = value_name + 'LP.getDuration(true)'
  } else if(dropdown_name2 =='hc') {
  var code = 'String("#" + String([...' + value_name + '.classList].pop()).replaceAll("hc",""))'
  } else {
  var code = value_name + '.'+ dropdown_name2
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
      
      var bbbb = + dropdown_t == "PATCH" || dropdown_t == "PUT" || dropdown_t == "POST" ? "headers:\n" + value_h + "\n,\nbody: JSON.stringify(" + value_b + "),\n})\n.then(data => data.json())\n.then(result => {\n let " + r + " = result\nlet " + s + " = result.status\nlet " + e +  " = 'No errors'\n" + statements_name + "\n})\n.catch(" + e + " => {\n let " + r + " = 'No Data'\nlet " + s + " = data.status\n" + statements_name + "});\n" : "})\n.then(data => data.json())\n.then(result => {\n let " + r + " = result\nlet " + s + " = result.status\nlet " + e +  " = 'No errors'\n" + statements_name + "\n})\n.catch(" + e + " => {\n let " + r + " = 'No Data'\nlet " + s + " = data.status\n" + statements_name + "});\n"
      
  // TODO: Assemble JavaScript into code variable.
  var code = "fetch(" + value_url + ", {\n    method: '" + dropdown_t + "',\n mode: 'cors', // no-cors, *cors, same-origin\n cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\ncredentials: 'same-origin',\n" + bbbb
  return code;
};

Blockly.JavaScript['set_prop'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_e = Blockly.JavaScript.valueToCode(block, 'e', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_name2 == "style.backgroundImage" ) {
  if(!value_e.includes("'")) {
  var code = value_name + "." + dropdown_name2 + " = `url(` + " + value_e + " + `)`;\n"
  } else {
  var code = value_name + "." + dropdown_name2 + " = `url(" + value_e + ")`;\n"
  }
  } else if (dropdown_name2 == "opt") {
  var code = "var ddb = " + value_name + " \nfor (var i of ddb) { \nddb.remove(i);\n}\nfor (var i of" + value_e + ") {\n var opt = document.createElement('option');\nopt.innerHTML = i;\n" + value_name + ".appendChild(opt);\n}\n" 
  } else if (dropdown_name2 == "l") {
  var code = value_name + ".innerHTML = '';\nfor (var i of " + value_e + ") {\n var l = document.createElement('li');\nl.innerHTML = i;\n" + value_name + ".appendChild(l);\n}\n"
  } else if (dropdown_name2 == 'R' || dropdown_name2 == 'lo' || dropdown_name2 == 'a' || dropdown_name2 == 'p') {
  var code = value_name + 'LP' + dropdown_name2 + ' = ' + value_e + '\n' + `\nvar p = ` + value_name + `.parentNode\n` + value_name + `.remove(true);\n` + value_name + ` = document.createElement('div');\nvar ` + value_name + `LP = lottieWeb.loadAnimation({
  container: ` + value_name + `, // the dom element that will contain the animation
  renderer: ` + value_name + `LPR,
  loop: ` + value_name + `LPlo,
  autoplay: ` + value_name + `LPa,
  name: '` + eid + `',
  path: ` + value_name + `LPp // the path to the animation json
});
` + value_name + `LP.setSpeed(` + value_name + `LPs);
` + value_name + `LP.setDirection(` + value_name + `LPd);
p.appendChild(` + value_name + `);\n`
  } else if(dropdown_name2 == 'style.transform') {
  var code = value_name + "." + dropdown_name2 + " += " + value_e + ";\n"
  } else if (dropdown_name2 == 'hc') {
  var code = value_name + '.classList.add("' + 'hc' + String(value_e).replaceAll('#','').replaceAll("'",'') + '");\n'
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
  code = code + "\n" + c + ","
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
  var code = "/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'"
  }
  if(dropdown_p == "hde") {
  var code = "window.matchMedia('(prefers-color-scheme: dark)').matches ? 'DarkMode' : 'LightMode'"
  }  if(dropdown_p == "ictan") {
  var code = "navigator.onLine"
  } else if (dropdown_p == "l") {
  var code = "navigator.language"
  } else if(dropdown_p == "dm") {
  var code = 'navigator.deviceMemory'
  } else if(dropdown_p == 'o') {
  var code = 'window.matchMedia("(orientation: portrait)").matches ? "Portrait" : "Landscape"'
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
  var code = value_i + ".replaceAll(" + value_t + ", " + value_w + ")"
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
  var dropdown_d = block.getFieldValue('d');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_d == 'c') {
  var code = value_name + ".cloneNode(true)"
  } else if(dropdown_d == 'p') {
  var code = value_name + ".parentNode"
  } else if(dropdown_d == 'fc' ) {
  var code = value_name + ".firstChild"
  } else if(dropdown_d == 'lc') {
  var code = value_name + ".lastChild"
  } else if (dropdown_d == 'ac') {
  var code = value_name + ".childNodes"
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
        var code = "\nlet " + eid + " = document.createElement('iframe');\n" + eid + ".setAttribute('src', 'https://lukeplays33.github.io/Sketch/');\n" + eid + ".style.height = window.innerHeight + 'px';\n" + eid + ".style.width = window.innerWidth + 'px';\n" + eid + ".onload = function () {\nevent" + dropdown_e + "load(" + eid + ");\n}\n"
    } else if (dropdown_e == "d") {
        var code = "\nlet " + eid + " = document.createElement('div');\n" + eid + ".onclick = function () {\nevent" + dropdown_e + "click(" + eid + ");\n}\n" + eid + ".onmousedown = function () {\nevent" + dropdown_e + "mouseDown(" + eid + ");\n}\n" + eid + ".onmouseup = function () {\nevent" + dropdown_e + "mouseUp(" + eid + ");\n}\n" + eid + ".onmouseover = function () {\nevent" + dropdown_e + "onmouseover(" + eid + ");\n}\n" + eid + ".onmouseleave = function () {\nevent" + dropdown_e + "onmouseout(" + eid + ");\n}\n"
    } else if (dropdown_e == "i") {
        var code = "\nlet " + eid + " = document.createElement('img');\n" + eid + ".src = 'https://i.kym-cdn.com/photos/images/newsfeed/001/473/342/633.png';\n" + eid + ".onclick = function () {\nevent" + dropdown_e + "click(" + eid + ");\n}\n" + eid + ".onmousedown = function () {\nevent" + dropdown_e + "mouseDown(" + eid + ");\n}\n" + eid + ".onmouseup = function () {\nevent" + dropdown_e + "mouseUp(" + eid + ");\n}\n" + eid + ".onmouseover = function () {\nevent" + dropdown_e + "onmouseover(" + eid + ");\n}\n" + eid + ".onmouseleave = function () {\nevent" + dropdown_e + "onmouseout(" + eid + ");\n}\n"
    } else if (dropdown_e == "p") {
        var code = "\nlet " + eid + " = document.createElement('p');\n" + eid + ".innerHTML = 'I am a paragraph, oh yes I am';\n" + eid + ".onclick = function () {\nevent" + dropdown_e + "click(" + eid + ");\n}\n" + eid + ".onmousedown = function () {\nevent" + dropdown_e + "mouseDown(" + eid + ");\n}\n" + eid + ".onmouseup = function () {\nevent" + dropdown_e + "mouseUp(" + eid + ");\n}\n" + eid + ".onmouseover = function () {\nevent" + dropdown_e + "onmouseover(" + eid + ");\n}\n" + eid + ".onmouseleave = function () {\nevent" + dropdown_e + "onmouseout(" + eid + ");\n}\n"
    } else if ( dropdown_e == "b") {
        var code = "\nlet " + eid + " = document.createElement('button');\n" + eid + ".innerHTML = 'Never gonna give you up, Never gonna let you down';\n" + eid + ".onclick = function () {\nevent" + dropdown_e + "click(" + eid + ");\n}\n" + eid + ".onmousedown = function () {\nevent" + dropdown_e + "mouseDown(" + eid + ");\n}\n" + eid + ".onmouseup = function () {\nevent" + dropdown_e + "mouseUp(" + eid + ");\n}\n" + eid + ".onmouseover = function () {\nevent" + dropdown_e + "onmouseover(" + eid + ");\n}\n" + eid + ".onmouseleave = function () {\nevent" + dropdown_e + "onmouseout(" + eid + ");\n}\n"
    } else if ( dropdown_e == "ddb") {
        var code = "\nlet " + eid + " = document.createElement('select');\n             var newDropdownOption = document.createElement('option');\nnewDropdownOption.value = 'value1';\nnewDropdownOption.text = 'option 1';\n" + eid + ".add(newDropdownOption);\n" + eid + ".onchange = function () {\nevent" + dropdown_e + "change(" + eid + ");\n}\n"
        } else if ( dropdown_e == "cp") {
            var code = "\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'color';\n" + eid + ".onchange = function () {\nevent" + dropdown_e + "change(" + eid + ");\n}\n"
    } else if ( dropdown_e == "dp") {
        var code = "\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'date';\n" + eid + ".onchange = function () {\nevent" + dropdown_e + "change(" + eid + ");\n}\n"
    } else if ( dropdown_e == "tp") {
        var code = "\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'time';\n" + eid + ".onchange = function () {\nevent" + dropdown_e + "change(" + eid + ");\n}\n"
    } else if ( dropdown_e == "tf2") {
        var code = "\nlet " + eid + " = document.createElement('input');\n" + eid + ".placeholder = 'This is a placeholder, oh yes this is';\n" + eid + ".oninput = function () {\nevent" + dropdown_e + "input(" + eid + ");\n}\n" + eid + ".onfocus = function () {\nevent" + dropdown_e + "focusin(" + eid + ");\n}\n" + eid + ".onblur = function () {\nevent" + dropdown_e + "focusout(" + eid + ");\n}\n"
    } else if ( dropdown_e == "c") {
        var code = "\nlet " + eid + " = document.createElement('canvas');\nevent" + dropdown_e + "load(" + eid + ");\n"
    } else if (dropdown_e == "s") {
        var code = "\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'range';\n" + eid + ".max = 100;\n" + eid + ".value = 50;\n" + eid + ".onchange = function () {\nevent" + dropdown_e + "change(" + eid + ");\n}\n"
    } else if ( dropdown_e == "pb") {
        var code = "\nlet " + eid + " = document.createElement('progress');\n" + eid + ".onchange = function () {\nevent" + dropdown_e + "change(" + eid + ");\n}\n"
    } else if ( dropdown_e == "cb") {
        var code = "\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'checkbox';\n" + eid + ".onclick = function () {\nevent" + dropdown_e + "change(" + eid + ");\n}\n"
    } else if ( dropdown_e == "rb") {
        var code = "\nlet " + eid + " = document.createElement('input');\n" + eid + ".type = 'radio';\n" + eid + ".onclick = function () {\nevent" + dropdown_e + "change(" + eid + ");\n}\n"
    } else if( dropdown_e == "li") {
    var code = "\nlet " + eid + " = document.createElement('div');\n"
    } else if (dropdown_e == "fab") {
    var code = "\nlet " + eid + " = document.createElement('div');\n" + eid + ".onclick = function () {\nevent" + dropdown_e + "click(" + eid + ");\n}\n" + eid + ".onmousedown = function () {\nevent" + dropdown_e + "mouseDown(" + eid + ");\n}\n" + eid + ".onmouseup = function () {\nevent" + dropdown_e + "mouseUp(" + eid + ");\n}\n" + eid + ".onmouseover = function () {\nevent" + dropdown_e + "onmouseover(" + eid + ");\n}\n" + eid + ".onmouseout = function () {\nevent" + dropdown_e + "onmouseleave(" + eid + ");\n}\n"
    } else if ( dropdown_e == "ul") {
    var code = "\nlet " + eid + " = document.createElement('ul');\n"
    }else if ( dropdown_e == "ol") {
    var code = "\nlet " + eid + " = document.createElement('ol');\n"
    } else if (dropdown_e == "a") {
    var code = "\nlet " + eid + " = document.createElement('a');\n" + eid + ".href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'\n" + eid + ".innerHTML = 'This Is A HyperLink' \n"
    } else if(dropdown_e == 'lp') {
    var code = "\nlet " + eid + " = document.createElement('div');\n" + `var ` + eid + `LP = lottieWeb.loadAnimation({
  container: ` + eid + `, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: '` + eid + `',
  path: 'https://assets4.lottiefiles.com/packages/lf20_jtbfg2nb.json' // the path to the animation json
});\nlet ` + eid + `LPR = 'svg'\nlet ` + eid + `LPlo = true\nlet ` + eid + `LPa = true\nlet ` + eid + `LPp = 'https://assets4.lottiefiles.com/packages/lf20_jtbfg2nb.json'\nlet `  + eid + `LPs = 1\nlet `  + eid + `LPd = 1\n`
    } else if(dropdown_e == 'fv') {
    var code = "{\nlet " + eid + " = document.createElement('object');\n" + eid + '.data = `https://image.winudf.com/v2/image1/Y29tLnRodW5rYWJsZS5saXZlX2ljb25fMTU1NDk3OTQzOF8wMzc/icon.png?w=&fakeurl=1`\n'
    }
    
    var code = code + eid + ".className = '" + dropdown_e + "'\n" + statements_name + "\n"
    
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
                var code = "window.open(" + value_name + ");\n"
                } else {
                    var code = "window.location.href = " + value_name + '\n'
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
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
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

var events = ["initd", 'window_click', 'key_changed', 'game_pad_connected','game_pad_disconnected', 'game_pad_button_change', 'before_unload','window_resize','touch_start','touch_end', 'touch_cancel','touch_move'];
var loops = ['controls_repeat', 'controls_repeat_ext', 'controls_forEach', 'controls_for', 'controls_whileUntil', 'forever'];
var projects = [];

var secretsMSG = ["I am a monster", "Well hello there, If you've found this then congratulations there is more to see than you think, Just giving you a hint ;).", "I'll marry her, I'lljust have to finda way", "02 x Sketch", "I'm in love with a fairytale, even tho it hurts, but I don't care if I lose my mind, I'm already cursed.","Hentai", "Hello There", "What is this?, I hate this feeling", "I think Sketch would make a great Game Theory episode","Zero Two is kinda Hot", "MUSIC MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN", 'Does anyone actually read these','Oh you dont know what Karlson is?','Oh you dont know what Sketch is?','Once we die, we’ll only be a statistic. It won’t matter what we were called. ~ Zero Two'];

var base64 = [];
var assetsBlockDropdown = [["UploadAsset","OPTIONNAME"]];
var assetsBase64 = [];

var project = "";

function tooltip () {
var t = [];
for(var i of workspace.getBlocksByType('create_elem')) {
t.push(i.getFieldValue('e'));
}

t = [... new Set(t)]

let e = ""
for(var i of t) {
e = e + `.` + i + ` {
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}`
}
return e 
}

function hintColor () {
var hc = workspace.getBlocksByType('set_prop');
var colors = ''
for(var i of hc) {
if(i.getFieldValue('NAME2') == 'hc') {
var col = String(Blockly.JavaScript.valueToCode(i, 'e', Blockly.JavaScript.ORDER_ATOMIC)).replaceAll("'",'')
colors = colors + '.' + 'hc' + String(col).replaceAll('#','') + '::-webkit-input-placeholder {\ncolor: ' + col + '\n}\n'
}
}
return colors;
}

function html () {
var assets = ''
for(var i of assetsBase64) {
assets = assets + "var Ass_" + i.replaceAll(" ", "_").replaceAll("-", "_").replaceAll(".", "_").replaceAll("(", "_").replaceAll(")", "_") + " = '" + base64[assetsBase64.indexOf(i)] + "'\n"
}
  var gen = `<!DOCTYPE html>
<title>`+ window.localStorage.getItem("projectName" + project) + `<\/title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta name="description" content="` + window.localStorage.getItem("projectdes" + project) + `"
 ` + window.localStorage.getItem("projecttag" + project) + `
<link rel="shortcut icon" type="image/jpg" href="` + window.localStorage.getItem("icon" + project) + `"\/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
html, body {
margin: 0px;
  height: 100%;
width: 100%;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}

` + hintColor() + `

.li {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #008dcd; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1.5s linear infinite;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
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

body {
background: rgb(238,238,238);
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}

#toast {
display: none;
margin: 8px;
margin-bottom: 0px;
position: fixed;
bottom: 0px;
padding: 0px;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}

.toasttext {
background-color: rgba(155, 155, 155, 0.5);
border-radius: 10px;
color: white;
text-align: center;
font-size 25px;
padding: 8px;
font-family: Sans-serif;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}

#sckb {
display: none;
width: 100%;
padding: 8px;
padding-bottom: 0px;
position: fixed;
bottom: 0px;
-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}

#snackbar {
background-color: rgba(155, 155, 155, 0.5);
border-radius: 10px;
width: 100%;
padding: 0px;
-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}

.snackbartext {
color: white;
text-align: left;
font-size 25px;
padding: 8px;
font-family: Sans-serif;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}

#close {
position: fixed;
right: 0px;
bottom: 11px;
with: 30px;
height: 30px;
margin: 8px;
display: none;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */

  -moz-box-sizing: border-box; /* Firefox, other Gecko */

  box-sizing: border-box;
}

` +  tooltip () + `

<\/style>
<body>
<div id="toast">
<p id="toasttext" class="toasttext" >EEEEEEEEEEEEEEE</p>
</div>

<div id="sckb">
<div id="snackbar">
<p id="snackbarText" class="snackbartext" >EEEEEEEEEEEEEEE</p>
</div>
</div>

<img id="close"
src="https://media.discordapp.net/attachments/898978597996466189/946430018463105064/round_close_white_24dp.png">

<\/body>
<script type="module">
` + assets + `

import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

const body = document.body

var isFullscreen = 0;

const reader = new FileReader();
let spalsh = document.createElement('img');
spalsh.src = 'https://media.discordapp.net/attachments/898978597996466189/900743720905900032/60d473a38f959300118b9c10.png';
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

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function readClip () {
navigator.clipboard.readText()
  .then(text => {
  return text
  })
  .catch(err => {
return err
  });
}

var csShowCount = 0;

function captionKbClose() {
  if (csShowCount > 0) {
    csShowCount = csShowCount - 1;
  }
  if (csShowCount == 0) {
    document.title = savedTitle;
  }
}

function captionHideKb() { 
  document.title = savedTitle + csAddStr + "Hide";
  csShowCount = csShowCount + 1;
  setTimeout(captionKbClose, 1000);
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

var menuSize = !window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile ? "420px" : "350px"

// Inject Blockly.

document.getElementById("blocklyContainer").style.height = (String((window.innerHeight) - 50) + 'px');
document.getElementById("editor").style.height = (String((window.innerHeight) - 50) + 'px');
document.getElementById("blocklyDiv").style.width = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? String(window.innerWidth) + 'px' : (String((window.innerWidth) - 300) + 'px');
Blockly.Scrollbar.scrollbarThickness = 0.0

registerFirstContextMenuOptions();

const workspace2 = Blockly.inject("blocklyDiv2", {
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
            "colourPrimary": window.Blockly.CONTROL_CATEGORY_HUE
         },
                    "loop_blocks": {
            "colourPrimary": window.Blockly.CONTROL_CATEGORY_HUE
         },
         "list_blocks": {
            "colourPrimary": window.Blockly.LIST_CATEGORY_HUE
         },
                   "math_blocks": {
            "colourPrimary": window.Blockly.MATH_CATEGORY_HUE
         },
                   "text_blocks": {
            "colourPrimary": window.Blockly.TEXT_CATEGORY_HUE
         },
                             "colour_blocks": {
            "colourPrimary": "#7F7F7F"
         },
                                                 "variable_blocks": {
            "colourPrimary": window.Blockly.VARIABLES_CATEGORY_HUE
         },
                                                 "procedure_blocks": {
            "colourPrimary": window.Blockly.FUNCTIONS_CATEGORY_HUE
         }
      },
      'componentStyles' : {
                   'flyoutOpacity': '0.0'
      },
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

    startScale: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? 0.7 : 0.9,

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
            "colourPrimary": window.Blockly.CONTROL_CATEGORY_HUE
         },
                    "loop_blocks": {
            "colourPrimary": window.Blockly.CONTROL_CATEGORY_HUE
         },
         "list_blocks": {
            "colourPrimary": window.Blockly.LIST_CATEGORY_HUE
         },
                   "math_blocks": {
            "colourPrimary": window.Blockly.MATH_CATEGORY_HUE
         },
                   "text_blocks": {
            "colourPrimary": window.Blockly.TEXT_CATEGORY_HUE
         },
                             "colour_blocks": {
            "colourPrimary": "#7F7F7F"
         },
                                                 "variable_blocks": {
            "colourPrimary": window.Blockly.VARIABLES_CATEGORY_HUE
         },
                                                 "procedure_blocks": {
            "colourPrimary": window.Blockly.FUNCTIONS_CATEGORY_HUE
         }
      },
      'componentStyles' : {
                   'flyoutOpacity': '0.0',
          'scrollbarOpacity' : '0.0',
      },
      'startHats': true
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

    startScale: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? 0.75 : 0.9,

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

scrollOptionsPlugin.init({ enableWheelScroll: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? false : true, enableEdgeScroll: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? false : true });

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
    
            document.getElementById("reset").style.display = "none";
    document.getElementById("goHome").style.display = "none";
    
    
  document.getElementById("GoHome2").style.backgroundImage =
    "url(Images/round_home_white_24dp.png)";
    
    document.getElementById("upload").style.backgroundImage =
    "url(Images/round_create_new_folder_white_24dp.png)";
    
  document.getElementById("Test").style.backgroundImage =
    "url(Images/round_play_arrow_white_24dp.png)";
  
  document.getElementById("download").style.backgroundImage =
    "url(Images/round_file_download_white_24dp.png)";
    
    document.getElementById("ssetings").style.backgroundImage =
    "url(Images/61818b07d54ef50010e42587-1.png)";
    
        
    document.getElementById("fullscreen").style.backgroundImage =
    "url(Images/outline_fullscreen_white_24dp.png)";
    
    document.getElementById("fullscreen").style.backgroundRepeat = 'no-repeat';
    document.getElementById("fullscreen").style.backgroundSize = 'contain';
    document.getElementById("fullscreen").style.backgroundPosition = 'center';
    
            document.getElementById("Psettings").style.backgroundImage =
    "url(Images/61818b07d54ef50010e42587-1.png)";
    
    document.getElementById("Psettings").style.backgroundRepeat = 'no-repeat';
    document.getElementById("Psettings").style.backgroundSize = 'contain';
    document.getElementById("Psettings").style.backgroundPosition = 'center';
    
        document.getElementById("adddd").style.backgroundImage =
    "url(Images/round_add_white_24dp.png)";
    
    document.getElementById("adddd").style.backgroundRepeat = 'no-repeat';
    document.getElementById("adddd").style.backgroundSize = 'contain';
    document.getElementById("adddd").style.backgroundPosition = 'center';
    
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
  
  if(!window.localStorage.getItem("smos") == null || !window.localStorage.getItem("smos") == "") {
    document.getElementById("smos").innerHTML = "On"
    
icon = 0
        menu.style.backgroundImage =
    "url(Images/round_close_white_24dp.png)";
        document.getElementById("menuItems").style.display = "block";
    } else {
    }
      
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
    
    if(!window.localStorage.getItem("assetsBlockDropdown") == "") {
    assetsBase64 = JSON.parse(window.localStorage.getItem("assetsBase64"));
    assetsBlockDropdown = JSON.parse(window.localStorage.getItem("assetsBlockDropdown"));
    base64 = JSON.parse(window.localStorage.getItem("base64"));
    document.getElementById("no_ass").style.display = "none";
    
        document.getElementById('searchAssets').onclick = function (e) {
        window.setTimeout(function () {
    document.getElementById("assetFolder").style.display = "block";
     document.getElementById("searchAssets").focus();
    },1);
    }
    
    document.getElementById('searchAssets').oninput = function (e) {
    e.stopPropagnation();
    for (var i of assetsBase64) {
    if(i.includes(document.getElementById('searchAssets').value)) {
    document.getElementById(i).style.display = 'block'
    } else {
    document.getElementById(i).style.display = 'none'
    }
    }
    }
    
    for(var i of assetsBase64) {
        
        var p = document.createElement("p");
    p.innerHTML = i;
    p.style.color = "white";
    p.style.fontSize = "20px";
    p.style.textAlign = "left";
    p.style.margin = "8px";
    p.style.padding = "8px";
    p.id = "P" + i
    
    var d = document.createElement("div");
    d.className = "projectsList";
    d.id = i;
    d.onclick = function () {
    var oo = this.id
    
    createContextMenuI(String(x) + "px", String(y) + "px", ["Delete Asset", "Rename asset", "Replace Asset", 'View Asset']);
    document.getElementById('3').onclick = function () {
    var vv = window.open('');
    vv.document.write(`<!DOCTYPE html>
<object data="` + base64[assetsBase64.indexOf(oo)] + `" width="100%" height="100%"></object>
`);
    }
    
    document.getElementById('2').onclick = function () {
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
            base64[assetsBase64.indexOf(oo)] = reader.result
            
                             window.localStorage.setItem("base64", JSON.stringify(base64));
             window.localStorage.setItem("assetsBase64", JSON.stringify(assetsBase64));
             window.localStorage.setItem("assetsBlockDropdown", JSON.stringify(assetsBlockDropdown));
             
            },
            false
          );
          reader.readAsDataURL(files[i]);
        }
      };
      input.click();

    }
    
            document.getElementById('1').onclick = function () {
    var n = prompt("Rename: " + oo);
    if(!n == "" || !n == null || !n ==="") {
    
    base64.push(base64[base64.indexOf(oo)]);
    assetsBlockDropdown.push([n, n]);
    assetsBase64.push(n);
    
    base64.splice(base64.indexOf(oo) ,1);
    assetsBlockDropdown.splice(base64.indexOf(oo) + 2,1);
    assetsBase64.splice(base64.indexOf(oo) + 1,1);
    
    document.getElementById("P" + oo).innerHTML = n
    
                 window.localStorage.setItem("base64", JSON.stringify(base64));
             window.localStorage.setItem("assetsBase64", JSON.stringify(assetsBase64));
             window.localStorage.setItem("assetsBlockDropdown", JSON.stringify(assetsBlockDropdown));
    
    } else {
    }
    }
    
    document.getElementById('0').onclick = function () {
    var conf = confirm("Are you sure you want to delete: " + oo + "?");
    if(conf) {
    base64.splice(assetsBase64.indexOf(oo),1);
    assetsBlockDropdown.splice(assetsBase64.indexOf(oo) + 1 ,1);
    assetsBase64.splice(assetsBase64.indexOf(oo),1);
    
    document.getElementById(oo).remove(true);
    
                 window.localStorage.setItem("base64", JSON.stringify(base64));
             window.localStorage.setItem("assetsBase64", JSON.stringify(assetsBase64));
             window.localStorage.setItem("assetsBlockDropdown", JSON.stringify(assetsBlockDropdown));
    
    } else {
    }
    
    }
    
    window.setTimeout(function () {
    document.getElementById("assetFolder").style.display = "block";
    },1);
    }
    d.appendChild(p);
    document.getElementById("assList").appendChild(d);
    }
    } else {
    document.getElementById("no_ass").style.display = "block";
    }
    
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
        
                const select4 = neww_list_item.querySelector("#PSettings");
      select4.id = "PSettings" + i;
      select4.className = 'PSettings'
            select4.onclick = function (e) {
      e.stopPropagation();
      editProject(String(window.innerWidth - 275) + 'px',String(this.id).replaceAll('PSettings','') == projects[0] ? '145px' : String(145 + 118 * projects.indexOf(String(this.id).replaceAll('PSettings',''))) + 'px', String(this.id).replaceAll('PSettings','')); //145px
      }

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
  var addd = document.getElementById("add");
  addd.onclick = function () {
  createContextMenu("82px", "75px", ["Create New Project", "Import new Project"]);
  document.getElementById("1").onclick = function () {
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
    if(projects.includes(new_project)) {
    new_project = prompt("Project name already exist.\nPlaease enter a new name");
    }
                    
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
      var dd = new Date();
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
      
            const select4 = new_list_item.querySelector("#PSettings");
      select4.id = "PSettings" + new_project;
      select4.className = 'PSettings'
            select4.onclick = function (e) {
      e.stopPropagation();
      editProject(String(window.innerWidth - 275) + 'px',String(this.id).replaceAll('PSettings','') == projects[0] ? '145px' : String(145 + 118 * projects.indexOf(String(this.id).replaceAll('PSettings',''))) + 'px', String(this.id).replaceAll('PSettings','')); //145px
      }


                                 var name = String(reader.result).replaceAll('<!--Name-->','')
  window.localStorage.setItem("projectName" + window.localStorage.getItem("created" + new_project), String(String(reader.result).replaceAll('<!--Name-->','')).substring(0,name.indexOf('<')));
  
  name = String(String(reader.result).replaceAll('<!--Name-->','')).substring(0,name.indexOf('<'))
  
  var tag = String(String(reader.result).replaceAll('<!--Name-->' + name,'').replaceAll('<!--ownerTag-->',''))
  tag = tag.substring(0,tag.indexOf('<'))

window.localStorage.setItem("projecttag" + new_project, tag);

var des =String(String(reader.result).replaceAll('<!--Name-->' + name + '<!--ownerTag-->' + tag,'').replaceAll('<!--Description-->',''))

des = des.substring(0,des.indexOf('<'))

window.localStorage.setItem("projectdes" + new_project, des);

var b = String(String(reader.result).substring(String(reader.result).indexOf('<!--Block XML File-->')).replaceAll('<!--Block XML File-->',''))

                    window.localStorage.setItem(window.localStorage.getItem("created" + new_project) + "blocks", b);
                    }
                    
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
        
      var xml = Blockly.Xml.textToDom(window.localStorage.getItem(window.localStorage.getItem("created" + project) + "blocks"));
    Blockly.Xml.domToWorkspace(xml, workspace);
      
          document.getElementById("ssetings").style.display = "block";
    document.getElementById("GoHome2").style.display = "block";
        document.getElementById("download").style.display = "block";
        document.getElementById("Test").style.display = "block";
        document.getElementById("upload").style.display = "block";
      
    document.getElementById("settings").style.display = "none";
    }
          },
          false
        );
        reader.readAsText(files[i]);
      }
    };
    input.click();
  };
  document.getElementById("0").onclick = function () {
  var new_project = prompt("New Project Name");
    if (new_project === `` || new_project == null) {
    } else {
    if(projects.includes(new_project)) {
    new_project = prompt("Project name already exist.\nPlaease enter a new name");
      }
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
      var dd = new Date();
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
      
      const select4 = new_list_item.querySelector("#PSettings");
      select4.id = "PSettings" + new_project;
      select4.className = 'PSettings'
            select4.onclick = function (e) {
      e.stopPropagation();
      editProject(String(window.innerWidth - 275) + 'px',String(this.id).replaceAll('PSettings','') == projects[0] ? '145px' : String(145 + 118 * projects.indexOf(String(this.id).replaceAll('PSettings',''))) + 'px', String(this.id).replaceAll('PSettings','')); //145px
      }


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
      
    document.getElementById("settings").style.display = "none";
  }
  }
    }
  }
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
            vs.innerHTML = "On"
            window.localStorage.setItem("vsStyle", true);
        } else {
            vs.innerHTML = "Off"
                window.localStorage.setItem("vsStyle", "");
        }
            if(!window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile) {
document.getElementById("editor").style.width = window.innerWidth + "px"
        } else {
            document.getElementById("editor").style.width = "350px"
        }
       menuSize = !window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile ? "420px" : "350px"
       
       if(window.localStorage.getItem("vsStyle") == null || window.localStorage.getItem("vsStyle") == "") {
       document.getElementById("Switch").style.opacity = "0.0";
    } else {
        document.getElementById("Switch").style.opacity = "1.0";
    }
    
    }
    
    if(navigator.userAgentData.mobile) {
        document.getElementById("vsStyle").style.display = "none";
    } else {
        document.getElementById("Switch").style.opacity = "0.0";
    }
    
    if(window.localStorage.getItem("vsStyle") == null || window.localStorage.getItem("vsStyle") == "") {
    
    } else {
        document.getElementById("Switch").style.opacity = "1.0";
    }
    
  var bgimage = document.getElementById("bgimage");
  bgimage.onclick = function () {
    if (!window.localStorage.getItem("BGImage") == "") {
      document.getElementById("bgimage").innerHTML =
        "Off";
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
              "On";
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
      
          document.getElementById("BGImageURL").style.backgroundColor = "#424242";
      
      document.getElementById("smos").style.backgroundColor = "#424242";

      document.getElementById("open").style.backgroundColor = "#424242";
      
            document.getElementById("credits").style.backgroundColor = "#424242";
        
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
        
                          document.getElementById("pick").style.backgroundColor = "#424242";
      document.getElementById("cc").style.backgroundColor = "#424242";

        
        document.getElementById("dismisss").style.backgroundColor = "#424242";

      document.getElementById("theme").innerHTML = "On";
      
       document.getElementById("challange").style.color = "white";

      document.getElementById("loading").style.borderTop = "8px solid #424242";

      document.getElementById("logo").src =
        "https://media.discordapp.net/attachments/898978597996466189/911561074178949150/Untitled116.png";
        
        document.getElementById("yt").style.backgroundColor = "#424242";
      document.getElementById("twitter").style.backgroundColor = "#424242";
      
      document.getElementById("dropdownMenu").style.backgroundColor = "#424242";
    } else {
      window.localStorage.setItem("DarkMode", "");
      document.body.style.backgroundColor = "white";
      
      document.getElementById("dropdownMenu").style.backgroundColor = "#008dcd";
      
      document.getElementById("open").style.backgroundColor = "#008dcd";
      
      document.getElementById("dismisss").style.backgroundColor = "#008dcd";
      
            document.getElementById("dis").style.backgroundColor = "#008dcd";
      document.getElementById("docss").style.backgroundColor = "#008dcd";
      
      document.getElementById("yt").style.backgroundColor = "#008dcd";
      document.getElementById("twitter").style.backgroundColor = "#008dcd";
      
      document.getElementById("credits").style.backgroundColor = "#008dcd";
      
      document.getElementById("smos").style.backgroundColor = "#008dcd";
      
      document.getElementById("header").style.backgroundColor = "#008dcd";
      
          document.getElementById("BGImageURL").style.backgroundColor = "#008dcd";
        
        document.getElementById("ssetings").style.backgroundColor = "#008dcd";
        
        document.getElementById("no_project").style.color = "#008dcd";

      document.getElementById("Test").style.backgroundColor = "#008dcd";
      document.getElementById("goHome").style.backgroundColor = "#008dcd";
        
        document.getElementById("vsStyle").style.backgroundColor = "#008dcd";

        document.getElementById("upload").style.backgroundColor = "#008dcd";
        
      document.getElementById("GoHome2").style.backgroundColor = "#008dcd";
        
        document.getElementById("snap").style.backgroundColor = "#008dcd";
    document.getElementById("grid").style.backgroundColor = "#008dcd";
    
                      document.getElementById("pick").style.backgroundColor = "#008dcd";
      document.getElementById("cc").style.backgroundColor = "#008dcd";

        
              document.getElementById("menu").style.backgroundColor = "#008dcd";
      document.getElementById("menuItems").style.backgroundColor = "#008dcd";

      document.getElementById("add").style.backgroundColor = "#008dcd";

      document.getElementById("BGImage").style.backgroundColor = "#008dcd";

      document.getElementById("share").style.backgroundColor = "#008dcd";
      
      document.getElementById("download").style.backgroundColor = "#008dcd";
      document.getElementById("bgimage").style.backgroundColor = "#008dcd";
      document.getElementById("theme").style.backgroundColor = "#008dcd";

      document.getElementById("theme").innerHTML = "Off";

      document.getElementById("challange").style.color = "#008dcd";
      
      document.getElementById("settings").style.backgroundColor = "#008dcd";
      document.getElementById("reset").style.backgroundColor = "#008dcd";
      document.getElementById("logo").src =
        "https://media.discordapp.net/attachments/898978597996466189/909471139921793044/Untitled183_20210624211409.png";

      document.getElementById("loading").style.borderTop = "8px solid #008dcd";
    }
  };
    
    var snap = document.getElementById("snap");
    snap.onclick = function () {
        if (window.localStorage.getItem("snap") == "false" || window.localStorage.getItem("snap") == null ) {
            window.localStorage.setItem("snap", true);
            snap.innerHTML = "On"
        } else {
            window.localStorage.setItem("snap", "false");
            snap.innerHTML = "Off"
        }
        window.location.reload();
    }

    var grid = document.getElementById("grid");
    grid.onclick = function () {
        if (window.localStorage.getItem("grid") == 0 || window.localStorage.getItem("grid") == null) {
            window.localStorage.setItem("grid", 40);
            grid.innerHTML = "On"
        } else {
            window.localStorage.setItem("grid", 0);
            grid.innerHTML = "Off"
        }
        window.location.reload();
    }
    
    var smos = document.getElementById("smos");
    smos.onclick = function () {
    if(window.localStorage.getItem("smos") == null || window.localStorage.getItem("smos") == "") {
    smos.innerHTML = "On"
    window.localStorage.setItem("smos", true);
    
icon = 0
        menu.style.backgroundImage =
    "url(Images/round_close_white_24dp.png)";
        document.getElementById("menuItems").style.display = "block";
    } else {
    smos.innerHTML = "Off"
    window.localStorage.setItem("smos", "");
    
            icon = 1
        menu.style.backgroundImage =
    "url(Images/round_menu_white_24dp.png)";
            document.getElementById("menuItems").style.display = "none";
    }
    }

  var settings = document.getElementById("settings");

  settings.onclick = function () {
  document.getElementById("goHome").style.backgroundImage = "url(Images/round_home_white_24dp.png)";
  
    document.getElementById("home").style.display = "none";
    document.getElementById("Settings").style.display = "block";
      
                  document.getElementById("reset").style.display = "block";
    document.getElementById("goHome").style.display = "block";
      
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
      
    document.getElementById("settings").style.display = "block";
          
                                  document.getElementById("ssetings").style.display = "none";
    document.getElementById("GoHome2").style.display = "none";
        document.getElementById("download").style.display = "none";
        document.getElementById("Test").style.display = "none";
        document.getElementById("upload").style.display = "none";
      
    document.getElementById("settings").style.display = "block";
          
          
      } else { 
          
          document.getElementById("goHome").style.backgroundImage = "url(Images/round_edit_white.png)";
          
          document.getElementById("menuItems").style.height = menuSize;
          
              document.getElementById("blocklyContainer").style.display = "block";
    document.getElementById("Settings").style.display = "none";
          
                        document.getElementById("ssetings").style.display = "block";
    document.getElementById("GoHome2").style.display = "block";
        document.getElementById("download").style.display = "block";
        document.getElementById("Test").style.display = "block";
        document.getElementById("upload").style.display = "block";
          document.getElementById("Switch").style.display = "block";
      
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
      "On";
      window.localStorage.setItem("open", true);
    } else {
      document.getElementById("open").innerHTML =
      "Off";
      window.localStorage.setItem("open", "");
    }
  }
}
settings();

function setBGImage() {
  if (window.localStorage.getItem("BGImage") == "" || window.localStorage.getItem("BGImage") == null) {
    document.getElementById("bgimage").innerHTML =
      "Off";
  } else {
    document.body.style.backgroundImage =
      "url(" + window.localStorage.getItem("BGImage") + ")";
    document.getElementById("bgimage").innerHTML =
      "On";
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

    document.getElementById("BGImage").style.backgroundColor = "#424242";
    document.getElementById("BGImageURL").style.backgroundColor = "#424242";
    
    document.getElementById("dismisss").style.backgroundColor = "#424242";

    document.getElementById("bgimage").style.backgroundColor = "#424242";

    document.getElementById("theme").style.backgroundColor = "#424242";
    
    document.getElementById("dropdownMenu2").style.backgroundColor = "#424242";

    document.getElementById("share").style.backgroundColor = "#424242";

    document.getElementById("theme").innerHTML = "On";

document.getElementById("smos").style.backgroundColor = "#424242";

      
      document.getElementById("dropdownMenu").style.backgroundColor = "#424242";
      
            document.getElementById("dis").style.backgroundColor = "#424242";
      document.getElementById("docss").style.backgroundColor = "#424242";
      
                  document.getElementById("pick").style.backgroundColor = "#424242";
      document.getElementById("cc").style.backgroundColor = "#424242";

    document.getElementById("challange").style.color = "white";

    document.getElementById("loading").style.borderTop = "8px solid #424242";

    document.getElementById("logo").src =
      "Images/Untitled116-1.png";

    document.getElementById("reset").style.backgroundColor = "#424242";
      
      document.getElementById("menu").style.backgroundColor = "#424242";
      document.getElementById("menuItems").style.backgroundColor = "#424242";
  } else {
  }
}
Dtheme();

//BGImage from URL
function BGIfURL() {
  document.getElementById("BGImageURL").onclick = function () {
  var img = prompt('Set Background Image From URL');
  if(!img == null || !img == '') {
      document.body.style.backgroundImage =
      "url(" + img + ")";
    window.localStorage.setItem(
      "BGImage",
      img
    );
    document.getElementById("bgimage").innerHTML =
      "On";
      }
  }
}
BGIfURL();

function editor() {

document.getElementById('Psettings').onclick = function (e) {
e.stopPropagation();
editProject(String(window.innerWidth - 355) + 'px',t == 0 ? '102px' : '51px', project);
}

document.getElementById('adddd').onclick = function (e) {
e.stopPropagation();
createContextMenuI(String(window.innerWidth - 221) + 'px', t == 0 ? '102px' : '51px', ["Iframe", "Div",'Image','Paragraph','Button','DropDownButton','ColorPicker','DatePicker','TimePicker','TextField','Canvas','Slider','ProgressBar','CheckBox','RadioButton','LoadingIcon','FAB','UnorderedList','OrderedList','HyperLink','LottiePlayer','FileViewer']);
}

var t = 0
var f = document.getElementById('fullscreen');
f.onclick = function (e) {
e.stopPropagation();
if(t == 0) {
document.getElementById("blocklyContainer").style.height = (String(window.innerHeight) + 'px');
document.getElementById("editor").style.height = (String(window.innerHeight) + 'px');

document.getElementById('blocklyContainer').style.transform = 'translateY(0px)'

document.getElementById("editor").style.width = window.innerWidth + "px"

document.getElementById("fullscreen").style.backgroundImage =
    "url(Images/outline_fullscreen_exit_white_24dp.png)";
    document.getElementById('header').style.display = 'none'
    t = 1
} else {
document.getElementById("blocklyContainer").style.height = (String((window.innerHeight) - 50) + 'px');
document.getElementById("editor").style.height = (String((window.innerHeight) - 50) + 'px');

document.getElementById('blocklyContainer').style.transform = 'translateY(50px)'

if(!window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile) {
document.getElementById("editor").style.width = window.innerWidth + "px"
        } else {
            document.getElementById("editor").style.width = "350px"
        }

document.getElementById("fullscreen").style.backgroundImage =
    "url(Images/outline_fullscreen_white_24dp.png)";
    document.getElementById('header').style.display = 'block'
    t = 0
}
}
var e = document.getElementById('editor');
e.onclick = function () {
createContextMenuI(String(x) + "px", String(y) + "px", ["Edit Element", "Add New Element"]);
document.getElementById('1').onclick = function () {
window.setTimeout(function () {
document.getElementById('adddd').click();
}, 0);
}
document.getElementById('0').onclick = function () {
}
}

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

document.getElementById("blocklyContainer").style.height = (String((window.innerHeight) - 50) + 'px');
document.getElementById("editor").style.height = (String((window.innerHeight) - 50) + 'px');

document.getElementById('blocklyContainer').style.transform = 'translateY(50px)'

if(!window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile) {
document.getElementById("editor").style.width = window.innerWidth + "px"
        } else {
            document.getElementById("editor").style.width = "350px"
        }

document.getElementById("fullscreen").style.backgroundImage =
    "url(Images/outline_fullscreen_white_24dp.png)";
    document.getElementById('header').style.display = 'block'
    t = 0
        
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
      
    document.getElementById("settings").style.display = "block";
    
                                document.getElementById("reset").style.display = "none";
    document.getElementById("goHome").style.display = "none";
    

};
  var test = document.getElementById("Test");
  test.onclick = function () {
  window.sessionStorage.setItem('rl' , 'test');
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
  var d = document.getElementById("download");
  d.onclick = function () {
  createContextMenu(String(parseInt(d.style.right.replace("px", "")) + 66) + "px",d.style.bottom, ["Download Project HTML", "Download Project XML"]);
  document.getElementById("0").onclick = function () {
    window.sessionStorage.setItem('rl' , 'html');
  downloadHTML();
  }
  document.getElementById("1").onclick = function () { 
  downloadXML();
  }
  }
    
    var se = document.getElementById("ssetings");
    se.onclick = function () {
    document.getElementById("blocklyContainer").style.height = (String((window.innerHeight) - 50) + 'px');
document.getElementById("editor").style.height = (String((window.innerHeight) - 50) + 'px');

document.getElementById('blocklyContainer').style.transform = 'translateY(50px)'

if(!window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile) {
document.getElementById("editor").style.width = window.innerWidth + "px"
        } else {
            document.getElementById("editor").style.width = "350px"
        }

document.getElementById("fullscreen").style.backgroundImage =
    "url(Images/outline_fullscreen_white_24dp.png)";
    document.getElementById('header').style.display = 'block'
    t = 0
    
            document.getElementById("blocklyContainer").style.display = "none";
    document.getElementById("Settings").style.display = "block";
        
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

function downloadXML () {
var dom = Blockly.Xml.workspaceToDom(workspace);
var t = Blockly.Xml.domToText(dom);

t = '<!--Name-->' + window.localStorage.getItem("projectName" + project) + '<!--ownerTag-->' + window.localStorage.getItem("projecttag" + project) + '<!--Description-->' + window.localStorage.getItem("projectdes" + project) + '<!--Block XML File-->' + t

download(window.localStorage.getItem("projectName" + project) + ".xml", t);
}

if (window.localStorage.getItem("grid") == 0 || window.localStorage.getItem("grid") == null ) {
} else {
    document.getElementById("grid").innerHTML = "On"
}

if (window.localStorage.getItem("snap") == "false" || window.localStorage.getItem("snap") == null ) {
} else {
    document.getElementById("snap").innerHTML = "On"
}

        if(!window.localStorage.getItem("vsStyle") == null || !window.localStorage.getItem("vsStyle") == "" || navigator.userAgentData.mobile) {
            document.getElementById("vsStyle").innerHTML = "On"
        } else {
            document.getElementById("vsStyle").innerHTML = "Off"
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

//donload blocks as png

function registerFirstContextMenuOptions() {
    const workspaceItem = {
      displayText: 'Download Block As PNG',
      preconditionFn: function(scope) {
        return 'enabled';
      },
      callback: function(scope) {
      // get block xml
var workspace = Blockly.getMainWorkspace();
var scopeBlock = scope.block

var Wdom = Blockly.Xml.workspaceToDom(workspace);
var wt = Blockly.Xml.domToText(Wdom);

var BlockXml = Blockly.Xml.blockToDom(scopeBlock,false);
BlockXml = Blockly.Xml.textToDom('<xml>' + Blockly.Xml.domToText(BlockXml) + '</xml>');
     
workspace2.clear();

setTimeout(function() {
  var id = Blockly.Xml.domToWorkspace(BlockXml, workspace2);
  for(var i of workspace2.getAllBlocks()) {
  i.setWarningText(null);
  }
  Blockly.downloadScreenshot(workspace2);
  //workspace.getBlockById(id).moveBy(50,50);
}, 0);

      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'download_block_as_png',
      weight: 100,
    };
    Blockly.ContextMenuRegistry.registry.register(workspaceItem);
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
      "On";
    } else {
      document.getElementById("open").innerHTML =
      "Off";
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
  var as = document.getElementById("pick");
  as.onclick = function () {
  window.sessionStorage.setItem('o', 'ii');
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
          if(assetsBase64.includes(files[i].name)) {
          } else {
          base64.push(reader.result)
              assetsBase64.push(files[i].name);
             assetsBlockDropdown.push([files[i].name, files[i].name]);
             window.localStorage.setItem("base64", JSON.stringify(base64));
             window.localStorage.setItem("assetsBase64", JSON.stringify(assetsBase64));
             window.localStorage.setItem("assetsBlockDropdown", JSON.stringify(assetsBlockDropdown));
             
             document.getElementById("no_ass").style.display = "none";
             if(window.sessionStorage.getItem('o') == 'ii') {
             document.getElementById("assetFolder").style.display = "block";
             }
             window.sessionStorage.setItem('as', files[i].name);
             
    
        var p = document.createElement("p");
    p.innerHTML = files[i].name
    p.style.color = "white";
    p.style.fontSize = "20px";
    p.style.textAlign = "left";
    p.style.margin = "8px";
    p.style.padding = "8px";
    p.id = "P" + files[i].name
    
    var d = document.createElement("div");
    d.className = "projectsList";
    d.id = files[i].name
    d.onclick = function () {
    var oo = this.id
    
    createContextMenuI(String(x) + "px", String(y) + "px", ["Delete Asset", "Rename asset", "Replace Asset", 'View Asset']);
    
        document.getElementById('3').onclick = function () {
    var vv = window.open('');
    vv.document.write(`<!DOCTYPE html>
<object data="` + base64[assetsBase64.indexOf(oo)] + `" width="100%" height="100%"></object>
`);
    }
    
    document.getElementById('2').onclick = function () {
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
            base64[assetsBase64.indexOf(oo)] = reader.result
            
                             window.localStorage.setItem("base64", JSON.stringify(base64));
             window.localStorage.setItem("assetsBase64", JSON.stringify(assetsBase64));
             window.localStorage.setItem("assetsBlockDropdown", JSON.stringify(assetsBlockDropdown));
             
            },
            false
          );
          reader.readAsDataURL(files[i]);
        }
      };
      input.click();

    }
    
            document.getElementById('1').onclick = function () {
    var n = prompt("Rename: " + oo);
    if(!n == "" || !n == null || !n ==="") {
    
    base64.push(base64[base64.indexOf(oo)]);
    assetsBlockDropdown.push([n, n]);
    assetsBase64.push(n);
    
    base64.splice(base64.indexOf(oo) ,1);
    assetsBlockDropdown.splice(base64.indexOf(oo) + 2,1);
    assetsBase64.splice(base64.indexOf(oo) + 1,1);
    
    document.getElementById("P" + oo).innerHTML = n
    
                 window.localStorage.setItem("base64", JSON.stringify(base64));
             window.localStorage.setItem("assetsBase64", JSON.stringify(assetsBase64));
             window.localStorage.setItem("assetsBlockDropdown", JSON.stringify(assetsBlockDropdown));
    
    } else {
    }
    }
    
    document.getElementById('0').onclick = function () {
    var conf = confirm("Are you sure you want to delete: " + oo + "?");
    if(conf) {
    base64.splice(assetsBase64.indexOf(oo),1);
    assetsBlockDropdown.splice(assetsBase64.indexOf(oo) + 1 ,1);
    assetsBase64.splice(assetsBase64.indexOf(oo),1);
    
    document.getElementById(oo).remove(true);
    
                 window.localStorage.setItem("base64", JSON.stringify(base64));
             window.localStorage.setItem("assetsBase64", JSON.stringify(assetsBase64));
             window.localStorage.setItem("assetsBlockDropdown", JSON.stringify(assetsBlockDropdown));
    
    } else {
    }
    
    }
    
    window.setTimeout(function () {
    document.getElementById("assetFolder").style.display = "block";
    },1);
    }
    d.appendChild(p);
    document.getElementById("assList").appendChild(d);
             }
          },
          false
        );
        reader.readAsDataURL(files[i]);
      }
    };
    input.click();
  };

// disable blocks with warnings

var dis = [];

function disable () {
var blocks = getWarnings();

for(var i of dis) {
if(i) {
i.setEnabled(true);
}
}

for(var i of blocks) {
console.log(i['block_']['id']);
if(workspace.getBlockById(i['block_']['id']).warning) {
workspace.getBlockById(i['block_']['id']).setEnabled(false);
dis.push(workspace.getBlockById(i['block_']['id']));
}

}
}

workspace.addChangeListener(disable);

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
    let b = i
    for(var e of blocks) {
    if(loops.includes(b.type)) {
    i.setWarningText(null);
    } else {
    i.setWarningText('This block can only be placed inside of a loop');
    b = b.getParent();
    }
    }
    } else if (i.type == "clearint") {
    
    } else if (i.type == "play_pause" || i.type == "fullscreen" || i.type =='open_window') {
    if(i.getRootBlock().type == "create_listener") {
    i.setWarningText(null);
    } else {
    i.setWarningText("This block must be placed inside an element event");
    }
    } else if (i.type == "function_var") {
    var ee = String(i.getSurroundParent())
    if(ee.includes("to") && ee.includes("result")) {
    i.setWarningText(null);
    } else {
    i.setWarningText("This block can only be connected to a function with a return value");
    }
    } else if(i.type == 'switch_case') {
    var ssss = String(i.getSurroundParent())
    if(ssss.includes('switch') && ssss.includes('do')) {
    i.setWarningText(null);
    } else {
    i.setWarningText('this block can only be used inside of a switch block');
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

// custom warning icon

// get element variables

FieldLexicalVariable.getGlobalNames = function(optExcludedBlock) {
  // TODO: Maybe switch to injectable warning/error handling
  if (Instrument.useLynCacheGlobalNames && Blockly.getMainWorkspace() &&
      Blockly.getMainWorkspace().getWarningHandler &&
      Blockly.getMainWorkspace().getWarningHandler().cacheGlobalNames) {
    return Blockly.getMainWorkspace().getWarningHandler().cachedGlobalNames;
  }
  const globals = [];
  if (Blockly.getMainWorkspace()) {
    let blocks = [];
    if (Instrument.useLynGetGlobalNamesFix) {
      // [lyn, 04/13/14] Only need top blocks, not all blocks!
      blocks = Blockly.getMainWorkspace().getBlocksByType('global_declaration');
      blocks = blocks.concat(Blockly.getMainWorkspace().getBlocksByType('create_elem'));
      blocks = blocks.concat(Blockly.getMainWorkspace().getBlocksByType('set_timeout'));
      blocks = blocks.concat(Blockly.getMainWorkspace().getBlocksByType('rnaf'));
    } else {
      // [lyn, 11/10/12] Is there a better way to get workspace?
      blocks = Blockly.getMainWorkspace().getAllBlocks();
    }
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      if ((block.getGlobalNames) &&
          (block != optExcludedBlock)) {
        globals.push(...block.getGlobalNames());
      }
    }
    globals.push('body');
  }
  return globals;
};

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
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/javascript#add-scource-directly");
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
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/javascript#add-scource-directly");
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
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/javascript#try-catch");
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
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/javascript#eval");
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
    this.setColour(window.Blockly.LOGIC_CATEGORY_HUE);
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
    this.setColour(window.Blockly.LOGIC_CATEGORY_HUE);
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
    this.setColour(window.Blockly.LOGIC_CATEGORY_HUE);
 this.setTooltip("Returns true if the input is false, returns false if the input is true");
 this.setHelpUrl("");
  }
};
        Blockly.Blocks['logic_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "NAME");
    this.setOutput(true, "Boolean");
    this.setColour(window.Blockly.LOGIC_CATEGORY_HUE);
 this.setTooltip("Returns either true or false");
 this.setHelpUrl("");
  }
};
        Blockly.Blocks['logic_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("null");
    this.setOutput(true, null);
    this.setColour(window.Blockly.LOGIC_CATEGORY_HUE);
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
    this.setColour(window.Blockly.CONTROL_CATEGORY_HUE);
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
        .appendField(new FieldGlobalFlydown(
           'TimeoutID', Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME,
            FieldFlydown.DISPLAY_BELOW), 'timeout')
    this.appendStatementInput("s")
        .setCheck(null)
        .appendField("do");
      this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.CONTROL_CATEGORY_HUE);
 this.setTooltip("Wait the specified amount of time before performing the next action.");
 this.setHelpUrl("");
  },
  getVars: function() {
    const field = this.getField('timeout');
    return field ? [field.getText()] : [];
  },
  getGlobalNames: function() {
    return this.getVars();
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('timeout'))) {
      this.setFieldValue(newName, 'timeout');
    }
  },
};

                Blockly.Blocks['open_window'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"Zero Two is cute"]]), "NAME")
        .appendField(".openLink")
        .appendField(new Blockly.FieldDropdown([["InNewTab","int"], ["InCurrentTab","ict"]]), "t");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
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
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
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
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
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
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
 this.setTooltip("Do some statements when the page finished loading.");
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/events#load-event");
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
    this.setColour(window.Blockly.VARIABLES_CATEGORY_HUE);
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

Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput(""), "n")
        .appendField("from")
        .appendField(new Blockly.FieldTextInput(""), "l");
    this.setColour(270);
 this.setTooltip("Import any javascript libary from skypack");
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/javascript#custom-imports");
  }
};

Blockly.Blocks['rnaf'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".requestAnimationFrame")
.appendField(new FieldGlobalFlydown(
           'AnimationId', Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME,
            FieldFlydown.DISPLAY_BELOW), 'id');
            this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.CONTROL_CATEGORY_HUE);
 this.setTooltip("Do some statements when a Animation Frame Iis requested");
 this.setHelpUrl("");
  },
  getVars: function() {
    const field = this.getField('id');
    return field ? [field.getText()] : [];
  },
  getGlobalNames: function() {
    return this.getVars();
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('id'))) {
      this.setFieldValue(newName, 'id');
    }
  },
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
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
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
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
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
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
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
        .appendField(new Blockly.FieldDropdown([["Iframe","if"], ["Div","d"], ["Image","i"], ["Paragraph","p"], ["Button","b"], ["DropDownButton","ddb"], ["ColorPicker","cp"], ["DatePicker","dp"], ["TimePicker","tp"], ["TextField","tf2"], ["Canvas","c"], ["Slider","s"], ["ProgressBar","pb"], ["CheckBox","cb"], ["RadioButton","rb"], ["LoadignIcon","li"], ["FAB", "fab"], ["UnorderedList", "ul"], ["OrderedList", "ol"], ["HyperLink", "a"],['LottiePlayer', 'lp'],['FileViewer', 'fv']]), "e")
        .appendField("Element")
      .appendField(new FieldGlobalFlydown(
           'ElementId', Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME,
            FieldFlydown.DISPLAY_BELOW), 'eid')
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.ELEMENTS_CATEGORY_HUE);
 this.setTooltip("Creatte a new element");
 this.setHelpUrl("");
  },
  getVars: function() {
    const field = this.getField('eid');
    return field ? [field.getText()] : [];
  },
  getGlobalNames: function() {
    return this.getVars();
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('eid'))) {
      this.setFieldValue(newName, 'eid');
    }
  },
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
    this.setColour(window.Blockly.ELEMENTS_CATEGORY_HUE);
 this.setTooltip("Add a newly created element to the body or element");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clone'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".get")
        .appendField(new Blockly.FieldDropdown([["Clone","c"], ["Parent","p"], ["FirstChild","fc"], ["LastChild","lc"], ["AllChild","ac"]]), "d")
        .appendField("ElementOf");
    this.setOutput(true, null);
    this.setColour(window.Blockly.ELEMENTS_CATEGORY_HUE);
 this.setTooltip("Clones an element or return it'sparent, first/last/all childeren");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("body");
    this.setOutput(true, null);
    this.setColour(window.Blockly.ELEMENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.CONTROL_CATEGORY_HUE);
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
    this.setColour(window.Blockly.CONTROL_CATEGORY_HUE);
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
        .appendField(new Blockly.FieldDropdown([["Iframe","if"], ["Div","d"], ["Image","i"], ["Paragraph","p"], ["Button","b"], ["DropDownButton","ddb"], ["ColorPicker","cp"], ["DatePicker","dp"], ["TimePicker","tp"], ["TextField","tf2"], ["Canvas","c"], ["Slider","s"], ["ProgressBar","pb"], ["CheckBox","cb"], ["RadioButton","rb"], ["LoadignIcon","li"], ["FAB", "fab"], ["UnorderedList", "ul"], ["OrderedList", "ol"], ["HyperLink", "a"],['LottiePlayer', 'lp'],['FileViewer', 'fv']]), "e")
        .appendField("Elements");
    this.setOutput(true, null);
    this.setColour(window.Blockly.ELEMENTS_CATEGORY_HUE);
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
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/javascript#siwtch-case-blocks");
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
 this.contextMenu = false;
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
    this.setInputsInline(true);
 this.setTooltip("");
 this.setHelpUrl("");
 this.contextMenu = false;
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
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/javascript#siwtch-case-blocks");
  }
};

Blockly.Blocks['create_listener'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([["Iframe","if"], ["Div","d"], ["Image","i"], ["Paragraph","p"], ["Button","b"], ["DropDownButton","ddb"], ["ColorPicker","cp"], ["DatePicker","dp"], ["TimePicker","tp"], ["TextField","tf2"], ["Canvas","c"], ["Slider","s"], ["CheckBox","cb"], ["RadioButton","rb"], ["FAB", "fab"],['NotificationManager','nm']], this.validate), "e")
        .appendField(".")
        this.appendDummyInput("ee")
        .appendField(new Blockly.FieldDropdown([["WebPageFinishedLoading","load"]]), "NAME2")
        .appendField(
                  new FieldParameterFlydown('ElementId', true, FieldFlydown.DISPLAY_BELOW),
            'eid');
    this.appendStatementInput("s")
        .setCheck(null)
        .appendField("do");
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
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
  },
  validate: function(newValue) {
  this.getSourceBlock().updateConnections(newValue);
  return newValue;
},
updateConnections: function(newValue) {
  this.removeInput('ee', /* no error */ true);
  this.removeInput('s', /* no error */ true);
  if ( newValue == "if") {
  var opti = [["WebPageFinishedLoading","load"]]
  }else if (newValue == "i") {
  var opti = [["Click", "click"], ["MouseDown", "mouseDown"], ["MouseUp", "mouseUp"], ["MouseOver", "onmouseover"], ['MouseLeave','onmouseout']]
  }else if (newValue == "p" || newValue == "b") {
  var opti = [["Click", "click"], ["MouseDown", "mouseDown"], ["MouseUp", "mouseUp"], ["MouseOver", "onmouseover"], ['MouseLeave','onmouseout']]
  } else if (newValue == "ddb") {
  var opti = [["Change", "change"]]
  } else if ( newValue == "tf2") {
  var opti = [["TextChange", "input"],['Focus','focusin'],['UnFocus','focusout']]
  } else if ( newValue == "s"|| newValue == "pb") { 
  var opti = [["Change", "change"]]
  } else if (newValue == "cb" || newValue == "rb") {
  var opti = [["Change", "change"]]
  } else if ( newValue == "li") {
  var opti = [["Click", "click"], ["MouseDown", "mouseDown"], ["MouseUp", "mouseUp"], ["MouseOver", "onmouseover"], ['MouseLeave','onmouseout']]
  }else if (newValue == "ul" || newValue == "ol") {
  var opti = [["SelectionChange", "click"]]
  } else if (newValue == "c") {
  var opti = [["CanvasFinishedLoading", "load"]]
  }else if (newValue == "cp" || newValue == "dp" || newValue == "cp" || newValue == "tp") {
  var opti = [["Change", "change"]]
  } else if(newValue == 'nm' ) {
  var opti = [['Click', 'click'],['ErrorOccured','error'],['Shown','show'],['Closed','close']]
  } else {
  var opti = [["Click", "click"], ["MouseDown", "mouseDown"], ["MouseUp", "mouseUp"], ["MouseOver", "onmouseover"], ['MouseLeave','onmouseout']]
  }
  
          if(newValue == 'nm') {
                  this.appendDummyInput("ee")
        .appendField(new Blockly.FieldDropdown(opti), "NAME2");
            this.appendStatementInput("s")
        .setCheck(null)
        .appendField("do");
        } else {
        this.appendDummyInput("ee")
        .appendField(new Blockly.FieldDropdown(opti), "NAME2")
        .appendField(
                  new FieldParameterFlydown('ElementId', true, FieldFlydown.DISPLAY_BELOW),
            'eid');
            this.appendStatementInput("s")
        .setCheck(null)
        .appendField("do");
        }
}
};

Blockly.Blocks['new_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new line");
    this.setOutput(true, null);
    this.setColour(window.Blockly.TEXT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.LIST_CATEGORY_HUE);
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
    this.setColour(window.Blockly.TEXT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.TEXT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
 this.setTooltip("Trun an object or list into an JSON string");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['create_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create object");
    this.setOutput(true, null);
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
 this.setTooltip("");
 this.setHelpUrl("");
 this.contextMenu = false;
  }
};

Blockly.Blocks['object_top_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("object");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
    this.setInputsInline(true);
 this.setTooltip("");
 this.setHelpUrl("");
 this.contextMenu = false;
  }
};

Blockly.Blocks['object_key_val'] = {
  init: function() {
    this.appendValueInput("k")
        .setCheck(null)
        .appendField("key");
    this.appendValueInput("v")
        .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
        .appendField(new Blockly.FieldDropdown([["DeviceMemory", "dm"], ["DeviceOS","d"], ["DeviceType","imd"], ["ColorScheme","hde"], ["NetworkState","ictan"], ["DeviceLanguage","l"], ['Orientation', 'o']]), "p");
    this.setOutput(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
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
    this.setColour(window.Blockly.OBJECT_CATEGORY_HUE);
 this.setTooltip("Add a new key with a value to an object");
 this.setHelpUrl("");
  }
};

  var options = [["Body", "body"],["Iframe","if"], ["Div","d"], ["Image","i"], ["Paragraph","p"], ["Button","b"], ["DropDownButton","ddb"], ["ColorPicker","cp"], ["DatePicker","dp"], ["TimePicker","tp"], ["TextField","tf2"], ["Canvas","c"], ["Slider","s"], ["ProgressBar","pb"], ["CheckBox","cb"], ["RadioButton","rb"], ["LoadignIcon","li"], ["FAB", "fab"], ["UnorderedList", "ul"], ["OrderedList", "ol"], ["HyperLink", "a"], ['LottiePlayer', 'lp'], ['FileViewer', 'fv']];
  
  var opt = [["BackgroundColor", "style.backgroundColor"], ["BackgroundImage", "style.backgroundImage"],['BackgroundImageSize', 'style.backgroundSize'], ["BackgroundImagePosition", "style.backgroundPosition"], ["BackgroundImageRepeat", "style.backgroundRepeat"], ["Width", "style.width"], ["Height", "style.height"],['MinHeight','style.minHeight'],['MaxHeight','style.maxHeight'],['MinWidth','style.minWidth'],['MaxWidth','style.maxWidth'], ["Margin", "style.margin"], ["MarginLeft", "style.marginLeft"], ["MarginRight", "style.marginRight"],["MarginTop", "style.marginTop"], ["MarginBottom", "style.marginBottom"], ["Padding", "style.padding"], ["PaddingLeft", "style.paddingLeft"],["PaddingRight", "style.paddingRight"], ["PaddingTop", "style.paddingTop"], ["PaddingBottom", "style.paddingBottom"], ["Top", "style.top"], ["Bottom", "style.bottom"], ["Left", "style.left"], ["Right", "style.right"],["BorderColor", "style.borderColor"], ["BorderWidth", "style.borderWidth"], ["BorderRadius", "style.borderRadius"], ["BorderRadiusRightTop", "style.borderTopRightRadius"], ["BorderRadiusLeftTop", "style.borderTopLeftRadius"], ["BorderRadiusLeftBottom", "style.borderBottomLeftRadius"], ["BorderRadiusRightBottom", "style.borderBottomRightRadius"],  ["BorderStyle", "style.borderStyle"], ["Position", "style.position"], ["Visible", "style.display"], ["Transform", "style.transform"], ["Overflow", "style.overflow"], ['Perspective', 'style.perspective'], ['TransformStyle','style.transformStyle'],['Transparency','style.opacity'],['Z-Index','style.zIndex']];
  
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
    this.setColour(window.Blockly.ELEMENTS_CATEGORY_HUE);
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
  var opti = opt.concat([["AllowFeaturePolicy", "allow"], ["AllowFullscreen", "allowfullscreen"], ["AllowPaymentRequest", "allowpaymentrequest"], ["URL", "src"], ["FrameBorder", "frameBorder"]]);
  }else if (newValue == "i") {
  var opti = opt.concat([["Image", "src"], ["ImagePosition", "style.objectFit"], ["ImageFilter", "style.filter"]]);
  }else if (newValue == "p" || newValue == "b") {
  var t = text
  if(newValue == "b") {
  t = text.concat([['Disabled','disabled']]);
  }
  var opti = opt.concat(t);
  } else if (newValue == "ddb") {
  var opti = opt.concat(text).concat([["Options", "opt"], ["Value", "value"]]);
  } else if ( newValue == "tf2") {
  var opti = opt.concat([["Text", "value"], ["TextColor", "style.color"], ["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]]).concat([["Hint", "placeholder"],['HintColor', 'hc'], ['Disabled','disabled']]);
  } else if ( newValue == "s" || newValue == "pb") { 
  var oo = p
  if(newValue == "s") {
  oo = p.concat([['Disabled','disabled']]);
  }
  var opti = opt.concat(oo);
  } else if (newValue == "cb" || newValue == "rb") {
  var opti = opt.concat(text).concat([["Checked" , "checked"], ['Disabled','disabled']]);
  } else if ( newValue == "li") {
  var opti = opt.concat([["BorderBackgroundColor", "style.borderTop"]])
  }else if (newValue == "ul" || newValue == "ol") {
  var opti = opt.concat([["TextColor", "style.color"], ["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]]).concat([["Options", "l"]]);
  } else if (newValue == "a") {
  var opti = opt.concat(text).concat([["Link", "href"]]);
  } else if (newValue == "cp" || newValue == "dp" || newValue == "cp" || newValue == "tp") {
  var opti = opt.concat([["Value", "value"]]);
  } else if(newValue == 'lp') {
  var opti = opt.concat([["Render", "R"], ['Loop', 'lo'], ['AutoPlay', 'a'], ["Animation", 'p'], ['Speed', 's'], ['Direction', 'd']]);
  } else if(newValue == 'fv') {
  var opti = opt.concat([['File', 'data']]);
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
    this.setColour(window.Blockly.ELEMENTS_CATEGORY_HUE);
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
  var opti = opt.concat([["AllowFeaturePolicy", "allow"], ["AllowFullscreen", "allowfullscreen"], ["AllowPaymentRequest", "allowpaymentrequest"], ["URL", "src"], ["FrameBorder", "frameBorder"]]);
  }else if (newValue == "i") {
  var opti = opt.concat([["Image", "src"], ["ImagePosition", "style.objectFit"], ["ImageFilter", "style.filter"]]);
  }else if (newValue == "p" || newValue == "b") {
  var t = text
  if(newValue == "b") {
  t = text.concat([['Disabled','disabled']]);
  }
  var opti = opt.concat(t);
  } else if (newValue == "ddb") {
  var opti = opt.concat(text).concat([["Value", "value"]]);
  } else if ( newValue == "tf2") {
  var opti = opt.concat([["Text", "value"], ["TextColor", "style.color"],["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]]).concat([["Hint", "placeholder"],['HintColor', 'hc'], ['Disabled','disabled']]);
  } else if ( newValue == "s"|| newValue == "pb") { 
    var oo = p
  if(newValue == "s") {
  oo = p.concat([['Disabled','disabled']]);
  }
  var opti = opt.concat(oo);
  } else if (newValue == "cb" || newValue == "rb") {
  var opti = opt.concat(text).concat([["Checked" , "checked"], ['Disabled','disabled']]);
  } else if ( newValue == "li") {
  var opti = opt.concat([["BorderBackgroundColor", "style.borderTop"]])
  }else if (newValue == "ul" || newValue == "ol") {
  var opti = opt.concat([["TextColor", "style.color"], ["TextSize", "style.fontSize"], ["FontFamily", "style.fontFamily"], ["TextAlign", "style.textAlign"]]).concat([["Options", "l"]]);
  } else if (newValue == "a") {
  var opti = opt.concat(text).concat([["Link", "href"]]);
  }else if (newValue == "cp" || newValue == "dp" || newValue == "cp" || newValue == "tp") {
  var opti = opt.concat([["Value", "value"]]);
  } else if(newValue == 'lp') {
  var opti = opt.concat([["Render", "R"], ['Loop', 'l'], ['AutoPlay', 'a'], ["Animation", 'p'], ['Speed', 's'], ['Direction', 'd'], ['Duration', 'dd']]);
  } else if(newValue == 'fv') {
  var opti = opt.concat([['File', 'data']]);
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
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
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

Blockly.Blocks['download_file'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["FileManager","OPTIONNAME"]]), "NAME")
        .appendField(".downloadFile");
    this.appendValueInput("c")
        .setCheck(null)
        .appendField("contents");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Download a file to the users device");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pick_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["FileManager","OPTIONNAME"]]), "NAME")
        .appendField(".pickFiles")
                          .appendField(
                  new FieldParameterFlydown('FileName', true, FieldFlydown.DISPLAY_BELOW),
            'fn')
                              .appendField(
                  new FieldParameterFlydown('FileURI', true, FieldFlydown.DISPLAY_BELOW),
            '64')
            .appendField(
                  new FieldParameterFlydown('FileType', true, FieldFlydown.DISPLAY_BELOW),
            'ft')
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Open the device file picker dialog to let the user pick files");
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
      this.getFieldValue('fn'),
      this.getFieldValue('64'),
      this.getFieldValue('ft'),
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
      this.getFieldValue('fn'),
      this.getFieldValue('64'),
      this.getFieldValue('ft'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('fn'))) {
      this.setFieldValue(newName, 'fn');
    }
        if (Blockly.Names.equals(oldName, this.getFieldValue('64'))) {
      this.setFieldValue(newName, '64');
    }
            if (Blockly.Names.equals(oldName, this.getFieldValue('ft'))) {
      this.setFieldValue(newName, 'ft');
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

Blockly.Blocks['function_var'] = {
  init: function() {
    this.appendStatementInput("d")
        .setCheck(null)
        .appendField("do");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("result");
    this.setOutput(true, null);
    this.setColour(window.Blockly.FUNCTIONS_CATEGORY_HUE);
 this.setTooltip("Runs the blocks in the do section before returning a value, usefull if you need to run blocks before returning a value to a function");
 this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/functions#defining-functions-with-a-return-value-and-blocks");
  }
};

Blockly.Blocks['local_declaration_expression'] = {
  category: 'Variables', // *** [lyn, 11/07/12] Abstract over this
  helpUrl: Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL,
  initLocals: Blockly.Blocks.local_declaration_statement.initLocals,
  bodyInputName: 'RETURN',
  init: function() {
    this.initLocals();
    // this.appendIndentedValueInput('RETURN')
    this.appendValueInput('RETURN')
        .appendField(
            Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN)
            .setAlign(Blockly.ALIGN_RIGHT);
    // Create plug for expression output
    this.setOutput(true, null);
    this.setTooltip(
        Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP);
  },
  referenceResults: function(name, prefix, env) {
    // Collect locally declared names ...
    const localDeclNames = [];
    for (let i = 0; this.getInput('DECL' + i); i++) {
      let localName = this.getFieldValue('VAR' + i);
      // Invariant: Shared.showPrefixToUser must also be true!
      if (Shared.usePrefixInCode) {
        localName = (Shared.possiblyPrefixMenuNameWith(Shared.localNamePrefix))(
            localName);
      }
      localDeclNames.push(localName);
    }
    const newEnv = env.concat(localDeclNames); // ... and add to environment
    // Collect locally initialization expressions:
    const localInits = [];
    for (let i = 0; this.getInput('DECL' + i); i++) {
      const init = this.getInputTargetBlock('DECL' + i);
      if (init) {
        localInits.push(init);
      }
    }
    const initResults = localInits.map(function(init) {
      return LexicalVariable.referenceResult(init, name, prefix, env);
    });
    const returnResults = LexicalVariable.referenceResult(
        this.getInputTargetBlock('RETURN'), name, prefix, newEnv);
    return initResults.concat([returnResults]);
  },
  withLexicalVarsAndPrefix:
    Blockly.Blocks.local_declaration_statement.withLexicalVarsAndPrefix,
  onchange: Blockly.Blocks.local_declaration_statement.onchange,
  mutationToDom: Blockly.Blocks.local_declaration_statement.mutationToDom,
  domToMutation: Blockly.Blocks.local_declaration_statement.domToMutation,
  updateDeclarationInputs_:
    Blockly.Blocks.local_declaration_statement.updateDeclarationInputs_,
  parameterFlydown: Blockly.Blocks.local_declaration_statement.parameterFlydown,
  blocksInScope: Blockly.Blocks.local_declaration_statement.blocksInScope,
  decompose: Blockly.Blocks.local_declaration_statement.decompose,
  compose: Blockly.Blocks.local_declaration_statement.compose,
  dispose: Blockly.Blocks.local_declaration_statement.dispose,
  saveConnections: Blockly.Blocks.local_declaration_statement.saveConnections,
  getVars: Blockly.Blocks.local_declaration_statement.getVars,
  declaredNames: Blockly.Blocks.local_declaration_statement.declaredNames,
  declaredVariables:
      Blockly.Blocks.local_declaration_statement.declaredVariables,
  renameVar: Blockly.Blocks.local_declaration_statement.renameVar,
  renameVars: Blockly.Blocks.local_declaration_statement.renameVars,
  renameBound: Blockly.Blocks.local_declaration_statement.renameBound,
  renameFree: Blockly.Blocks.local_declaration_statement.renameFree,
  freeVariables: Blockly.Blocks.local_declaration_statement.freeVariables,
};

Blockly.Blocks['local_mutatorcontainer'] = {
  // Local variable container (for mutator dialog).
  init: function() {
    // Let the theme determine the color.
    // this.setColour(Blockly.VARIABLE_CATEGORY_HUE);
    this.setStyle('variable_blocks');
    this.appendDummyInput()
        .appendField(
            Blockly.Msg
                .LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP);
    this.contextMenu = false;
    this.mustNotRenameCapturables = true;
  },
  // [lyn. 11/24/12] Set procBlock associated with this container.
  setDefBlock: function(defBlock) {
    this.defBlock_ = defBlock;
  },
  // [lyn. 11/24/12] Set procBlock associated with this container.
  // Invariant: should not be null, since only created as mutator for a
  // particular proc block.
  getDefBlock: function() {
    return this.defBlock_;
  },
  // [lyn. 11/24/12] Return list of param names in this container
  // Invariant: there should be no duplicates!
  declaredNames: function() {
    const paramNames = [];
    let paramBlock = this.getInputTargetBlock('STACK');
    while (paramBlock) {
      paramNames.push(paramBlock.getFieldValue('NAME'));
      paramBlock = paramBlock.nextConnection &&
          paramBlock.nextConnection.targetBlock();
    }
    return paramNames;
  },
};

Blockly.Blocks['procedures_defnoreturn'] = {
  // Define a procedure with no return value.
  category: 'Procedures', // Procedures are handled specially.
  helpUrl: Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL,
  bodyInputName: 'STACK',
  init: function() {
    // Let the theme determine the color.
    // this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.setStyle('procedure_blocks');
    const legalName = Blockly.Procedures.findLegalName(
        Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE, this);
    this.createHeader(legalName);
    this.horizontalParameters = true; // horizontal by default
    this.appendStatementInput('STACK')
        .appendField(Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO);
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP);
    this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/functions#defining-functions-without-a-return-value");
    this.setInputsInline(true);
    // List of declared local variable names; has one
    // ("name") initially
    this.arguments_ = [];
    // Other methods guarantee the invariant that this variable contains
    // the list of names declared in the local declaration block.
    this.warnings = [{name: 'checkEmptySockets', sockets: ['STACK']}];
    this.lexicalVarPrefix = Shared.procedureParameterPrefix;
  },
  createHeader: function(procName) {
    return this.appendDummyInput('HEADER')
        .appendField(Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE)
        .appendField(new FieldProcedureName(procName), 'NAME');
  },
  withLexicalVarsAndPrefix: function(_, proc) {
    const params = this.declaredNames();
    // not arguments_ instance var
    for (let i = 0; i < params.length; i++) {
      proc(params[i], this.lexicalVarPrefix);
    }
  },
  onchange: function() {
    // ensure arguments_ is in sync
    // with paramFlydown fields
    this.arguments_ = this.declaredNames();
  },
  updateParams_: function(opt_params) {
    // make rendered block reflect the parameter names currently in
    // this.arguments_
    // [lyn, 11/17/13] Added optional opt_params argument:
    //    If its falsey (null or undefined), use the existing this.arguments_
    // list Otherwise, replace this.arguments_ by opt_params In either case,
    // make rendered block reflect the parameter names in this.arguments_
    if (opt_params) {
      this.arguments_ = opt_params;
    }
    // Check for duplicated arguments.
    // [lyn 10/10/13] Note that in blocks edited within AI2, duplicate
    // parameter names should never occur because parameters are renamed to
    // avoid duplication. But duplicates might show up in XML code hand-edited
    // by user. console.log("enter procedures_defnoreturn updateParams_()");
    let badArg = false;
    const hash = {};
    for (let x = 0; x < this.arguments_.length; x++) {
      if (hash['arg_' + this.arguments_[x].toLowerCase()]) {
        badArg = true;
        break;
      }
      hash['arg_' + this.arguments_[x].toLowerCase()] = true;
    }
    if (badArg) {
      this.setWarningText(Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING);
    } else {
      this.setWarningText(null);
    }

    const procName = this.getFieldValue('NAME');
    // save the first two input lines and the last input line
    // to be re added to the block later
    // var firstInput = this.inputList[0];
    // [lyn, 10/24/13] need to reconstruct first input

    // Body of procedure
    const bodyInput = this.inputList[this.inputList.length - 1];

    // stop rendering until block is recreated
    const savedRendered = this.rendered;
    this.rendered = false;

    // remove first input
    // console.log("updateParams_: remove input HEADER");
    const thisBlock = this; // Grab correct object for use in thunk below
    FieldParameterFlydown.withChangeHanderDisabled(
        // [lyn, 07/02/14] Need to disable change handler, else this will try
        // to rename params for horizontal arg fields!
        function() {
          thisBlock.removeInput('HEADER');
        },
    );

    // Remove all existing vertical inputs (we will create new ones if
    // necessary)

    // Only args and body are left
    const oldArgCount = this.inputList.length - 1;
    if (oldArgCount > 0) {
      const paramInput0 = this.getInput('VAR0');
      if (paramInput0) { // Yes, they were vertical
        for (let i = 0; i < oldArgCount; i++) {
          try {
            FieldParameterFlydown.withChangeHanderDisabled(
                // [lyn, 07/02/14] Need to disable change handler, else this
                // will try to rename params for vertical arg fields!
                function() {
                  thisBlock.removeInput('VAR' + i);
                },
            );
          } catch (err) {
            console.log(err);
          }
        }
      }
    }

    // empty the inputList then recreate it
    this.inputList = [];

    // console.log("updateParams_: create input HEADER");
    const headerInput = this.createHeader(procName);
    // const headerInput =
    //     this.appendDummyInput('HEADER')
    //         .appendField(Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE)
    //         .appendField(new FieldProcedureName(procName), 'NAME');

    // add an input title for each argument
    // name each input after the block and where it appears in the block to
    // reference it later
    if (this.horizontalParameters) { // horizontal case
      for (let i = 0; i < this.arguments_.length; i++) {
        // [lyn, 10/10/13] Changed to param flydown
        // Tag with param tag to make it easy to find later.
        headerInput.appendField(' ')
            .appendField(this.parameterFlydown(i), 'VAR' + i);
      }
    } else { // vertical case
      for (let i = 0; i < this.arguments_.length; i++) {
        this.appendDummyInput('VAR' + i)
            .appendField(this.parameterFlydown(i), 'VAR' + i)
            .setAlign(Blockly.ALIGN_RIGHT);
      }
    }

    // put the last two arguments back
    this.inputList = this.inputList.concat(bodyInput);

    this.rendered = savedRendered;
    // [lyn, 10/28/13] I thought this rerendering was unnecessary. But I was
    // wrong! Without it, get bug noticed by Andrew in which toggling
    // horizontal -> vertical params in procedure decl doesn't handle body tag
    // appropriately!
    for (let i = 0; i < this.inputList.length; i++) {
      this.inputList[i].init();
    }
    if (this.rendered) {
      this.render();
    }
    // set in BlocklyPanel.java on successful load
    if (this.workspace.loadCompleted) {
      Blockly.Procedures.mutateCallers(this);
    }
    // console.log("exit procedures_defnoreturn updateParams_()");
  },
  // [lyn, 10/26/13] Introduced this to correctly handle renaming of [(1)
  // caller arg labels and (2) mutatorarg in open mutator] when procedure
  // parameter flydown name is edited.

  // Return a new procedure parameter flydown
  parameterFlydown: function(paramIndex) {
    const initialParamName = this.arguments_[paramIndex];
    // Here, "this" is the proc decl block. Name it to
    // use in function below
    const procDecl = this;
    const procedureParameterChangeHandler = function(newParamName) {
      // console.log("enter procedureParameterChangeHandler");


      // Extra work that needs to be done when procedure param name is changed,
      // in addition to renaming lexical variables: 1. Change all callers so
      // label reflects new name 2. If there's an open mutator, change the
      // corresponding slot. Note: this handler is invoked as method on field,
      // so within the handler body, "this" will be bound to that field and
      // *not* the procedure declaration object!

      // Subtlety #1: within this changeHandler, procDecl.arguments_ has *not*
      // yet been updated to include newParamName. This only happens later. But
      // since we know newParamName *and* paramIndex, we know how to update
      // procDecl.arguments_ ourselves!

      // Subtlety #2: I would have thought we would want to create local copy
      // of
      // procedure arguments_ list rather than mutate that list, but I'd be
      // wrong! Turns out that *not* mutating list here causes trouble below in
      // the line
      // Blockly.Field.prototype.setText.call(mutatorarg.getTitle_("NAME"),
      // newParamName);  The reason is that this fires a change event in
      // mutator workspace, which causes a call to the proc decl compose()
      // method, and when it detects a difference in the arguments it calls
      // proc decl updateParams_. This removes proc decl inputs before adding
      // them back, and all hell breaks loose when the procedure name field and
      // previous parameter flydown fields are disposed before an attempt is
      // made to disposed this field. At this point, the SVG element associated
      // with the procedure name is gone but the field is still in the title
      // list. Attempting to dispose this field attempts to hide the open HTML
      // editor widget, which attempts to re-render the procedure declaration
      // block. But the null SVG for the procedure name field raises an
      // exception.  It turns out that by mutating proc decl arguments_, when
      // compose() is called, updateParams_() is *not* called, and this
      // prevents the above scenario. So rather than doing  var newArguments =
      // [].concat(procDecl.arguments_)  we instead do:
      const newArguments = procDecl.arguments_;
      newArguments[paramIndex] = newParamName;

      // 1. Change all callers so label reflects new name
      Blockly.Procedures.mutateCallers(procDecl);

      // 2. If there's an open mutator, change the name in the corresponding
      // slot.
      if (procDecl.mutator && procDecl.mutator.rootBlock_) {
        // Iterate through mutatorarg param blocks and change name of one at
        // paramIndex
        const mutatorContainer = procDecl.mutator.rootBlock_;
        let mutatorargIndex = 0;
        let mutatorarg = mutatorContainer.getInputTargetBlock('STACK');
        while (mutatorarg && mutatorargIndex < paramIndex) {
          mutatorarg = mutatorarg.nextConnection &&
              mutatorarg.nextConnection.targetBlock();
          mutatorargIndex++;
        }
        if (mutatorarg && mutatorargIndex == paramIndex) {
          // Subtlety #3: If call mutatorargs's setValue, its change handler
          // will be invoked several times, and on one of those times, it will
          // find new param name in the procedures arguments_ instance variable
          // and will try to renumber it (e.g. "a" -> "a2"). To avoid this,
          // invoke the setText method of its Field s superclass directly.
          // I.e., can't do this:
          // mutatorarg.getTitle_("NAME").setValue(newParamName); so instead do
          // this:
          mutatorarg.getField('NAME').setValue(newParamName);
          // mutatorarg.getField("NAME").doValueUpdate_(newParamName);
          //   Blockly.Field.prototype.setText.call(mutatorarg.getField("NAME"),
          // newParamName);
        }
      }
      // console.log("exit procedureParameterChangeHandler");
    };
    return new FieldParameterFlydown(initialParamName,
        true, // name is editable
        // [lyn, 10/27/13] flydown location depends on parameter orientation
        this.horizontalParameters ? FieldFlydown.DISPLAY_BELOW :
            FieldFlydown.DISPLAY_RIGHT,
        procedureParameterChangeHandler);
  },
  setParameterOrientation: function(isHorizontal) {
    const params = this.getParameters();
    if (params.length != 0 && isHorizontal !== this.horizontalParameters) {
      this.horizontalParameters = isHorizontal;
      this.updateParams_();
      if (Blockly.Events.isEnabled()) {
        // Trigger a Blockly UI change event
        Blockly.Events.fire(new Blockly.Events.Ui(this, 'parameter_orientation',
            (!this.horizontalParameters).toString(),
            this.horizontalParameters.toString()));
      }
    }
  },
  mutationToDom: function() {
    const container = document.createElement('mutation');
    if (!this.horizontalParameters) {
      container.setAttribute('vertical_parameters', 'true'); // Only store an
      // element for
      // vertical
      // The absence of this attribute means horizontal.
    }
    for (let x = 0; x < this.arguments_.length; x++) {
      const parameter = document.createElement('arg');
      parameter.setAttribute('name', this.arguments_[x]);
      container.appendChild(parameter);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    const params = [];
    const children = Utilities.getChildren(xmlElement);
    for (let x = 0, childNode; childNode = children[x]; x++) {
      if (childNode.nodeName.toLowerCase() == 'arg') {
        params.push(childNode.getAttribute('name'));
      }
    }
    this.horizontalParameters =
        xmlElement.getAttribute('vertical_parameters') !== 'true';
    this.updateParams_(params);
  },
  decompose: function(workspace) {
    const containerBlock = workspace.newBlock('procedures_mutatorcontainer');
    containerBlock.initSvg();
    // [lyn, 11/24/12] Remember the associated procedure, so can
    // appropriately change body when update name in param block.
    containerBlock.setProcBlock(this);
    this.paramIds_ = []; // [lyn, 10/26/13] Added
    let connection = containerBlock.getInput('STACK').connection;
    for (let x = 0; x < this.arguments_.length; x++) {
      const paramBlock = workspace.newBlock('procedures_mutatorarg');
      this.paramIds_.push(paramBlock.id); // [lyn, 10/26/13] Added
      paramBlock.initSvg();
      paramBlock.setFieldValue(this.arguments_[x], 'NAME');
      // Store the old location.
      paramBlock.oldLocation = x;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }
    // [lyn, 10/26/13] Rather than passing null for paramIds, pass actual
    // paramIds and use true flag to initialize tracking.
    Blockly.Procedures.mutateCallers(this);
    return containerBlock;
  },
  compose: function(containerBlock) {
    const params = [];
    this.paramIds_ = [];
    let paramBlock = containerBlock.getInputTargetBlock('STACK');
    while (paramBlock) {
      params.push(paramBlock.getFieldValue('NAME'));
      this.paramIds_.push(paramBlock.id);
      paramBlock = paramBlock.nextConnection &&
          paramBlock.nextConnection.targetBlock();
    }
    // console.log("enter procedures_defnoreturn compose(); prevArguments = "
    //    + prevArguments.join(',')
    //    + "; currentAguments = "
    //    + this.arguments_.join(',')
    //    + ";"
    // );
    // [lyn, 11/24/12] Note: update params updates param list in proc
    // declaration, but renameParam updates procedure body appropriately.
    if (!LexicalVariable.stringListsEqual(params, this.arguments_)) {
      // Only need updates if param list has changed
      this.updateParams_(params);
      Blockly.Procedures.mutateCallers(this);
    }
    // console.log("exit procedures_defnoreturn compose()");
  },
  dispose: function(...args) {
    const name = this.getFieldValue('NAME');
    const editable = this.editable_;
    const workspace = this.workspace;

    // This needs to happen first so that the Blockly events will be replayed
    // in the correct order on undo
    if (editable) {
      // Dispose of any callers.
      // Blockly.Procedures.disposeCallers(name, workspace);
      ProcedureUtils.removeProcedureValues(name, workspace);
    }

    // Call parent's destructor.
    Blockly.BlockSvg.prototype.dispose.apply(this, args);

    const procDb = workspace.getProcedureDatabase();
    if (editable && procDb) {
      // only true for the top-level workspaces, not flyouts/flydowns
      procDb.removeProcedure(this.id);
    }
  },
  getProcedureDef: function() {
    // Return the name of the defined procedure,
    // a list of all its arguments,
    // and that it DOES NOT have a return value.
    return [
      this.getFieldValue('NAME'),
      this.arguments_,
      this.bodyInputName === 'RETURN',
    ]; // true for procedures that return values.
  },
  getVars: function() {
    const names = [];
    for (let i = 0, param; param = this.getFieldValue('VAR' + i); i++) {
      names.push(param);
    }
    return names;
  },
  declaredNames: function() {
    // [lyn, 10/11/13] return the names of all parameters of this procedure
    return this.getVars();
  },
  declaredVariables: function() {
    return this.getVars();
  },
  renameVar: function(oldName, newName) {
    this.renameVars(Blockly.Substitution.simpleSubstitution(oldName, newName));
  },
  renameVars: function(substitution) {
    // renaming is a dict (i.e., object) mapping old names to new ones
    const oldParams = this.getParameters();
    const newParams = substitution.map(oldParams);
    if (!LexicalVariable.stringListsEqual(oldParams, newParams)) {
      this.updateParams_(newParams);
      // Update the mutator's variables if the mutator is open.
      if (this.mutator.isVisible()) {
        const blocks = this.mutator.workspace_.getAllBlocks();
        for (let x = 0, block; block = blocks[x]; x++) {
          if (block.type == 'procedures_mutatorarg') {
            const oldName = block.getFieldValue('NAME');
            const newName = substitution.apply(oldName);
            if (newName !== oldName) {
              block.setFieldValue(newName, 'NAME');
            }
          }
        }
      }
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
    // Should have no effect since only top-level procedures.
    // Calculate free variables, which
    // should be empty,
    // throwing exception if not.
    // There should be no free variables, and so nothing to rename. Do nothing
    // else.
    this.freeVariables();
  },
  freeVariables: function() { // return the free lexical variables of this block
    // Should return the empty set: something is wrong if it doesn't!
    const result = LexicalVariable.freeVariables(
        this.getInputTargetBlock(this.bodyInputName));
    result.subtract(new Blockly.NameSet(this.declaredNames()));
    if (result.isEmpty()) {
      return result;
    } else {
      throw Error(
          'Violation of invariant: procedure declaration has nonempty free' +
          ' variables: ' +
          result.toString());
    }
  },
  // [lyn, 11/24/12] return list of procedure body (if there is one)
  blocksInScope: function() {
    const body = this.getInputTargetBlock(this.bodyInputName);
    return (body && [body]) || [];
  },
  customContextMenu: function(options) {
    FieldParameterFlydown.addHorizontalVerticalOption(this, options);
    // Blockly.BlocklyEditor.addPngExportOption(this, options);
  },
  getParameters: function() {
    return this.arguments_;
  },
};

// [lyn, 01/15/2013] Edited to remove STACK (no longer necessary with
// DO-THEN-RETURN)
Blockly.Blocks['procedures_defreturn'] = {
  // Define a procedure with a return value.
  category: 'Procedures', // Procedures are handled specially.
  // helpUrl: Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL,
  helpUrl: Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL,
  bodyInputName: 'RETURN',
  init: function() {
    // Let the theme determine the color.
    // this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.setStyle('procedure_blocks');
    // const name = Blockly.Procedures.findLegalName(
    //     Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE, this);
    // this.appendDummyInput('HEADER')
    //     .appendField(Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE)
    //     .appendField(new FieldProcedureName(name), 'NAME');
    const legalName = Blockly.Procedures.findLegalName(
        Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE, this);
    this.createHeader(legalName);
    this.horizontalParameters = true; // horizontal by default
    // this.appendIndentedValueInput('RETURN')
    //     .appendField(Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN);
    this.appendValueInput('RETURN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN);
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP);
    this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/functions#defining-functions-with-a-return-value");
    this.arguments_ = [];
    this.warnings = [{name: 'checkEmptySockets', sockets: ['RETURN']}];
  },
  createHeader: function(procName) {
    return this.appendDummyInput('HEADER')
        .appendField(Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE)
        .appendField(new FieldProcedureName(procName), 'NAME');
  },
  withLexicalVarsAndPrefix:
      Blockly.Blocks.procedures_defnoreturn.withLexicalVarsAndPrefix,
  onchange: Blockly.Blocks.procedures_defnoreturn.onchange,
  // [lyn, 11/24/12] return list of procedure body (if there is one)
  updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
  parameterFlydown: Blockly.Blocks.procedures_defnoreturn.parameterFlydown,
  setParameterOrientation:
      Blockly.Blocks.procedures_defnoreturn.setParameterOrientation,
  mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
  domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
  decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
  compose: Blockly.Blocks.procedures_defnoreturn.compose,
  dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
  getProcedureDef: Blockly.Blocks.procedures_defnoreturn.getProcedureDef,
  getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
  declaredNames: Blockly.Blocks.procedures_defnoreturn.declaredNames,
  declaredVariables: Blockly.Blocks.procedures_defnoreturn.declaredVariables,
  renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar,
  renameVars: Blockly.Blocks.procedures_defnoreturn.renameVars,
  renameBound: Blockly.Blocks.procedures_defnoreturn.renameBound,
  renameFree: Blockly.Blocks.procedures_defnoreturn.renameFree,
  freeVariables: Blockly.Blocks.procedures_defnoreturn.freeVariables,
  blocksInScope: Blockly.Blocks.procedures_defnoreturn.blocksInScope,
  customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
  getParameters: Blockly.Blocks.procedures_defnoreturn.getParameters,
};

Blockly.Blocks['procedures_mutatorcontainer'] = {
  // Procedure container (for mutator dialog).
  init: function() {
    // Let the theme determine the color.
    // this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.setStyle('procedure_blocks');
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = false;
    this.mustNotRenameCapturables = true;
  },
  // [lyn. 11/24/12] Set procBlock associated with this container.
  setProcBlock: function(procBlock) {
    this.procBlock_ = procBlock;
  },
  // [lyn. 11/24/12] Set procBlock associated with this container.
  // Invariant: should not be null, since only created as mutator for a
  // particular proc block.
  getProcBlock: function() {
    return this.procBlock_;
  },
  // [lyn. 11/24/12] Return list of param names in this container
  // Invariant: there should be no duplicates!
  declaredNames: function() {
    const paramNames = [];
    let paramBlock = this.getInputTargetBlock('STACK');
    while (paramBlock) {
      paramNames.push(paramBlock.getFieldValue('NAME'));
      paramBlock = paramBlock.nextConnection &&
          paramBlock.nextConnection.targetBlock();
    }
    return paramNames;
  },
};

Blockly.Blocks['procedures_mutatorarg'] = {
  // Procedure argument (for mutator dialog).
  init: function() {
    //    var mutatorarg = this;
    //    var mutatorargChangeHandler = function(newName) {
    //      var proc = mutatorarg.getProcBlock();
    //      var procArguments = proc ? proc.arguments_ : [];
    //      console.log("mutatorargChangeHandler: newName = " + newName
    //                  + " and proc argumnets = [" + procArguments.join(',') +
    // "]"); return Blockly.LexicalVariable.renameParam.call(this,newName); }
    // Let the theme determine the color.
    // this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.setStyle('procedure_blocks');
    const editor = new Blockly.FieldTextInput('x',
        LexicalVariable.renameParam);
    // 2017 Blockly's text input change breaks our renaming behavior.
    // The following is a version we've defined.
    editor.onHtmlInputChange_ = function(e) {
      const oldValue = this.getValue();
      FieldFlydown.prototype.onHtmlInputChange_.call(this, e);
      const newValue = this.getValue();
      if (newValue && oldValue !== newValue && Blockly.Events.isEnabled()) {
        Blockly.Events.fire(
            new Blockly.Events.BlockChange(this.sourceBlock_, 'field', this.name,
                oldValue, newValue));
      }
    };
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE)
        .appendField(editor, 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = false;
    this.lexicalVarPrefix = Shared.procedureParameterPrefix;
    this.mustNotRenameCapturables = true;
  },
  // [lyn, 11/24/12] Return the container this mutator arg is in, or null if
  // it's not in one. Dynamically calculate this by walking up chain, because
  // mutator arg might or might not be in container stack.
  getContainerBlock: function() {
    let parent = this.getParent();
    while (parent && !(parent.type === 'procedures_mutatorcontainer')) {
      parent = parent.getParent();
    }
    // [lyn, 11/24/12] Cache most recent container block so can reference it
    // upon removal from mutator arg stack
    this.cachedContainerBlock_ =
        (parent && (parent.type === 'procedures_mutatorcontainer') && parent) ||
        null;
    return this.cachedContainerBlock_;
  },
  // [lyn, 11/24/12] Return the procedure associated with mutator arg is in, or
  // null if there isn't one. Dynamically calculate this by walking up chain,
  // because mutator arg might or might not be in container stack.
  getProcBlock: function() {
    const container = this.getContainerBlock();
    return (container && container.getProcBlock()) || null;
  },
  // [lyn, 11/24/12] Return the declared names in the procedure associated with
  // mutator arg, or the empty list if there isn't one. Dynamically calculate
  // this by walking up chain, because mutator arg might or might not be in
  // container stack.
  declaredNames: function() {
    const container = this.getContainerBlock();
    return (container && container.declaredNames()) || [];
  },
  // [lyn, 11/24/12] Return the blocks in scope of proc params in the the
  // procedure associated with mutator arg, or the empty list if there isn't
  // one. Dynamically calculate this by walking up chain, because mutator arg
  // might or might not be in container stack.
  blocksInScope: function() {
    const proc = this.getProcBlock();
    return (proc && proc.blocksInScope()) || [];
  },
  // [lyn, 11/24/12] Check for situation in which mutator arg has been removed
  // from stack, and change all references to its name to ???.
  onchange: function() {
    const paramName = this.getFieldValue('NAME');
    if (paramName) { // paramName is null when delete from stack
      // console.log("Mutatorarg onchange: " + paramName);
      const cachedContainer = this.cachedContainerBlock_;
      const container = this.getContainerBlock(); // Order is important; this
      // must come after
      // cachedContainer
      // since it sets cachedContainerBlock_
      // console.log("Mutatorarg onchange: " + paramName
      //            + "; cachedContainer = " + JSON.stringify((cachedContainer
      // && cachedContainer.type) || null) + "; container = " +
      // JSON.stringify((container && container.type) || null));
      if ((!cachedContainer) && container) {
        // Event: added mutator arg to container stack
        // console.log("Mutatorarg onchange ADDED: " + paramName);
        const declaredNames = this.declaredNames();
        const firstIndex = declaredNames.indexOf(paramName);
        if (firstIndex != -1) {
          // Assertion: we should get here, since paramName should be among
          // names
          const secondIndex = declaredNames.indexOf(paramName, firstIndex + 1);
          if (secondIndex != -1) {
            // If we get here, there is a duplicate on insertion that must be
            // resolved
            const newName = FieldLexicalVariable.nameNotIn(paramName,
                declaredNames);
            this.setFieldValue(newName, 'NAME');
          }
        }
      }
    }
  },
};

Blockly.Blocks.procedures_mutatorarg.validator = function(newVar) {
  // Merge runs of whitespace.  Strip leading and trailing whitespace.
  // Beyond this, all names are legal.
  newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
  return newVar || null;
};

Blockly.Blocks['procedures_callnoreturn'] = {
  // Call a procedure with no return value.
  category: 'Procedures', // Procedures are handled specially.
  helpUrl: Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL,
  init: function() {
    // Let the theme determine the color.
    // this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.setStyle('procedure_blocks');
    const procDb = this.workspace.getTopWorkspace().getProcedureDatabase();
    this.procNamesFxn = function() {
      const items = procDb.getMenuItems(false);
      return items.length > 0 ? items : ['', ''];
    };

    this.procDropDown = new FieldNoCheckDropdown(this.procNamesFxn,
        ProcedureUtils.onChange);
    this.procDropDown.block = this;
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL)
        .appendField(this.procDropDown, 'PROCNAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP);
    this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/functions#calling-functions-without-a-return-value");
    this.arguments_ = [];
    this.quarkConnections_ = null;
    this.quarkArguments_ = null;
    this.errors = [
      {func: WarningHandler.checkIsInDefinition},
      {
        func: WarningHandler.checkDropDownContainsValidValue,
        dropDowns: ['PROCNAME'],
      },
    ];
    this.setOnChange(function(changeEvent) {
      WarningHandler.checkErrors(this);
    });
    // Blockly.FieldProcedure.onChange.call(this.getField("PROCNAME"),
    //     this.procNamesFxn(false)[0][0]);
    ProcedureUtils.onChange.call(this.getField('PROCNAME'),
        this.getField('PROCNAME').getValue());
  },
  getProcedureCall: function() {
    return this.getFieldValue('PROCNAME');
  },
  renameProcedure: function(oldName, newName) {
    if (!oldName ||
        Blockly.Names.equals(oldName, this.getFieldValue('PROCNAME'))) {
      const nameField = this.getField('PROCNAME');
      // Force the options menu to get regenerated since we might be getting
      // called because our defining procedure got renamed and
      // this.setFieldValue() will fail if it's value isn't in the options set
      nameField.getOptions();
      this.setFieldValue(newName, 'PROCNAME');
    }
  },
  // [lyn, 10/27/13] Renamed "fromChange" parameter to "startTracking", because
  // it should be true in any situation where we want caller to start tracking
  // connections associated with paramIds. This includes when a mutator is
  // opened on a procedure declaration.
  setProcedureParameters: function(paramNames, paramIds, startTracking) {
    // Data structures for parameters on each call block:
    // this.arguments = ['x', 'y']
    //     Existing param names.
    // paramNames = ['x', 'y', 'z']
    //     New param names.
    // paramIds = ['piua', 'f8b_', 'oi.o']
    //     IDs of params (consistent for each parameter through the life of a
    //     mutator, regardless of param renaming).
    // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
    //     Look-up of paramIds to connections plugged into the call block.
    // this.quarkArguments_ = ['piua', 'f8b_']
    //     Existing param IDs.
    // Note that quarkConnections_ may include IDs that no longer exist, but
    // which might reappear if a param is reattached in the mutator.

    let input;
    let connection;
    let x;

    // fixed parameter alignment see ticket 465
    if (!paramIds) {
      // Reset the quarks (a mutator is about to open).
      this.quarkConnections_ = {};
      this.quarkArguments_ = null;
      // return;  // [lyn, 10/27/13] No, don't return yet. We still want to add
      // paramNames to block! For now, create dummy list of param ids. This
      // needs to be cleaned up further!
      paramIds = [].concat(paramNames); // create a dummy list that's a copy of
      // paramNames.
    }
    if (paramIds.length != paramNames.length) {
      throw Error('Error: paramNames and paramIds must be the same length.');
    }
    const paramIdToParamName = {};
    for (let i = 0; i < paramNames.length; i++) {
      paramIdToParamName[paramIds[i]] = paramNames[i];
    }
    if (typeof startTracking == 'undefined') {
      startTracking = null;
    }

    if (!this.quarkArguments_ || startTracking) {
      // Initialize tracking for this block.
      this.quarkConnections_ = {};
      if (LexicalVariable.stringListsEqual(paramNames,
          this.arguments_) || startTracking) {
        // No change to the parameters, allow quarkConnections_ to be
        // populated with the existing connections.
        this.quarkArguments_ = paramIds;
      } else {
        this.quarkArguments_ = [];
      }
    }
    // Switch off rendering while the block is rebuilt.
    const savedRendered = this.rendered;
    this.rendered = false;
    // Update the quarkConnections_ with existing connections.
    for (x = 0; this.getInput('ARG' + x); x++) {
      input = this.getInput('ARG' + x);
      if (input) {
        connection = input.connection.targetConnection;
        this.quarkConnections_[this.quarkArguments_[x]] = connection;
        // Disconnect all argument blocks and remove all inputs.
        this.removeInput('ARG' + x);
      }
    }
    // Rebuild the block's arguments.
    this.arguments_ = [].concat(paramNames);
    this.quarkArguments_ = paramIds;
    for (x = 0; x < this.arguments_.length; x++) {
      input = this.appendValueInput('ARG' + x)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(this.arguments_[x]);
      if (this.quarkArguments_) {
        // Reconnect any child blocks.
        const quarkName = this.quarkArguments_[x];
        if (quarkName in this.quarkConnections_) {
          connection = this.quarkConnections_[quarkName];
          if (!connection || connection.targetConnection ||
              connection.sourceBlock_.workspace != this.workspace) {
            // Block no longer exists or has been attached elsewhere.
            delete this.quarkConnections_[quarkName];
          } else {
            input.connection.connect(connection);
          }
        } else if (paramIdToParamName[quarkName]) {
          connection = this.quarkConnections_[paramIdToParamName[quarkName]];
          if (connection) {
            input.connection.connect(connection);
          }
        }
      }
    }
    // Restore rendering and show the changes.
    this.rendered = savedRendered;
    if (!this.workspace.rendered) {
      // workspace hasn't been rendered yet, so other connections may
      // not yet exist.
      return;
    }
    // Initialize the new inputs.
    for (x = 0; x < this.arguments_.length; x++) {
      this.getInput('ARG' + x).init();
    }
    if (this.rendered) {
      this.render();
    }
  },
  mutationToDom: function() {
    // Save the name and arguments (none of which are editable).
    const container = document.createElement('mutation');
    container.setAttribute('name', this.getFieldValue('PROCNAME'));
    for (let x = 0; this.getInput('ARG' + x); x++) {
      const parameter = document.createElement('arg');
      parameter.setAttribute('name',
          this.getInput('ARG' + x).fieldRow[0].getText());
      container.appendChild(parameter);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    // Restore the name and parameters.
    const name = xmlElement.getAttribute('name');
    this.setFieldValue(name, 'PROCNAME');
    // [lyn, 10/27/13] Significantly cleaned up this code. Always take arg
    // names from xmlElement. Do not attempt to find definition.
    this.arguments_ = [];
    const children = Utilities.getChildren(xmlElement);
    for (let x = 0, childNode; childNode = children[x]; x++) {
      if (childNode.nodeName.toLowerCase() == 'arg') {
        this.arguments_.push(childNode.getAttribute('name'));
      }
    }
    this.setProcedureParameters(this.arguments_, null, true);
    // [lyn, 10/27/13] Above. set tracking to true in case this is a block with
    // argument subblocks. and there's an open mutator.
  },
  renameVar: function(oldName, newName) {
    for (let x = 0; x < this.arguments_.length; x++) {
      if (Blockly.Names.equals(oldName, this.arguments_[x])) {
        this.arguments_[x] = newName;
        this.getInput('ARG' + x).fieldRow[0].setValue(newName);
      }
    }
  },
  procCustomContextMenu: function(options) {
    // Add option to find caller.
    const option = {enabled: true};
    option.text = Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF;
    const name = this.getFieldValue('PROCNAME');
    const workspace = this.workspace;
    option.callback = function() {
      const def = Blockly.Procedures.getDefinition(name, workspace);
      if (def) {
        def.select();
        workspace.centerOnBlock(def.id);
        workspace.getParentSvg().parentElement.focus();
      }
    };
    options.push(option);
  },
  removeProcedureValue: function() {
    // Detach inputs before resetting name so that undo/redo operations happen
    // in the right order
    for (let i = 0; this.getInput('ARG' + i) !== null; i++) {
      this.removeInput('ARG' + i);
    }
    this.setFieldValue('none', 'PROCNAME');
  },
};


Blockly.Blocks['procedures_callreturn'] = {
  // Call a procedure with a return value.
  category: 'Procedures', // Procedures are handled specially.
  helpUrl: Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL,
  init: function() {
    // Let the theme determine the color.
    // this.setColour(Blockly.PROCEDURE_CATEGORY_HUE);
    this.setStyle('procedure_blocks');
    const procDb = this.workspace.getTopWorkspace().getProcedureDatabase();
    this.procNamesFxn = function() {
      const items = procDb.getMenuItems(true);
      return items.length > 0 ? items : ['', ''];
    };

    this.procDropDown = new FieldNoCheckDropdown(this.procNamesFxn,
        ProcedureUtils.onChange);
    this.procDropDown.block = this;
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL)
        .appendField(this.procDropDown, 'PROCNAME');
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP);
    this.setHelpUrl("https://app.gitbook.com/s/AR1GoZvc2Hq3eaRFIOdL/functions#calling-functions-without-a-return-value");
    this.arguments_ = [];
    this.quarkConnections_ = null;
    this.quarkArguments_ = null;
    this.errors = [
      {func: WarningHandler.checkIsInDefinition},
      {
        func: WarningHandler.checkDropDownContainsValidValue,
        dropDowns: ['PROCNAME'],
      },
    ];
    this.setOnChange(function(changeEvent) {
      WarningHandler.checkErrors(this);
    });
    // Blockly.FieldProcedure.onChange.call(this.getField("PROCNAME"),
    //     this.procNamesFxn()[0][0]);
    ProcedureUtils.onChange.call(this.getField('PROCNAME'),
        this.getField('PROCNAME').getValue());
  },
  getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
  renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
  setProcedureParameters:
  Blockly.Blocks.procedures_callnoreturn.setProcedureParameters,
  mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
  domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
  renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar,
  procCustomContextMenu:
      Blockly.Blocks.procedures_callnoreturn.procCustomContextMenu,
  removeProcedureValue:
      Blockly.Blocks.procedures_callnoreturn.removeProcedureValue,
};

Blockly.Blocks['toast'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".showToast");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Show a short message on the screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), 'NAME')
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["ClickElement","ce"], ["FocusTextField","focus"],['UnFocusTextField','blur'],['RefreshIframe','ri'],['RemoveElement','remove'],['SelectTextFieldText','select'],['DismissKeyboard','dmk']],this.validate), "d");
        this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
        this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.ELEMENTS_CATEGORY_HUE);
 this.setTooltip("Click or request focus on an element, usefull if you need to open a file picker without user input");
 this.setHelpUrl("");
  },
  validate: function(newValue) {
  this.getSourceBlock().updateConnections(newValue);
  return newValue;
},
updateConnections: function(newValue) {
  this.removeInput('NAME', /* no error */ true);
if(newValue == 'dmk') {
} else {
this.appendValueInput("NAME")
        .setCheck(null);
}
}
};

Blockly.Blocks['share'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".share");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Share a message or file to someone");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['create_list_with'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("create list from list");
    this.appendValueInput("l")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(window.Blockly.LIST_CATEGORY_HUE);
    this.setMutator(new Blockly.Mutator(['list']));
 this.setTooltip("Create a list from multiple lists");
 this.setHelpUrl("");
  },
    updateShape_: function() {
    for (let i = 1; this.getInput('li' + i); i++) {
      this.removeInput('li' + i);
    }
    // Rebuild block.

    // Observe how it is looking at the `this.elseifCount_` property
    for (let i = 1; i <= this.listCount_; i++) {
      this.appendValueInput('li' + i).appendField("").setAlign(Blockly.ALIGN_RIGHT);
    }
    },
decompose: function(workspace) {
  var topBlock = workspace.newBlock('create_list_with_top_block');
  topBlock.initSvg();
    var connection =  topBlock.getInput('NAME').connection;
  for (var i = 0; i < this.listCount_; i++) {
    var o = workspace.newBlock('list');
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
    this.listCount_ = 0;
    const valueConnections = [null];
    while (toppBlock && !toppBlock.isInsertionMarker()) {
      switch (toppBlock.type) {
        case 'list':
          this.listCount_++;
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
  container.setAttribute('items', this.listCount_);
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
    for (let i = 1; i <= this.listCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'li' + i);
    }
  },
     saveConnections: function(topBlock) {
    let clauseBlock = topBlock.getInputTargetBlock('NAME');
    let i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'list': {
          const inputIff = this.getInput('li' + i);
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

Blockly.Blocks['list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.LIST_CATEGORY_HUE);
 this.setTooltip("");
 this.setHelpUrl("");
 this.contextMenu = false;
  }
};

Blockly.Blocks['create_list_with_top_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("lists");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(window.Blockly.LIST_CATEGORY_HUE);
    this.setInputsInline(true);
 this.setTooltip("");
 this.setHelpUrl("");
 this.contextMenu = false;
  }
};

Blockly.Blocks['show_snackbar'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".showSnackBar with text");
    this.appendStatementInput("done")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Show a snackbar on the bottom of the screen for the user to interact with");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['window_resize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".windowResize")
                    .appendField(
            new FieldParameterFlydown('WindowWidth', true, FieldFlydown.DISPLAY_BELOW),
            'ww')
                        .appendField(
            new FieldParameterFlydown('WindowHeight', true, FieldFlydown.DISPLAY_BELOW),
            'wh');
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
 this.setTooltip("Do some statements when the user changes the window size");
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
      this.getFieldValue('ww'),
        this.getFieldValue('wh'),
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
            this.getFieldValue('ww'),
        this.getFieldValue('wh'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('ww'))) {
      this.setFieldValue(newName, 'ww');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('wh'))) {
      this.setFieldValue(newName, 'wh');
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

Blockly.Blocks['load_audio'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([['MediaPlayer' ,"OPTIONNAME"]]), "NAME")
        .appendField(".loadAudioFille");
    this.setOutput(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Load an new audio file to play");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['play_pause'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([['MediaPlayer' ,"OPTIONNAME"]]), "NAME")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["Play","play"], ["Pause","pause"]]), "t");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Play or pause the audio file");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['speed_loop'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([['MediaPlayer' ,"OPTIONNAME"]]), "NAME");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["SetSpeed","play"], ["Loops","pause"]]), "t");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Set the Speed or if the audio loops");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['typeof'] = {
  init: function() {
        this.fieldVar_ = new FieldLexicalVariable(' ');
    this.fieldVar_.setBlock(this);
    this.appendDummyInput()
        .appendField("typeOf")
        .appendField(this.fieldVar_, 'VAR');
    this.setOutput(true, null);
    this.setColour(window.Blockly.VARIABLES_CATEGORY_HUE);
 this.setTooltip("Returns the type of a variable e.g. String,  Array, Object, Boolean or Number");
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

Blockly.Blocks['to_string'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("toString");
    this.setOutput(true, null);
    this.setColour(window.Blockly.TEXT_CATEGORY_HUE);
 this.setTooltip("Turn an number to a string");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['to_number'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("toNumber");
    this.setOutput(true, null);
    this.setColour(window.Blockly.MATH_CATEGORY_HUE);
 this.setTooltip("Trun an numberString to a number");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['istestting'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".isTesting");
    this.setOutput(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Returns true if the project is run in testing mode");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['writeclipboard'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["ClipBoardManager","OPTIONNAME"]]), "NAME")
        .appendField(".writeText");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Write some text to the clipboard");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['text_create_join_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("join             ");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(window.Blockly.TEXT_CATEGORY_HUE);
 this.setTooltip("");
 this.setHelpUrl("");
 this.contextMenu = false;
  }
};

Blockly.Blocks['lists_create_with_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("list             ");
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(window.Blockly.LIST_CATEGORY_HUE);
 this.setTooltip("");
 this.setHelpUrl("");
 this.contextMenu = false;
  }
};

Blockly.Blocks['geolocation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["GeoLocationManager","OPTIONNAME"]]), "NAME")
        .appendField(".getPosition")
         .appendField(
            new FieldParameterFlydown('Latitude', true, FieldFlydown.DISPLAY_BELOW),
            'la')
             .appendField(
            new FieldParameterFlydown('Longitude', true, FieldFlydown.DISPLAY_BELOW),
            'lo')
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Returns the user's position");
 this.setHelpUrl("");
  }
  ,
  withLexicalVarsAndPrefix: function(child, proc) {
    const params = this.declaredNames();
    // not arguments_ instance var
    for (let i = 0; i < params.length; i++) {
      proc(params[i], '');
    }
  },
  getVars: function() {
    return [
      this.getFieldValue('la'),
        this.getFieldValue('lo'),
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
            this.getFieldValue('la'),
        this.getFieldValue('lo'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('la'))) {
      this.setFieldValue(newName, 'la');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('lo'))) {
      this.setFieldValue(newName, 'lo');
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

Blockly.Blocks['touch_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".touchStarts");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
 this.setTooltip("Do some statements when the user start touching the device, only works on mobiles/tablets");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['touch_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".touchEnds");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
 this.setTooltip("Do some statements when the user stops touching the device, only works on mobiles/tablets");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['touch_cancel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".touchCancel");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
 this.setTooltip("Do some statements when the users touch has been interupted while touching the device, only works on mobiles/tablets");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['touch_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([[window.localStorage.getItem("projectName" + project),"OPTIONNAME"]]), "NAME")
        .appendField(".touchMove")
        .appendField(
            new FieldParameterFlydown('TouchX', true, FieldFlydown.DISPLAY_BELOW),
            'x')
            .appendField(
            new FieldParameterFlydown('TouchY', true, FieldFlydown.DISPLAY_BELOW),
            'y')
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour(window.Blockly.EVENTS_CATEGORY_HUE);
    this.setInputsInline(true);
 this.setTooltip("Do some statements when the user starts moving his fingers over the touch-screen, only works on mobiles/tablets");
 this.setHelpUrl("");
  }  ,
  withLexicalVarsAndPrefix: function(child, proc) {
    const params = this.declaredNames();
    // not arguments_ instance var
    for (let i = 0; i < params.length; i++) {
      proc(params[i], '');
    }
  },
  getVars: function() {
    return [
      this.getFieldValue('x'),
        this.getFieldValue('y'),
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
            this.getFieldValue('x'),
        this.getFieldValue('y'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('x'))) {
      this.setFieldValue(newName, 'x');
    }
          if (Blockly.Names.equals(oldName, this.getFieldValue('y'))) {
      this.setFieldValue(newName, 'y');
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

Blockly.Blocks['notification'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["NotificationManager","OPTIONNAME"]]), "NAME")
        .appendField(".showNotification");
    this.appendValueInput("titke")
        .setCheck(null)
        .appendField("title");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("message");
    this.appendValueInput("icon")
        .setCheck(null)
        .appendField("icon");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Shows a notification for the user to interact with");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dismiss_notification'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["NotificationManager","OPTIONNAME"]]), "NAME")
        .appendField(".dismissNotification");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Dismisses the notification");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['global_declaration'] = {
  // Global var defn
  category: 'Variables',
  helpUrl: Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL,
  init: function() {
    // Let the theme determine the color.
    // this.setColour(Blockly.VARIABLE_CATEGORY_HUE);
    this.setStyle('variable_blocks');
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT)
        .appendField(new FieldGlobalFlydown(
            Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME,
            FieldFlydown.DISPLAY_BELOW), 'NAME')
        .appendField(Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO);
    this.setTooltip(Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP);
    this.appendValueInput('VALUE');
  },
  getVars: function() {
    const field = this.getField('NAME');
    return field ? [field.getText()] : [];
  },
  getGlobalNames: function() {
    return this.getVars();
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
      this.setFieldValue(newName, 'NAME');
    }
  },
};

Blockly.Blocks['get_all_items'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["StorageManager","OPTIONNAME"]]), "NAME")
        .appendField(".getItems");
    this.setOutput(true, null);
    this.setColour(window.Blockly.COMPONENTS_CATEGORY_HUE);
 this.setTooltip("Returns a list of all saved items including keys");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fullscreen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["WebGL","OPTIONNAME"]]), "NAME")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["Enter","request"], ["Exit","exit"]]), "t")
        .appendField("fullscreenMode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(window.Blockly.GAME_CATEGORY_HUE);
 this.setTooltip("Enter or exit fullscreen mode");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['isfullscreen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldDropdown([["WebGL","OPTIONNAME"]]), "NAME")
        .appendField(".isInFullscreenMode");
    this.setOutput(true, null);
    this.setColour(window.Blockly.GAME_CATEGORY_HUE);
 this.setTooltip("Returns true if the screen is in fullscreen mode");
 this.setHelpUrl("");
  }
};