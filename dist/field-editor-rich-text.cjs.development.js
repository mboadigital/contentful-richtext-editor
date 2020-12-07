'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var slateReact = require('slate-react');
var slate = require('slate');
var noop = _interopDefault(require('lodash/noop'));
var debounce = _interopDefault(require('lodash/debounce'));
var immutable = require('immutable');
var deepEquals = _interopDefault(require('fast-deep-equal'));
var richTextTypes = require('@contentful/rich-text-types');
var contentfulSlateJSAdapter = require('@contentful/contentful-slatejs-adapter');
var fieldEditorReference = require('@contentful/field-editor-reference');
var fromPairs = _interopDefault(require('lodash/fromPairs'));
var EditList = _interopDefault(require('@productboard/slate-edit-list'));
var forma36ReactComponents = require('@contentful/forma-36-react-components');
var isHotkey = _interopDefault(require('is-hotkey'));
var emotion = require('emotion');
var tokens = _interopDefault(require('@contentful/forma-36-tokens'));
var camelCase = _interopDefault(require('lodash/camelCase'));
var flow = _interopDefault(require('lodash/flow'));
var find = _interopDefault(require('lodash/find'));
var get = _interopDefault(require('lodash/get'));
var detectBrowser = require('detect-browser');
var fieldEditorShared = require('@contentful/field-editor-shared');
var TrailingBlock = _interopDefault(require('@wikifactory/slate-trailing-block'));
var richTextPlainTextRenderer = require('@contentful/rich-text-plain-text-renderer');
var HtmlSerializer = _interopDefault(require('slate-html-serializer'));
var PlainSerializer = _interopDefault(require('slate-plain-serializer'));
var ReactDOM = _interopDefault(require('react-dom'));
var throttle = _interopDefault(require('lodash/throttle'));
var flatten = _interopDefault(require('lodash/flatten'));
var cn = _interopDefault(require('classnames'));
var uniqBy = _interopDefault(require('lodash/uniqBy'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var EditListWrapper = (function (opt) {
  var config = _extends({
    types: [richTextTypes.BLOCKS.OL_LIST, richTextTypes.BLOCKS.UL_LIST],
    typeItem: richTextTypes.BLOCKS.LIST_ITEM,
    typeDefault: richTextTypes.BLOCKS.PARAGRAPH
  }, opt);

  var plugin = EditList(config);
  return plugin;
});

var _extends2, _extends3, _inlines;

var mapVoidTypes = function mapVoidTypes(nodeTypes) {
  return fromPairs(nodeTypes.map(function (nodeType) {
    return [nodeType, {
      isVoid: true
    }];
  }));
};

var listPlugin = /*#__PURE__*/EditListWrapper();
var schema = {
  document: {
    nodes: [{
      types: richTextTypes.TOP_LEVEL_BLOCKS
    }]
  },
  blocks: /*#__PURE__*/_extends((_extends2 = {}, _extends2[richTextTypes.BLOCKS.PARAGRAPH] = {
    nodes: [{
      types: /*#__PURE__*/Object.values(richTextTypes.INLINES)
    }, {
      objects: ['text', 'inline']
    }]
  }, _extends2[richTextTypes.BLOCKS.HEADING_1] = {
    nodes: [{
      types: /*#__PURE__*/Object.values(richTextTypes.INLINES)
    }, {
      objects: ['text', 'inline']
    }]
  }, _extends2[richTextTypes.BLOCKS.HEADING_2] = {
    nodes: [{
      types: /*#__PURE__*/Object.values(richTextTypes.INLINES)
    }, {
      objects: ['text', 'inline']
    }]
  }, _extends2[richTextTypes.BLOCKS.HEADING_3] = {
    nodes: [{
      types: /*#__PURE__*/Object.values(richTextTypes.INLINES)
    }, {
      objects: ['text', 'inline']
    }]
  }, _extends2[richTextTypes.BLOCKS.HEADING_4] = {
    nodes: [{
      types: /*#__PURE__*/Object.values(richTextTypes.INLINES)
    }, {
      objects: ['text', 'inline']
    }]
  }, _extends2[richTextTypes.BLOCKS.HEADING_5] = {
    nodes: [{
      types: /*#__PURE__*/Object.values(richTextTypes.INLINES)
    }, {
      objects: ['text', 'inline']
    }]
  }, _extends2[richTextTypes.BLOCKS.HEADING_6] = {
    nodes: [{
      types: /*#__PURE__*/Object.values(richTextTypes.INLINES)
    }, {
      objects: ['text', 'inline']
    }]
  }, _extends2), /*#__PURE__*/mapVoidTypes(richTextTypes.VOID_BLOCKS), listPlugin.schema.blocks, (_extends3 = {}, _extends3[richTextTypes.BLOCKS.QUOTE] = {
    nodes: [{
      match: [/*#__PURE__*/richTextTypes.CONTAINERS[richTextTypes.BLOCKS.QUOTE].map(function (type) {
        return {
          type: type
        };
      })],
      min: 1
    }],
    normalize: function normalize(editor, error) {
      if (error.code === 'child_type_invalid') {
        return editor.unwrapBlockByKey(error.node.key, richTextTypes.BLOCKS.QUOTE);
      }
    }
  }, _extends3)),
  inlines: (_inlines = {}, _inlines[richTextTypes.INLINES.HYPERLINK] = {
    nodes: [{
      objects: ['text']
    }]
  }, _inlines[richTextTypes.INLINES.ENTRY_HYPERLINK] = {
    nodes: [{
      objects: ['text']
    }]
  }, _inlines[richTextTypes.INLINES.ASSET_HYPERLINK] = {
    nodes: [{
      objects: ['text']
    }]
  }, _inlines[richTextTypes.INLINES.EMBEDDED_ENTRY] = {
    isVoid: true
  }, _inlines)
};

/**
 * All known origins for Rich Text actions
 * @type {object}
 */

var actionOrigin = {
  TOOLBAR: 'toolbar-icon',
  SHORTCUT: 'shortcut',
  VIEWPORT: 'viewport-interaction',
  COMMAND_PALETTE: 'command-palette'
};

var createActionLogger = function createActionLogger(onAction, origin) {
  return function (name, data) {
    onAction(name, _extends({
      origin: origin
    }, data));
  };
};
/**
 * Creates an api that is passed to editor and toolbar widgets.
 *
 * @param {object} sdk
 * @param {function } onAction
 * @returns {{ sdk: {object}, logViewportAction: {function}, createActionLogger: {function}, createActionLogger: {function} }}
 */


var createRichTextAPI = function createRichTextAPI(_ref) {
  var sdk = _ref.sdk,
      onAction = _ref.onAction;
  var richTextAPI = {
    sdk: sdk,
    logViewportAction: createActionLogger(onAction, actionOrigin.VIEWPORT),
    logShortcutAction: createActionLogger(onAction, actionOrigin.SHORTCUT),
    logToolbarAction: createActionLogger(onAction, actionOrigin.TOOLBAR),
    logCommandPaletteAction: createActionLogger(onAction, actionOrigin.COMMAND_PALETTE)
  };
  return richTextAPI;
};
/**
 * Describes the prop types a Rich Text editor plugin can expect.
 * @type {object}
 */

var EDITOR_PLUGIN_PROP_TYPES = {
  richTextAPI: /*#__PURE__*/PropTypes.shape({
    sdk: PropTypes.object.isRequired,
    logViewportAction: PropTypes.func.isRequired,
    logShortcutAction: PropTypes.func.isRequired,
    logToolbarAction: PropTypes.func.isRequired
  })
};
/**
 * Describes the prop types a Rich Text toolbar plugin can expect.
 * @type {object}
 */

var TOOLBAR_PLUGIN_PROP_TYPES = /*#__PURE__*/_extends({}, EDITOR_PLUGIN_PROP_TYPES, {
  editor: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  isButton: PropTypes.bool,
  // TODO: Should get rid of this as it's just necessary as a hack to prevent
  //  crashes before the user manually set the focus to the Slate input.
  canAutoFocus: PropTypes.bool
});

var ToolbarIcon = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ToolbarIcon, _Component);

  function ToolbarIcon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      event.preventDefault();

      _this.props.onToggle(event);
    };

    return _this;
  }

  var _proto = ToolbarIcon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        icon = _this$props.icon,
        isActive = _this$props.isActive,
        disabled = _this$props.disabled,
        title = _this$props.title,
        type = _this$props.type;
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.EditorToolbarButton, {
      icon: icon,
      tooltip: title,
      label: title,
      isActive: isActive,
      disabled: disabled,
      "data-test-id": "toolbar-toggle-" + type,
      onClick: this.handleClick
    });
  };

  return ToolbarIcon;
}(React.Component);

ToolbarIcon.propTypes = {
  isActive: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string
};

var MarkPropTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  mark: PropTypes.string.isRequired
};
var NodePropTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  node: /*#__PURE__*/PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired
};

function markDecorator (Tag, tagProps) {
  if (tagProps === void 0) {
    tagProps = {};
  }

  var CommonMark = function CommonMark(_ref) {
    var attributes = _ref.attributes,
        children = _ref.children;
    return /*#__PURE__*/React__default.createElement(Tag, _extends({}, tagProps, attributes), children);
  };

  CommonMark.displayName = Tag + "-mark";
  CommonMark.propTypes = MarkPropTypes;
  return CommonMark;
}

var haveMarks = function haveMarks(_ref, type) {
  var value = _ref.value;
  return value.activeMarks.some(function (mark) {
    return mark.type === type;
  });
};
var haveBlocks = function haveBlocks(_ref2, type) {
  var value = _ref2.value;
  return value.blocks.some(function (node) {
    return node.type === type;
  });
};
var haveInlines = function haveInlines(_ref3, type) {
  var value = _ref3.value;
  return value.inlines.some(function (inline) {
    return inline.type === type;
  });
};
function haveAnyInlines(_ref4) {
  var value = _ref4.value;
  return value.inlines.size > 0;
}
/**
 * Checks if all inline nodes in the selectin have a certain type.
 * Returns false if there are no inline nodes in the selection.
 *
 * @param {slate.Editor} editor
 * @param {string} type
 * @returns {boolean}
 */

function haveEveryInlineOfType(_ref5, type) {
  var value = _ref5.value;

  if (value.inlines.size > 0) {
    return value.inlines.every(function (inline) {
      return inline.type === type;
    });
  }

  return false;
}
var haveTextInSomeBlocks = function haveTextInSomeBlocks(_ref6) {
  var value = _ref6.value;

  if (value.blocks.size > 0) {
    return value.blocks.some(function (block) {
      return block.text;
    });
  }
};

var styles = {
  // TODO: Ensure a bold mark on a headline makes the heading appear even
  //  bolder. Consider to make headings non-bold by default.
  bold: /*#__PURE__*/emotion.css({
    color: 'inherit',
    fontWeight: tokens.fontWeightDemiBold
  }),
  italic: /*#__PURE__*/emotion.css({
    fontStyle: 'italic',
    lineHeight: 1 // Prevents vertical jitter effect when applying code mark.

  }),
  code: /*#__PURE__*/emotion.css({
    fontFamily: tokens.fontStackMonospace,
    fontSize: '.9em' // Can't use `rem` to account for code inside a heading.

  })
};
function markPlugin (_ref) {
  var type = _ref.type,
      tagName = _ref.tagName,
      hotkey = _ref.hotkey,
      richTextAPI = _ref.richTextAPI;
  return {
    renderMark: function renderMark(props, _editor, next) {
      if (props.mark.type === type) {
        return markDecorator(tagName, {
          className: styles[type]
        })(props);
      }

      return next();
    },
    onKeyDown: function onKeyDown(event, editor, next) {
      if (isHotkey(hotkey, event)) {
        editor.toggleMark(type);
        var action = haveMarks(editor, type) ? 'mark' : 'unmark';
        richTextAPI.logShortcutAction(action, {
          markType: type
        });
        return;
      }

      return next();
    }
  };
}

/**
 * Handles setting the focus in the Slate editor (if possible due to Slate restrictions)
 * when clicking on a toolbar acton while the editor got no focus.
 *
 * Ideally we would always focus the editor in his case, but this might result
 * in a Slate crash if the editor hasn't been manually focused by the user at
 * that point.
 */
var toolbarActionHandlerWithSafeAutoFocus = function toolbarActionHandlerWithSafeAutoFocus(component, customHandler) {
  return function (event) {
    event.preventDefault();
    var _component$props = component.props,
        editor = _component$props.editor,
        canAutoFocus = _component$props.canAutoFocus;

    if (!editor.value.selection.isFocused) {
      if (canAutoFocus) {
        editor.focus();
      } else {
        // Note: This is only necessary as Slate in 0.4x in our case crashes when
        //  working on the document before the user manually focuses. Attempts at
        //  programmatically setting focus and a proper value.selection were in vain.
        // TODO: Upgrade Slate or figure out how to editor.setFocus when clicking
        //  a toolbar icon without the editor crashing when starting to type.
        return;
      }
    }

    return customHandler(event);
  };
};

var markToggleDecorator = (function (_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon;
  return function (Mark) {
    var _class, _temp;

    return _temp = _class = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(CommonToggleMark, _React$Component);

      function CommonToggleMark() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.handleToggle = toolbarActionHandlerWithSafeAutoFocus(_assertThisInitialized(_this), function () {
          var _this$props = _this.props,
              editor = _this$props.editor,
              onToggle = _this$props.onToggle,
              logToolbarAction = _this$props.richTextAPI.logToolbarAction;
          onToggle(editor.toggleMark(type));
          var action = haveMarks(editor, type) ? 'mark' : 'unmark';
          logToolbarAction(action, {
            markType: type
          });
        });
        return _this;
      }

      var _proto = CommonToggleMark.prototype;

      _proto.render = function render() {
        var _this$props2 = this.props,
            editor = _this$props2.editor,
            disabled = _this$props2.disabled;
        return /*#__PURE__*/React.createElement(Mark, {
          type: type,
          icon: icon,
          title: title,
          onToggle: this.handleToggle,
          isActive: haveMarks(editor, type),
          disabled: disabled
        });
      };

      return CommonToggleMark;
    }(React.Component), _class.propTypes = TOOLBAR_PLUGIN_PROP_TYPES, _temp;
  };
});

var BoldPlugin = function BoldPlugin(_ref) {
  var richTextAPI = _ref.richTextAPI;
  return markPlugin({
    type: richTextTypes.MARKS.BOLD,
    tagName: 'b',
    hotkey: ['mod+b'],
    richTextAPI: richTextAPI
  });
};

var Bold = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Bold, _Component);

  function Bold() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Bold.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, this.props);
  };

  return Bold;
}(React.Component);

var Bold$1 = /*#__PURE__*/markToggleDecorator({
  type: richTextTypes.MARKS.BOLD,
  title: 'Bold',
  icon: 'FormatBold'
})(Bold);

var ItalicPlugin = function ItalicPlugin(_ref) {
  var richTextAPI = _ref.richTextAPI;
  return markPlugin({
    type: richTextTypes.MARKS.ITALIC,
    tagName: 'em',
    hotkey: ['mod+i'],
    richTextAPI: richTextAPI
  });
};

var Italic = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Italic, _Component);

  function Italic() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Italic.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, this.props);
  };

  return Italic;
}(React.Component);

var Italic$1 = /*#__PURE__*/markToggleDecorator({
  type: richTextTypes.MARKS.ITALIC,
  title: 'Italic',
  icon: 'FormatItalic'
})(Italic);

var UnderlinedPlugin = function UnderlinedPlugin(_ref) {
  var richTextAPI = _ref.richTextAPI;
  return markPlugin({
    type: richTextTypes.MARKS.UNDERLINE,
    tagName: 'u',
    hotkey: ['mod+u'],
    richTextAPI: richTextAPI
  });
};

var Underlined = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Underlined, _Component);

  function Underlined() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Underlined.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, this.props);
  };

  return Underlined;
}(React.Component);

var Underlined$1 = /*#__PURE__*/markToggleDecorator({
  type: richTextTypes.MARKS.UNDERLINE,
  title: 'Underline',
  icon: 'FormatUnderlined'
})(Underlined);

var CodePlugin = function CodePlugin(_ref) {
  var richTextAPI = _ref.richTextAPI;
  return markPlugin({
    type: richTextTypes.MARKS.CODE,
    tagName: 'code',
    hotkey: ['mod+/'],
    richTextAPI: richTextAPI
  });
};

var Code = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Code, _Component);

  function Code() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Code.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, this.props);
  };

  return Code;
}(React.Component);

var Code$1 = /*#__PURE__*/markToggleDecorator({
  type: richTextTypes.MARKS.CODE,
  title: 'Code',
  icon: 'Code'
})(Code);

/**
 * Toggles formatting between a given node type and a plain paragraph.
 *
 * @param {slate.Editor} editor
 * @param {stirng} type
 * @returns {boolean} New toggle state after the change.
 */

var toggleChange = function toggleChange(editor, type) {
  var isActive = haveBlocks(editor, type);
  editor.setBlocks(isActive ? richTextTypes.BLOCKS.PARAGRAPH : type);
  return !isActive;
};

var isBlockActive = function isBlockActive(editor, type) {
  return haveBlocks(editor, type);
};

var blockToggleDecorator = (function (_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      _ref$applyChange = _ref.applyChange,
      applyChange = _ref$applyChange === void 0 ? toggleChange : _ref$applyChange,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? isBlockActive : _ref$isActive;
  return function (Block) {
    var _class, _temp;

    return _temp = _class = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(BlockToggleDecorator, _React$Component);

      function BlockToggleDecorator() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.handleToggle = toolbarActionHandlerWithSafeAutoFocus(_assertThisInitialized(_this), function () {
          var _this$props = _this.props,
              editor = _this$props.editor,
              onToggle = _this$props.onToggle,
              logToolbarAction = _this$props.richTextAPI.logToolbarAction;
          var isActive = applyChange(editor, type);
          onToggle(editor);
          var actionName = isActive ? 'insert' : 'remove';
          logToolbarAction(actionName, {
            nodeType: type
          });
        });
        return _this;
      }

      var _proto = BlockToggleDecorator.prototype;

      _proto.render = function render() {
        var _this$props2 = this.props,
            editor = _this$props2.editor,
            disabled = _this$props2.disabled,
            richTextAPI = _this$props2.richTextAPI;
        return /*#__PURE__*/React.createElement(Block, {
          type: type,
          icon: icon,
          title: title,
          onToggle: this.handleToggle,
          isActive: isActive(editor, type),
          disabled: disabled,
          richTextAPI: richTextAPI
        });
      };

      return BlockToggleDecorator;
    }(React.Component), _class.propTypes = TOOLBAR_PLUGIN_PROP_TYPES, _temp;
  };
});

var getParent = function getParent(editor) {
  var range = editor.value.selection;

  if (!range.start.key) {
    return null;
  }

  var startBlock = editor.value.document.getClosestBlock(range.start.key);
  return editor.value.document.getParent(startBlock.key);
};

var isSelectionInQuote = function isSelectionInQuote(editor) {
  var ancestor = getParent(editor);

  if (!ancestor) {
    return false;
  }

  return ancestor.type === richTextTypes.BLOCKS.QUOTE;
};
/**
 * Toggles formatting between block quote and a plain paragraph.
 *
 * @param {slate.Editor} editor
 * @returns {boolean} New toggle state after the change.
 */

var applyChange = function applyChange(editor) {
  var isActive = isSelectionInQuote(editor);

  if (isActive) {
    editor.unwrapBlock(richTextTypes.BLOCKS.QUOTE);
  } else {
    editor.setBlocks(richTextTypes.BLOCKS.PARAGRAPH).wrapBlock(richTextTypes.BLOCKS.QUOTE);
  }

  return !isActive;
};

