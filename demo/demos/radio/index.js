var latte_lib = require("latte_lib");
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		radio: {

		}
	}
});
obj.on("data.radio.selectIndex", function(data) {
	console.log(obj.get("data.radio.selectIndex"));
	obj.set("data.result", obj.get("data.radio.selectIndex"));
})
module.exports = obj;