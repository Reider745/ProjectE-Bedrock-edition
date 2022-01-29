IDRegistry.genBlockID("antimatterRelay2");
Block.createBlockWithRotation("antimatterRelay2", [
	 {name: "Anti-matter Relay II", texture: [
	   ["relayOther",0],
	   ["relayTop",1],
	   ["relayOther",0],
	   ["relayFront",0],
	   ["relayOther",0],
	   ["relayOther",0],
  ],inCreative: true}
], "opaque");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.antimatterRelay2, count: 1, data: 0}, 
["odo", 
 "ofo",
 "ooo"],
["o", 49, 0, "f", BlockID.antimatterRelay1, 0, "d", ItemID.darkMatter, 0]);

});

TileEntity.registerPrototype(BlockID.antimatterRelay2, {
  defaultValues: {
    emc: 0, max: 1000000
  },
  getGuiScreen: function(){
    return relayUI;
  },
  dirs: [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ],
  emc_out: 64,
  getOut: function(){if(this.data.emc>=this.emc_out) {return this.emc_out} else return 1;},
  tick: function(){
    for(i = 0; i <= 12; i++){
      let slotBurn = this.container.getSlot("input"+i);
      let value = System.getValue(slotBurn.id, slotBurn.data);
      
      if(value){
        if(this.data.emc+value<=this.data.max){
          this.data.emc+=value*slotBurn.count;
          slotBurn.count = 0;
          break;
        }
      }
      if(slotBurn.count <= 0) this.container.validateAll();
    }
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", "EMC: "+this.data.emc);
    System.chargeStar(this.container, this.data);
    for(i in this.dirs){
      let dir = this.dirs[i];
      
      let tile = World.getTileEntity(this.x+dir.x, this.y+dir.y, this.z+dir.z);
      
      if(tile && (World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector1 || World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector2 || World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector3)){
        if (tile.data.emc > 0 && this.data.emc < this.data.max) {
          let amount = Math.min(tile.data.emc, tile.emc_out);
          this.data.emc += amount;
          tile.data.emc -= amount;
        }
      }
      let block = World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z);
      if((block == BlockID.energyCondenser1 || block == BlockID.energyCondenser2) && tile){
    	if(tile.data.emc <= tile.data.maxEmc && this.data.emc > 0){
    	  if(this.data.emc-Math.min(this.data.emc, this.emc_out) >= 0){
    	    this.data.emc-=Math.min(this.data.emc, this.emc_out);
            tile.data.emc+=Math.min(this.data.emc, this.emc_out);
          }
        }
      }
    }
  }
});