var headingCss = {
  fontWeight: tokens.fontWeightMedium,
  lineHeight: '1.3',
  margin: "0 0 " + tokens.spacingS
};
var styles$1 = {
  paragraph: /*#__PURE__*/emotion.css({
    lineHeight: tokens.lineHeightDefault,
    marginBottom: '1.5em'
  }),
  bold: /*#__PURE__*/emotion.css({
    color: 'inherit',
    fontWeight: tokens.fontWeightDemiBold
  }),
  blockquote: /*#__PURE__*/emotion.css({
    margin: '0 0 1.3125rem',
    borderLeft: "6px solid " + tokens.colorElementLight,
    paddingLeft: '0.875rem',
    fontStyle: 'normal',
    '& a': {
      color: 'inherit'
    }
  }),
  code: /*#__PURE__*/emotion.css({
    background: tokens.colorElementLight,
    padding: '0px',
    color: tokens.colorTextMid,
    borderRadius: '2px'
  }),
  textLink: /*#__PURE__*/emotion.css({
    fontSize: 'inherit'
  }),
  orderedList: /*#__PURE__*/emotion.css({
    margin: '0 0 1.25rem 1.25rem',
    listStyleType: 'decimal',
    '[data-test-id="ordered-list"]': {
      listStyleType: 'upper-alpha',
      '[data-test-id="ordered-list"]': {
        listStyleType: 'lower-roman',
        '[data-test-id="ordered-list"]': {
          listStyleType: 'lower-alpha'
        }
      }
    },
    '[data-test-id="paragraph"]': {
      margin: 0,
      lineHeight: tokens.lineHeightDefault
    }
  }),
  unorderedList: /*#__PURE__*/emotion.css({
    margin: '0 0 1.25rem 1.25rem',
    listStyleType: 'disc',
    '[data-test-id="unordered-list"]': {
      listStyleType: 'circle',
      '[data-test-id="unordered-list"]': {
        listStyleType: 'square'
      }
    },
    '[data-test-id="paragraph"]': {
      margin: 0,
      lineHeight: tokens.lineHeightDefault
    }
  }),
  listItem: /*#__PURE__*/emotion.css({
    listStyle: 'inherit',
    margin: 0,
    '[data-test-id="ordered-list"], [data-test-id="unordered-list"]': {
      margin: "0 0 0 " + tokens.spacingL
    }
  }),
  heading1: /*#__PURE__*/emotion.css( /*#__PURE__*/_extends({}, headingCss, {
    fontSize: '1.875rem'
  })),
  heading2: /*#__PURE__*/emotion.css( /*#__PURE__*/_extends({}, headingCss, {
    fontSize: '1.5625rem'
  })),
  heading3: /*#__PURE__*/emotion.css( /*#__PURE__*/_extends({}, headingCss, {
    fontSize: '1.375rem'
  })),
  heading4: /*#__PURE__*/emotion.css( /*#__PURE__*/_extends({}, headingCss, {
    fontSize: '1.25rem'
  })),
  heading5: /*#__PURE__*/emotion.css( /*#__PURE__*/_extends({}, headingCss, {
    fontSize: '1.125rem'
  })),
  heading6: /*#__PURE__*/emotion.css( /*#__PURE__*/_extends({}, headingCss, {
    fontSize: '1rem'
  }))
};
function commonNode (Tag, tagProps) {
  if (tagProps === void 0) {
    tagProps = {};
  }

  var CommonNode = function CommonNode(_ref) {
    var attributes = _ref.attributes,
        children = _ref.children,
        node = _ref.node;
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: styles$1[camelCase(node.type)],
      "data-test-id": node.type
    }, tagProps, attributes), children);
  };

  CommonNode.displayName = Tag + "-node";
  CommonNode.propTypes = NodePropTypes;
  return CommonNode;
}

var newPlugin = function newPlugin(defaultType, tagName, hotkey) {
  return function (_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === void 0 ? defaultType : _ref$type,
        logShortcutAction = _ref.richTextAPI.logShortcutAction;
    return {
      renderNode: function renderNode(props, _editor, next) {
        if (props.node.type === type) {
          return commonNode(tagName)(props);
        }

        return next();
      },
      onKeyDown: function onKeyDown(e, editor, next) {
        if (isHotkey(hotkey, e)) {
          var isActive = applyChange(editor);
          var actionName = isActive ? 'insert' : 'remove';
          logShortcutAction(actionName, {
            nodeType: type
          });
          return;
        }

        if (isHotkey('Backspace', e) && isSelectionInQuote(editor) && !haveTextInSomeBlocks(editor)) {
          editor.unwrapBlock(richTextTypes.BLOCKS.QUOTE)["delete"]();
          return;
        }

        return next();
      }
    };
  };
};

var QuotePlugin = /*#__PURE__*/newPlugin(richTextTypes.BLOCKS.QUOTE, 'blockquote', ['mod+shift+1']);

var Blockquote = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Blockquote, _Component);

  function Blockquote() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Blockquote.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, this.props);
  };

  return Blockquote;
}(React.Component); // TODO: Currently it seems this is the only place using `blockToggleDecorator` but we still
//  have to inject a custom `applyChange`. Seems like we could get rid of blockToggleDecorator.


var Quote = /*#__PURE__*/blockToggleDecorator({
  type: richTextTypes.BLOCKS.QUOTE,
  title: 'Blockquote',
  icon: 'Quote',
  applyChange: applyChange,
  isActive: isSelectionInQuote
})(Blockquote);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

function FetchingWrappedEntryCard(props) {
  var _useEntities = fieldEditorReference.useEntities(),
      loadEntry = _useEntities.loadEntry,
      entries = _useEntities.entries;

  React.useEffect(function () {
    loadEntry(props.entryId);
  }, [props.entryId]);
  var entry = entries[props.entryId];
  React.useEffect(function () {
    if (entry) {
      props.onEntityFetchComplete && props.onEntityFetchComplete();
    }
  }, [entry]);

  if (entry === 'failed') {
    return /*#__PURE__*/React.createElement(fieldEditorReference.MissingEntityCard, {
      entityType: "Entry",
      isDisabled: props.isDisabled,
      onRemove: props.onRemove
    });
  }

  if (entry === undefined) {
    return /*#__PURE__*/React.createElement(forma36ReactComponents.EntryCard, {
      size: "default",
      loading: true
    });
  }

  var contentType = props.sdk.space.getCachedContentTypes().find(function (contentType) {
    return contentType.sys.id === entry.sys.contentType.sys.id;
  });
  return /*#__PURE__*/React.createElement(fieldEditorReference.WrappedEntryCard, {
    getAsset: props.sdk.space.getAsset,
    getEntityScheduledActions: props.sdk.space.getEntityScheduledActions,
    entryUrl: props.getEntryUrl && props.getEntryUrl(entry.sys.id),
    size: "default",
    isSelected: props.isSelected,
    isDisabled: props.isDisabled,
    localeCode: props.locale,
    defaultLocaleCode: props.sdk.locales["default"],
    contentType: contentType,
    entry: entry,
    onEdit: props.onEdit,
    onRemove: props.onRemove,
    isClickable: false
  });
}
FetchingWrappedEntryCard.propTypes = {
  sdk: PropTypes.object.isRequired,
  entryId: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  getEntryUrl: PropTypes.func,
  onEntityFetchComplete: PropTypes.func
};

function FetchingWrappedAssetCard(props) {
  var _useEntities = fieldEditorReference.useEntities(),
      loadAsset = _useEntities.loadAsset,
      assets = _useEntities.assets;

  React.useEffect(function () {
    loadAsset(props.assetId);
  }, [props.assetId]);
  var asset = assets[props.assetId];
  React.useEffect(function () {
    if (asset) {
      props.onEntityFetchComplete && props.onEntityFetchComplete();
    }
  }, [asset]);

  if (asset === 'failed') {
    return /*#__PURE__*/React.createElement(fieldEditorReference.MissingEntityCard, {
      entityType: "Asset",
      isDisabled: props.isDisabled,
      onRemove: props.onRemove
    });
  }

  if (asset === undefined) {
    return /*#__PURE__*/React.createElement(forma36ReactComponents.AssetCard, {
      size: "default",
      isLoading: true,
      title: "",
      src: "",
      href: ""
    });
  }

  return /*#__PURE__*/React.createElement(fieldEditorReference.WrappedAssetCard, {
    getAsset: props.sdk.space.getAsset,
    getEntityScheduledActions: props.sdk.space.getEntityScheduledActions,
    getAssetUrl: props.getAssetUrl,
    size: "default",
    isSelected: props.isSelected,
    isDisabled: props.isDisabled,
    localeCode: props.locale,
    defaultLocaleCode: props.sdk.locales["default"],
    asset: asset,
    onEdit: props.onEdit,
    onRemove: props.onRemove,
    isClickable: false
  });
}
FetchingWrappedAssetCard.propTypes = {
  sdk: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  assetId: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  getAssetUrl: PropTypes.func,
  onEntityFetchComplete: PropTypes.func
};

var LINK_TYPES = {
  URI: 'uri',
  ENTRY: 'Entry',
  ASSET: 'Asset'
};

function isFeaturingEntitySelector(entitySelectorConfigs) {
  if (entitySelectorConfigs === void 0) {
    entitySelectorConfigs = {};
  }

  return !!entitySelectorConfigs.Entry || !!entitySelectorConfigs.Asset;
}

function entityToLink(entity) {
  var _entity$sys = entity.sys,
      id = _entity$sys.id,
      type = _entity$sys.type;
  return {
    sys: {
      id: id,
      type: 'Link',
      linkType: type
    }
  };
}

var HyperlinkDialog = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(HyperlinkDialog, _React$Component);

  function HyperlinkDialog(props) {
    var _entityLinks;

    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleSubmit = function (event) {
      event.preventDefault();

      _this.props.onClose(_this.getValue());
    };

    _this.selectEntry = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var _this$props$entitySel, locale, contentTypes, entry;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props$entitySel = _this.props.entitySelectorConfigs.Entry, locale = _this$props$entitySel.locale, contentTypes = _this$props$entitySel.contentTypes;
              _context.next = 3;
              return _this.props.sdk.dialogs.selectSingleEntry({
                locale: locale,
                contentTypes: contentTypes
              });

            case 3:
              entry = _context.sent;

              _this.setTargetEntity(LINK_TYPES.ENTRY, entry);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.selectAsset = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      var locale, asset;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              locale = _this.props.entitySelectorConfigs.Asset.locale;
              _context2.next = 3;
              return _this.props.sdk.dialogs.selectSingleAsset({
                locale: locale
              });

            case 3:
              asset = _context2.sent;

              _this.setTargetEntity(LINK_TYPES.ASSET, asset);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    var _props$value = props.value,
        text = _props$value.text,
        type = _props$value.type,
        uri = _props$value.uri,
        target = _props$value.target;
    var isEntityLink = Boolean(target);
    var entityLinks = (_entityLinks = {}, _entityLinks[LINK_TYPES.ENTRY] = null, _entityLinks[LINK_TYPES.ASSET] = null, _entityLinks);
    var linkType = type;

    if (isEntityLink) {
      linkType = target.sys.linkType;
      entityLinks[linkType] = target;
    } else if (props.allowedHyperlinkTypes.includes(LINK_TYPES.URI)) {
      linkType = LINK_TYPES.URI;
    } else {
      linkType = props.allowedHyperlinkTypes[0];
    }

    _this.state = {
      text: text,
      uri: uri,
      entityLinks: entityLinks,
      type: linkType
    };
    return _this;
  }

  var _proto = HyperlinkDialog.prototype;

  _proto.setTargetEntity = function setTargetEntity(type, entity) {
    this.setState(function (state) {
      var _extends2;

      return {
        entityLinks: _extends({}, state.entityLinks, (_extends2 = {}, _extends2[type] = entity ? entityToLink(entity) : undefined, _extends2))
      };
    });
  };

  _proto.getValue = function getValue() {
    var _this$state = this.state,
        text = _this$state.text,
        type = _this$state.type,
        uri = _this$state.uri;
    var value = {
      type: type
    };

    if (text) {
      value.text = text;
    }

    if (type === LINK_TYPES.URI) {
      value.uri = uri;
    } else {
      value.target = this.state.entityLinks[type];
    }

    return value;
  };

  _proto.isLinkComplete = function isLinkComplete() {
    var _this$getValue = this.getValue(),
        text = _this$getValue.text,
        type = _this$getValue.type,
        uri = _this$getValue.uri,
        target = _this$getValue.target;

    var requiresText = !this.props.hideText;

    if (requiresText && !text) {
      return false;
    }

    return type === LINK_TYPES.URI && uri || target;
  };

  _proto.render = function render() {
    var _this2 = this;

    var labels = this.props.labels;
    return /*#__PURE__*/React__default.createElement(fieldEditorReference.EntityProvider, {
      sdk: this.props.sdk
    }, /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(forma36ReactComponents.Modal.Content, null, this.renderFields()), /*#__PURE__*/React__default.createElement(forma36ReactComponents.Modal.Controls, null, /*#__PURE__*/React__default.createElement(forma36ReactComponents.Button, {
      type: "submit",
      buttonType: "positive",
      onClick: this.handleSubmit,
      disabled: !this.isLinkComplete(),
      testId: "confirm-cta"
    }, labels.confirm), /*#__PURE__*/React__default.createElement(forma36ReactComponents.Button, {
      type: "button",
      onClick: function onClick() {
        return _this2.props.onClose(null);
      },
      buttonType: "muted",
      testId: "cancel-cta"
    }, "Cancel"))));
  };

  _proto.renderFields = function renderFields() {
    var _this3 = this;

    var _this$props = this.props,
        hideText = _this$props.hideText,
        allowedHyperlinkTypes = _this$props.allowedHyperlinkTypes,
        entitySelectorConfigs = _this$props.entitySelectorConfigs;
    var _this$state2 = this.state,
        uri = _this$state2.uri,
        text = _this$state2.text,
        type = _this$state2.type;
    var isUriInputAutoFocused = type === LINK_TYPES.URI && (hideText || !!text);
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.Form, null, hideText ? null : /*#__PURE__*/React__default.createElement(forma36ReactComponents.TextField, {
      required: true,
      labelText: "Link text",
      value: text || '',
      onChange: function onChange(e) {
        return _this3.setState({
          text: e.target.value
        });
      },
      id: "link-text",
      name: "link-text",
      textInputProps: {
        testId: 'link-text-input',
        autoFocus: !isUriInputAutoFocused
      }
    }), isFeaturingEntitySelector(entitySelectorConfigs) && /*#__PURE__*/React__default.createElement(forma36ReactComponents.SelectField, {
      labelText: "Link type",
      value: type,
      onChange: function onChange(e) {
        return _this3.setState({
          type: e.target.value
        });
      },
      name: "link-type",
      id: "link-type",
      selectProps: {
        testId: 'link-type-select'
      }
    }, allowedHyperlinkTypes.includes(LINK_TYPES.URI) || type === LINK_TYPES.URI ? /*#__PURE__*/React__default.createElement(forma36ReactComponents.Option, {
      value: LINK_TYPES.URI
    }, "URL") : null, allowedHyperlinkTypes.includes(LINK_TYPES.ENTRY) || type === LINK_TYPES.ENTRY ? /*#__PURE__*/React__default.createElement(forma36ReactComponents.Option, {
      value: LINK_TYPES.ENTRY
    }, "Entry") : null, allowedHyperlinkTypes.includes(LINK_TYPES.ASSET) || type === LINK_TYPES.ASSET ? /*#__PURE__*/React__default.createElement(forma36ReactComponents.Option, {
      value: LINK_TYPES.ASSET
    }, "Asset") : null), type === LINK_TYPES.URI ? /*#__PURE__*/React__default.createElement(forma36ReactComponents.TextField, {
      required: true,
      labelText: "Link target",
      value: uri || '',
      textInputProps: {
        placeholder: 'https://',
        testId: 'link-uri-input',
        autoFocus: isUriInputAutoFocused
      },
      helpText: "A protocol may be required, e.g. https://",
      onChange: function onChange(e) {
        return _this3.setState({
          uri: e.target.value
        });
      },
      id: "link-uri",
      name: "link-uri"
    }) : this.renderEntityField());
  };

  _proto.renderEntityField = function renderEntityField() {
    var _this4 = this;

    var _this$state3 = this.state,
        type = _this$state3.type,
        entityLinks = _this$state3.entityLinks;

    var resetEntity = function resetEntity() {
      return _this4.setTargetEntity(type, null);
    };

    var entityLink = entityLinks[type];
    var isEntitySelectorVisible = !entityLink;
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(forma36ReactComponents.FormLabel, {
      required: true,
      htmlFor: ""
    }, "Link target"), !isEntitySelectorVisible && /*#__PURE__*/React__default.createElement(forma36ReactComponents.TextLink, {
      className: emotion.css({
        marginLeft: tokens.spacingS
      }),
      onClick: resetEntity
    }, "Remove selection"), entityLink && /*#__PURE__*/React__default.createElement("div", null, type === LINK_TYPES.ENTRY && /*#__PURE__*/React__default.createElement(FetchingWrappedEntryCard, {
      sdk: this.props.sdk,
      locale: this.props.entitySelectorConfigs.Entry.locale,
      entryId: entityLink.sys.id,
      isDisabled: true,
      isSelected: false
    }), type == LINK_TYPES.ASSET && /*#__PURE__*/React__default.createElement(FetchingWrappedAssetCard, {
      sdk: this.props.sdk,
      locale: this.props.entitySelectorConfigs.Asset.locale,
      assetId: entityLink.sys.id,
      isDisabled: true,
      isSelected: false
    })), isEntitySelectorVisible && this.renderEntitySelector(type, isEntitySelectorVisible));
  };

  _proto.renderEntitySelector = function renderEntitySelector(type) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: emotion.css({
        marginTop: tokens.spacingS
      })
    }, type === LINK_TYPES.ENTRY && /*#__PURE__*/React__default.createElement(forma36ReactComponents.TextLink, {
      onClick: this.selectEntry
    }, "Select entry"), type === LINK_TYPES.ASSET && /*#__PURE__*/React__default.createElement(forma36ReactComponents.TextLink, {
      onClick: this.selectAsset
    }, "Select asset"));
  };

  return HyperlinkDialog;
}(React__default.Component);
HyperlinkDialog.propTypes = {
  sdk: PropTypes.object.isRequired,
  labels: /*#__PURE__*/PropTypes.shape({
    title: PropTypes.string,
    confirm: PropTypes.string
  }),
  value: /*#__PURE__*/PropTypes.shape({
    text: PropTypes.string,
    uri: PropTypes.string,
    target: PropTypes.object,
    // Will be overwritten accordingly if `uri` or `target.sys.linkType` are set.
    type: /*#__PURE__*/PropTypes.oneOf(['uri', 'Entry', 'Asset'])
  }),
  entitySelectorConfigs: PropTypes.object,
  allowedHyperlinkTypes: /*#__PURE__*/PropTypes.arrayOf( /*#__PURE__*/PropTypes.oneOf([LINK_TYPES.ENTRY, LINK_TYPES.ASSET, LINK_TYPES.URI])),
  hideText: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};
HyperlinkDialog.defaultProps = {
  labels: {
    title: 'Insert link',
    confirm: 'Insert link'
  },
  value: {},
  hideText: false,
  entitySelectorConfigs: {},
  allowedHyperlinkTypes: [LINK_TYPES.ENTRY, LINK_TYPES.ASSET, LINK_TYPES.URI]
};
var openHyperlinkDialog = function openHyperlinkDialog(dialogs, _ref3) {
  var value = _ref3.value,
      showTextInput = _ref3.showTextInput,
      allowedHyperlinkTypes = _ref3.allowedHyperlinkTypes,
      entitySelectorConfigs = _ref3.entitySelectorConfigs;
  var isNew = !(value.uri || value.target);
  var props = {
    labels: {
      title: isNew ? 'Insert hyperlink' : 'Edit hyperlink',
      confirm: isNew ? 'Insert' : 'Update'
    },
    value: value,
    hideText: !showTextInput,
    allowedHyperlinkTypes: allowedHyperlinkTypes,
    entitySelectorConfigs: entitySelectorConfigs
  };
  return dialogs.openCurrent({
    title: props.labels.title,
    width: 'large',
    shouldCloseOnEscapePress: true,
    shouldCloseOnOverlayClick: true,
    allowHeightOverflow: true,
    parameters: _extends({
      type: 'rich-text-hyperlink-dialog'
    }, props)
  });
};

/* eslint-disable you-dont-need-lodash-underscore/find */
/**
 * Given a field object and a rich text node type, return a list of valid
 * content type IDs associated with the node type, based on that node type's
 * `linkContentType` validation.
 *
 * If there is no such validation or the validation is empty, return an empty
 * array.
 *
 * The navigation here is explained by the `nodes` validation having signature:
 * { nodes: { [nodeType]: validationObject[] } }
 *
 * We defensively navigate through this object because
 * 1) the field may not have a `validations` array,
 * 2) the `validations` array may be empty,
 * 3) the `validations` array may not have a `nodes` validation,
 * 4) the `nodes` validation may not validate the `nodeType`, and
 * 5) the `nodeType` validations may not have a `linkContentType` validation.
 *
 * Note that passing an empty array will result in all possible content types
 * being whitelisted.
 *
 * @param {object} field
 * @param {string} nodeType
 * @returns {string[]}
 */

var getLinkedContentTypeIdsForNodeType = (function (field, nodeType) {
  return flow(function (v) {
    return find(v, 'nodes');
  }, function (v) {
    return get(v, ['nodes', nodeType]);
  }, function (v) {
    return find(v, 'linkContentType');
  }, function (v) {
    return get(v, 'linkContentType', []);
  })(field.validations);
});

/**
 * Returns a config for the entity selector based on a given rich text field and a
 * rich text node type that the entity should be picked for. Takes the field
 * validations for the given node type into account.
 *
 * @param {object} field
 * @param {string} nodeType
 * @returns {object}
 */

function newEntitySelectorConfigFromRichTextField(field, nodeType) {
  return {
    entityType: getEntityTypeFromRichTextNode(nodeType),
    locale: field.locale || null,
    // Will fall back to default locale.
    contentTypes: getLinkedContentTypeIdsForNodeType(field, nodeType)
  };
}

function getEntityTypeFromRichTextNode(nodeType) {
  var words = nodeType.split('-');

  if (words.indexOf('entry') !== -1) {
    return 'Entry';
  }

  if (words.indexOf('asset') !== -1) {
    return 'Asset';
  }

  throw new Error("RichText node type `" + nodeType + "` has no associated `entityType`");
}

