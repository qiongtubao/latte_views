module.exports = {
	tag: "selectScroll",
	view: require("./selectScroll.lade"),
	data: {
		selectIndex: 0,
		selectValue: "请选择",
		selects: [{
			key: "黄金糕",
			value: 0
		},{
			key: "双皮奶",
			value: 1
		},{
			key:"鸡蛋青椒"
		},{
			key:"番茄炒鸡蛋"
		}],
		show: false,
		selectOpen: function() {
			this.set("show", !this.get("show"));
		},
		scroll: function(e, view) {
			var hourScrollDom = view.node();
			var len = view.getChildren(0).children.length;
			var allHeight = view.getChildren(0).style("height");
			var index = allHeight.indexOf("px");
			var allH = allHeight.substring(0, index) - 0;
			var height = allH/len;
			var index = Math.round(hourScrollDom.scrollTop/height);
			this.set("selectIndex", index);
			console.log(this);
			this.set("selectValue", this.get("selects").get(index).get("key"));
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
					//点击需要支持scrollTop的属性双向绑定
					//self.set("scrollTop", );
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