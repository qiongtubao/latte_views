
module.exports = {
	tag: "radio",
	view: require("./radio.lade"),
	data: {
		selectIndex: 0,
		radios:[{
			key: "黄金糕",
			value: 0
		},{
			key: "双皮奶",
			value: 1
		}]
	},
	dataEvents: [{
		eventType: "radios",
		event: function(value, oldValue) {
			if(oldValue) {
				oldValue.off("set", oldValue.setFunc);
				oldValue.off("splice", oldValue.spliceFunc)
			}
			var self = this;
			var createClick = function(index) {
				return function() {
					var oldIndex = self.get('selectIndex');
					value.get(oldIndex).set("checkedClass", "");
					value.get(index).set("checkedClass", "is-checked");
					self.set("selectIndex", index);
					
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