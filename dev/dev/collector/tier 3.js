IDRegistry.genBlockID("energyCollector3");
Block.createBlockWithRotation("energyCollector3", [
	 {name: "Energy Collector III", texture: [
	   ["collectorOther",0],
	   ["collectorTop",2],
	   ["collectorOther",0],
	   ["collectorFront",0],
	   ["collectorOther",0],
	   ["collectorOther",0],
  ],inCreative: true}
], "light");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCollector3, count: 1, data: 0}, 
  ["gmg",
   "gcg",
   "ggg"],
  ['g', 89, 0, 'm', ItemID.redMatter, 0, 'c', BlockID.energyCollector2, 0]);

});

TileEntity.registerPrototype(BlockID.energyCollector3, {
  defaultValues: {
    emc: 0, max: 500000
  },
  getGuiScreen: function(){
    return collectorUI;
  },
  emc_out: 512,
  tick: function(){
		slotInput = this.container.getSlot("input");
		slotOutput = this.container.getSlot("output");
		
		this.container.setScale("emcScale", this.data.emc/this.data.max);
		this.container.setText("text", this.data.emc+" EMC");
		
		if(World.getLightLevel(this.x, this.y + 1, this.z) >= 8){
			if(this.data.emc <= this.data.max){
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