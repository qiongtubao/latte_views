module.exports = {
	tag: "select",
	view: require("./select.lade"),
	data: {
		selectIndex: 0,
		selectValue: "请选择",
		selects: [{
			key: "黄金糕",
			value: 0
		},{
			key: "双皮奶",
			value: 1
		}],
		show: false,
		selectOpen: function() {
			this.set("show", !this.get("show"));
		}
	},
	dataEvents: [{
		eventType: "selects",
		event: function(value, oldValue) {
			if(oldValue) {
				//暂时还未验证
				oldValue.off("set", oldValue.setFunc);
				oldValue.off("splice", oldValue.spliceFunc)
			}
			var self = this;
			var createClick = function(index) {
				return function() {
					self.set("selectValue", self.get("selects").get(index).get("key"));
					self.set("selectIndex", index);
					self.set("show", false);
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
			self.set("selectValue", "请选择");
			self.set("selectIndex", null);
			value.on("set", setFunc);
			value.setFunc = setFunc;
			value.on("splice", spliceFunc);
			value.spliceFunc = spliceFunc;
		}
	}]
};