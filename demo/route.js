var latte_lib = require("latte_lib");
var route = latte_lib.object.create(
	{
		index: "demos",
		demos: require("./demos/index.js")
	}
);
route.go = function(path) {
	route.set("index", path);
};
module.exports = route;