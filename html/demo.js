
(function(define) {'use strict'
define("demo/demos/checkbox/index.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
var latte_lib = require("latte_lib");
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		checkbox: {

		}
	}
});
module.exports = obj;
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("demo/demos/checkbox/index.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
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
			"tag" : "h3",
			"glasss" : 
			[

			] ,
			"latte" : 
			{

			},
			"attribute" : 
			{

			},
			"text" : "多选框",
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"demo-block"
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
				},
				{
					"tag" : "div",
					"glasss" : 
					[
						"source"
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
							"tag" : "checkbox",
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
define("demo/demos/index.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
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
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("demo/demos/index.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
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
			"tag" : "div",
			"glasss" : 
			[
				"left",
				"el-col-sm-6",
				"el-col-24"
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
					"tag" : "ul",
					"glasss" : 
					[
						"side-nav"
					] ,
					"latte" : 
					{
						"list" : "list"
					},
					"attribute" : 
					{

					},
					"childrens" : 
					[
						{
							"tag" : "li",
							"glasss" : 
							[
								"nav-item"
							] ,
							"latte" : 
							{
								"glass" : "{{activeClass}}"
							},
							"attribute" : 
							{

							},
							"childrens" : 
							[
								{
									"tag" : "a",
									"glasss" : 
									[

									] ,
									"latte" : 
									{
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
		},
		{
			"tag" : "div",
			"glasss" : 
			[
				"right",
				"el-col-sm-18",
				"el-col-24"
			] ,
			"latte" : 
			{
				"route" : "index",
				"data" : "route"
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
 	});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("demo/demos/radio/index.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
var latte_lib = require("latte_lib");
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		radio: {

		}
	}
});
module.exports = obj;
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("demo/demos/radio/index.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
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
			"tag" : "h3",
			"glasss" : 
			[

			] ,
			"latte" : 
			{

			},
			"attribute" : 
			{

			},
			"text" : "单选框",
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"demo-block"
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
				},
				{
					"tag" : "div",
					"glasss" : 
					[
						"source"
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
							"tag" : "radio",
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
define("demo/demos/select/index.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
var latte_lib = require("latte_lib");
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		select: {

		}
	}
});
module.exports = obj;
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("demo/demos/select/index.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
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
			"tag" : "h3",
			"glasss" : 
			[

			] ,
			"latte" : 
			{

			},
			"attribute" : 
			{

			},
			"text" : "下拉选择",
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"demo-block"
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
				},
				{
					"tag" : "div",
					"glasss" : 
					[
						"source"
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
							"tag" : "select",
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
define("demo/demos/selectScroll/index.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
var latte_lib = require("latte_lib");
var obj = latte_lib.object.create({
	view: require("./index.lade"),
	data: {
		selectScroll: {

		}
	}
});
module.exports = obj;
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("demo/demos/selectScroll/index.lade", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports={
	"tag" : "div",
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
			"tag" : "h3",
			"glasss" : 
			[

			] ,
			"latte" : 
			{

			},
			"attribute" : 
			{

			},
			"text" : "滚动选择",
			"childrens" : 
			[
				{
					"tag" : "div",
					"glasss" : 
					[
						"demo-block"
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
				},
				{
					"tag" : "div",
					"glasss" : 
					[
						"source"
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
							"tag" : "selectScroll",
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
define("demo/index.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
var latte_lib = require("latte_lib");
var latteView = latte.require("latte_view");
var route = require("./route");
var latteView = latteView.create("demo");
latteView.route(route);
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("demo/route.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
var latte_lib = require("latte_lib");
var route = latte_lib.object.create(
	{
		index: "demos",
		demos: require("./demos/index.js")
	}
);
route.go = function(path) {
	route.set("index", path);
};
module.exports = route;
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });