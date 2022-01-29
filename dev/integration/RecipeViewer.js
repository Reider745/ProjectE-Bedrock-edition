var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
ModAPI.addAPICallback("RecipeViewer", function(api){
	var Collector = (function(_super){
  	__extends(Collector, _super);
    function Collector(name, icon, key, content){
      let _this = _super.call(this, name, icon, content) || this;
      _this.ritualKey = key;
      return _this;
    }
    Collector.prototype.getAllList = function() {
    	let recipes = Core.collectors;
      return (function(){
				let list = [];
				let keys = Object.keys(recipes);
				for(let i in keys){
					let item = keys[i].split(":");
					let result = recipes[keys[i]];
					list.push({
    				input: [{id: parseInt(item[0]), data: parseInt(item[1]), count: 1}],
    				output: [{id: result.id, data: result.data, count: 1}],
    				emc: result.emc
     		 });
				}
				return list;
			})();
		};
		Collector.prototype.onOpen = function(elements, data){
			elements.get("emc").onBindingUpdated("text", data.emc+" EMC");
  	}
    return Collector;
  }(api.RecipeType));
  Translation.addTranslation("Collector", {
  	ru: "Сборщик"
  })
	api.RecipeTypeRegistry.register("collector", new Collector(Translation.translate("Collector"), BlockID.energyCollector3, "collector", {
		drawing: [
			{type: "bitmap", x: 410, y: 150, scale: 6, bitmap: "furnProg_0"},
		],
		elements: {
			output0: {x: 290, y: 150, size: 100},
      input0: {x: 590, y: 150, size: 100},
      emc: {type: "text", x: 350, y: 255, font: {size: 40}},
		}
	}));
});