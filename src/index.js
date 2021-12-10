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

//define generators
function generate () {
    function gen_widgets () {
               Blockly.JavaScript['create'] = function(block) {
           var ID = `ID_` + Math.floor(Math.random() * 100000000000000000) + 1
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'DO');
                     const variable0 = Blockly.JavaScript.nameDB_.getName(
      block.getFieldValue('ERR_STR_VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_name == "button") {
      var code = "var " + ID + " = document.createElement(`button`);\n document.body.appendChild(" + ID + ");\n" +
          "{\nlet " + variable0 + " = `" + ID + "`\n" + statements_name + "\n}"
      }
  return code;
};
    }
    gen_widgets();
  function gen_events () {
Blockly.JavaScript['events'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
    var code = `window.addEventListener("` + dropdown_name + `", function (event) {` + statements_name + `})\n`;
  return code;
};
  }
  gen_events();
}

generate();

// define blocks
function define_blocks () {
    function widgets () {
Blockly.Blocks['create'] = {
    init: function() {
    this.appendDummyInput()
        .appendField("create")
        .appendField(new Blockly.FieldDropdown([["Button","button"]]), "NAME")
        .appendField(
            new FieldParameterFlydown('WidgetId', true, FieldFlydown.DISPLAY_BELOW),
            'ERR_STR_VAR');
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
            this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Creates a new widget and adds it to the body");
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
      this.getFieldValue('ERR_STR_VAR'),
    ];
  },
  blocksInScope: function() {
    const doBlock = this.getInputTargetBlock('DO');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [
      this.getFieldValue('ERR_STR_VAR'),
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('ERR_STR_VAR'))) {
      this.setFieldValue(newName, 'ERR_STR_VAR');
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
    }
    widgets();
    
  function events() {
Blockly.Blocks['events'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([["PageFinishedLoading","load"], ["ErrorOccured","error"], ["PageScroll","scroll"], ["PageResized","resize"], ["GamePadConnected","gamepadconnected"], ["GamePadDisconnected","gamepaddisconnected"], ["KeyboardKeyPressedDown","keydown"], ["KeyboardKeyPressedUp","keyup"], ["AnyKeyboardKeyPressed","keypress"], ["MouseUp","mouseup"], ["MouseDown","mousedown"], ["MouseMove","mousemove"], ["MouseClick","click"]]), "NAME");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
  }
  events();
}

define_blocks();

//variables
var projects = [];

var project = "";

function html () {
  var gen = `<!DOCTYPE html>
<title>`+ project + `<\/title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" type="image/jpg" href="` + window.localStorage.getItem("icon" + project) + `"\/>
<body>
<\/body>
<script type="module">
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

var x = ""
var y = ""

// Inject Blockly.

const workspace = Blockly.inject("blocklyDiv", {
  trashcan: false,

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
  
  document.getElementById("GoHome2").style.backgroundImage =
    "url(https://media.discordapp.net/attachments/898978597996466189/911302759175823380/round_home_white_24dp.png)";
  document.getElementById("Test").style.backgroundImage =
    "url(https://media.discordapp.net/attachments/898978597996466189/914946147783688192/round_play_arrow_white_24dp.png)";
  
  document.getElementById("download").style.backgroundImage =
    "url(https://media.discordapp.net/attachments/898978597996466189/915973527935533056/round_file_download_white_24dp.png)";

  document.getElementById("Settings").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("Projects-list").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.title = "Sketch";
  let oldLink = document.querySelectorAll('[rel="shortcut icon"]')[0];
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  let link = document.createElement("link");
  link.id = "favicon";
  link.rel = "shortcut icon";
  link.href =
    "https://media.discordapp.net/attachments/898978597996466189/900743720905900032/60d473a38f959300118b9c10.png";
  document.head.appendChild(link);

  window.setTimeout(function () {
    document.getElementById("div").style.display = "none";
    document.getElementById("challange").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("home").style.display = "block";
    if (!window.localStorage.getItem("projects") == "") {
      projects = JSON.parse(window.localStorage.getItem("projects"));
      for (var i of projects) {
        var neww_list_item = document.getElementById("Projects-list");
        var itemm = neww_list_item.cloneNode(true);
        neww_list_item.id = i;
        neww_list_item.style.display = "block";
        neww_list_item.onclick = lClick;
        const select = neww_list_item.querySelector("#Title");
        select.id = "Title" + i;
        document.getElementById("Title" + i).innerHTML = i

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
  var add = document.getElementById("add");
  add.onclick = function () {
    var new_project = prompt("New Project Name");
    if (new_project === `` || new_project == null) {
    } else {
      var new_list_item = document.getElementById("Projects-list");
      var item = new_list_item.cloneNode(true);
      new_list_item.id = new_project;
      new_list_item.style.display = "block";
 new_list_item.onclick = lClick;
      const select = new_list_item.querySelector("#Title");
      select.id = "Title" + new_project;
      document.getElementById("Title" + new_project).innerHTML = new_project;

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
          dd.getMinutes()
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
  }
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
      
      document.getElementById("Test").style.backgroundColor = "#424242";
      document.getElementById("goHome").style.backgroundColor = "#424242";

      document.getElementById("GoHome2").style.backgroundColor = "#424242";

      document.getElementById("open").style.backgroundColor = "#424242";
    
    document.getElementById("e").style.color = "white";
      document.getElementById("add").style.backgroundColor = "#424242";

      document.getElementById("settings").style.backgroundColor = "#424242";

      document.getElementById("share").style.backgroundColor = "#424242";

      document.getElementById("reset").style.backgroundColor = "#424242";

      document.getElementById("BGImage").style.backgroundColor = "#424242";

      document.getElementById("bgimage").style.backgroundColor = "#424242";
      document.getElementById("theme").style.backgroundColor = "#424242";
      
      document.getElementById("download").style.backgroundColor = "#424242";

      document.getElementById("theme").innerHTML = "Dark Theme: On";

      document.getElementById("siteSettings").style.color = "white";

      document.getElementById("challange").style.color = "white";

      document.getElementById("refrence").style.color = "white";
      document.getElementById("loading").style.borderTop = "8px solid #424242";

      document.getElementById("logo").src =
        "https://media.discordapp.net/attachments/898978597996466189/911561074178949150/Untitled116.png";
    } else {
      window.localStorage.setItem("DarkMode", "");
      document.body.style.backgroundColor = "white";
      
      document.getElementById("open").style.backgroundColor = "#008dcd";
    
    document.getElementById("e").style.color = "#008dcd";
      
      document.getElementById("header").style.backgroundColor = "#008dcd";

      document.getElementById("Test").style.backgroundColor = "#008dcd";
      document.getElementById("goHome").style.backgroundColor = "#008dcd";

      document.getElementById("GoHome2").style.backgroundColor = "#008dcd";

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
    }
  };

  var settings = document.getElementById("settings");

  settings.onclick = function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("Settings").style.display = "block";
  };

  var goHome = document.getElementById("goHome");

  goHome.onclick = function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("Settings").style.display = "none";
  };

  var reset = (document.getElementById("reset").onclick = function () {
    if (confirm("WARNING: If you continue all data will be reset.")) {
      window.localStorage.clear();
      window.location.href = "https://lukeplays33.github.io/Sketch/";
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
    
    document.body.style.backgroundColor = "black";
    document.getElementById("header").style.backgroundColor = "#424242";
    
    document.getElementById("download").style.backgroundColor = "#424242";
    
    document.getElementById("Test").style.backgroundColor = "#424242";
    document.getElementById("goHome").style.backgroundColor = "#424242";

    document.getElementById("GoHome2").style.backgroundColor = "#424242";

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

    document.getElementById("refrence").style.color = "white";
    document.getElementById("challange").style.color = "white";

    document.getElementById("loading").style.borderTop = "8px solid #424242";

    document.getElementById("logo").src =
      "https://media.discordapp.net/attachments/898978597996466189/911561074178949150/Untitled116.png";

    document.getElementById("reset").style.backgroundColor = "#424242";
  } else {
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
  var goHome = document.getElementById("GoHome2");
goHome.onclick = function () {
  document.getElementById("home").style.display = "block";
  document.getElementById("blocklyContainer").style.display = "none";
  project = "";
};
  var test = document.getElementById("Test");
  test.onclick = function () {
    var w = window.open();
w.document.open();
    w.document.write(html() + Blockly.JavaScript.workspaceToCode(workspace) + "<\/script>");
    w.document.close();
  }
  var d = document.getElementById("download");
  d.onclick = function () {
    downloadHTML();
  }
}
editor();

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

window.onmousemove = function (e) {
  x = e.x;
  y = e.y;
}

const lClick = function () {
   document.getElementById("home").style.display = "none";
          document.getElementById("blocklyContainer").style.display = "block";
          project = this.id
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
download(project + ".html", html() + Blockly.JavaScript.workspaceToCode(workspace) + "<\/script>");
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