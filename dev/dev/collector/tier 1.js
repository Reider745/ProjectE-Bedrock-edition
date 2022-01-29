Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 10
}, "light");

IDRegistry.genBlockID("energyCollector1");
Block.createBlockWithRotation("energyCollector1", [
	 {name: "Energy Collector I", texture: [
	   ["collectorOther",0],
	   ["collectorTop",0],
	   ["collectorOther",0],
	   ["collectorFront",0],
	   ["collectorOther",0],
	   ["collectorOther",0],
  ],inCreative: true}
], "light");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCollector1, count: 1, data: 0},
  ["glg",
   "gdg",
   "gfg"],
  ['g', 89, 0, 'd', 57, 0, 'f', 61, 0, 'l', 20, 0]);

});

var collectorUI = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Energy Collector"
			}
		},
		
		inventory: {standart: true},
		background: {standart: true}
	},
	
	elements: {
		"scaleBg1": {type: "image", x: 425, y: 100, bitmap: "emcBarShort_0", scale: 5},
		"scaleBg2": {type: "image", x: 750, y: 200, bitmap: "collectorProgress_0", scale: 3.5},
		
	   	"output": {type: "slot", x: 700, y: 100},
		"input": {type: "slot", x: 700, y: 300},
		"progScale": {type: "scale", x: 750, y: 200, bitmap: "collectorProgress_1", scale: 3.5, direction: 1},
	    "charge": {type: "slot", x: 350, y: 100, bitmap: "starCharge"},
		"emcScale": {type: "scale", x: 425, y: 100, bitmap: "emcBarShort_1", scale: 5},
		"text": {type: "text", x: 800, y: 100, width: 100, height: 30, text: "EMC"}
  	}
});

TileEntity.registerPrototype(BlockID.energyCollector1, {
  defaultValues: {
    emc: 0, max: 50000
  },
  
  getGuiScreen: function(){
    return collectorUI;
  },
  
  emc_out: 32,
  
  tick: function() {
		slotInput = this.container.getSlot("input");
		slotOutput = this.container.getSlot("output");
		
		this.container.setScale("emcScale", this.data.emc/this.data.max);
		this.container.setText("text", this.data.emc+" EMC");
    
		if (World.getLightLevel(this.x, this.y + 1, this.z) >= 8) {
			if (World.getThreadTime()%3 == 0 && this.data.emc <= this.data.max) {
				this.data.emc++;
			}
		}
		
		System.chargeStar(this.container, this.data);
		
		let res = System.getRecipe(slotInput.id,slotInput.data);
	 	let val = System.getValue(slotInput.id,slotInput.data);
	 	  
		if(val && res){
			this.container.setScale("progScale", this.data.emc/(val*2));
		}
		
		if(res && this.data.emc > val*2 && slotOutput.count<64 && (slotOutput.id==0||slotOutput.id==res)){
			this.data.emc-=val*2;
			slotOutput.id=res;
			slotOutput.count++;
			slotInput.count--;
			this.container.validateAll();
		}
	}
});