/* eslint-disable you-dont-need-lodash-underscore/find */

var VALIDATIONS = {
  ENABLED_MARKS: 'enabledMarks',
  ENABLED_NODE_TYPES: 'enabledNodeTypes'
};

var getRichTextValidation = function getRichTextValidation(field, validationType) {
  return flow(function (v) {
    return find(v, validationType);
  }, function (v) {
    return get(v, validationType);
  })(field.validations);
};

var isFormattingOptionEnabled = function isFormattingOptionEnabled(field, validationType, nodeTypeOrMark) {
  var enabledFormattings = getRichTextValidation(field, validationType);

  if (enabledFormattings === undefined) {
    return true;
  }

  return enabledFormattings.includes(nodeTypeOrMark);
};
/**
 * Checks if nodeType is enabled in the Rich Text Editor Field
 *
 * @param {FieldInfo} field
 * @param {string} nodeType
 * @returns {boolean}
 */


var isNodeTypeEnabled = function isNodeTypeEnabled(field, nodeType) {
  return isFormattingOptionEnabled(field, VALIDATIONS.ENABLED_NODE_TYPES, nodeType);
};
/**
 * Checks if mark is enabled in the Rich Text Editor Field
 *
 * @param {FieldInfo} field
 * @param {string} mark
 * @returns {boolean}
 */

var isMarkEnabled = function isMarkEnabled(field, mark) {
  return isFormattingOptionEnabled(field, VALIDATIONS.ENABLED_MARKS, mark);
};

var _nodeToHyperlinkType;
var HYPERLINK = richTextTypes.INLINES.HYPERLINK,
    ENTRY_HYPERLINK = richTextTypes.INLINES.ENTRY_HYPERLINK,
    ASSET_HYPERLINK = richTextTypes.INLINES.ASSET_HYPERLINK;
var HYPERLINK_TYPES = [HYPERLINK, ENTRY_HYPERLINK, ASSET_HYPERLINK];
var nodeToHyperlinkType = (_nodeToHyperlinkType = {}, _nodeToHyperlinkType[richTextTypes.INLINES.ENTRY_HYPERLINK] = LINK_TYPES.ENTRY, _nodeToHyperlinkType[richTextTypes.INLINES.ASSET_HYPERLINK] = LINK_TYPES.ASSET, _nodeToHyperlinkType[richTextTypes.INLINES.HYPERLINK] = LINK_TYPES.URI, _nodeToHyperlinkType);

function getAllowedHyperlinkTypes(field) {
  var hyperlinkTypes = [richTextTypes.INLINES.ENTRY_HYPERLINK, richTextTypes.INLINES.ASSET_HYPERLINK, richTextTypes.INLINES.HYPERLINK];

  if (field.type === 'RichText') {
    return hyperlinkTypes.filter(function (nodeType) {
      return isNodeTypeEnabled(field, nodeType);
    }).map(function (nodeType) {
      return nodeToHyperlinkType[nodeType];
    });
  }

  return hyperlinkTypes.map(function (nodeType) {
    return nodeToHyperlinkType[nodeType];
  });
}

function getEntitySelectorConfigs(field) {
  var config = {}; // TODO: Don't pass specific key if CT validation prohibits its type:

  if (isNodeTypeEnabled(field, richTextTypes.INLINES.ENTRY_HYPERLINK)) {
    config.Entry = newEntitySelectorConfigFromRichTextField(field, 'entry-hyperlink');
  }

  if (isNodeTypeEnabled(field, richTextTypes.INLINES.ASSET_HYPERLINK)) {
    config.Asset = newEntitySelectorConfigFromRichTextField(field, 'asset-hyperlink');
  }

  return config;
}
/**
 * Returns whether or not the current value selection would allow for a user
 * edit on a hyperlink.
 *
 * @param {slate.Value} value
 * @returns {boolean}
 */


function mayEditLink(value) {
  return !value.isExpanded && hasHyperlink(value);
}
/**
 * Returns whether the given value has any hyperlink node.
 *
 * @param {slate.Value} value
 * @returns {boolean}
 */

function hasHyperlink(value) {
  return HYPERLINK_TYPES.some(function (type) {
    return haveInlines({
      value: value
    }, type);
  });
}
/**
 * Returns whether the given value has any inline node other than hyperlinks.
 *
 * @param {slate.Value} value
 * @returns {boolean}
 */

function hasOnlyHyperlinkInlines(value) {
  return value.inlines.every(function (inline) {
    return HYPERLINK_TYPES.includes(inline.type);
  });
}
/**
 * Allows the user to insert/remove a link depending on whether the current
 * selection has a link or not. If there is no link, a dialog is shown for
 * the user.
 *
 * @param {slate.Editor} editor Will be mutated with the required operations.
 * @param {Object} sdk
 * @param {function} logAction
 * @returns {Promise<void>}
 */

function toggleLink(_x, _x2, _x3) {
  return _toggleLink.apply(this, arguments);
}

function _toggleLink() {
  _toggleLink = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(editor, sdk, logAction) {
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!hasHyperlink(editor.value)) {
              _context.next = 4;
              break;
            }

            removeLinks(editor, logAction);
            _context.next = 6;
            break;

          case 4:
            _context.next = 6;
            return insertLink(editor, sdk, logAction);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _toggleLink.apply(this, arguments);
}

function insertLink(_x4, _x5, _x6) {
  return _insertLink.apply(this, arguments);
}

function _insertLink() {
  _insertLink = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(change, sdk, logAction) {
    var showTextInput, result, text, linkType, uri, target, data, nodeType;
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            change.blur(); // Ensures modal input auto-focus will work.

            logAction('openCreateHyperlinkDialog');
            showTextInput = !change.value.isExpanded || change.value.fragment.text.trim() === '';
            _context2.next = 5;
            return openHyperlinkDialog(sdk.dialogs, {
              showTextInput: showTextInput,
              value: {
                text: change.value.fragment.text || ''
              },
              allowedHyperlinkTypes: getAllowedHyperlinkTypes(sdk.field),
              entitySelectorConfigs: getEntitySelectorConfigs(sdk.field)
            });

          case 5:
            result = _context2.sent;

            if (result) {
              _context2.next = 10;
              break;
            }

            logAction('cancelCreateHyperlinkDialog');
            change.focus();
            return _context2.abrupt("return");

          case 10:
            text = result.text, linkType = result.type, uri = result.uri, target = result.target;

            if (showTextInput) {
              if (change.isVoid(change.value.blocks.last())) {
                change.insertBlock(richTextTypes.BLOCKS.PARAGRAPH);
              }

              change.insertText(text).moveFocusForward(0 - text.length);
            }

            data = target ? {
              target: target
            } : {
              uri: uri
            };
            change.call(wrapLink, linkType, data);
            nodeType = linkTypeToNodeType(linkType);
            logAction('insert', {
              nodeType: nodeType,
              linkType: linkType
            });
            change.focus();

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _insertLink.apply(this, arguments);
}

function removeLinks(change, logAction) {
  HYPERLINK_TYPES.forEach(function (type) {
    return change.unwrapInline(type);
  });
  change.focus();
  logAction('unlinkHyperlinks');
}
/**
 * Allows the user to edit the first selected link of a given Change by showing
 * a dialog and applying the change.
 *
 * @param {slate.Editor} change Will be mutated with the required operations.
 * @param {Object} sdk
 * @param {function} logAction
 * @returns {Promise<void>}
 */


function editLink(_x7, _x8, _x9) {
  return _editLink.apply(this, arguments);
}

function _editLink() {
  _editLink = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(change, sdk, logAction) {
    var link, _link$data$toJSON, oldUri, oldTarget, result, linkType, uri, target, nodeType, data;

    return runtime_1.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            link = change.value.inlines.get(0);

            if (link) {
              _context3.next = 3;
              break;
            }

            throw new Error('Change object contains no link to be edited.');

          case 3:
            change.blur(); // Ensures modal input auto-focus will work.

            logAction('openEditHyperlinkDialog');
            _link$data$toJSON = link.data.toJSON(), oldUri = _link$data$toJSON.uri, oldTarget = _link$data$toJSON.target;
            _context3.next = 8;
            return openHyperlinkDialog(sdk.dialogs, {
              showTextInput: false,
              value: oldTarget ? {
                target: oldTarget
              } : {
                uri: oldUri
              },
              allowedHyperlinkTypes: getAllowedHyperlinkTypes(sdk.field),
              entitySelectorConfigs: getEntitySelectorConfigs(sdk.field)
            });

          case 8:
            result = _context3.sent;

            if (result) {
              _context3.next = 13;
              break;
            }

            logAction('cancelEditHyperlinkDialog');
            change.focus();
            return _context3.abrupt("return");

          case 13:
            linkType = result.type, uri = result.uri, target = result.target;
            nodeType = linkTypeToNodeType(linkType);
            data = target ? {
              target: target
            } : {
              uri: uri
            };
            change.setInlines({
              type: nodeType,
              data: data
            });
            logAction('edit', {
              nodeType: nodeType,
              linkType: linkType
            });
            change.focus();

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _editLink.apply(this, arguments);
}

function wrapLink(change, linkType, data) {
  change.wrapInline({
    type: linkTypeToNodeType(linkType),
    data: data
  });
  change.moveToEnd();
}

function linkTypeToNodeType(linkType) {
  switch (linkType) {
    case 'Entry':
      return ENTRY_HYPERLINK;

    case 'Asset':
      return ASSET_HYPERLINK;
  }

  return HYPERLINK;
}

var HyperlinkToolbarIcon = /*#__PURE__*/function (_Component) {
  _inheritsLoose(HyperlinkToolbarIcon, _Component);

  function HyperlinkToolbarIcon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleClick = toolbarActionHandlerWithSafeAutoFocus(_assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var _this$props, onToggle, editor, _this$props$richTextA, sdk, logToolbarAction;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, onToggle = _this$props.onToggle, editor = _this$props.editor, _this$props$richTextA = _this$props.richTextAPI, sdk = _this$props$richTextA.sdk, logToolbarAction = _this$props$richTextA.logToolbarAction;
              _context.next = 3;
              return toggleLink(editor, sdk, logToolbarAction);

            case 3:
              onToggle(editor);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return _this;
  }

  var _proto = HyperlinkToolbarIcon.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        editor = _this$props2.editor;
    var isDisabled = disabled || !hasOnlyHyperlinkInlines(editor.value);
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, {
      disabled: isDisabled,
      type: richTextTypes.INLINES.HYPERLINK,
      icon: "Link",
      title: "Hyperlink",
      onToggle: this.handleClick,
      isActive: hasHyperlink(editor.value)
    });
  };

  return HyperlinkToolbarIcon;
}(React.Component);

HyperlinkToolbarIcon.propTypes = TOOLBAR_PLUGIN_PROP_TYPES;

var hyperlinkTooltipStyles = {
  entityContentType: /*#__PURE__*/emotion.css({
    color: tokens.colorTextLightest,
    marginRight: tokens.spacingXs,
    '&:after': {
      content: '""'
    }
  }),
  entityTitle: /*#__PURE__*/emotion.css({
    marginRight: tokens.spacingXs
  }),
  separator: /*#__PURE__*/emotion.css({
    background: tokens.colorTextMid,
    margin: tokens.spacingXs
  })
};
var styles$2 = {
  hyperlinkWrapper: /*#__PURE__*/emotion.css({
    display: 'inline',
    position: 'static',
    a: {
      fontSize: 'inherit !important'
    }
  }),
  hyperlink: /*#__PURE__*/emotion.css({
    fontSize: 'inherit !important',
    display: 'inline !important',
    '&:hover': {
      fill: tokens.textColorDark
    },
    '&:focus': {
      fill: tokens.textColorDark
    }
  }),
  hyperlinkIEFallback: /*#__PURE__*/emotion.css({
    color: '#1683d0',
    textDecoration: 'underline'
  }),
  // TODO: use these styles once we can use the icon
  hyperlinkIcon: /*#__PURE__*/emotion.css({
    position: 'relative',
    top: '4px',
    height: '14px',
    margin: '0 -2px 0 -1px',
    webkitTransition: 'fill 100ms ease-in-out',
    transition: 'fill 100ms ease-in-out',
    '&:hover': {
      fill: tokens.textColorDark
    },
    '&:focus': {
      fill: tokens.textColorDark
    }
  })
};

var browser = /*#__PURE__*/detectBrowser.detect();
var isEdge = !!browser && browser.name === 'ie'; // TODO: Test whether this is still relevant with latest Edge or at least do
//  so after upgrading Slate.js to see if still relevant at all.

var SUPPORTS_NATIVE_SLATE_HYPERLINKS = !isEdge;

function truncate(str, length) {
  if (str && str.length > length) {
    return str && str.substr(0, length + 1) // +1 to look ahead and be replaced below.
    // Get rid of orphan letters but not one letter words (I, a, 2).
    // Try to not have “.” as last character to avoid awkward “....”.
    .replace(/(\s+\S(?=\S)|\s*)\.?.$/, '…');
  } else {
    return str;
  }
}

function fetchAllData(_x) {
  return _fetchAllData.apply(this, arguments);
} // eslint-disable-next-line react/prop-types


function _fetchAllData() {
  _fetchAllData = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(_ref) {
    var sdk, entityId, entityType, localeCode, defaultLocaleCode, contentType, getEntity, entity, contentTypeId, entityTitle, entityDescription, jobs, entityStatus;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sdk = _ref.sdk, entityId = _ref.entityId, entityType = _ref.entityType, localeCode = _ref.localeCode, defaultLocaleCode = _ref.defaultLocaleCode;
            getEntity = entityType === 'Entry' ? sdk.space.getEntry : sdk.space.getAsset;
            _context.next = 4;
            return getEntity(entityId);

          case 4:
            entity = _context.sent;

            if (!entity.sys.contentType) {
              _context.next = 10;
              break;
            }

            contentTypeId = entity.sys.contentType.sys.id;
            _context.next = 9;
            return sdk.space.getContentType(contentTypeId);

          case 9:
            contentType = _context.sent;

          case 10:
            entityTitle = entityType === 'Entry' ? fieldEditorShared.entityHelpers.getEntryTitle({
              entry: entity,
              contentType: contentType,
              localeCode: localeCode,
              defaultLocaleCode: defaultLocaleCode,
              defaultTitle: 'Untitled'
            }) : fieldEditorShared.entityHelpers.getAssetTitle({
              asset: entity,
              localeCode: localeCode,
              defaultLocaleCode: defaultLocaleCode,
              defaultTitle: 'Untitled'
            });
            entityDescription = fieldEditorShared.entityHelpers.getEntityDescription({
              entity: entity,
              contentType: contentType,
              localeCode: localeCode,
              defaultLocaleCode: defaultLocaleCode
            });
            _context.next = 14;
            return sdk.space.getEntityScheduledActions(entityType, entityId);

          case 14:
            jobs = _context.sent;
            entityStatus = fieldEditorShared.entityHelpers.getEntryStatus(entity.sys);
            return _context.abrupt("return", {
              jobs: jobs,
              entity: entity,
              entityTitle: entityTitle,
              entityDescription: entityDescription,
              entityStatus: entityStatus,
              contentTypeName: contentType ? contentType.name : ''
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAllData.apply(this, arguments);
}

function renderEntityInfo(_ref2) {
  var entityTitle = _ref2.entityTitle,
      entityStatus = _ref2.entityStatus,
      contentTypeName = _ref2.contentTypeName;
  var title = truncate(entityTitle, 60) || 'Untitled';
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("span", {
    className: hyperlinkTooltipStyles.entityContentType
  }, contentTypeName || 'Asset'), /*#__PURE__*/React__default.createElement("span", {
    className: hyperlinkTooltipStyles.entityTitle
  }, title), /*#__PURE__*/React__default.createElement(EntityStatusTag, {
    statusLabel: entityStatus
  }));
}

function EntityStatusTag(_ref3) {
  var className = _ref3.className,
      statusLabel = _ref3.statusLabel;
  var tagTypeMap = {
    published: 'positive',
    draft: 'warning',
    archived: 'negative',
    changed: 'primary'
  };
  return /*#__PURE__*/React__default.createElement(forma36ReactComponents.Tag, {
    className: className,
    tagType: tagTypeMap[statusLabel]
  }, statusLabel);
}

EntityStatusTag.propTypes = {
  className: PropTypes.string,
  statusLabel: PropTypes.string.isRequired
};
function EntityHyperlinkTooltip(props) {
  var sdk = props.richTextAPI.sdk;
  var target = props.target;

  var _React$useState = React__default.useState({
    type: 'loading'
  }),
      requestStatus = _React$useState[0],
      setRequestStatus = _React$useState[1];

  React__default.useEffect(function () {
    fetchAllData({
      sdk: sdk,
      entityId: target.sys.id,
      entityType: target.sys.linkType,
      localeCode: sdk.field.locale,
      defaultLocaleCode: sdk.locales["default"]
    }).then(function (entityInfo) {
      setRequestStatus({
        type: 'success',
        data: entityInfo
      });
    })["catch"](function (e) {
      console.log(e);
      setRequestStatus({
        type: 'error',
        error: e
      });
    });
  }, []); // eslint-disable-line

  if (requestStatus.type === 'loading') {
    return "Loading " + target.sys.linkType.toLowerCase() + "...";
  }

  var tooltip = '';

  if (requestStatus.type === 'error') {
    tooltip = target.sys.linkType + " missing or inaccessible";
  } else {
    var _requestStatus$data = requestStatus.data,
        jobs = _requestStatus$data.jobs,
        entityInfo = _objectWithoutPropertiesLoose(_requestStatus$data, ["jobs"]);

    tooltip = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, renderEntityInfo(entityInfo), jobs.length > 0 ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("hr", {
      className: hyperlinkTooltipStyles.separator
    }), /*#__PURE__*/React__default.createElement(fieldEditorReference.ScheduleTooltipContent, {
      job: jobs[0],
      jobsCount: jobs.length
    })) : null);
  }

  return tooltip;
}

var Hyperlink = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Hyperlink, _React$Component);

  function Hyperlink() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Hyperlink.prototype;

  _proto.onKeyDown = function onKeyDown(e) {
    if (isHotkey('enter', e)) {
      e.preventDefault();
      e.stopPropagation(); // Ensure Slate doesn't interpret as new paragraph.

      this.props.onEdit(e);
    }
  };

  _proto.render = function render() {
    var _this = this;

    var node = this.props.node;
    var uri = node.data.get('uri');
    var target = node.data.get('target');
    return /*#__PURE__*/React__default.createElement("span", _extends({}, this.props.attributes, {
      onClick: this.props.onEdit,
      onKeyDown: function onKeyDown(e) {
        return _this.onKeyDown(e);
      },
      role: "button",
      tabIndex: 0
    }), target ? this.renderEntityLink(target) : this.renderLink({
      tooltip: uri
    })) // TODO: Add contentEditable={false} to tooltip to fix text cursor bug
    ;
  };

  _proto.renderLink = function renderLink(_ref) {
    var tooltip = _ref.tooltip;
    var _this$props = this.props,
        children = _this$props.children,
        node = _this$props.node;
    var title = node.data.get('title');
    var uri = node.data.get('uri');
    var href = isUrl(uri) ? uri : 'javascript:void(0)';
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.Tooltip, {
      content: tooltip,
      className: styles$2.tooltipContainer,
      targetWrapperClassName: styles$2.hyperlinkWrapper,
      place: "bottom",
      maxWidth: "auto"
    }, SUPPORTS_NATIVE_SLATE_HYPERLINKS ? /*#__PURE__*/React__default.createElement(forma36ReactComponents.TextLink, {
      href: href // Allows user to open uri link in new tab.
      ,
      rel: "noopener noreferrer",
      title: title,
      className: styles$2.hyperlink
    }, children) : /*#__PURE__*/React__default.createElement("span", {
      className: emotion.cx(styles$2.hyperlink, styles$2.hyperlinkIEFallback)
    }, children));
  };

  _proto.renderEntityLink = function renderEntityLink(target) {
    var tooltip = /*#__PURE__*/React__default.createElement(EntityHyperlinkTooltip, {
      richTextAPI: this.props.richTextAPI,
      target: target
    });
    return this.renderLink({
      tooltip: tooltip
    });
  };

  return Hyperlink;
}(React__default.Component);

Hyperlink.propTypes = {
  attributes: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired,
  children: PropTypes.node,
  editor: PropTypes.object,
  richTextAPI: PropTypes.object.isRequired,
  onEdit: PropTypes.func
};
Hyperlink.defaultProps = {
  onEdit: noop
};

function isUrl(string) {
  return /^(?:[a-z]+:)?\/\//i.test(string) || /^mailto:/i.test(string);
}

var HYPERLINK$1 = richTextTypes.INLINES.HYPERLINK,
    ENTRY_HYPERLINK$1 = richTextTypes.INLINES.ENTRY_HYPERLINK,
    ASSET_HYPERLINK$1 = richTextTypes.INLINES.ASSET_HYPERLINK;
