IDRegistry.genBlockID("explosive1");
Block.createBlock("explosive1", [
	 {name: "Nova catalyst", texture: [
	   ["explosiveTop",0],
	   ["explosiveBottom",0],
	   ["explosiveSide",0],
  ],inCreative: true}
], "opaque");

IDRegistry.genBlockID("explosive2");
Block.createBlock("explosive2", [
	 {name: "Astral catalyst", texture: [
	   ["explosiveTop",0],
	   ["explosiveBottom",0],
	   ["explosiveSide",1],
  ],inCreative: true}
], "opaque");

Callback.addCallback("ItemUse", function (c, i, b){
  if(i.id == 259 && (b.id == BlockID.explosive1 || b.id == BlockID.explosive2)){
    World.getTileEntity(c.x, c.y, c.z).data.flame = 1;
    Game.prevent();
    Game.message("Catalyst will explode in 4 sec.! Run away!");
  }
});

TileEntity.registerPrototype(BlockID.explosive1, {
  defaultValues: {
    flame: 0, time: 110
  },
  radius: 3,
  tick: function (){
    if(this.data.flame){
      this.data.time--;
    }
    if(!this.data.time){
      for(x = -this.radius; x <= this.radius; x++){
        for(y = -this.radius; y <= this.radius; y++){
          for(z = -this.radius; z <= this.radius; z++){
            block = World.getBlock(this.x+x, this.y+y, this.z+z);
            if(block.id == BlockID.explosive1 || block.id == BlockID.explosive2){
              World.getTileEntity(this.x+x, this.y+y, this.z+z).time = 0;
            }
            if(System.getValue(block.id, block.data) <= 1){
              World.setBlock(this.x+x, this.y+y, this.z+z, 0);
            }
          }
        }
      }
      for(x1 = -this.radius*2; x1 <= this.radius*2; x1 ++){
        for(y1 = -this.radius*2; y1 <= this.radius*2; y1 ++){
          for(z1 = -this.radius*2; z1 <= this.radius*2; z1 ++){
            if(Math.random()<=.8){
              World.setBlock(this.x+x1, this.y+y1, this.z+z1, 0);
            }
          }
        }
      }
    }
  }
});

TileEntity.registerPrototype(BlockID.explosive2, {
  defaultValues: {
    flame: 0, time: 120
  },
  radius: 5,
  tick: function (){
    if(this.data.flame){
      this.data.time--;
    }
    if(!this.data.time){
      for(x = -this.radius; x <= this.radius; x++){
        for(y = -this.radius; y <= this.radius; y++){
          for(z = -this.radius; z <= this.radius; z++){
            block = World.getBlock(this.x+x, this.y+y, this.data+z);
            if(block.id == BlockID.explosive1 || block.id == BlockID.explosive2){
              World.getTileEntity(this.x+x, this.y+y, this.z+z).time = 0;
            }
            if(System.getValue(block.id, block.data) <= 1){
              World.setBlock(this.x+x, this.y+y, this.z+z, 0);
            }
          }
        }
      }
      for(x1 = -this.radius*2; x1 <= this.radius*2; x1 ++){
        for(y1 = -this.radius*2; y1 <= this.radius*2; y1 ++){
          for(z1 = -this.radius*2; z1 <= this.radius*2; z1 ++){
            if(Math.random()<=.8){
              World.setBlock(this.x+x1, this.y+y1, this.z+z1, 0);
            }
          }
        }
      }
    }
  }
});