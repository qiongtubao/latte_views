module.exports = {
	tag: "tab",
	view: require("./tab.lade"),
	data: {
		tabIndex: 0,
		tabs: [{
			name: "多选",
			route: {
				index: "checkbox",
				checkbox: {
					view: require("./checkbox.lade"),
					data: {
						checkbox: require("./checkbox.js").data
					}
				}
			},
			selected: "active"
		},{
			name: "单选",
			route: {
				index: "radio",
				radio: {
					view: require("./radio.lade"),
					data: {
						radio: require("./radio.js").data
					}
				}
			}
		}]
	},
	dataEvents: [{
		eventType: "tabs",
		event: function(value, oldValue) {
			if(oldValue) {
				//暂时还未验证
				oldValue.off("set", oldValue.setFunc);
				oldValue.off("splice", oldValue.spliceFunc)
			}
			console.log(value);
			var self = this;
			var createClick = function(index) {
				return function() {
					var oldIndex = self.get("tabIndex");
					self.get("tabs").get(oldIndex).set("selected", "");
					self.get("tabs").get(index).set("selected", "is-active");
					//self.set("selectValue", self.get("selects").get(index).get("key"));
					self.set("tabIndex", index);
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
			value.on("set", setFunc);
			value.setFunc = setFunc;
			value.on("splice", spliceFunc);
			value.spliceFunc = spliceFunc;
		}
	}]
};