var HyperlinkPlugin = function HyperlinkPlugin(_ref) {
  var richTextAPI = _ref.richTextAPI;
  return {
    renderNode: function renderNode(props, _editor, next) {
      var sdk = richTextAPI.sdk,
          logViewportAction = richTextAPI.logViewportAction;
      var node = props.node,
          editor = props.editor;

      if (isHyperlink(node.type)) {
        return /*#__PURE__*/React__default.createElement(Hyperlink, _extends({}, props, {
          richTextAPI: richTextAPI,
          onEdit: function onEdit(event) {
            event.preventDefault(); // Don't follow `href`

            editor.moveToRangeOfNode(node).focus();

            if (mayEditLink(editor.value)) {
              editLink(editor, sdk, logViewportAction);
            }
          }
        }));
      }

      return next();
    },
    onKeyDown: function onKeyDown(event, editor, next) {
      var sdk = richTextAPI.sdk,
          logShortcutAction = richTextAPI.logShortcutAction;
      var hotkey = ['mod+k'];

      if (isHotkey(hotkey, event) && hasOnlyHyperlinkInlines(editor.value)) {
        if (mayEditLink(editor.value)) {
          editLink(editor, sdk, logShortcutAction);
        } else {
          toggleLink(editor, sdk, logShortcutAction);
        }

        return;
      }

      return next();
    },
    normalizeNode: function normalizeNode(node, editor, next) {
      if (isHyperlink(node.type) && node.getInlines().size > 0) {
        return function () {
          node.getInlines().forEach(function (inlineNode) {
            return editor.unwrapInlineByKey(inlineNode.key, node.type);
          });
        };
      }

      next();
    }
  };
};

function isHyperlink(type) {
  return [HYPERLINK$1, ENTRY_HYPERLINK$1, ASSET_HYPERLINK$1].includes(type);
}

var SubscriptPlugin = function SubscriptPlugin(_ref) {
  var richTextAPI = _ref.richTextAPI;
  return markPlugin({
    type: richTextTypes.MARKS.SUBSCRIPT,
    tagName: 'sub',
    hotkey: ['mod+~'],
    richTextAPI: richTextAPI
  });
};

var Subscript = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Subscript, _Component);

  function Subscript() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Subscript.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, this.props);
  };

  return Subscript;
}(React.Component);

var Subscript$1 = /*#__PURE__*/markToggleDecorator({
  type: richTextTypes.MARKS.SUBSCRIPT,
  title: 'Subscript',
  icon: 'ArrowDown'
})(Subscript);

var SuperscriptPlugin = function SuperscriptPlugin(_ref) {
  var richTextAPI = _ref.richTextAPI;
  return markPlugin({
    type: richTextTypes.MARKS.SUPERSCRIPT,
    tagName: 'sup',
    hotkey: ['mod+^'],
    richTextAPI: richTextAPI
  });
};

var Superscript = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Superscript, _Component);

  function Superscript() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Superscript.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, this.props);
  };

  return Superscript;
}(React.Component);

var Superscript$1 = /*#__PURE__*/markToggleDecorator({
  type: richTextTypes.MARKS.SUPERSCRIPT,
  title: 'Superscript',
  icon: 'ArrowUp'
})(Superscript);

var styles$3 = {
  root: /*#__PURE__*/emotion.css({
    button: {
      span: {
        fontWeight: tokens.fontWeightDemiBold
      }
    }
  }),
  h1: /*#__PURE__*/emotion.css({
    button: {
      span: {
        fontSize: '1.625rem'
      }
    }
  }),
  h2: /*#__PURE__*/emotion.css({
    button: {
      span: {
        fontSize: '1.4375rem'
      }
    }
  }),
  h3: /*#__PURE__*/emotion.css({
    button: {
      span: {
        fontSize: '1.25rem'
      }
    }
  }),
  h4: /*#__PURE__*/emotion.css({
    button: {
      span: {
        fontSize: '1.125rem'
      }
    }
  }),
  h5: /*#__PURE__*/emotion.css({
    button: {
      span: {
        fontSize: '1rem'
      }
    }
  }),
  h6: /*#__PURE__*/emotion.css({
    button: {
      span: {
        fontSize: '0.875rem'
      }
    }
  })
}; // Necessary because we can't use kebab-case for style identifiers.

var getStyleForType = function getStyleForType(type) {
  return type.replace('heading-', 'h');
};

var ToolbarDropdownListItem = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ToolbarDropdownListItem, _Component);

  function ToolbarDropdownListItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      /*
        We're using the mousedown event rather than onclick because onclick will
        steal the focus.
      */
      event.preventDefault();

      _this.props.onToggle(event);
    };

    return _this;
  }

  var _proto = ToolbarDropdownListItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        isActive = _this$props.isActive,
        title = _this$props.title,
        type = _this$props.type,
        children = _this$props.children;
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.DropdownListItem, {
      label: title,
      isActive: isActive,
      "data-test-id": "toolbar-toggle-" + type,
      className: emotion.cx(styles$3.root, styles$3[getStyleForType(type)]),
      onClick: this.handleClick
    }, children);
  };

  return ToolbarDropdownListItem;
}(React.Component);

ToolbarDropdownListItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node
};

var blockSelectDecorator = (function (_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      _ref$applyChange = _ref.applyChange,
      applyChange = _ref$applyChange === void 0 ? function (editor, type) {
    return editor.setBlocks(type);
  } : _ref$applyChange;
  return function (Block) {
    var _class, _temp;

    return _temp = _class = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(BlockSelectDecorator, _React$Component);

      function BlockSelectDecorator() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.handleSelect = toolbarActionHandlerWithSafeAutoFocus(_assertThisInitialized(_this), function () {
          var _this$props = _this.props,
              editor = _this$props.editor,
              onToggle = _this$props.onToggle,
              logToolbarAction = _this$props.richTextAPI.logToolbarAction;
          applyChange(editor, type);
          onToggle(editor);
          logToolbarAction('insert', {
            nodeType: type
          });
        });
        return _this;
      }

      var _proto = BlockSelectDecorator.prototype;

      _proto.render = function render() {
        var _this$props2 = this.props,
            editor = _this$props2.editor,
            disabled = _this$props2.disabled;
        return /*#__PURE__*/React.createElement(Block, {
          type: type,
          icon: icon,
          title: title,
          onToggle: this.handleSelect,
          isActive: haveBlocks(editor, type),
          disabled: disabled
        });
      };

      return BlockSelectDecorator;
    }(React.Component), _class.propTypes = TOOLBAR_PLUGIN_PROP_TYPES, _temp;
  };
});

var _css, _blockTitles;
var styles$4 = {
  root: /*#__PURE__*/emotion.css((_css = {
    width: '110px'
  }, _css["@media (min-width: " + tokens.contentWidthDefault + ")"] = {
    width: '145px'
  }, _css.svg = {
    marginLeft: 'auto'
  }, _css['> span'] = {
    padding: '0 2px!important'
  }, _css))
};
var blockTitles = (_blockTitles = {}, _blockTitles[richTextTypes.BLOCKS.HEADING_1] = 'Heading 1', _blockTitles[richTextTypes.BLOCKS.HEADING_2] = 'Heading 2', _blockTitles[richTextTypes.BLOCKS.HEADING_3] = 'Heading 3', _blockTitles[richTextTypes.BLOCKS.HEADING_4] = 'Heading 4', _blockTitles[richTextTypes.BLOCKS.HEADING_5] = 'Heading 5', _blockTitles[richTextTypes.BLOCKS.HEADING_6] = 'Heading 6', _blockTitles[richTextTypes.BLOCKS.PARAGRAPH] = 'Normal Text', _blockTitles[richTextTypes.BLOCKS.EMBEDDED_ENTRY] = 'Embedded Entry', _blockTitles[richTextTypes.BLOCKS.EMBEDDED_ASSET] = 'Embedded Asset', _blockTitles);

var HeadingDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(HeadingDropdown, _Component);

  function HeadingDropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.getStyleNameForChange = function () {
      return blockTitles[_this.props.currentBlockType] || blockTitles[richTextTypes.BLOCKS.PARAGRAPH];
    };

    return _this;
  }

  var _proto = HeadingDropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onToggle = _this$props.onToggle,
        isOpen = _this$props.isOpen,
        onClose = _this$props.onClose,
        children = _this$props.children;
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.Dropdown, {
      toggleElement: /*#__PURE__*/React__default.createElement(forma36ReactComponents.Button, {
        onClick: onToggle,
        "data-test-id": "toolbar-heading-toggle",
        className: styles$4.root,
        indicateDropdown: true,
        buttonType: "naked",
        size: "small",
        disabled: this.props.disabled
      }, this.getStyleNameForChange()),
      isOpen: isOpen,
      onClose: onClose
    }, /*#__PURE__*/React__default.createElement(forma36ReactComponents.DropdownList, {
      className: "toolbar-heading-dropdown-list"
    }, children));
  };

  return HeadingDropdown;
}(React.Component);

HeadingDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  onToggle: PropTypes.func,
  currentBlockType: PropTypes.string
};

function newHeadingDropdownItem(nodeType) {
  var title = blockTitles[nodeType];

  var Heading = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Heading, _Component);

    function Heading() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = Heading.prototype;

    _proto.render = function render() {
      return /*#__PURE__*/React__default.createElement(ToolbarDropdownListItem, _extends({}, this.props, {
        "data-test-id": nodeType
      }), title);
    };

    return Heading;
  }(React.Component);

  Heading.displayName = title.replace(/\s/g, '');
  return blockSelectDecorator({
    type: nodeType,
    title: title
  })(Heading);
}

var Paragraph = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Paragraph, _Component);

  function Paragraph() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Paragraph.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarDropdownListItem, this.props, blockTitles[richTextTypes.BLOCKS.PARAGRAPH]);
  };

  return Paragraph;
}(React.Component);

var Paragraph$1 = /*#__PURE__*/blockSelectDecorator({
  type: richTextTypes.BLOCKS.PARAGRAPH,
  title: blockTitles[richTextTypes.BLOCKS.PARAGRAPH],
  shouldToggle: false
})(Paragraph);

var newPlugin$1 = function newPlugin(defaultType, tagName, hotkey) {
  return function (_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === void 0 ? defaultType : _ref$type,
        richTextAPI = _ref.richTextAPI;
    return {
      renderNode: function renderNode(props, _editor, next) {
        if (props.node.type === type) {
          return commonNode(tagName, {})(props);
        }

        return next();
      },
      onKeyDown: function onKeyDown(e, editor, next) {
        if (isHotkey('enter', e)) {
          var currentBlock = editor.value.blocks.get(0);

          if (currentBlock.type === type) {
            var value = editor.value;

            if (value.selection.start.offset === 0) {
              var initialRange = value.selection;
              editor.splitBlock().setBlocksAtRange(initialRange, richTextTypes.BLOCKS.PARAGRAPH);
            } else {
              editor.splitBlock().setBlocks(richTextTypes.BLOCKS.PARAGRAPH);
            }

            return;
          }
        } else if (isHotkey(hotkey, e)) {
          var isActive = toggleChange(editor, type);
          var actionName = isActive ? 'insert' : 'remove';
          richTextAPI.logShortcutAction(actionName, {
            nodeType: type
          });
          return;
        }

        return next();
      }
    };
  };
}; // TODO: move hotkeys to components


var Heading1Plugin = /*#__PURE__*/newPlugin$1(richTextTypes.BLOCKS.HEADING_1, 'h1', ['mod+opt+1']);
var Heading2Plugin = /*#__PURE__*/newPlugin$1(richTextTypes.BLOCKS.HEADING_2, 'h2', ['mod+opt+2']);
var Heading3Plugin = /*#__PURE__*/newPlugin$1(richTextTypes.BLOCKS.HEADING_3, 'h3', ['mod+opt+3']);
var Heading4Plugin = /*#__PURE__*/newPlugin$1(richTextTypes.BLOCKS.HEADING_4, 'h4', ['mod+opt+4']);
var Heading5Plugin = /*#__PURE__*/newPlugin$1(richTextTypes.BLOCKS.HEADING_5, 'h5', ['mod+opt+5']);
var Heading6Plugin = /*#__PURE__*/newPlugin$1(richTextTypes.BLOCKS.HEADING_6, 'h6', ['mod+opt+6']);
var Heading1 = /*#__PURE__*/newHeadingDropdownItem(richTextTypes.BLOCKS.HEADING_1);
var Heading2 = /*#__PURE__*/newHeadingDropdownItem(richTextTypes.BLOCKS.HEADING_2);
var Heading3 = /*#__PURE__*/newHeadingDropdownItem(richTextTypes.BLOCKS.HEADING_3);
var Heading4 = /*#__PURE__*/newHeadingDropdownItem(richTextTypes.BLOCKS.HEADING_4);
var Heading5 = /*#__PURE__*/newHeadingDropdownItem(richTextTypes.BLOCKS.HEADING_5);
var Heading6 = /*#__PURE__*/newHeadingDropdownItem(richTextTypes.BLOCKS.HEADING_6);

function NewLinePlugin () {
  return {
    onKeyDown: function onKeyDown(event, editor, next) {
      if (isHotkey('shift+enter', event)) {
        editor.insertText('\n');
        return;
      }

      return next();
    }
  };
}

var plugin = function plugin(type, tagName, tagProps, hotkey) {
  return {
    renderNode: function renderNode(props, _editor, next) {
      if (props.node.type === type) {
        return commonNode(tagName, tagProps)(props);
      }

      return next();
    },
    onKeyDown: function onKeyDown(e, editor, next) {
      if (isHotkey(hotkey, e)) {
        editor.call(toggleChange, type);
        return;
      }

      return next();
    }
  };
}; // TODO: move hotkeys to components


var ParagraphPlugin = function ParagraphPlugin(type) {
  if (type === void 0) {
    type = richTextTypes.BLOCKS.PARAGRAPH;
  }

  return (// Can't use <p/> as for e.g. links we need to show a tooltip inside.
    plugin(type, 'div', {}, ['mod+opt+0'])
  );
};

/**
 * Returns whether given value has a block of the given type.
 * @param {slate.Editor} editor
 * @param {string} type
 * @returns {boolean}
 */

var hasBlockOfType = function hasBlockOfType(editor, type) {
  var blocks = editor.value.blocks;
  return blocks.get(0).type === type;
};
/**
 * Invokes entity selector modal and inserts block embed.
 * @param {string} nodeType
 * @param {import('@contentful/field-editor-reference/dist/types').FieldExtensionSDK} sdk
 * @param {slate.Editor} editor
 * @param {function} logAction
 */

function selectEntityAndInsert(_x, _x2, _x3, _x4) {
  return _selectEntityAndInsert.apply(this, arguments);
}

function _selectEntityAndInsert() {
  _selectEntityAndInsert = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(nodeType, sdk, editor, logAction) {
    var field, dialogs, baseConfig, selectEntity, config, entity;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logAction('openCreateEmbedDialog', {
              nodeType: nodeType
            });
            field = sdk.field, dialogs = sdk.dialogs;
            baseConfig = newEntitySelectorConfigFromRichTextField(field, nodeType);
            selectEntity = baseConfig.entityType === 'Asset' ? dialogs.selectSingleAsset : dialogs.selectSingleEntry;
            config = _extends({}, baseConfig, {
              withCreate: true
            });
            _context.prev = 5;
            _context.next = 8;
            return selectEntity(config);

          case 8:
            entity = _context.sent;

            if (entity) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return");

          case 11:
            insertBlock(editor, nodeType, entity);
            logAction('insert', {
              nodeType: nodeType
            });
            _context.next = 22;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](5);

            if (!_context.t0) {
              _context.next = 21;
              break;
            }

            throw _context.t0;

          case 21:
            logAction('cancelCreateEmbedDialog', {
              nodeType: nodeType
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 15]]);
  }));
  return _selectEntityAndInsert.apply(this, arguments);
}

var createNode = function createNode(nodeType, entity) {
  return {
    type: nodeType,
    object: 'block',
    data: {
      target: {
        sys: {
          id: entity.sys.id,
          type: 'Link',
          linkType: entity.sys.type
        }
      }
    }
  };
};
function insertBlock(editor, nodeType, entity, focusNextLine) {
  if (focusNextLine === void 0) {
    focusNextLine = true;
  }

  var linkedEntityBlock = createNode(nodeType, entity);

  if (editor.value.blocks.size === 0 || haveTextInSomeBlocks(editor)) {
    editor.insertBlock(linkedEntityBlock);
  } else {
    editor.setBlocks(linkedEntityBlock);
  }

  if (focusNextLine) {
    editor.insertBlock(richTextTypes.BLOCKS.PARAGRAPH).focus();
  }
}

var EntityLinkToolbarIcon = /*#__PURE__*/function (_Component) {
  _inheritsLoose(EntityLinkToolbarIcon, _Component);

  function EntityLinkToolbarIcon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      _this.props.onCloseEmbedMenu();

      _this.handleAction(e);
    };

    _this.handleAction = toolbarActionHandlerWithSafeAutoFocus(_assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var _this$props, editor, nodeType, _this$props$richTextA, sdk, logToolbarAction;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, editor = _this$props.editor, nodeType = _this$props.nodeType, _this$props$richTextA = _this$props.richTextAPI, sdk = _this$props$richTextA.sdk, logToolbarAction = _this$props$richTextA.logToolbarAction;
              _context.next = 3;
              return selectEntityAndInsert(nodeType, sdk, editor, logToolbarAction);

            case 3:
              _this.props.onToggle(editor);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return _this;
  }

  var _proto = EntityLinkToolbarIcon.prototype;

  _proto.render = function render() {
    var nodeType = this.props.nodeType;
    var type = getEntityTypeFromNodeType(nodeType);
    var baseClass = "rich-text__" + nodeType;
    return this.props.isButton ? /*#__PURE__*/React__default.createElement(forma36ReactComponents.Button, {
      disabled: this.props.disabled,
      className: baseClass + "-button",
      size: "small",
      onClick: this.handleClick,
      icon: type === 'Asset' ? 'Asset' : 'EmbeddedEntryBlock',
      buttonType: "muted",
      testId: "toolbar-toggle-" + nodeType
    }, "Embed " + type.toLowerCase()) : /*#__PURE__*/React__default.createElement(forma36ReactComponents.DropdownListItem, {
      isDisabled: this.props.disabled,
      className: baseClass + "-list-item",
      size: "small",
      onClick: this.handleClick,
      testId: "toolbar-toggle-" + nodeType
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "cf-flex-grid"
    }, /*#__PURE__*/React__default.createElement(forma36ReactComponents.Icon, {
      icon: type === 'Asset' ? 'Asset' : 'EmbeddedEntryBlock',
      className: "rich-text__embedded-entry-list-icon",
      color: "secondary"
    }), type));
  };

  return EntityLinkToolbarIcon;
}(React.Component);
/**
 * Returns the entity type depending on the given node type.
 * @param {string} nodeType
 * @returns {string}
 */


EntityLinkToolbarIcon.propTypes = /*#__PURE__*/_extends({}, TOOLBAR_PLUGIN_PROP_TYPES, {
  isButton: PropTypes.bool
});
EntityLinkToolbarIcon.defaultProps = {
  isButton: false
};

function getEntityTypeFromNodeType(nodeType) {
  var words = nodeType.toLowerCase().split('-');

  if (words.includes('entry')) {
    return 'Entry';
  }

  if (words.includes('asset')) {
    return 'Asset';
  }

  throw new Error("Node type `" + nodeType + "` has no associated `entityType`");
}

var styles$5 = {
  root: /*#__PURE__*/emotion.css({
    marginBottom: '1.25rem'
  })
};

var LinkedEntityBlock = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(LinkedEntityBlock, _React$Component);

  function LinkedEntityBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEditClick = function () {
      var _this$getEntitySys = _this.getEntitySys(),
          type = _this$getEntitySys.type,
          id = _this$getEntitySys.id;

      var navigator = _this.props.sdk.navigator;
      var openEntity = type === 'Asset' ? navigator.openAsset : navigator.openEntry;
      return openEntity(id, {
        slideIn: true
      });
    };

    _this.handleRemoveClick = function () {
      var _this$props = _this.props,
          editor = _this$props.editor,
          node = _this$props.node;
      editor.moveToRangeOfNode(node);
      editor.removeNodeByKey(node.key);
      editor.focus(); // Click on "x" might have removed focus.
    };

    return _this;
  }

  var _proto = LinkedEntityBlock.prototype;

  _proto.getEntitySys = function getEntitySys() {
    var data = this.props.node.data;
    return {
      id: data.get('target').sys.id,
      type: data.get('target').sys.linkType
    };
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        sdk = _this$props2.sdk,
        editor = _this$props2.editor,
        isSelected = _this$props2.isSelected;
    var isDisabled = editor.props.readOnly || editor.props.actionsDisabled;

    var _this$getEntitySys2 = this.getEntitySys(),
        entityId = _this$getEntitySys2.id,
        entityType = _this$getEntitySys2.type;

    return /*#__PURE__*/React__default.createElement("div", _extends({}, this.props.attributes, {
      className: styles$5.root
    }), entityType === 'Entry' && /*#__PURE__*/React__default.createElement(FetchingWrappedEntryCard, {
      sdk: sdk,
      entryId: entityId,
      locale: sdk.field.locale,
      isDisabled: isDisabled,
      isSelected: isSelected,
      onRemove: this.handleRemoveClick,
      onEdit: this.handleEditClick,
      getEntryUrl: function getEntryUrl() {
        var getEntryUrl = sdk.parameters.instance.getEntryUrl;
        return typeof getEntryUrl === 'function' ? getEntryUrl(entityId) : '';
      },
      onEntityFetchComplete: this.props.onEntityFetchComplete
    }), entityType === 'Asset' && /*#__PURE__*/React__default.createElement(FetchingWrappedAssetCard, {
      sdk: sdk,
      assetId: entityId,
      locale: sdk.field.locale,
      isDisabled: isDisabled,
      isSelected: isSelected,
      onRemove: this.handleRemoveClick,
      onEdit: this.handleEditClick,
      getAssetUrl: function getAssetUrl() {
        var getAssetUrl = sdk.parameters.instance.getAssetUrl;
        return typeof getAssetUrl === 'function' ? getAssetUrl(entityId) : '';
      },
      onEntityFetchComplete: this.props.onEntityFetchComplete
    }));
  };

  return LinkedEntityBlock;
}(React__default.Component);

