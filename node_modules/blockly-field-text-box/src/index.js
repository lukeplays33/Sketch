/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview A Blockly true multiline text input field.
 */

import Blockly from 'blockly/core';

const DEFAULT_LINE_CHARS = 40; // default

/**
 * A Blockly true multiline text input.
 */
export class FieldTextBox extends Blockly.FieldMultilineInput {
/**
 * Constructs a FieldTextBox.
 * @param {!String} value A JSON object with options.
 * @param {Function} validator A JSON object with options.
 * @param {Object} options A JSON object with options.
 * @extends {Blockly.FieldMultilineInput}
 * @constructor
 */
  constructor(value, validator, options) {
    super(value, validator, options);
    const _options = {...options};
    const maxLineChars = Math.abs(parseInt(_options.maxLineChars, 10));
    this.maxLineChars_ = maxLineChars || DEFAULT_LINE_CHARS;
    this.closeOnEnter_ = _options.closeOnEnter === true;
  }

  /**
   * Constructs a FieldTextBox from a JSON arg object.
   * @param {!Object} options A JSON object with options.
   * @return {!Object} The new field instance.
   * @package
   * @nocollapse
   */
  static fromJson(options) {
    const text = Blockly.utils.replaceMessageReferences(options['text']);
    return new FieldTextBox(text, undefined, options);
  }

  /**
   * Split text into lines based on maximum line length allowed.
   * @param {String} text - Input text.
   * @param {Number} chars - Max chars on one line.
   * @return {Array} - Result array.
   */
  static splitOnRows(text, chars) {
    const nl = /\n/;
    const space = /\s/;
    const rows = [];

    for (const p of text.split(nl)) {
      const w = p.split(space);
      rows.push(w[0]);

      for (let i = 1; i < w.length; i++) {
        if (w[i].length + rows[rows.length - 1].length + 1 < chars) {
          rows[rows.length - 1] += ` ${w[i]}`;
        } else {
          rows.push(w[i]);
        }
      }
    }
    return rows;
  }

  /**
   * Get the text from this field as displayed on screen.
   * @return {string} Currently displayed text.
   * @protected
   * @override
   */
  getDisplayText_() {
    let text = this.getText();
    if (!text) {
      // Prevent the field from disappearing if empty.
      return Blockly.Field.NBSP;
    }

    if (this.sourceBlock_.RTL) {
      // The SVG is LTR, force value to be RTL.
      text += '\u200F';
    }

    return text;
  }

  /**
   * Updates the text of the textElement.
   * @protected
   */
  render_() {
    // Remove all text group children.
    let currentChild;
    while ((currentChild = this.textGroup_.firstChild)) {
      this.textGroup_.removeChild(currentChild);
    }

    // Add in text elements into the group.
    const text = this.getDisplayText_();
    const lines = FieldTextBox.splitOnRows(text, this.maxLineChars_);
    let y = 0;
    for (let i = 0; i < lines.length; i++) {
      const lineHeight =
         this.getConstants().FIELD_TEXT_HEIGHT +
         this.getConstants().FIELD_BORDER_RECT_Y_PADDING;
      const span = Blockly.utils.dom.createSvgElement(
          Blockly.utils.Svg.TEXT, {
            class: 'blocklyText blocklyMultilineText',
            x: this.getConstants().FIELD_BORDER_RECT_X_PADDING,
            y: y + this.getConstants().FIELD_BORDER_RECT_Y_PADDING,
            dy: this.getConstants().FIELD_TEXT_BASELINE,
          },
          this.textGroup_
      );

      /**
       * Replace whitespace with non-breaking spaces.
       * So the text doesn't collapse.
       */
      const line = lines[i].replace(/\s/g, Blockly.Field.NBSP);
      span.appendChild(document.createTextNode(line));
      y += lineHeight;
    }

    this.updateSize_();

    if (this.isBeingEdited_) {
      if (this.sourceBlock_.RTL) {
        // in RTL, we need to let the browser reflow before resizing
        // in order to get the correct bounding box of the borderRect
        // avoiding issue #2777.
        setTimeout(this.resizeEditor_.bind(this), 0);
      } else {
        this.resizeEditor_();
      }
      const htmlInput = /** @type {!HTMLElement} */ (this.htmlInput_);
      if (!this.isTextValid_) {
        Blockly.utils.dom.addClass(htmlInput, 'blocklyInvalidInput');
        Blockly.utils.aria.setState(
            htmlInput,
            Blockly.utils.aria.State.INVALID,
            true
        );
      } else {
        Blockly.utils.dom.removeClass(htmlInput, 'blocklyInvalidInput');
        Blockly.utils.aria.setState(
            htmlInput,
            Blockly.utils.aria.State.INVALID,
            false
        );
      }
    }
  }

