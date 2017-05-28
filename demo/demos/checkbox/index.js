var latte_lib = require("latte_lib");
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		checkbox: {

		}
	}
});
obj.on("data.checkbox.selectIndexs", function(data) {
	obj.get("data.checkbox.selectIndexs").on("change", function() {
		obj.set("data.result", JSON.stringify(obj.get("data.checkbox.selectIndexs")));
	});
	obj.set("data.result", JSON.stringify(obj.get("data.checkbox.selectIndexs")));
})
module.exports = obj;