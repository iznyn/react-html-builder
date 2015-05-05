var Button = require( './../libs/elements/Button.jsx' );
var clickButton = function()
{
  alert( 'Button clicked' );
  return false;
};
React.render( <Button className="btn-custom" children="Click Here to Download" disabled={true} type="anchor" onClick={clickButton} />, document.querySelector( '.container' )  );