  /**
   * Updates the size of the field based on the text.
   * @protected
   */
  updateSize_() {
    const nodes = this.textGroup_.childNodes;
    let totalWidth = 0;
    let totalHeight = 0;
    for (let i = 0; i < nodes.length; i++) {
      const tspan = /** @type {!Element} */ (nodes[i]);
      const textWidth = Blockly.utils.dom.getTextWidth(tspan);
      if (textWidth > totalWidth) {
        totalWidth = textWidth;
      }
      totalHeight +=
         this.getConstants().FIELD_TEXT_HEIGHT +
         (i > 0 ? this.getConstants().FIELD_BORDER_RECT_Y_PADDING : 0);
    }
    if (this.isBeingEdited_) {
      // The default width is based on the longest line in the display text,
      // but when it's being edited, width should be calculated based on the
      // absolute longest line, even if it would be truncated after editing.
      // Otherwise we would get wrong editor width when there are more
      // lines than this.maxLines_.
      const actualEditorLines = FieldTextBox.splitOnRows(
          this.value_,
          this.maxLineChars_
      );
      const dummyTextElement = Blockly.utils.dom.createSvgElement(
          Blockly.utils.Svg.TEXT, {
            class: 'blocklyText blocklyMultilineText',
          }
      );
      const fontSize = this.getConstants().FIELD_TEXT_FONTSIZE;
      const fontWeight = this.getConstants().FIELD_TEXT_FONTWEIGHT;
      const fontFamily = this.getConstants().FIELD_TEXT_FONTFAMILY;

      for (let i = 0; i < actualEditorLines.length; i++) {
        if (actualEditorLines[i].length > this.maxDisplayLength) {
          actualEditorLines[i] = actualEditorLines[i].substring(
              0,
              this.maxDisplayLength
          );
        }
        dummyTextElement.textContent = actualEditorLines[i];
        const lineWidth = Blockly.utils.dom.getFastTextWidth(
            dummyTextElement,
            fontSize,
            fontWeight,
            fontFamily
        );
        if (lineWidth > totalWidth) {
          totalWidth = lineWidth;
        }
      }
    }
    if (this.borderRect_) {
      totalHeight += this.getConstants().FIELD_BORDER_RECT_Y_PADDING * 2;
      totalWidth += this.getConstants().FIELD_BORDER_RECT_X_PADDING * 2;
      this.borderRect_.setAttribute('width', totalWidth);
      this.borderRect_.setAttribute('height', totalHeight);
    }
    this.size_.width = totalWidth;
    this.size_.height = totalHeight;
    this.positionBorderRect_();
  }

  /**
   * Create the text input editor widget.
   * @return {!HTMLTextAreaElement} The newly created text input editor.
   * @protected
   */
  widgetCreate_() {
    const div = Blockly.WidgetDiv.DIV;
    const scale = this.workspace_.getScale();
    const htmlInput = /** @type {HTMLTextAreaElement} */
       (document.createElement('textarea'));

    htmlInput.className = 'blocklyHtmlInput blocklyHtmlTextAreaInput';
    htmlInput.setAttribute('spellcheck', this.spellcheck_);
    const fontSize = `${this.getConstants().FIELD_TEXT_FONTSIZE * scale}pt`;
    div.style.fontSize = fontSize;
    htmlInput.style.fontSize = fontSize;
    const borderRadius = `${Blockly.FieldTextInput.BORDERRADIUS * scale}px`;
    htmlInput.style.borderRadius = borderRadius;
    const paddingX = this.getConstants().FIELD_BORDER_RECT_X_PADDING * scale;

    const paddingY =
                 (this.getConstants().FIELD_BORDER_RECT_Y_PADDING * scale) / 2;

    htmlInput.style.padding = `
       ${paddingY}px
       ${paddingX}px
       ${paddingY}px
       ${paddingX}px
     `;

    const lineHeight =
                 this.getConstants().FIELD_TEXT_HEIGHT +
                 this.getConstants().FIELD_BORDER_RECT_Y_PADDING;

    htmlInput.style.lineHeight = `${lineHeight * scale}px`;
    div.appendChild(htmlInput);
    htmlInput.value = htmlInput.defaultValue = this.getEditorText_(this.value_);
    htmlInput.untypedDefaultValue_ = this.value_;
    htmlInput.oldValue_ = null;

    if (Blockly.utils.userAgent.GECKO) {
      // In FF, ensure the browser reflows before resizing to avoid issue #2777.
      setTimeout(this.resizeEditor_.bind(this), 0);
    } else {
      this.resizeEditor_();
    }

    this.bindInputEvents_(htmlInput);
    return htmlInput;
  }

  /**
   * Overrides to normal textinput behaviour.
   * @param {*} newValue The value to be saved.
   * The default validator guarantees that this is a string.
   * @protected
   * @override
   */
  doValueUpdate_(newValue) {
    Blockly.FieldTextInput.prototype.doValueUpdate_.call(this, newValue);
  }

  /**
   * Returns the maxLineChars config of this field.
   * @return {number} The maxLineChars config value.
   */
  getMaxLineChars() {
    return this.maxLineChars_;
  }

  /**
   * Handle key down to the editor.
   * @param {!Event} e Keyboard event.
   * @protected
   * @override
   */
  onHtmlInputKeyDown_(e) {
    if (e.keyCode === Blockly.utils.KeyCodes.ENTER && this.closeOnEnter_) {
      Blockly.FieldTextInput.prototype.onHtmlInputKeyDown_.call(this, e);
    } else {
      Blockly.FieldMultilineInput.prototype.onHtmlInputKeyDown_.call(this, e);
    }
  }
}

// Edit field registration key.
Blockly.fieldRegistry.register('field_text_box', FieldTextBox);

// Make field available on Blockly object.
Blockly.FieldTextBox = FieldTextBox;
