(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Button = require( './../libs/elements/Button.jsx' );
var clickButton = function()
{
  alert( 'Button clicked' );
  return false;
};
React.render( React.createElement(Button, {className: "btn-custom", children: "Click Here to Download", disabled: true, type: "anchor", onClick: clickButton}), document.querySelector( '.container' )  );

},{"./../libs/elements/Button.jsx":2}],2:[function(require,module,exports){
var className = require( 'className' );
var Mixin     = require( './Mixin.jsx' );

var Button = React.createClass({displayName: "Button",

  mixins: [Mixin],

  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    block: React.PropTypes.bool,
    href: React.PropTypes.string,
    target: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      bsClass: 'btn',
      bsStyle: 'default',
      bsSize:  'md',
      type:    'button'
    };
  },

  render: function()
  {
    var classes = this.getBsClass();

    renderFuncName = this.props.href || this.props.target || (this.props.type == 'anchor') ?
      'renderAnchor' : 'renderButton';

    return this[renderFuncName](classes);
  },

  renderAnchor: function( classes )
  {
    var href            = this.props.href || '#';
    var bsDisabled      = this.addClassPrefix( 'disabled' );
    classes[bsDisabled] = this.props.disabled;

    return (
      React.createElement("a", React.__spread({}, 
        this.props, 
        {href: href, 
        className: className(this.props.className, classes), 
        role: "button"}), 
        this.props.children
      )
    );
  },

  renderButton: function( classes )
  {
    return (
      React.createElement("button", React.__spread({}, 
        this.props, 
        {className: className(this.props.className, classes)}), 
        this.props.children
      )
    );
  },

  getBsClass: function()
  {
    var classes = {};

    var bsClass = this.props.bsClass;
    classes[bsClass] = true;

    if ( this.props.bsStyle ) {
      var bsStyle = this.addClassPrefix( this.props.bsStyle );
      classes[bsStyle] = true;
    }

    if ( this.props.bsSize ) {
      var bsSize = this.addClassPrefix( this.props.bsSize );
      classes[bsSize] = true;
    }

    var bsActive = this.addClassPrefix( 'active' );
    classes[bsActive] = this.props.active;

    var bsBlock = this.addClassPrefix( 'block' );
    classes[bsBlock] = this.props.block;

    return classes;
  },

});
module.exports = Button;

},{"./Mixin.jsx":3,"className":4}],3:[function(require,module,exports){
var className = require( 'className' );

var Mixin = {

  PREFIX: false,

  addClassPrefix: function( name )
  {
    var className = '';
    if ( this.PREFIX ) {
        className = this.PREFIX + className;
    }
    if ( this.props.bsClass ) {
        className = className + this.props.bsClass + '-';
    }
    className = className + name;
    return className;
  }
};
module.exports = Mixin;

},{"className":4}],4:[function(require,module,exports){
function classname () {
    var result = {},
        objects = {},
        resultString = "";

    function add (strings) {
        classname.each(strings.split(" "), function (string) {
            result[string] = !!string;
        });
    }

    classname.each([].slice.call(arguments), function (x) {
        switch (classname.getType(x)) {
        case "string":
        case "number":
            add(x);
            break;

        case "array":
            add(classname.apply(null, x));
            break;

        case "element":
            add(classname(x.className || ""));
            break;

        case "nodelist":
            add(classname.apply(null, [].slice.call(x)));
            break;

        case "jquery":
            add(classname.apply(null, x.get()));
            break;

        case "object":
            objects = classname.extend(objects, x);
            break;
        }
    });

    result = classname.extend(result, objects);

    classname.each(result, function (val, key) {
        if (val) {
            resultString += " " + key;
        }
    });

    return resultString.substr(1);
}

classname.setTo = function (elements) {
    var type = classname.getType(elements);

    if (type === "element") {
        elements = [elements];
    }

    if (type === "jquery") {
        elements = elements.get();
    }

    if (type === "nodelist") {
        elements = [].slice.call(elements);
    }

    return function () {
        var classNames = classname.apply(null, arguments);

        classname.each(elements, function (element) {
            element.className = classNames;
        });
    };
};

classname.each = function (arr, fn) {
    var type = classname.getType(arr);

    if (type === "array") {
        for (var i = 0; i < arr.length; i++) {
            fn(arr[i], i);
        }
    }

    if (type === "object") {
        for (var key in arr) {
            fn(arr[key], key);
        }
    }
};

classname.getType = function (x) {
    var type = Object.prototype.toString.call(x).slice(8, -1).toLowerCase();

    if (type === "object" && x.jquery) {
        return "jquery";
    }

    if (type.indexOf("element") > 1) {
        return "element";
    }

    return type;
};

classname.extend = function (obj1, obj2) {
    var result = {},
        objs = [obj1, obj2];

    classname.each(objs, function (obj) {
        classname.each(obj, function (val, key) {
            if (obj.hasOwnProperty(key)) {
                result[key] = val;
            }
        });
    });

    return result;
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = classname;
}

},{}]},{},[2,3,1]);