LinkedEntityBlock.propTypes = {
  sdk: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  attributes: PropTypes.object.isRequired,
  editor: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired,
  onEntityFetchComplete: PropTypes.func.isRequired
};

var EmbeddedEntityBlockPlugin = function EmbeddedEntityBlockPlugin(_ref) {
  var _ref$richTextAPI = _ref.richTextAPI,
      sdk = _ref$richTextAPI.sdk,
      logShortcutAction = _ref$richTextAPI.logShortcutAction,
      logViewportAction = _ref$richTextAPI.logViewportAction,
      nodeType = _ref.nodeType,
      hotkey = _ref.hotkey;
  return {
    renderNode: function renderNode(props, _editor, next) {
      var node = props.node,
          attributes = props.attributes,
          key = props.key;

      if (node.type === nodeType) {
        return /*#__PURE__*/React__default.createElement(LinkedEntityBlock, _extends({
          sdk: sdk
        }, props, attributes, {
          onEntityFetchComplete: function onEntityFetchComplete() {
            logViewportAction('linkRendered', {
              key: key
            });
          }
        }));
      }

      return next();
    },
    onKeyDown: function onKeyDown(e, editor, next) {
      if (hotkey && isHotkey(hotkey, e)) {
        selectEntityAndInsert(nodeType, sdk, editor, logShortcutAction);
        return;
      }

      if (isHotkey('enter', e) && hasBlockOfType(editor, nodeType)) {
        editor.insertBlock(richTextTypes.BLOCKS.PARAGRAPH).focus();
        return;
      }

      return next();
    }
  };
};
var EmbeddedEntryBlockPlugin = function EmbeddedEntryBlockPlugin(_ref2) {
  var richTextAPI = _ref2.richTextAPI;
  return EmbeddedEntityBlockPlugin({
    richTextAPI: richTextAPI,
    nodeType: richTextTypes.BLOCKS.EMBEDDED_ENTRY,
    hotkey: ['mod+shift+e']
  });
};
var EmbeddedAssetBlockPlugin = function EmbeddedAssetBlockPlugin(_ref3) {
  var richTextAPI = _ref3.richTextAPI;
  return EmbeddedEntityBlockPlugin({
    richTextAPI: richTextAPI,
    nodeType: richTextTypes.BLOCKS.EMBEDDED_ASSET,
    hotkey: ['mod+shift+a']
  });
};

var createInlineNode = function createInlineNode(id) {
  return {
    type: richTextTypes.INLINES.EMBEDDED_ENTRY,
    object: 'inline',
    data: {
      target: {
        sys: {
          id: id,
          type: 'Link',
          linkType: 'Entry'
        }
      }
    }
  };
};

var insertInline = function insertInline(editor, entryId, focusNextLine) {
  if (focusNextLine === void 0) {
    focusNextLine = true;
  }

  if (haveInlines(editor, richTextTypes.INLINES.EMBEDDED_ENTRY)) {
    editor.setInlines(createInlineNode(entryId));
  } else {
    editor.insertInline(createInlineNode(entryId));
  }

  focusNextLine ? editor.moveToStartOfNextText().focus() : null;
};
var hasOnlyInlineEntryInSelection = function hasOnlyInlineEntryInSelection(editor) {
  var inlines = editor.value.inlines;
  var selection = editor.value.selection;

  if (inlines.size === 1 && selection.start.key === selection.end.key) {
    return inlines.get(0).type === richTextTypes.INLINES.EMBEDDED_ENTRY;
  }
};
/**
 * Invokes entity selector modal and inserts inline embed.
 * @param {import('@contentful/field-editor-reference/dist/types').FieldExtensionSDK} sdk
 * @param {slate.Editor} editor
 * @param {function} logAction
 */

var selectEntryAndInsert = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(sdk, editor, logAction) {
    var nodeType, field, dialogs, baseConfig, config, entry;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nodeType = richTextTypes.INLINES.EMBEDDED_ENTRY;
            logAction('openCreateEmbedDialog', {
              nodeType: nodeType
            });
            field = sdk.field, dialogs = sdk.dialogs;
            baseConfig = newEntitySelectorConfigFromRichTextField(field, nodeType);
            config = _extends({}, baseConfig, {
              withCreate: true
            });
            _context.prev = 5;
            _context.next = 8;
            return dialogs.selectSingleEntry(config);

          case 8:
            entry = _context.sent;

            if (entry) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return");

          case 11:
            insertInline(editor, entry.sys.id);
            logAction('insert', {
              nodeType: nodeType
            });
            _context.next = 22;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](5);

            if (!_context.t0) {
              _context.next = 21;
              break;
            }

            throw _context.t0;

          case 21:
            logAction('cancelCreateEmbedDialog', {
              nodeType: nodeType
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 15]]);
  }));

  return function selectEntryAndInsert(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var canInsertInline = function canInsertInline(editor) {
  return !haveAnyInlines(editor) || haveEveryInlineOfType(editor, richTextTypes.INLINES.EMBEDDED_ENTRY);
};

var EntryLinkToolbarIcon = /*#__PURE__*/function (_Component) {
  _inheritsLoose(EntryLinkToolbarIcon, _Component);

  function EntryLinkToolbarIcon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      _this.props.onCloseEmbedMenu();

      _this.handleAction(e);
    };

    _this.handleAction = toolbarActionHandlerWithSafeAutoFocus(_assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var _this$props, editor, _this$props$richTextA, sdk, logToolbarAction;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, editor = _this$props.editor, _this$props$richTextA = _this$props.richTextAPI, sdk = _this$props$richTextA.sdk, logToolbarAction = _this$props$richTextA.logToolbarAction;
              _context.next = 3;
              return selectEntryAndInsert(sdk, editor, logToolbarAction);

            case 3:
              _this.props.onToggle(editor);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return _this;
  }

  var _proto = EntryLinkToolbarIcon.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return this.props.isButton ? /*#__PURE__*/React__default.createElement(forma36ReactComponents.Button, {
      disabled: this.props.disabled,
      className: richTextTypes.INLINES.EMBEDDED_ENTRY + "-button",
      size: "small",
      onClick: function onClick(event) {
        return _this2.handleClick(event);
      },
      icon: "EmbeddedEntryInline",
      buttonType: "muted",
      testId: "toolbar-toggle-" + richTextTypes.INLINES.EMBEDDED_ENTRY
    }, "Embed inline entry") : /*#__PURE__*/React__default.createElement(forma36ReactComponents.DropdownListItem, {
      isDisabled: this.props.disabled || !canInsertInline(this.props.editor),
      className: "rich-text__entry-link-block-button",
      size: "small",
      icon: "Entry",
      testId: "toolbar-toggle-" + richTextTypes.INLINES.EMBEDDED_ENTRY,
      onClick: this.handleClick
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "cf-flex-grid"
    }, /*#__PURE__*/React__default.createElement(forma36ReactComponents.Icon, {
      icon: "EmbeddedEntryInline",
      color: "secondary",
      className: "rich-text__embedded-entry-list-icon"
    }), "Inline entry"));
  };

  return EntryLinkToolbarIcon;
}(React.Component);

EntryLinkToolbarIcon.propTypes = TOOLBAR_PLUGIN_PROP_TYPES;
EntryLinkToolbarIcon.defaultProps = {
  isButton: false
};

var getEntryTitle = fieldEditorShared.entityHelpers.getEntryTitle,
    getEntryStatus = fieldEditorShared.entityHelpers.getEntryStatus;
var styles$6 = {
  scheduledIcon: /*#__PURE__*/emotion.css({
    verticalAlign: 'text-bottom',
    marginRight: tokens.spacing2Xs
  })
};
var FetchingWrappedInlineEntryCard = function FetchingWrappedInlineEntryCard(props) {
  var _useEntities = fieldEditorReference.useEntities(),
      loadEntry = _useEntities.loadEntry,
      entries = _useEntities.entries;

  React__default.useEffect(function () {
    loadEntry(props.entryId);
  }, [props.entryId]);
  var entry = entries[props.entryId];
  React__default.useEffect(function () {
    if (entry) {
      props.onEntityFetchComplete && props.onEntityFetchComplete();
    }
  }, [entry]);

  if (entry === 'failed') {
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.InlineEntryCard, {
      testId: richTextTypes.INLINES.EMBEDDED_ENTRY,
      selected: props.isSelected
    }, "Entry missing or inaccessible");
  }

  if (entry === undefined) {
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.InlineEntryCard, {
      loading: true
    });
  }

  var allContentTypes = props.sdk.space.getCachedContentTypes();
  var contentType = allContentTypes.find(function (contentType) {
    return contentType.sys.id === entry.sys.contentType.sys.id;
  });
  var contentTypeName = contentType ? contentType.name : '';
  var status = getEntryStatus(entry.sys);

  if (status === 'deleted') {
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.InlineEntryCard, {
      testId: richTextTypes.INLINES.EMBEDDED_ENTRY,
      onRemove: props.onRemove,
      selected: props.isSelected
    }, "Entry missing or inaccessible");
  }

  var title = getEntryTitle({
    entry: entry,
    contentType: contentType,
    localeCode: props.sdk.field.locale,
    defaultLocaleCode: props.sdk.locales["default"],
    defaultTitle: 'Untitled'
  });
  return /*#__PURE__*/React__default.createElement(forma36ReactComponents.InlineEntryCard, {
    testId: richTextTypes.INLINES.EMBEDDED_ENTRY,
    selected: props.isSelected,
    title: contentTypeName + ": " + title,
    status: status,
    dropdownListElements: !props.isReadOnly ? /*#__PURE__*/React__default.createElement(forma36ReactComponents.DropdownList, null, /*#__PURE__*/React__default.createElement(forma36ReactComponents.DropdownListItem, {
      onClick: props.onEdit
    }, "Edit"), /*#__PURE__*/React__default.createElement(forma36ReactComponents.DropdownListItem, {
      onClick: props.onRemove,
      isDisabled: props.isDisabled
    }, "Remove")) : null
  }, /*#__PURE__*/React__default.createElement(fieldEditorReference.ScheduledIconWithTooltip, {
    getEntityScheduledActions: props.sdk.space.getEntityScheduledActions,
    entityType: "Entry",
    entityId: entry.sys.id
  }, /*#__PURE__*/React__default.createElement(forma36ReactComponents.Icon, {
    className: styles$6.scheduledIcon,
    icon: "Clock",
    color: "muted",
    testId: "scheduled-icon"
  })), title);
};
FetchingWrappedInlineEntryCard.propTypes = {
  sdk: PropTypes.object.isRequired,
  entryId: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onEntityFetchComplete: PropTypes.func
};

var styles$7 = {
  root: /*#__PURE__*/emotion.css({
    margin: '0px 5px',
    fontSize: 'inherit',
    span: {
      webkitUserSelect: 'none',
      mozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none'
    }
  })
};

var EmbeddedEntryInline = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(EmbeddedEntryInline, _React$Component);

  function EmbeddedEntryInline() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEditClick = function () {
      var _this$getEntitySys = _this.getEntitySys(),
          id = _this$getEntitySys.id;

      return _this.props.sdk.navigator.openEntry(id, {
        slideIn: true
      });
    };

    _this.handleRemoveClick = function () {
      var _this$props = _this.props,
          editor = _this$props.editor,
          node = _this$props.node;
      editor.removeNodeByKey(node.key);
    };

    return _this;
  }

  var _proto = EmbeddedEntryInline.prototype;

  _proto.getEntitySys = function getEntitySys() {
    var data = this.props.node.data;
    return {
      id: data.get('target').sys.id,
      type: data.get('target').sys.linkType
    };
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        sdk = _this$props2.sdk,
        editor = _this$props2.editor,
        isSelected = _this$props2.isSelected;
    var isDisabled = editor.props.readOnly;
    var isReadOnly = editor.props.actionsDisabled;

    var _this$getEntitySys2 = this.getEntitySys(),
        entryId = _this$getEntitySys2.id;

    return /*#__PURE__*/React__default.createElement("span", _extends({}, this.props.attributes, {
      className: styles$7.root
    }), /*#__PURE__*/React__default.createElement(FetchingWrappedInlineEntryCard, {
      sdk: sdk,
      entryId: entryId,
      isSelected: isSelected,
      isDisabled: isDisabled,
      isReadOnly: isReadOnly,
      onRemove: this.handleRemoveClick,
      onEdit: this.handleEditClick,
      onEntityFetchComplete: this.props.onEntityFetchComplete
    }));
  };

  return EmbeddedEntryInline;
}(React__default.Component);

EmbeddedEntryInline.propTypes = {
  sdk: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  attributes: PropTypes.object.isRequired,
  editor: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired,
  onEntityFetchComplete: PropTypes.func.isRequired
};

var EmbeddedEntryInlinePlugin = function EmbeddedEntryInlinePlugin(_ref) {
  var _ref$richTextAPI = _ref.richTextAPI,
      sdk = _ref$richTextAPI.sdk,
      logShortcutAction = _ref$richTextAPI.logShortcutAction,
      logViewportAction = _ref$richTextAPI.logViewportAction;
  return {
    renderNode: function renderNode(props, _editor, next) {
      var node = props.node,
          attributes = props.attributes,
          key = props.key;

      if (node.type === richTextTypes.INLINES.EMBEDDED_ENTRY) {
        return /*#__PURE__*/React__default.createElement(EmbeddedEntryInline, _extends({
          sdk: sdk
        }, props, attributes, {
          onEntityFetchComplete: function onEntityFetchComplete() {
            logViewportAction('linkRendered', {
              key: key
            });
          }
        }));
      }

      return next();
    },
    onKeyDown: function onKeyDown(event, editor, next) {
      var hotkey = ['mod+shift+2'];

      if (isHotkey(hotkey, event)) {
        if (canInsertInline(editor)) {
          selectEntryAndInsert(sdk, editor, logShortcutAction);
          return;
        }
      }

      if (isHotkey('enter', event)) {
        if (hasOnlyInlineEntryInSelection(editor)) {
          event.preventDefault();
          editor.moveToStartOfNextText();
          return;
        }
      }

      return next();
    }
  };
};

var applyChange$1 = function applyChange(editor, type, logAction) {
  var _EditList = EditListWrapper(),
      utils = _EditList.utils,
      _EditList$changes = _EditList.changes,
      unwrapList = _EditList$changes.unwrapList,
      wrapInList = _EditList$changes.wrapInList;

  if (utils.isSelectionInList(editor.value)) {
    if (utils.getCurrentList(editor.value).type !== type) {
      var currentList = utils.getCurrentList(editor.value);
      editor.setNodeByKey(currentList.key, type);
      logAction('insert', {
        nodeType: type
      });
    } else {
      unwrapList(editor);
      logAction('remove', {
        nodeType: type
      });
    }
  } else {
    wrapInList(editor, type);
    logAction('insert', {
      nodeType: type
    });
  }

  return editor.focus();
};

var isActive = function isActive(editor, type) {
  var list = EditListWrapper().utils.getCurrentList(editor.value);

  if (list) {
    return list.type === type;
  }

  return false;
};

var listToggleDecorator = (function (_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon;
  return function (Block) {
    var _class, _temp;

    return _temp = _class = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(ToolbarDecorator, _React$Component);

      function ToolbarDecorator() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.handleToggle = toolbarActionHandlerWithSafeAutoFocus(_assertThisInitialized(_this), function () {
          var _this$props = _this.props,
              editor = _this$props.editor,
              onToggle = _this$props.onToggle,
              logToolbarAction = _this$props.richTextAPI.logToolbarAction;
          applyChange$1(editor, type, logToolbarAction);
          onToggle(editor);
        });
        return _this;
      }

      var _proto = ToolbarDecorator.prototype;

      _proto.render = function render() {
        var editor = this.props.editor;
        return /*#__PURE__*/React.createElement(Block, {
          type: type,
          icon: icon,
          title: title,
          onToggle: this.handleToggle,
          isActive: isActive(editor, type),
          disabled: this.props.disabled
        });
      };

      return ToolbarDecorator;
    }(React.Component), _class.propTypes = TOOLBAR_PLUGIN_PROP_TYPES, _temp;
  };
});

var ListPlugin = function ListPlugin() {
  return _extends({}, EditListWrapper(), {
    renderNode: function renderNode(props, _editor, next) {
      if (props.node.type === richTextTypes.BLOCKS.UL_LIST) {
        return commonNode('ul')(props);
      } else if (props.node.type === richTextTypes.BLOCKS.OL_LIST) {
        return commonNode('ol')(props);
      } else if (props.node.type === richTextTypes.BLOCKS.LIST_ITEM) {
        return commonNode('li')(props);
      }

      return next();
    }
  });
};
var UnorderedList = /*#__PURE__*/listToggleDecorator({
  type: richTextTypes.BLOCKS.UL_LIST,
  title: 'UL',
  icon: 'ListBulleted'
})(function (props) {
  return /*#__PURE__*/React__default.createElement(ToolbarIcon, props);
});
var OrderedList = /*#__PURE__*/listToggleDecorator({
  type: richTextTypes.BLOCKS.OL_LIST,
  title: 'OL',
  icon: 'ListNumbered'
})(function (props) {
  return /*#__PURE__*/React__default.createElement(ToolbarIcon, props);
});

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    &::after {\n      background: ", ";\n      -webkit-box-shadow: 0px 0px 5px ", ";\n      box-shadow: 0px 0px 5px ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    height: ", ";\n    background: transparent;\n    position: relative;\n    margin: 0 0 ", ";\n    &:hover {\n      cursor: pointer;\n    }\n    &::after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 1px;\n      background: ", ";\n      top: 50%;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var styles$8 = {
  hr: /*#__PURE__*/emotion.css( /*#__PURE__*/_templateObject(), tokens.spacingM, tokens.spacingL, tokens.colorElementMid),
  hrSelected: /*#__PURE__*/emotion.css( /*#__PURE__*/_templateObject2(), tokens.colorPrimary, tokens.colorPrimary, tokens.colorPrimary)
};
var HrPlugin = function HrPlugin() {
  return {
    renderNode: function renderNode(props, _editor, next) {
      if (props.node.type === richTextTypes.BLOCKS.HR) {
        return /*#__PURE__*/React__default.createElement("hr", _extends({
          className: emotion.cx(styles$8.hr, props.isSelected && styles$8.hrSelected)
        }, props.attributes));
      }

      return next();
    }
  };
};

var Hr = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Hr, _Component);

  function Hr() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Hr.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(ToolbarIcon, this.props);
  };

  return Hr;
}(React.Component);

var Hr$1 = /*#__PURE__*/blockSelectDecorator({
  type: richTextTypes.BLOCKS.HR,
  title: 'HR',
  icon: 'HorizontalRule',
  applyChange: function applyChange(editor, type) {
    var hr = {
      type: type,
      object: 'block'
    };

    if (editor.value.blocks.size === 0 || haveTextInSomeBlocks(editor)) {
      editor.insertBlock(hr);
    } else {
      editor.setBlocks(hr);
    }

    editor.insertBlock(richTextTypes.BLOCKS.PARAGRAPH).focus();
  }
})(Hr);

var getCharacterCount = function getCharacterCount(editor) {
  var document = contentfulSlateJSAdapter.toContentfulDocument({
    document: editor.value.document.toJSON(),
    schema: schema
  });
  return richTextPlainTextRenderer.documentToPlainTextString(document).length;
};

/**
 * This plugin tracks the character count before and after a paste event,
 * including the text selected during the event. This creates parity with our
 * tracking for the markdown editor.
 */

var PastePlugin = function PastePlugin(_ref) {
  var logShortcutAction = _ref.richTextAPI.logShortcutAction;
  return {
    onPaste: function onPaste(_event, editor, next) {
      var characterCountSelection = global.getSelection().toString().length;
      var characterCountBefore = getCharacterCount(editor);
      setTimeout(function () {
        var characterCountAfter = getCharacterCount(editor);
        logShortcutAction('paste', {
          characterCountAfter: characterCountAfter,
          characterCountBefore: characterCountBefore,
          characterCountSelection: characterCountSelection
        });
      });
      next();
      return;
    }
  };
};

