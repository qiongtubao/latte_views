var latte_lib = require("latte_lib");
var click = function() {
	var index = obj.get("data.list").indexOf(this);
	obj.set("data.index", index);
};
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		list: [{
			name: "多选框",
			route: "checkbox",
			activeClass: "active",
			click: click
		},{
			name: "单选框",
			route: "radio",
			click: click
		},{
			name: "下拉",
			route: "select",
			click: click
		}, {
			name: "滚动型选择",
			route: "selectScroll",
			click: click
		}],
		route: {
			index: "checkbox",
			checkbox: require("./checkbox/index.js"),
			radio: require("./radio/index.js"),
			select: require("./select/index.js"),
			selectScroll: require("./selectScroll/index.js")
		}
	}
});
obj.on("data.index", function(now, old) {
	if(old != null) {
		obj.get("data.list").get(old).set("activeClass", "");
	}
	obj.get("data.list").get(now).set("activeClass", "active");
	obj.set("data.route.index", obj.get("data.list").get(now).get("route"));
});
obj.set("data.index", 0);
module.exports = obj;