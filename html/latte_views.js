
(function(define) {'use strict'
define("latte_views/checkbox.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {

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
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("latte_views/checkbox.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
	"glasss" : 
	[
		"latte-checkbox",
		"checkbox"
	] ,
	"latte" : 
	{
		"data" : "checkbox",
		"list" : "checkboxs"
	},
	"attribute" : 
	{

	},
	"childrens" : 
	[
		{
			"tag" : "latte",
			"glasss" : 
			[

			] ,
			"latte" : 
			{

			},
			"attribute" : 
			{

			},
			"childrens" : 
			[
				{
					"tag" : "latte",
					"glasss" : 
					[
						"latte-checkbox-input"
					] ,
					"latte" : 
					{
						"click" : "click",
						"glass" : "{{checkedClass}}"
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[
						{
							"tag" : "latte",
							"glasss" : 
							[
								"latte-checkbox-inner"
							] ,
							"latte" : 
							{

							},
							"attribute" : 
							{

							},
							"childrens" : 
							[

							] 
						}
					] 
				},
				{
					"tag" : "span",
					"glasss" : 
					[
						"latte-checkbox-label"
					] ,
					"latte" : 
					{

					},
					"attribute" : 
					{

					},
					"text" : "{{key}}",
					"childrens" : 
					[

					] 
				}
			] 
		}
	] 
}
 	});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("latte_views/radio.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {

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
			console.log(this.get("radios." + this.get("selectIndex")).set("checkedClass", "is-checked"));
			//value.get("radios."+value.get('selectIndex')).set("checkedClass", "is-checked");
			value.on("set", setFunc);
			value.setFunc = setFunc;
			value.on("splice", spliceFunc);
			value.spliceFunc = spliceFunc;
		}
	}]
};
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("latte_views/radio.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
	"glasss" : 
	[
		"latte-radio"
	] ,
	"latte" : 
	{
		"data" : "radio"
	},
	"attribute" : 
	{

	},
	"childrens" : 
	[
		{
			"tag" : "latte",
			"glasss" : 
			[
				"radio"
			] ,
			"latte" : 
			{
				"list" : "radios"
			},
			"attribute" : 
			{

			},
			"childrens" : 
			[
				{
					"tag" : "latte",
					"glasss" : 
					[

					] ,
					"latte" : 
					{

					},
					"attribute" : 
					{

					},
					"childrens" : 
					[
						{
							"tag" : "latte",
							"glasss" : 
							[
								"latte-radio-input"
							] ,
							"latte" : 
							{
								"click" : "click",
								"glass" : "{{checkedClass}}"
							},
							"attribute" : 
							{

							},
							"childrens" : 
							[
								{
									"tag" : "latte",
									"glasss" : 
									[
										"latte-radio-inner"
									] ,
									"latte" : 
									{

									},
									"attribute" : 
									{

									},
									"childrens" : 
									[

									] 
								}
							] 
						},
						{
							"tag" : "span",
							"glasss" : 
							[

							] ,
							"latte" : 
							{

							},
							"attribute" : 
							{

							},
							"text" : "{{key}}",
							"childrens" : 
							[

							] 
						}
					] 
				}
			] 
		}
	] 
}
 	});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("latte_views/select.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
module.exports = {
	tag: "select",
	view: require("./select.lade"),
	data: {
		status:"select-close",
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
			var status = !this.get("show");
			
			this.set("status", status ? "select-open": "select-close");
			this.set("show", status);
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
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("latte_views/select.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
	"glasss" : 
	[
		"latte-select"
	] ,
	"latte" : 
	{
		"data" : "select"
	},
	"attribute" : 
	{

	},
	"childrens" : 
	[
		{
			"tag" : "div",
			"glasss" : 
			[
				"latte-input"
			] ,
			"latte" : 
			{

			},
			"attribute" : 
			{

			},
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"latte-input-icon",
						"latte-icon-caret-top"
					] ,
					"latte" : 
					{
						"glass" : "{{status}}",
						"click" : "selectOpen"
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[

					] 
				},
				{
					"tag" : "input",
					"glasss" : 
					[
						"latte-input-inner"
					] ,
					"latte" : 
					{
						"duplex" : "selectValue"
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[

					] 
				}
			] 
		},
		{
			"tag" : "div",
			"glasss" : 
			[
				"latte-select-dropdown-wrap",
				"latte-scrollbar-warp"
			] ,
			"latte" : 
			{
				"show" : "{{show}}"
			},
			"attribute" : 
			{

			},
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"latte-scrollbar-view",
						"latte-select-dropdown-list"
					] ,
					"latte" : 
					{
						"list" : "selects"
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[
						{
							"tag" : "div",
							"glasss" : 
							[
								"latte-select-dropdown-item",
								"li"
							] ,
							"latte" : 
							{
								"click" : "click"
							},
							"attribute" : 
							{

							},
							"childrens" : 
							[
								{
									"tag" : "latte",
									"glasss" : 
									[

									] ,
									"latte" : 
									{

									},
									"attribute" : 
									{

									},
									"text" : "{{key}}",
									"childrens" : 
									[

									] 
								}
							] 
						}
					] 
				}
			] 
		}
	] 
}
 	});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("latte_views/selectScroll.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
module.exports = {
	tag: "selectScroll",
	view: require("./selectScroll.lade"),
	data: {
		status:"select-close",
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
			var status = !this.get("show");
			this.set("status", status ? "select-open": "select-close");
			this.set("show", status);
		},
		scrollTop: 0,
		scroll: function(e, view) {
			console.log(e);
			/**
			console.log(e);
			var hourScrollDom = view.node();
			var len = view.getChildren(0).children.length;
			var allHeight = view.getChildren(0).style("height");
			var index = allHeight.indexOf("px");
			var allH = allHeight.substring(0, index) - 0;
			var height = allH/len;
			var index = Math.round(hourScrollDom.scrollTop/height);
			console.log("start",hourScrollDom.scrollTop);
			this.set("selectIndex", index);
			this.set("selectValue", this.get("selects").get(index).get("key"));
			this.set("scrollTop", (index)*height );
			console.log("end",(index)*height, view.node().scrollTop);
			*/
			var hourScrollDom = view.node();
			var len = view.getChildren(0).children.length;
			var allHeight = view.getChildren(0).style("height");
			var index = allHeight.indexOf("px");
			var allH = allHeight.substring(0, index) - 0;
			var height = allH/len;
			var index = Math.round(hourScrollDom.scrollTop/height);
			this.set("selectIndex", index);
			this.set("selectValue", this.get("selects").get(index).get("key"));
			//console.log(this.get("scrollTop"), index);
			//this.set("scrollTop", (index)* height );
			//console.log(this.get("scrollTop"), index,view.node().scrollTop);
			//console.log(view.now().scrollTop);
			

			//console.log(view.node());
			console.log(hourScrollDom, hourScrollDom.scrollTop, (index) , height);

			hourScrollDom.scrollTop =(index) * height;
			//view.node().scrollTop = index * height + "px";
			
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
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("latte_views/selectScroll.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
	"glasss" : 
	[
		"latte-selectScroll"
	] ,
	"latte" : 
	{
		"data" : "selectScroll"
	},
	"attribute" : 
	{

	},
	"childrens" : 
	[
		{
			"tag" : "div",
			"glasss" : 
			[
				"latte-input"
			] ,
			"latte" : 
			{

			},
			"attribute" : 
			{

			},
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"latte-input-icon",
						"latte-icon-caret-top"
					] ,
					"latte" : 
					{
						"glass" : "{{status}}",
						"click" : "selectOpen"
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[

					] 
				},
				{
					"tag" : "input",
					"glasss" : 
					[
						"latte-input-inner"
					] ,
					"latte" : 
					{
						"duplex" : "selectValue"
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[

					] 
				}
			] 
		},
		{
			"tag" : "div",
			"glasss" : 
			[
				"latte-selectScroll-wrapper"
			] ,
			"latte" : 
			{
				"show" : "{{show}}"
			},
			"attribute" : 
			{

			},
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"latte-selectScroll-wrap"
					] ,
					"latte" : 
					{
						"scrollTop" : "scrollTop",
						"scroll" : "scroll"
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[
						{
							"tag" : "div",
							"glasss" : 
							[
								"latte-selectScroll-list"
							] ,
							"latte" : 
							{
								"list" : "selects"
							},
							"attribute" : 
							{

							},
							"childrens" : 
							[
								{
									"tag" : "div",
									"glasss" : 
									[
										"latte-selectScroll-item",
										"li"
									] ,
									"latte" : 
									{
										"click" : "click"
									},
									"attribute" : 
									{

									},
									"childrens" : 
									[
										{
											"tag" : "latte",
											"glasss" : 
											[

											] ,
											"latte" : 
											{

											},
											"attribute" : 
											{

											},
											"text" : "{{key}}",
											"childrens" : 
											[

											] 
										}
									] 
								}
							] 
						},
						{
							"tag" : "div",
							"glasss" : 
							[
								"latte-selectScroll-cover"
							] ,
							"latte" : 
							{

							},
							"attribute" : 
							{

							},
							"childrens" : 
							[

							] 
						}
					] 
				}
			] 
		}
	] 
}
 	});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("latte_views/tab.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
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
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("latte_views/tab.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
	"glasss" : 
	[
		"latte-tabs"
	] ,
	"latte" : 
	{
		"data" : "tab"
	},
	"attribute" : 
	{

	},
	"childrens" : 
	[
		{
			"tag" : "div",
			"glasss" : 
			[
				"latte-tabs-header"
			] ,
			"latte" : 
			{

			},
			"attribute" : 
			{

			},
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"latte-tabs-nav-wrap"
					] ,
					"latte" : 
					{

					},
					"attribute" : 
					{

					},
					"childrens" : 
					[
						{
							"tag" : "div",
							"glasss" : 
							[
								"latte-tabs-nav-scroll"
							] ,
							"latte" : 
							{

							},
							"attribute" : 
							{

							},
							"childrens" : 
							[
								{
									"tag" : "div",
									"glasss" : 
									[
										"latte-tabs-nav"
									] ,
									"latte" : 
									{
										"list" : "tabs"
									},
									"attribute" : 
									{

									},
									"childrens" : 
									[
										{
											"tag" : "div",
											"glasss" : 
											[
												"latte-tabs-item"
											] ,
											"latte" : 
											{
												"glass" : "{{selected}}",
												"click" : "click"
											},
											"attribute" : 
											{

											},
											"text" : "{{name}}",
											"childrens" : 
											[

											] 
										}
									] 
								}
							] 
						}
					] 
				}
			] 
		},
		{
			"tag" : "div",
			"glasss" : 
			[
				"latte-tabs-body"
			] ,
			"latte" : 
			{
				"list" : "tabs"
			},
			"attribute" : 
			{

			},
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[

					] ,
					"latte" : 
					{
						"show" : "!!{{selected}} "
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[
						{
							"tag" : "div",
							"glasss" : 
							[

							] ,
							"latte" : 
							{
								"data" : "route"
							},
							"attribute" : 
							{

							},
							"childrens" : 
							[
								{
									"tag" : "div",
									"glasss" : 
									[

									] ,
									"latte" : 
									{
										"route" : "index"
									},
									"attribute" : 
									{

									},
									"childrens" : 
									[

									] 
								}
							] 
						}
					] 
				}
			] 
		}
	] 
}
 	});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
var latteView = latte.require("latte_view");
latteView.addComponents("latte_views/");