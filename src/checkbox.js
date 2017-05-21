
module.exports = {
	tag: "checkbox",
	view: require("./checkbox.lade"),
	data: {
		selectIndexs: [],
		checkboxs:[{
			key: "黄金糕",
			value: 0
		},{
			key: "双皮奶",
			value: 1
		}]
	},
	dataEvents: [{
		eventType: "checkboxs",
		event: function(value, oldValue) {
			if(oldValue) {
				oldValue.off("set", oldValue.setFunc);
				oldValue.off("splice", oldValue.spliceFunc)
			}
			var self = this;
			var createClick = function(index) {
				return function() {
					var checkedClass = value.get(index).get("checkedClass");
					if(checkedClass == "is-checked") {
						value.get(index).set("checkedClass", "");
						self.get("selectIndexs").removeValue(index);
					}else{
						value.get(index).set("checkedClass", "is-checked");
						self.get("selectIndexs").push(index);
					}
				}
			};
			for(var i = 0, len = value.length; i < len; i++ ) {
				value.get(i).set("click", createClick(i));
			}
			var setFunc = function(now, old) {
				var self = this;
				now.set("click", old.get("click"));
			};
			var spliceFunc = function(startIndex, removes, adds) {
				for(var i = 0, len = value.length; i < len; i++ ) {
					value.get(i).set("click", createClick(i));
				}
			};
			self.set("selectIndexs", []);
			value.on("set", setFunc);
			value.setFunc = setFunc;
			value.on("splice", spliceFunc);
			value.spliceFunc = spliceFunc;
		}
	}]
};