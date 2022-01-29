IDRegistry.genBlockID("energyCollector2");
Block.createBlockWithRotation("energyCollector2", [
	 {name: "Energy Collector II", texture: [
	   ["collectorOther",0],
	   ["collectorTop",1],
	   ["collectorOther",0],
	   ["collectorFront",0],
	   ["collectorOther",0],
	   ["collectorOther",0],
  ],inCreative: true}
], "light");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCollector2, count: 1, data: 0}, 
  ["gmg",
   "gcg",
   "ggg"],
  ['g', 89, 0, 'm', ItemID.darkMatter, 0, 'c', BlockID.energyCollector1, 0]);

});

TileEntity.registerPrototype(BlockID.energyCollector2, {
  defaultValues: {
    emc: 0, max: 100000
  },
  
  getGuiScreen: function(){
    return collectorUI;
  },
  
  emc_out: 128,
  
  tick: function(){
    slotInput = this.container.getSlot("input");
    slotOutput = this.container.getSlot("output");
    
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", this.data.emc+" EMC");
    
    if(World.getLightLevel(this.x, this.y + 1, this.z) >= 8){
      if(World.getThreadTime()%2 == 0 && this.data.emc <= this.data.max){
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