var latte_lib = require("latte_lib");
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		selectScroll: {

		}
	}
});
module.exports = obj;