/**
 * Tags to block types mapping
 */

var BLOCK_TAGS = {
  p: richTextTypes.BLOCKS.PARAGRAPH,
  ul: richTextTypes.BLOCKS.UL_LIST,
  ol: richTextTypes.BLOCKS.OL_LIST,
  blockquote: richTextTypes.BLOCKS.QUOTE,
  hr: richTextTypes.BLOCKS.HR,
  h1: richTextTypes.BLOCKS.HEADING_1,
  h2: richTextTypes.BLOCKS.HEADING_2,
  h3: richTextTypes.BLOCKS.HEADING_3,
  h4: richTextTypes.BLOCKS.HEADING_4,
  h5: richTextTypes.BLOCKS.HEADING_5,
  h6: richTextTypes.BLOCKS.HEADING_6
};
/**
 * tags to marks types mapping
 */

var MARK_TAGS = {
  strong: richTextTypes.MARKS.BOLD,
  b: richTextTypes.MARKS.BOLD,
  em: richTextTypes.MARKS.ITALIC,
  i: richTextTypes.MARKS.ITALIC,
  u: richTextTypes.MARKS.UNDERLINE,
  sup: richTextTypes.MARKS.SUPERSCRIPT,
  sub: richTextTypes.MARKS.SUBSCRIPT,
  code: richTextTypes.MARKS.CODE
};

var isGoogleWrapper = function isGoogleWrapper(el) {
  return el.tagName.toLowerCase() === 'b' && el.id.startsWith('docs-internal-guid-');
};

var isGoogleBold = function isGoogleBold(el) {
  return el.style.fontWeight === '700';
};

var isGoogleItalic = function isGoogleItalic(el) {
  return el.style.fontStyle === 'italic';
};

var isGoogleUnderline = function isGoogleUnderline(el) {
  return el.style.textDecoration === 'underline';
};

var gDocsRules = {
  deserialize: function deserialize(el, next) {
    var isFromGoogleDocs = !!el.ownerDocument.querySelector('[id*=docs-internal-guid-]');

    if (!isFromGoogleDocs) {
      return;
    }

    if (isGoogleWrapper(el)) {
      return next(el.childNodes);
    }
    /**
     * Google Docs represent marks with css styles applied to SPAN
     * instead of html tags.
     * */


    if (el.tagName.toLowerCase() === 'span') {
      var _marks = [];

      if (isGoogleBold(el)) {
        _marks.push(richTextTypes.MARKS.BOLD);
      }

      if (isGoogleItalic(el)) {
        _marks.push(richTextTypes.MARKS.ITALIC);
      }

      if (isGoogleUnderline(el)) {
        _marks.push(richTextTypes.MARKS.UNDERLINE);
      }

      var textNode = {
        object: 'text',
        leaves: [{
          object: 'leaf',
          text: el.textContent,
          marks: _marks.map(function (type) {
            return {
              object: 'mark',
              type: type
            };
          })
        }]
      };
      return textNode;
    }
  }
};
var listItems = {
  deserialize: function deserialize(el, next) {
    /** list-items in Contentful's schema must have blocks as direct children */
    if (el.tagName.toLowerCase() === 'li') {
      var childNodes = next(el.childNodes);
      childNodes = childNodes.map(function (node) {
        if (node.object === 'text') {
          return {
            object: 'block',
            type: richTextTypes.BLOCKS.PARAGRAPH,
            nodes: [node]
          };
        } else {
          return node;
        }
      });
      return {
        object: 'block',
        type: richTextTypes.BLOCKS.LIST_ITEM,
        nodes: childNodes
      };
    }
  }
};
var links = {
  deserialize: function deserialize(el, next) {
    if (el.tagName.toLowerCase() === 'a') {
      // we only support links with href,
      // if href is not defined, we should serialize as text
      if (el.getAttribute('href')) {
        return {
          object: 'inline',
          type: richTextTypes.INLINES.HYPERLINK,
          nodes: next(el.childNodes),
          data: {
            uri: el.getAttribute('href')
          }
        };
      } else {
        return next(el.childNodes);
      }
    }
  }
};
var macOSTrailingBreak = {
  deserialize: function deserialize(el) {
    if (el.tagName.toLowerCase() === 'br' && el.classList.contains('Apple-interchange-newline')) {
      return null;
    }
  }
};
var marks = {
  deserialize: function deserialize(el, next) {
    var mark = MARK_TAGS[el.tagName.toLowerCase()];

    if (mark) {
      return {
        object: 'mark',
        type: mark,
        nodes: next(el.childNodes)
      };
    }
  }
};
var blocks = {
  deserialize: function deserialize(el, next) {
    var block = BLOCK_TAGS[el.tagName.toLowerCase()];

    if (block) {
      var childNodes = next(el.childNodes);
      return {
        object: 'block',
        type: block,
        nodes: childNodes.length > 0 ? childNodes : [{
          object: 'text'
        }]
      };
    }
  }
};
var RULES = [gDocsRules, listItems, links, macOSTrailingBreak, marks, blocks];
var create = function create() {
  return new HtmlSerializer({
    rules: RULES
  });
};

/**
 * The plugin allows to paste html to the Structured Text Editor
 * by deserializing html content from ClipboardEvent into
 * Slate document.
 */

var PasteHtmlPlugin = function PasteHtmlPlugin() {
  var serializer = create();
  return {
    onPaste: function onPaste(event, editor, next) {
      var transfer = slateReact.getEventTransfer(event);

      if (transfer.type != 'html') {
        next();
        return;
      }

      var _serializer$deseriali = serializer.deserialize(transfer.html),
          document = _serializer$deseriali.document;

      editor.insertFragment(document);
      return;
    }
  };
};

/**
 * This plugin changes how pasting text is handled in the Rich text editor by
 * deserializing text content from ClipboardEvent into a Slate document. We
 * use it to handle converting new lines to paragraphs. Without this plugin,
 * lines of text separated by an empty new line will result in extra empty
 * paragraphs.
 */

var PasteTextPlugin = function PasteTextPlugin() {
  return {
    onPaste: function onPaste(event, editor, next) {
      var transfer = slateReact.getEventTransfer(event);

      if (transfer.type !== 'text') {
        next();
        return;
      }

      var string = transfer.text;

      var _PlainSerializer$dese = PlainSerializer.deserialize(string, {
        defaultBlock: richTextTypes.BLOCKS.PARAGRAPH,
        delimiter: '\n\n' // We look for double new lines as a delimiter for paragraphs

      }),
          document = _PlainSerializer$dese.document;

      editor.insertFragment(document);
      return;
    }
  };
};

var RICH_TEXT_COMMANDS_CONTEXT_MARK_TYPE = 'richTextCommandsContext';
/**
 * @description
 * Returns Command Palette command text or leading slash
 *
 * @param {Slate.Editor} editor
 * @returns {String}
 */

var getCommandText = function getCommandText(editor) {
  // matches the character / literally (case sensitive)
  if (!editor.value.startText) {
    return null;
  }

  var COMMAND_REGEX = /\/(\S*)$/;
  var startOffset = editor.value.selection.start.offset;
  var textBefore = editor.value.startText.text.slice(0, startOffset);
  var result = COMMAND_REGEX.exec(textBefore);
  return result === null ? null : result[1] || result[0];
};
/**
 * @description
 * Returns Command Palette Decoration if applicable to current text.
 *
 * @param {Slate.Editor} editor
 * @returns {Slate.Decoration?}
 */

var getDecorationOrDefault = function getDecorationOrDefault(editor) {
  var value = editor.value;

  if (!value.startText) {
    return null;
  }

  var inputValue = getCommandText(editor);
  var selection = value.selection;

  if (inputValue) {
    var decoration = {
      anchor: {
        key: selection.start.key,
        offset: selection.start.offset - (inputValue.length + 1)
      },
      focus: {
        key: selection.start.key,
        offset: selection.start.offset
      },
      mark: {
        type: RICH_TEXT_COMMANDS_CONTEXT_MARK_TYPE
      }
    };
    return decoration;
  }

  return null;
};
var hasCommandPaletteMarkType = function hasCommandPaletteMarkType(markType) {
  return markType === RICH_TEXT_COMMANDS_CONTEXT_MARK_TYPE;
};
/**
 * @description
 * Checks if document has command palette decoration
 *
 * @param {Slate.Editor} editor
 * @returns {Boolean}
 */

var hasCommandPaletteDecoration = function hasCommandPaletteDecoration(editor) {
  var decorations = editor.value.document.getDecorations(editor);

  if (decorations.isEmpty()) {
    return false;
  }

  var commandPaletteDecoration = decorations.find(function (d) {
    return d.mark.type === RICH_TEXT_COMMANDS_CONTEXT_MARK_TYPE;
  });
  return Boolean(commandPaletteDecoration);
};
var removeCommand = function removeCommand(editor, command, anchorOffset) {
  if (anchorOffset === void 0) {
    anchorOffset = 1;
  }

  editor.removeTextByKey(editor.value.selection.start.key, editor.value.selection.start.offset - (command.length + anchorOffset), command.length + anchorOffset);
};

var ACTIONS = {
  EMBED: 'embed',
  CREATE_EMBED: 'create_embed'
};
function fetchAssets(_x, _x2) {
  return _fetchAssets.apply(this, arguments);
}

function _fetchAssets() {
  _fetchAssets = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(sdk, query) {
    var assets;
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (query === void 0) {
              query = '';
            }

            _context2.next = 3;
            return sdk.space.getAssets({
              query: query
            });

          case 3:
            assets = _context2.sent;
            return _context2.abrupt("return", assets.items.map(function (asset) {
              return {
                contentTypeName: 'Asset',
                displayTitle: asset.fields.title ? asset.fields.title[sdk.field.locale] : 'Untitled',
                id: asset.sys.id,
                entry: asset,
                thumbnail: asset.fields.file && asset.fields.file[sdk.field.locale] && asset.fields.file[sdk.field.locale].url + "?h=30"
              };
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchAssets.apply(this, arguments);
}

function fetchEntries(_x3, _x4, _x5) {
  return _fetchEntries.apply(this, arguments);
}
/**
 * @description
 * Checks the field validations if the current content type is valid to be linked/embedded.
 *
 * @param {Object} field
 * @param {Object} contentType
 * @param {String} embedType
 * @returns {Boolean}
 */

function _fetchEntries() {
  _fetchEntries = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(sdk, contentType, query) {
    var entries;
    return runtime_1.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (query === void 0) {
              query = '';
            }

            _context4.next = 3;
            return sdk.space.getEntries({
              content_type: contentType.sys.id,
              query: query
            });

          case 3:
            entries = _context4.sent;
            return _context4.abrupt("return", Promise.all(entries.items.map( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(entry) {
                var description, displayTitle;
                return runtime_1.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        description = fieldEditorShared.entityHelpers.getEntityDescription({
                          contentType: contentType,
                          entity: entry,
                          localeCode: sdk.field.locale,
                          defaultLocaleCode: sdk.locales["default"]
                        });
                        displayTitle = fieldEditorShared.entityHelpers.getEntryTitle({
                          entry: entry,
                          contentType: contentType,
                          localeCode: sdk.field.locale,
                          defaultLocaleCode: sdk.locales["default"],
                          defaultTitle: 'Untitled'
                        });
                        return _context3.abrupt("return", {
                          contentTypeName: contentType.name,
                          displayTitle: displayTitle,
                          id: entry.sys.contentType.sys.id,
                          description: description,
                          entry: entry
                        });

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x9) {
                return _ref.apply(this, arguments);
              };
            }())));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fetchEntries.apply(this, arguments);
}

var isValidLinkedContentType = function isValidLinkedContentType(field, contentType, embedType) {
  if (field.validations.length === 0) {
    return true;
  }

  var nodes = field.validations.filter(function (val) {
    return val.nodes;
  })[0].nodes;

  if (nodes[embedType] === undefined) {
    return true;
  }

  return !!nodes[embedType].filter(function (typeVal) {
    return typeVal.linkContentType;
  }).reduce(function (pre, cur) {
    return [].concat(pre, [cur.linkContentType]);
  }, []).reduce(function (pre, cur) {
    return [].concat(pre, cur);
  }, []).find(function (ct) {
    return ct === contentType.sys.id;
  });
};
var isEmbeddingEnabled = function isEmbeddingEnabled(field) {
  return isNodeTypeEnabled(field, richTextTypes.BLOCKS.EMBEDDED_ASSET) || isNodeTypeEnabled(field, richTextTypes.BLOCKS.EMBEDDED_ENTRY) || isNodeTypeEnabled(field, richTextTypes.INLINES.EMBEDDED_ENTRY);
};
var CommandPaletteActionBuilder = /*#__PURE__*/function () {
  function CommandPaletteActionBuilder(sdk) {
    this.sdk = sdk;
  } // TODO: Let's create dedicated functions for assets so we do not have to pass a CT.


  var _proto = CommandPaletteActionBuilder.prototype;

  _proto.maybeBuildEmbedAction = function maybeBuildEmbedAction(embedType, contentType, callback) {
    if (!isNodeTypeEnabled(this.sdk.field, embedType)) {
      return false;
    }

    var isAsset = !contentType;

    if (!isAsset && !isValidLinkedContentType(this.sdk.field, contentType, embedType)) {
      return false;
    }

    return buildAction(embedType, contentType, ACTIONS.EMBED, callback);
  };

  _proto.maybeBuildCreateAndEmbedAction = /*#__PURE__*/function () {
    var _maybeBuildCreateAndEmbedAction = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(embedType, contentType, callback) {
      var isAsset, canCreateEntryOfContentType, canCreateAssets;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isNodeTypeEnabled(this.sdk.field, embedType)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", false);

            case 2:
              isAsset = !contentType;

              if (isAsset) {
                _context.next = 13;
                break;
              }

              if (isValidLinkedContentType(this.sdk.field, contentType, embedType)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", false);

            case 6:
              _context.next = 8;
              return this.sdk.access.can('create', {
                sys: {
                  type: 'Entry',
                  contentType: {
                    sys: contentType.sys
                  }
                }
              });

            case 8:
              canCreateEntryOfContentType = _context.sent;

              if (!(canCreateEntryOfContentType === false)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", false);

            case 11:
              _context.next = 18;
              break;

            case 13:
              _context.next = 15;
              return this.sdk.access.can('create', 'Asset');

            case 15:
              canCreateAssets = _context.sent;

              if (!(canCreateAssets === false)) {
                _context.next = 18;
                break;
              }

              return _context.abrupt("return", false);

            case 18:
              return _context.abrupt("return", buildAction(embedType, contentType, ACTIONS.CREATE_EMBED, callback));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function maybeBuildCreateAndEmbedAction(_x6, _x7, _x8) {
      return _maybeBuildCreateAndEmbedAction.apply(this, arguments);
    }

    return maybeBuildCreateAndEmbedAction;
  }();

  return CommandPaletteActionBuilder;
}();

function buildAction(embedType, contentType, actionType, callback) {
  var isAsset = !contentType;
  var isInline = embedType === richTextTypes.INLINES.EMBEDDED_ENTRY;
  var label = (actionType === ACTIONS.EMBED ? 'Embed' : 'Create and embed') + " " + (isAsset ? 'Asset' : contentType.name) + " " + (isInline ? ' - Inline' : '');
  var icon = isInline ? 'EmbeddedEntryInline' : 'EmbeddedEntryBlock';
  return {
    label: label,
    group: isAsset ? 'Assets' : contentType.name,
    callback: callback,
    icon: icon
  };
}

var styles$9 = {
  commandPanel: /*#__PURE__*/emotion.css({
    display: 'block',
    background: tokens.colorWhite,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.3)',
    border: "1px solid " + tokens.colorElementDark,
    borderRadius: '3px',
    fontFamily: tokens.fontStackPrimary,
    width: '500px',
    overflowY: 'auto'
  }),
  commandPanelList: /*#__PURE__*/emotion.css({
    display: 'block',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    height: '200px',
    overflowY: 'auto'
  }),
  item: /*#__PURE__*/emotion.css({
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightDefault,
    padding: tokens.spacingS + " " + tokens.spacingXs,
    borderBottom: "1px solid " + tokens.colorElementMid,
    margin: 0,
    color: tokens.colorTextDark
  }),
  divider: /*#__PURE__*/emotion.css({
    fontWeight: tokens.fontWeightDemiBold,
    padding: tokens.spacingS + " " + tokens.spacingXs,
    letterSpacing: tokens.letterSpacingWide,
    fontSize: tokens.fontSizeS,
    textTransform: 'uppercase',
    borderBottom: "1px solid " + tokens.colorElementDark,
    margin: 0,
    lineHeight: tokens.lineHeightDefault,
    color: tokens.colorTextDark
  }),
  icon: /*#__PURE__*/emotion.css({
    marginRight: 10
  }),
  isSelected: /*#__PURE__*/emotion.css({
    background: tokens.colorElementLight
  }),
  skeletonContainer: /*#__PURE__*/emotion.css({
    padding: tokens.spacingM,
    height: 200,
    margin: 0
  }),
  button: /*#__PURE__*/emotion.css({
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    background: 'transparent',
    fontSize: tokens.fontSizeM
  }),
  navBar: /*#__PURE__*/emotion.css({
    display: 'flex',
    bottom: 0,
    background: tokens.colorElementLightest,
    padding: tokens.spacingS + " " + tokens.spacingXs,
    width: '100%'
  }),
  loader: /*#__PURE__*/emotion.css({
    marginLeft: 'auto'
  }),
  thumbnail: /*#__PURE__*/emotion.css({
    marginRight: 15
  }),
  instruction: /*#__PURE__*/emotion.css({
    marginRight: 15,
    color: tokens.colorTextLight
  }),
  closeButton: /*#__PURE__*/emotion.css({
    marginLeft: 'auto'
  })
};
var itemPropType = /*#__PURE__*/PropTypes.shape({
  label: PropTypes.string,
  callback: PropTypes.func
});

var CommandPanelItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CommandPanelItem, _React$Component);

  function CommandPanelItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.listItemRef = null;
    return _this;
  }

  var _proto = CommandPanelItem.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.isSelected) {
      this.listItemRef.scrollIntoView({
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        index = _this$props.index,
        classNames = _this$props.classNames,
        item = _this$props.item;
    return /*#__PURE__*/React__default.createElement("li", {
      key: index,
      className: classNames,
      ref: function ref(_ref) {
        _this2.listItemRef = _ref;
      }
    }, /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      className: styles$9.button,
      onClick: item.callback && item.callback
    }, item.icon && /*#__PURE__*/React__default.createElement(forma36ReactComponents.Icon, {
      className: styles$9.icon,
      icon: item.icon,
      color: "secondary"
    }), item.thumbnail && /*#__PURE__*/React__default.createElement("img", {
      className: styles$9.thumbnail,
      src: item.thumbnail,
      alt: ""
    }), item.label));
  };

  return CommandPanelItem;
}(React__default.Component);

CommandPanelItem.propTypes = {
  isSelected: PropTypes.bool,
  index: PropTypes.number,
  classNames: PropTypes.string,
  item: itemPropType
};

var Instruction = function Instruction(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React__default.createElement("span", {
    className: styles$9.instruction
  }, children);
};

Instruction.propTypes = {
  children: PropTypes.node
};
var CommandPanel = /*#__PURE__*/function (_React$Component2) {
  _inheritsLoose(CommandPanel, _React$Component2);

  function CommandPanel() {
    var _this3;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
    _this3.state = {
      selectedKey: 0,
      items: []
    };

    _this3.handleKeyboard = function (e) {
      if (isHotkey('up', e)) {
        if (_this3.state.selectedKey === 0) return;

        _this3.setState(function (state) {
          return {
            selectedKey: state.selectedKey - 1
          };
        });
      }

      if (isHotkey('down', e)) {
        if (_this3.state.selectedKey === _this3.state.items.length - 1) return;

        _this3.setState(function (state) {
          return {
            selectedKey: state.selectedKey + 1
          };
        });
      }

      if (isHotkey('enter', e)) {
        var selectedItem = _this3.state.items[_this3.state.selectedKey];
        if (selectedItem && selectedItem.callback) selectedItem.callback();
      }
    };

    _this3.renderNavigationBar = function () {
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$9.navBar
      }, /*#__PURE__*/React__default.createElement(forma36ReactComponents.SectionHeading, null, _this3.props.breadcrumb ? "Embed " + _this3.props.breadcrumb : 'Richtext Commands'), /*#__PURE__*/React__default.createElement(forma36ReactComponents.IconButton, {
        label: "Close",
        className: styles$9.closeButton,
        iconProps: {
          icon: 'Close'
        },
        buttonType: "muted",
        onClick: _this3.props.onClose
      }));
    };

    _this3.renderStatusBar = function () {
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$9.navBar
      }, /*#__PURE__*/React__default.createElement("span", {
        className: styles$9.instructions
      }, /*#__PURE__*/React__default.createElement(Instruction, null, "\u2191 \u2193 to navigate"), /*#__PURE__*/React__default.createElement(Instruction, null, "\u21B5 to confirm"), /*#__PURE__*/React__default.createElement(Instruction, null, "esc to close")), _this3.props.isUpdating && /*#__PURE__*/React__default.createElement("span", {
        className: styles$9.loader
      }, "loading ", /*#__PURE__*/React__default.createElement(forma36ReactComponents.Spinner, {
        size: "small"
      })));
    };

    _this3.renderSkeleton = function () {
      return /*#__PURE__*/React__default.createElement("li", {
        className: styles$9.skeletonContainer
      }, /*#__PURE__*/React__default.createElement(forma36ReactComponents.SkeletonContainer, null, /*#__PURE__*/React__default.createElement(forma36ReactComponents.SkeletonBodyText, {
        numberOfLines: 7
      })));
    };

    return _this3;
  }

  CommandPanel.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var itemsHasUpdated = props.items !== state.originalItems;
    var searchStringHasUpdated = props.searchString !== state.originalSearchString;
    var items = props.items.filter(function (item) {
      return item.label.toLowerCase().includes(props.searchString ? props.searchString.toLowerCase() : '');
    });
    return {
      originalItems: props.items,
      originalSearchString: props.searchString,
      items: items,
      selectedKey: itemsHasUpdated || searchStringHasUpdated ? 0 : state.selectedKey
    };
  };

  var _proto2 = CommandPanel.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    this.props.richTextAPI.logViewportAction('openRichTextCommandsPalette');
    document.addEventListener('keydown', this.handleKeyboard, true);
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    this.props.richTextAPI.logViewportAction('cancelRichTextCommandsPalette');
    document.removeEventListener('keydown', this.handleKeyboard, true);
  };

  _proto2.renderGroups = function renderGroups() {
    var _this4 = this;

    var groups = uniqBy(this.state.items.map(function (item) {
      return item.group;
    }), function (value) {
      return value;
    });

    if (!groups.length) {
      return /*#__PURE__*/React__default.createElement("li", {
        className: styles$9.item
      }, "No results");
    }

    return groups.map(function (groupName, index) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
        key: index
      }, groupName && /*#__PURE__*/React__default.createElement("li", {
        key: groupName,
        className: styles$9.divider
      }, groupName), _this4.renderItems(groupName));
    });
  };

  _proto2.renderItems = function renderItems(groupName) {
    var _this5 = this;

    return this.state.items.filter(function (item) {
      return item.group === groupName;
    }).map(function (item) {
      var _cn;

      var index = _this5.state.items.indexOf(item);

      var isSelected = index === _this5.state.selectedKey;
      var classNames = cn(styles$9.item, (_cn = {}, _cn[styles$9.isSelected] = isSelected, _cn));
      return /*#__PURE__*/React__default.createElement(CommandPanelItem, {
        item: item,
        classNames: classNames,
        key: index,
        isSelected: isSelected
      });
    });
  };

  _proto2.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        testId = _this$props2.testId,
        isLoading = _this$props2.isLoading;
    var classNames = cn(styles$9.commandPanel, className);
    return /*#__PURE__*/React__default.createElement("div", {
      className: classNames
    }, this.renderNavigationBar(), /*#__PURE__*/React__default.createElement("ul", {
      className: styles$9.commandPanelList,
      "data-test-id": testId
    }, isLoading ? this.renderSkeleton() : this.renderGroups()), this.renderStatusBar());
  };

  return CommandPanel;
}(React__default.Component);
CommandPanel.propTypes = {
  items: /*#__PURE__*/PropTypes.arrayOf(itemPropType),
  searchString: PropTypes.string,
  className: PropTypes.string,
  testId: PropTypes.string,
  isLoading: PropTypes.bool,
  isUpdating: PropTypes.bool,
  breadcrumb: PropTypes.string,
  richTextAPI: PropTypes.object,
  onClose: PropTypes.func
};
CommandPanel.defaultProps = {
  className: undefined,
  searchString: '',
  items: [],
  testId: 'cf-ui-command-panel',
  isLoading: true,
  isUpdating: false
};

