var className = require( 'className' );
var Mixin     = require( './Mixin.jsx' );

var Button = React.createClass({

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
      <a
        {...this.props}
        href={href}
        className={className(this.props.className, classes)}
        role="button">
        {this.props.children}
      </a>
    );
  },

  renderButton: function( classes )
  {
    return (
      <button
        {...this.props}
        className={className(this.props.className, classes)}>
        {this.props.children}
      </button>
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
