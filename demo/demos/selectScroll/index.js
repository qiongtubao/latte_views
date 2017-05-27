var latte_lib = require("latte_lib");
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		selectScroll: {
			selects: [{
				key: "1",
				value: 0
			},{
				key: "2",
				value: 1
			},{
				key:"3"
			},{
				key:"4"
			},{
				key: "5",
				value: 0
			},{
				key: "6",
				value: 1
			},{
				key:"7"
			},{
				key:"8"
			},{
				key: "9",
				value: 0
			},{
				key: "10",
				value: 1
			},{
				key:"11"
			},{
				key:"12"
			}]
		}
	}
});
module.exports = obj;