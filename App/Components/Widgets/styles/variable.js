var Color = require("color")

var primary = Color("#565051");
var secondary = Color("#453F41");

var sidebar = Color("#090505");
var darken = primary.darken(0.2).hexString().toString();

module.exports = {
	brandPrimary : primary.hexString().toString(),
	brandSecondary: secondary.hexString().toString(),
	
	brandSidebar: sidebar.hexString().toString(),
	darker: darken
}