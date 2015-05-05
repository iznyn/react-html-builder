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
