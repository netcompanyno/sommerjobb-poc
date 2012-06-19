define([
// Load the original jQuery source file
  'lib/require/order!lib/jquery-1.7.1.min'
], function () {
	// Tell Require.js that this module returns a reference to jQuery
	return $;
});