var DEFAULT_POSITION = {
  top: 0,
  left: 0
};

var CommandPalette = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(CommandPalette, _React$PureComponent);

  function CommandPalette() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      anchorPosition: DEFAULT_POSITION,
      items: [],
      isLoading: true,
      panelPosition: 'bottom'
    };
    _this.paletteDimensions = {
      height: 300,
      width: 300
    };

    _this.bindEventListeners = function () {
      document.addEventListener('scroll', _this.handleScroll, true);
      document.addEventListener('keydown', _this.handleKeyboard, true);
      document.addEventListener('click', _this.handleOutsideClick, true);
    };

    _this.removeEventListeners = function () {
      document.removeEventListener('scroll', _this.handleScroll, true);
      document.removeEventListener('keydown', _this.handleKeyboard, true);
      document.removeEventListener('click', _this.handleOutsideClick, true);
    };

    _this.handleOutsideClick = function (event) {
      if (!_this.palette.contains(event.target)) {
        _this.setState({
          isClosed: true
        });
      }
    };

    _this.requestUpdate = throttle(function () {
      if (_this.state.currentCommand) {
        _this.setState({
          isUpdating: true
        });

        _this.createCommands(_this.state.currentCommand.contentType, _this.state.currentCommand.type, _this.props.command);
      }
    }, 1000, {
      leading: true,
      trailing: false
    });

    _this.createCommand = function (label, contentType, entry, type, description, thumbnail) {
      return {
        label: "" + label + (description ? " - " + description : ''),
        thumbnail: thumbnail,
        contentType: contentType,
        callback: function callback() {
          var _this$props = _this.props,
              editor = _this$props.editor,
              command = _this$props.command,
              richTextAPI = _this$props.richTextAPI;
          var logCommandPaletteAction = richTextAPI.logCommandPaletteAction;
          removeCommand(editor, command);

          switch (type) {
            case richTextTypes.INLINES.EMBEDDED_ENTRY:
              insertInline(editor, entry.sys.id, false);
              logCommandPaletteAction('insert', {
                nodeType: richTextTypes.INLINES.EMBEDDED_ENTRY
              });
              break;

            case richTextTypes.BLOCKS.EMBEDDED_ASSET:
              insertBlock(editor, richTextTypes.BLOCKS.EMBEDDED_ASSET, entry, false);
              logCommandPaletteAction('insert', {
                nodeType: richTextTypes.BLOCKS.EMBEDDED_ASSET
              });
              break;

            default:
              insertBlock(editor, richTextTypes.BLOCKS.EMBEDDED_ENTRY, entry, false);
              logCommandPaletteAction('insert', {
                nodeType: richTextTypes.BLOCKS.EMBEDDED_ENTRY
              });
              break;
          }
        }
      };
    };

    _this.onCreateAndEmbedEntity = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(contentTypeId, nodeType) {
        var _this$props2, richTextAPI, editor, command, sdk, _sdk$space, createAsset, createEntry, isAsset, createEntity, entity, _entity$sys, entityId, entityType, navigator, openEntity;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = _this.props, richTextAPI = _this$props2.richTextAPI, editor = _this$props2.editor, command = _this$props2.command;
                sdk = richTextAPI.sdk;
                removeCommand(editor, command);
                _sdk$space = sdk.space, createAsset = _sdk$space.createAsset, createEntry = _sdk$space.createEntry;
                isAsset = contentTypeId === null;

                createEntity = function createEntity() {
                  return isAsset ? createAsset({}) : createEntry(contentTypeId, {});
                };

                _context.next = 8;
                return createEntity();

              case 8:
                entity = _context.sent;
                _entity$sys = entity.sys, entityId = _entity$sys.id, entityType = _entity$sys.type;
                nodeType === richTextTypes.INLINES.EMBEDDED_ENTRY ? insertInline(editor, entity.sys.id, false) : insertBlock(editor, nodeType, entity);
                richTextAPI.logCommandPaletteAction('insert', {
                  nodeType: nodeType
                });
                navigator = sdk.navigator;
                openEntity = entityType === 'Asset' ? navigator.openAsset : navigator.openEntry;
                return _context.abrupt("return", openEntity(entityId, {
                  slideIn: true
                }));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.createContentTypeActions = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(actionBuilder, contentType) {
        var actions;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all([actionBuilder.maybeBuildEmbedAction(richTextTypes.BLOCKS.EMBEDDED_ENTRY, contentType, function () {
                  _this.setState({
                    breadcrumb: contentType.name,
                    isLoading: true
                  });

                  _this.createCommands(contentType);

                  _this.clearCommand();
                }), actionBuilder.maybeBuildEmbedAction(richTextTypes.INLINES.EMBEDDED_ENTRY, contentType, function () {
                  _this.setState({
                    breadcrumb: contentType.name,
                    isLoading: true
                  });

                  _this.createCommands(contentType, richTextTypes.INLINES.EMBEDDED_ENTRY);

                  _this.clearCommand();
                }), actionBuilder.maybeBuildCreateAndEmbedAction(richTextTypes.BLOCKS.EMBEDDED_ENTRY, contentType, function () {
                  return _this.onCreateAndEmbedEntity(contentType.sys.id, richTextTypes.BLOCKS.EMBEDDED_ENTRY);
                }), actionBuilder.maybeBuildCreateAndEmbedAction(richTextTypes.INLINES.EMBEDDED_ENTRY, contentType, function () {
                  return _this.onCreateAndEmbedEntity(contentType.sys.id, richTextTypes.INLINES.EMBEDDED_ENTRY);
                })]);

              case 2:
                actions = _context2.sent;
                return _context2.abrupt("return", actions.filter(function (action) {
                  return action;
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.createAssetActions = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(actionBuilder) {
        var actions;
        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all([actionBuilder.maybeBuildEmbedAction(richTextTypes.BLOCKS.EMBEDDED_ASSET, null, function () {
                  _this.setState({
                    breadcrumb: 'Asset',
                    isLoading: true
                  });

                  _this.createCommands(null, richTextTypes.BLOCKS.EMBEDDED_ASSET);

                  _this.clearCommand();
                }), actionBuilder.maybeBuildCreateAndEmbedAction(richTextTypes.BLOCKS.EMBEDDED_ASSET, null, function () {
                  return _this.onCreateAndEmbedEntity(null, richTextTypes.BLOCKS.EMBEDDED_ASSET);
                })]);

              case 2:
                actions = _context3.sent;
                return _context3.abrupt("return", actions.filter(function (action) {
                  return action;
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.handleScroll = function (e) {
      if (e.target.nodeName !== 'UL') {
        _this.updatePanelPosition();
      }
    };

    _this.clearCommand = function () {
      if (_this.props.command !== '/') {
        removeCommand(_this.props.editor, _this.props.command, 0);
      }
    };

    _this.createCommands = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(contentType, type, command) {
        var allEntries;
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.setState({
                  isUpdating: true
                });

                if (contentType) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 4;
                return fetchAssets(_this.props.richTextAPI.sdk, command);

              case 4:
                _context4.t0 = _context4.sent;
                _context4.next = 10;
                break;

              case 7:
                _context4.next = 9;
                return fetchEntries(_this.props.richTextAPI.sdk, contentType, command);

              case 9:
                _context4.t0 = _context4.sent;

              case 10:
                allEntries = _context4.t0;

                if (_this.isComponentMounted) {
                  _this.setState({
                    currentCommand: {
                      contentType: contentType,
                      type: type,
                      command: command
                    },
                    isUpdating: false,
                    isLoading: false,
                    items: allEntries.map(function (entry) {
                      return _this.createCommand(entry.displayTitle, entry.contentTypeName, entry.entry, type, entry.description, entry.thumbnail);
                    })
                  });
                }

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6, _x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.createInitialCommands = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5() {
      var sdk, allContentTypes, actionBuilder, contentTypeActions, assetActions;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              sdk = _this.props.richTextAPI.sdk;
              allContentTypes = sdk.space.getCachedContentTypes();

              _this.setState({
                isLoading: false
              });

              actionBuilder = new CommandPaletteActionBuilder(sdk);
              _context5.t0 = flatten;
              _context5.next = 7;
              return Promise.all(allContentTypes.map(function (ct) {
                return _this.createContentTypeActions(actionBuilder, ct);
              }));

            case 7:
              _context5.t1 = _context5.sent;
              contentTypeActions = (0, _context5.t0)(_context5.t1);
              _context5.next = 11;
              return _this.createAssetActions(actionBuilder);

            case 11:
              assetActions = _context5.sent;

              _this.setState(function (prevState) {
                return {
                  items: [].concat(prevState.items, contentTypeActions, assetActions)
                };
              });

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    _this.handleKeyboard = function (e) {
      var isEscKey = isHotkey('esc', e); // ESC to close menu shouldn't blur editor.

      if (isEscKey || isHotkey('down', e) || isHotkey('up', e) || isHotkey('enter', e)) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (isEscKey || isHotkey('tab', e)) {
        _this.setState({
          isClosed: true
        });
      }
    };

    return _this;
  }

  var _proto = CommandPalette.prototype;

  _proto.componentDidMount = /*#__PURE__*/function () {
    var _componentDidMount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6() {
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              this.isComponentMounted = true;
              _context6.next = 3;
              return this.createInitialCommands();

            case 3:
              this.updatePanelPosition();
              this.paletteDimensions = {
                height: this.palette.getBoundingClientRect().height,
                width: this.palette.getBoundingClientRect().width
              };

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function componentDidMount() {
      return _componentDidMount.apply(this, arguments);
    }

    return componentDidMount;
  }();

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isComponentMounted = false;
    this.removeEventListeners();
    this.requestUpdate.cancel();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.currentCommand && this.state.currentCommand.command !== this.props.command) {
      this.requestUpdate();
    } else {
      this.requestUpdate.cancel();
    }

    if (!this.state.isClosed) {
      this.bindEventListeners();
    } else {
      this.removeEventListeners();
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    // Todo: Revisit tab index.

    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */

    /* eslint-disable jsx-a11y/tabindex-no-positive */
    if (this.state.isClosed) {
      return null;
    }

    var root = window.document.body;
    return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React__default.createElement("div", {
      tabIndex: "1",
      ref: function ref(_ref6) {
        _this2.palette = _ref6;
      },
      style: {
        position: 'absolute',
        outline: 'none',
        minWidth: 200,
        top: this.state.anchorPosition.top,
        left: this.state.anchorPosition.left
      }
    }, /*#__PURE__*/React__default.createElement(forma36ReactComponents.InViewport, {
      onOverflowBottom: function onOverflowBottom() {
        if (_this2.state.panelPosition !== 'top') {
          _this2.setState({
            panelPosition: 'top'
          }, _this2.updatePanelPosition);
        }
      },
      onOverflowTop: function onOverflowTop() {
        if (_this2.state.panelPosition !== 'bottom') {
          _this2.setState({
            panelPosition: 'bottom'
          }, _this2.updatePanelPosition);
        }
      }
    }, /*#__PURE__*/React__default.createElement(CommandPanel, {
      searchString: this.props.command === '/' ? '' : this.props.command,
      items: this.state.items,
      isLoading: this.state.isLoading,
      isUpdating: this.state.isUpdating,
      onClose: function onClose() {
        _this2.setState({
          isClosed: true
        });
      },
      breadcrumb: this.state.breadcrumb,
      richTextAPI: this.props.richTextAPI
    }))), root);
  };

  _proto.updatePanelPosition = function updatePanelPosition() {
    var _this3 = this;

    var anchorRect = document.getSelection().getRangeAt(0).getBoundingClientRect();
    this.setState(function (prevState) {
      return {
        anchorPosition: {
          top: prevState.panelPosition === 'bottom' ? anchorRect.bottom : anchorRect.top - _this3.paletteDimensions.height,
          left: anchorRect.left
        }
      };
    });
  };

  return CommandPalette;
}(React__default.PureComponent);

CommandPalette.propTypes = {
  editor: PropTypes.object,
  command: PropTypes.string,
  richTextAPI: PropTypes.object
};

var CommandPalette$1 = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(CommandPalette$1, _React$PureComponent);

  function CommandPalette$1(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    var field = _this.props.richTextAPI.sdk.field;
    _this.state = {
      embedsEnabled: isEmbeddingEnabled(field)
    };
    return _this;
  }

  var _proto = CommandPalette$1.prototype;

  _proto.render = function render() {
    if (!hasCommandPaletteDecoration(this.props.editor) || !this.state.embedsEnabled) {
      return null;
    }

    return /*#__PURE__*/React__default.createElement(CommandPalette, {
      editor: this.props.editor,
      richTextAPI: this.props.richTextAPI,
      command: getCommandText(this.props.editor)
    });
  };

  return CommandPalette$1;
}(React__default.PureComponent);

CommandPalette$1.propTypes = {
  editor: PropTypes.object,
  richTextAPI: PropTypes.object
};

var CommandMark = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(CommandMark, _React$PureComponent);

  function CommandMark() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = CommandMark.prototype;

  _proto.render = function render() {
    // Todo: Revisit tab index.

    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */

    /* eslint-disable jsx-a11y/tabindex-no-positive */
    var _this$props = this.props,
        children = _this$props.children,
        attributes = _this$props.attributes;
    return /*#__PURE__*/React__default.createElement("span", _extends({
      tabIndex: "1"
    }, attributes, {
      className: "command-context"
    }), children);
  };

  return CommandMark;
}(React__default.PureComponent);

CommandMark.propTypes = {
  children: PropTypes.node.isRequired,
  editor: PropTypes.object,
  attributes: PropTypes.object
};

var CommandPalettePlugin = function CommandPalettePlugin(_ref) {
  var richTextAPI = _ref.richTextAPI;
  return {
    /* eslint-disable react/display-name */
    decorateNode: function decorateNode(_node, editor, next) {
      var others = next();
      var decoration = getDecorationOrDefault(editor);

      if (decoration) {
        return [].concat(others, [decoration]);
      }

      return [].concat(others);
    },
    renderMark: function renderMark(props, editor, next) {
      if (hasCommandPaletteMarkType(props.mark.type)) {
        return /*#__PURE__*/React__default.createElement(CommandMark, {
          attributes: props.attributes,
          editor: editor
        }, props.children);
      }

      return next();
    },
    renderEditor: function renderEditor(_props, editor, next) {
      var children = next();
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children, /*#__PURE__*/React__default.createElement(CommandPalette$1, {
        anchor: editor.state.commandMark,
        value: editor.value,
        editor: editor,
        richTextAPI: richTextAPI
      }));
    }
  };
};

/**
 * Checks if the first block in the document is void and is focused.
 *
 * @param {Slate.Editor} editor
 * @returns {Boolean}
 */

function isVoidBlockFirstAndFocused(editor) {
  return editor.value.document.getBlocks().first() === editor.value.focusBlock && editor.isVoid(editor.value.focusBlock);
}
/**
 * Inserts and focuses an empty paragraph as a first child to the document.
 *
 * @param {Slate.Editor} editor
 * @returns {void}
 */

function insertParagraphAndFocusToStartOfDocument(editor) {
  editor.splitBlock().moveToStartOfDocument().setBlocks(richTextTypes.BLOCKS.PARAGRAPH).focus();
}

/**
 *  Provides a way to insert content before the first void block in the document.
 */

var InsertBeforeFirstVoidBlockPlugin = function InsertBeforeFirstVoidBlockPlugin() {
  return {
    onKeyDown: function onKeyDown(event, editor, next) {
      if (isHotkey('enter', event) && isVoidBlockFirstAndFocused(editor)) {
        insertParagraphAndFocusToStartOfDocument(editor);
        return;
      }

      return next();
    }
  };
};

function buildPlugins(richTextAPI) {
  return [{
    schema: schema
  }, InsertBeforeFirstVoidBlockPlugin(), BoldPlugin({
    richTextAPI: richTextAPI
  }), ItalicPlugin({
    richTextAPI: richTextAPI
  }), SubscriptPlugin({
    richTextAPI: richTextAPI
  }), SuperscriptPlugin({
    richTextAPI: richTextAPI
  }), UnderlinedPlugin({
    richTextAPI: richTextAPI
  }), CodePlugin({
    richTextAPI: richTextAPI
  }), QuotePlugin({
    richTextAPI: richTextAPI
  }), HyperlinkPlugin({
    richTextAPI: richTextAPI
  }), Heading1Plugin({
    richTextAPI: richTextAPI
  }), Heading2Plugin({
    richTextAPI: richTextAPI
  }), Heading3Plugin({
    richTextAPI: richTextAPI
  }), Heading4Plugin({
    richTextAPI: richTextAPI
  }), Heading5Plugin({
    richTextAPI: richTextAPI
  }), Heading6Plugin({
    richTextAPI: richTextAPI
  }), ParagraphPlugin(), HrPlugin(), EmbeddedEntryInlinePlugin({
    richTextAPI: richTextAPI
  }), EmbeddedEntryBlockPlugin({
    richTextAPI: richTextAPI
  }), EmbeddedAssetBlockPlugin({
    richTextAPI: richTextAPI
  }), ListPlugin(), PastePlugin({
    richTextAPI: richTextAPI
  }), PasteHtmlPlugin(), PasteTextPlugin(), CommandPalettePlugin({
    richTextAPI: richTextAPI
  }), TrailingBlock({
    type: richTextTypes.BLOCKS.PARAGRAPH
  }), NewLinePlugin()];
}

var EntryEmbedDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(EntryEmbedDropdown, _Component);

  function EntryEmbedDropdown() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EntryEmbedDropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onToggle = _this$props.onToggle,
        isOpen = _this$props.isOpen,
        onClose = _this$props.onClose,
        children = _this$props.children;
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.Dropdown, {
      className: "toolbar-entry-dropdown",
      position: "bottom-right",
      toggleElement: /*#__PURE__*/React__default.createElement(forma36ReactComponents.Button, {
        onClick: onToggle,
        "data-test-id": "toolbar-entry-dropdown-toggle",
        className: "toolbar-entry-dropdown-toggle",
        indicateDropdown: true,
        buttonType: "muted",
        size: "small",
        icon: "Plus",
        disabled: this.props.disabled
      }, "Embed"),
      isOpen: isOpen,
      onClose: onClose
    }, /*#__PURE__*/React__default.createElement(forma36ReactComponents.DropdownList, {
      className: "toolbar-entry-dropdown-list"
    }, children));
  };

  return EntryEmbedDropdown;
}(React.Component);

EntryEmbedDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  onToggle: PropTypes.func
};

var styles$a = {
  embedActionsWrapper: /*#__PURE__*/emotion.css({
    display: ['-webkit-box', '-ms-flexbox', 'flex'],
    webkitAlignSelf: 'flex-start',
    alignSelf: 'flex-start',
    msFlexItemAlign: 'start',
    marginLeft: 'auto'
  }),
  formattingOptionsWrapper: /*#__PURE__*/emotion.css({
    display: ['-webkit-box', '-ms-flexbox', 'flex'],
    msFlexAlign: 'center',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    marginRight: '20px'
  })
};

var Toolbar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Toolbar, _React$Component);

  function Toolbar() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.hasMounted = false;
    _this.isReadyToSetFocusProgrammatically = false;
    _this.state = _extends({
      headingMenuOpen: false,
      canAccessAssets: false
    }, getValidationInfo(_this.props.richTextAPI.sdk.field));

    _this.onChange = function () {
      var _this$props;

      _this.setState({
        headingMenuOpen: false
      });

      (_this$props = _this.props).onChange.apply(_this$props, arguments);
    };

    _this.toggleEmbedDropdown = function () {
      return _this.setState(function (prevState) {
        return {
          isEmbedDropdownOpen: !prevState.isEmbedDropdownOpen
        };
      });
    };

    _this.handleEmbedDropdownClose = function () {
      return _this.setState({
        isEmbedDropdownOpen: false
      });
    };

    _this.renderEmbeds = function (props) {
      var field = _this.props.richTextAPI.sdk.field;
      var inlineEntryEmbedEnabled = isNodeTypeEnabled(field, richTextTypes.INLINES.EMBEDDED_ENTRY);
      var blockEntryEmbedEnabled = isNodeTypeEnabled(field, richTextTypes.BLOCKS.EMBEDDED_ENTRY);
      var blockAssetEmbedEnabled = _this.state.canAccessAssets && isNodeTypeEnabled(field, richTextTypes.BLOCKS.EMBEDDED_ASSET);
      var numEnabledEmbeds = [inlineEntryEmbedEnabled, blockEntryEmbedEnabled, blockAssetEmbedEnabled].filter(Boolean).length;
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$a.embedActionsWrapper
      }, numEnabledEmbeds > 1 ? /*#__PURE__*/React__default.createElement(EntryEmbedDropdown, {
        onToggle: _this.toggleEmbedDropdown,
        isOpen: _this.state.isEmbedDropdownOpen,
        disabled: props.disabled,
        onClose: _this.handleEmbedDropdownClose
      }, blockEntryEmbedEnabled && /*#__PURE__*/React__default.createElement(EntityLinkToolbarIcon, _extends({
        nodeType: richTextTypes.BLOCKS.EMBEDDED_ENTRY
      }, props)), inlineEntryEmbedEnabled && /*#__PURE__*/React__default.createElement(EntryLinkToolbarIcon, props), blockAssetEmbedEnabled && /*#__PURE__*/React__default.createElement(EntityLinkToolbarIcon, _extends({
        nodeType: richTextTypes.BLOCKS.EMBEDDED_ASSET
      }, props))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, blockEntryEmbedEnabled && /*#__PURE__*/React__default.createElement(EntityLinkToolbarIcon, _extends({
        nodeType: richTextTypes.BLOCKS.EMBEDDED_ENTRY,
        isButton: true
      }, props)), inlineEntryEmbedEnabled && /*#__PURE__*/React__default.createElement(EntryLinkToolbarIcon, _extends({
        isButton: true
      }, props)), blockAssetEmbedEnabled && /*#__PURE__*/React__default.createElement(EntityLinkToolbarIcon, _extends({
        nodeType: richTextTypes.BLOCKS.EMBEDDED_ASSET,
        isButton: true
      }, props))));
    };

    _this.toggleHeadingMenu = function (event) {
      event.preventDefault();

      _this.setState(function (prevState) {
        return {
          headingMenuOpen: !prevState.headingMenuOpen
        };
      });
    };

    _this.closeHeadingMenu = function () {
      return _this.setState({
        headingMenuOpen: false
      });
    };

    return _this;
  }

  var _proto = Toolbar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.hasMounted = true;
    this.props.richTextAPI.sdk.access.can('read', 'Asset').then(function (canReadAssets) {
      if (_this2.hasMounted) {
        // Prevent setting state on unmounted component
        _this2.setState({
          canAccessAssets: canReadAssets
        });
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.hasMounted = false;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        editor = _this$props2.editor,
        isDisabled = _this$props2.isDisabled,
        richTextAPI = _this$props2.richTextAPI;

    if (editor.value.selection.isFocused) {
      // If the Slate input has ever been focused by the user, we can now also
      // programmatically use `editor.setFocus()` without undesired side-effects.
      this.isReadyToSetFocusProgrammatically = true;
    }

    var props = {
      editor: editor,
      onToggle: this.onChange,
      onCloseEmbedMenu: this.toggleEmbedDropdown,
      disabled: isDisabled,
      richTextAPI: richTextAPI,
      canAutoFocus: this.isReadyToSetFocusProgrammatically
    };
    var field = richTextAPI.sdk.field;
    var _this$state = this.state,
        isAnyHyperlinkEnabled = _this$state.isAnyHyperlinkEnabled,
        isAnyListEnabled = _this$state.isAnyListEnabled,
        isAnyMarkEnabled = _this$state.isAnyMarkEnabled;
    var currentBlockType = props.editor.value.blocks.getIn([0, 'type']);
    return /*#__PURE__*/React__default.createElement(forma36ReactComponents.EditorToolbar, {
      "data-test-id": "toolbar"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$a.formattingOptionsWrapper
    }, /*#__PURE__*/React__default.createElement(HeadingDropdown, {
      onToggle: this.toggleHeadingMenu,
      isToggleActive: true,
      isOpen: this.state.headingMenuOpen,
      onClose: this.closeHeadingMenu,
      currentBlockType: currentBlockType,
      disabled: props.disabled
    }, /*#__PURE__*/React__default.createElement(Paragraph$1, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.HEADING_1) && /*#__PURE__*/React__default.createElement(Heading1, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.HEADING_2) && /*#__PURE__*/React__default.createElement(Heading2, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.HEADING_3) && /*#__PURE__*/React__default.createElement(Heading3, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.HEADING_4) && /*#__PURE__*/React__default.createElement(Heading4, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.HEADING_5) && /*#__PURE__*/React__default.createElement(Heading5, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.HEADING_6) && /*#__PURE__*/React__default.createElement(Heading6, props)), isAnyMarkEnabled && /*#__PURE__*/React__default.createElement(forma36ReactComponents.EditorToolbarDivider, {
      testId: "mark-divider"
    }), isMarkEnabled(field, richTextTypes.MARKS.BOLD) && /*#__PURE__*/React__default.createElement(Bold$1, props), isMarkEnabled(field, richTextTypes.MARKS.ITALIC) && /*#__PURE__*/React__default.createElement(Italic$1, props), isMarkEnabled(field, richTextTypes.MARKS.UNDERLINE) && /*#__PURE__*/React__default.createElement(Underlined$1, props), isMarkEnabled(field, richTextTypes.MARKS.CODE) && /*#__PURE__*/React__default.createElement(Code$1, props), isMarkEnabled(field, richTextTypes.MARKS.SUPERSCRIPT) && /*#__PURE__*/React__default.createElement(Superscript$1, props), isMarkEnabled(field, richTextTypes.MARKS.SUBSCRIPT) && /*#__PURE__*/React__default.createElement(Subscript$1, props), isAnyHyperlinkEnabled && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(forma36ReactComponents.EditorToolbarDivider, {
      testId: "hyperlink-divider"
    }), /*#__PURE__*/React__default.createElement(HyperlinkToolbarIcon, props)), isAnyListEnabled && /*#__PURE__*/React__default.createElement(forma36ReactComponents.EditorToolbarDivider, {
      testId: "list-divider"
    }), isNodeTypeEnabled(field, richTextTypes.BLOCKS.UL_LIST) && /*#__PURE__*/React__default.createElement(UnorderedList, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.OL_LIST) && /*#__PURE__*/React__default.createElement(OrderedList, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.QUOTE) && /*#__PURE__*/React__default.createElement(Quote, props), isNodeTypeEnabled(field, richTextTypes.BLOCKS.HR) && /*#__PURE__*/React__default.createElement(Hr$1, props)), this.renderEmbeds(props));
  };

  return Toolbar;
}(React__default.Component);

