IDRegistry.genBlockID("pedestalMatter");
Block.createBlock("pedestalMatter", [
	 {name: "§bMatter pedestal", texture: [
	   ["dmBlock",0],
  ],inCreative: __config__.getBool("matter_pedestal")}
]);

Block.setBlockShape(BlockID.pedestalMatter, {x: 0.3, y: 0, z: 0.3}, {x: 0.7, y: .7, z: 0.7});

Callback.addCallback("PostLoaded", function (){
if(__config__.getBool("matter_pedestal")) Recipes.addShaped({id: BlockID.pedestalMatter, count: 1, data: 0}, 
["rir", 
 "rir",
 "iii"],
["r", ItemID.redMatter, 0, "i", BlockID.dmBlock, 0]);
});

var pedestalUI = new UI.StandartWindow({
	 standart: {
	   	header: {text: {text: "Pedestal"}},
		  inventory: {standart: true},
		  background: {standart: true}
	 },
	 	elements: {
		  "ring": {type: "slot", x: 550, y: 100},
  }
});

TileEntity.registerPrototype(BlockID.pedestalMatter, {
  defaultValues: {
    active: false
  },
  initAnimation: function(id){
	this.animation = new Animation.Item(this.x + .5, this.y+1, this.z + .5);
	 if(this.container.getSlot("ring").id != 0){
	   this.animation.describeItem({
		 id: this.container.getSlot("ring").id,
	     count: this.container.getSlot("ring").count,
	     data: this.container.getSlot("ring").data,
	     rotation: "y",
	     size: 0.6
	   });
	   this.animation.load();
	 }
   },
   init: function(){
 	this.initAnimation();
   },
   destroy: function(){
    if(this.animation) this.animation.destroy();
  },
  updateAnim: function(){
	 if(this.animation){
	  this.animation.destroy();
	  this.initAnimation();
    }
  },
  getGuiScreen: function(){
    return pedestalUI;
  },
  click: function(){
    if(Entity.getSneaking(Player.get()) && Rings.getPedestalFunction(this.container.getSlot("ring").id, this)){
      this.data.active = !this.data.active;
      if(this.data.active){
        Game.message("Ring activated!");
        PlaySoundFile("pecharge.ogg");
      } else {
        Game.message("Ring disabled!");
        PlaySoundFile("peuncharge.ogg");
      }
    }
  },
  tick: function(){
    let ring = this.container.getSlot("ring");
    if(World.getThreadTime()%10 == 0) this.updateAnim();
    if(this.data.active && Rings.getPedestalFunction(ring.id)){
      Rings.getPedestalFunction(ring.id)(this);
    }
  }
});