Toolbar.propTypes = {
  richTextAPI: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  editor: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

function getValidationInfo(field) {
  var isAnyMarkEnabled = isMarkEnabled(field, richTextTypes.MARKS.BOLD) || isMarkEnabled(field, richTextTypes.MARKS.ITALIC) || isMarkEnabled(field, richTextTypes.MARKS.UNDERLINE) || isMarkEnabled(field, richTextTypes.MARKS.CODE) || isMarkEnabled(field, richTextTypes.MARKS.SUPERSCRIPT) || isMarkEnabled(field, richTextTypes.MARKS.SUBSCRIPT);
  var isAnyHyperlinkEnabled = isNodeTypeEnabled(field, richTextTypes.INLINES.HYPERLINK) || isNodeTypeEnabled(field, richTextTypes.INLINES.ASSET_HYPERLINK) || isNodeTypeEnabled(field, richTextTypes.INLINES.ENTRY_HYPERLINK);
  var isAnyListEnabled = isNodeTypeEnabled(field, richTextTypes.BLOCKS.UL_LIST) || isNodeTypeEnabled(field, richTextTypes.BLOCKS.OL_LIST) || isNodeTypeEnabled(field, richTextTypes.BLOCKS.QUOTE) || isNodeTypeEnabled(field, richTextTypes.BLOCKS.HR);
  return {
    isAnyMarkEnabled: isAnyMarkEnabled,
    isAnyHyperlinkEnabled: isAnyHyperlinkEnabled,
    isAnyListEnabled: isAnyListEnabled
  };
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n    position: -webkit-sticky;\n    position: sticky;\n    top: -1px;\n    z-index: 2;\n  "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var styles$b = {
  nativeSticky: /*#__PURE__*/emotion.css( /*#__PURE__*/_templateObject$1())
};

var StickyToolbarWrapper = function StickyToolbarWrapper(_ref) {
  var isDisabled = _ref.isDisabled,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: isDisabled ? '' : styles$b.nativeSticky
  }, children);
};

StickyToolbarWrapper.propTypes = {
  isDisabled: PropTypes.bool,
  children: PropTypes.node
};

var STYLE_EDITOR_BORDER = "1px solid " + tokens.colorElementDark;
var styles$c = {
  root: /*#__PURE__*/emotion.css({
    position: 'relative'
  }),
  editor: /*#__PURE__*/emotion.css({
    borderRadius: '0 0 3px 3px',
    border: STYLE_EDITOR_BORDER,
    borderTop: 0,
    padding: '20px',
    fontSize: tokens.spacingM,
    minHeight: '400px',
    background: tokens.colorWhite,
    outline: 'none',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    webkitUserModify: 'read-write-plaintext-only',
    a: {
      span: {
        cursor: 'not-allowed',
        '&:hover': {
          cursor: 'not-allowed'
        }
      }
    }
  }),
  hiddenToolbar: /*#__PURE__*/emotion.css({
    borderTop: STYLE_EDITOR_BORDER
  }),
  enabled: /*#__PURE__*/emotion.css({
    background: tokens.colorWhite,
    a: {
      span: {
        cursor: 'pointer',
        '&:hover': {
          cursor: 'pointer'
        }
      }
    }
  }),
  disabled: /*#__PURE__*/emotion.css({
    background: tokens.colorElementLightest
  })
};

var createSlateValue = function createSlateValue(contentfulDocument) {
  var document = contentfulSlateJSAdapter.toSlatejsDocument({
    document: contentfulDocument,
    schema: schema
  });
  var value = slate.Value.fromJSON({
    document: document,
    schema: schema
  }); // Normalize document instead of doing this in the Editor instance as this would
  // trigger unwanted operations that would result in an unwanted version bump.
  // TODO: This normalization step wouldn't be necessary if we had a perfect
  // adapter for the version of Slate we are currently using.

  var editor = new slate.Editor({
    readOnly: true,
    value: value
  }, {
    normalize: true
  });
  var normalizedValue = editor.value;
  return normalizedValue;
};

var EMPTY_SLATE_DOCUMENT = /*#__PURE__*/createSlateValue(richTextTypes.EMPTY_DOCUMENT);
var ConnectedRichTextEditor = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ConnectedRichTextEditor, _React$Component);

  function ConnectedRichTextEditor() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      lastOperations: immutable.List(),
      value: _this.props.value && _this.props.value.nodeType === richTextTypes.BLOCKS.DOCUMENT ? createSlateValue(_this.props.value) : EMPTY_SLATE_DOCUMENT
    };
    _this.editor = /*#__PURE__*/React__default.createRef();
    _this.richTextAPI = createRichTextAPI({
      sdk: _this.props.sdk,
      onAction: _this.props.onAction
    });
    _this.slatePlugins = buildPlugins(_this.richTextAPI);

    _this.onChange = function (editor) {
      var value = editor.value,
          operations = editor.operations;

      _this.setState({
        value: value,
        lastOperations: operations.filter(isRelevantOperation)
      });
    };

    _this.callOnChange = debounce(function () {
      var doc = contentfulSlateJSAdapter.toContentfulDocument({
        document: _this.state.value.document.toJSON(),
        schema: schema
      });

      _this.props.onChange(doc);
    }, 500);

    _this.handleKeyDown = function (event, editor, next) {
      var ESC = 27;

      if (event.keyCode === ESC) {
        event.currentTarget.blur();
      }

      return next();
    };

    return _this;
  }

  var _proto = ConnectedRichTextEditor.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isDisabled !== nextProps.isDisabled) {
      return true;
    }

    var isStateValueUpdate = !immutable.is(this.state.value, nextState.value);
    var isPropsValueUpdate = this.props.value !== nextProps.value;
    return isStateValueUpdate || isPropsValueUpdate;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    /* eslint-disable react/no-did-update-set-state */
    var isIncomingChange = function isIncomingChange() {
      return !deepEquals(prevProps.value, _this2.props.value);
    };

    var isDocumentChanged = !this.state.lastOperations.isEmpty();

    if (!this.props.isDisabled && isDocumentChanged) {
      this.setState({
        lastOperations: immutable.List()
      }, function () {
        return _this2.callOnChange();
      });
    } else if (isIncomingChange()) {
      this.setState({
        value: createSlateValue(this.props.value)
      });
    }
  } // eslint-disable-next-line no-unused-vars
  ;

  _proto.render = function render() {
    var classNames = emotion.cx(styles$c.editor, this.props.isDisabled ? styles$c.disabled : styles$c.enabled, this.props.isToolbarHidden && styles$c.hiddenToolbar);
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles$c.root,
      "data-test-id": "rich-text-editor"
    }, !this.props.isToolbarHidden && /*#__PURE__*/React__default.createElement(StickyToolbarWrapper, {
      isDisabled: this.props.isDisabled
    }, /*#__PURE__*/React__default.createElement(Toolbar, {
      editor: this.editor.current || new slate.Editor({
        readOnly: true
      }),
      onChange: this.onChange,
      isDisabled: this.props.isDisabled,
      richTextAPI: this.richTextAPI
    })), /*#__PURE__*/React__default.createElement(slateReact.Editor, {
      "data-test-id": "editor",
      value: this.state.value,
      ref: this.editor,
      onChange: this.onChange,
      onKeyDown: this.handleKeyDown,
      plugins: this.slatePlugins,
      readOnly: this.props.isDisabled,
      className: classNames,
      actionsDisabled: this.props.actionsDisabled,
      options: {
        normalize: false // No initial normalizaiton as we pass a normalized document.

      }
    }));
  };

  return ConnectedRichTextEditor;
}(React__default.Component);
/**
 * Returns whether a given operation is relevant enough to trigger a save.
 *
 * @param {slate.Operation} op
 * @returns {boolean}
 */

ConnectedRichTextEditor.propTypes = {
  sdk: /*#__PURE__*/PropTypes.shape({
    field: /*#__PURE__*/PropTypes.shape({
      id: PropTypes.string.isRequired,
      locale: PropTypes.string.isRequired
    }).isRequired,
    access: /*#__PURE__*/PropTypes.shape({
      can: PropTypes.func.isRequired
    }).isRequired,
    parameters: /*#__PURE__*/PropTypes.shape({
      instance: /*#__PURE__*/PropTypes.shape({
        getEntryUrl: PropTypes.func,
        getAssetUrl: PropTypes.func
      }).isRequired
    })
  }).isRequired,
  value: PropTypes.object,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onAction: PropTypes.func,
  isToolbarHidden: PropTypes.bool,
  actionsDisabled: PropTypes.bool
};
ConnectedRichTextEditor.defaultProps = {
  value: richTextTypes.EMPTY_DOCUMENT,
  onChange: noop,
  onAction: noop,
  isDisabled: false,
  isToolbarHidden: false,
  actionsDisabled: false
};

function isRelevantOperation(op) {
  if (op.type === 'set_value') {
    if (op.properties.data) {
      // Relevant for undo/redo that can be empty ops that we want to ignore.
      return false;
    }
  } else if (op.type === 'set_selection') {
    return false;
  }

  return true;
}

function RichTextEditor(props) {
  /* eslint-disable react/prop-types */
  var sdk = props.sdk,
      isInitiallyDisabled = props.isInitiallyDisabled,
      otherProps = _objectWithoutPropertiesLoose(props, ["sdk", "isInitiallyDisabled"]);

  return /*#__PURE__*/React__default.createElement(fieldEditorReference.EntityProvider, {
    sdk: sdk
  }, /*#__PURE__*/React__default.createElement(fieldEditorShared.FieldConnector, {
    throttle: 0,
    field: sdk.field,
    isInitiallyDisabled: isInitiallyDisabled,
    isEmptyValue: function isEmptyValue(value) {
      return !value || deepEquals(value, richTextTypes.EMPTY_DOCUMENT);
    },
    isEqualValues: function isEqualValues(value1, value2) {
      return deepEquals(value1, value2);
    }
  }, function (_ref) {
    var lastRemoteValue = _ref.lastRemoteValue,
        disabled = _ref.disabled,
        setValue = _ref.setValue,
        externalReset = _ref.externalReset;
    return /*#__PURE__*/React__default.createElement(ConnectedRichTextEditor, _extends({}, otherProps, {
      // on external change reset component completely and init with initial value again
      key: "rich-text-editor-" + externalReset,
      value: lastRemoteValue,
      sdk: sdk,
      isDisabled: disabled,
      onChange: function onChange(value) {
        setValue(value);
      }
    }));
  }));
}
RichTextEditor.defaultProps = {
  isInitiallyDisabled: true
};

var openRichTextDialog = function openRichTextDialog(sdk) {
  return function (options) {
    if (options.parameters && options.parameters.type === 'rich-text-hyperlink-dialog') {
      return fieldEditorShared.ModalDialogLauncher.openDialog(options, function (_ref) {
        var onClose = _ref.onClose;
        return /*#__PURE__*/React__default.createElement(HyperlinkDialog, _extends({}, options.parameters, {
          onClose: onClose,
          sdk: sdk
        }));
      });
    }

    return Promise.reject();
  };
};

var renderRichTextDialog = function renderRichTextDialog(sdk) {
  var parameters = sdk.parameters.invocation;

  if (parameters.type === 'rich-text-hyperlink-dialog') {
    sdk.window.startAutoResizer();
    return /*#__PURE__*/React__default.createElement(HyperlinkDialog, _extends({}, sdk.parameters.invocation, {
      onClose: sdk.close,
      sdk: sdk
    }));
  }

  return /*#__PURE__*/React__default.createElement("div", null);
};

exports.ConnectedRichTextEditor = ConnectedRichTextEditor;
exports.RichTextEditor = RichTextEditor;
exports.openRichTextDialog = openRichTextDialog;
exports.renderRichTextDialog = renderRichTextDialog;
//# sourceMappingURL=field-editor-rich-text.cjs.development.js.map
