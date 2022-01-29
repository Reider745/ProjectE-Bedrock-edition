IDRegistry.genBlockID("energyCondenser2");
Block.createBlockWithRotation("energyCondenser2", [
	 {name: "Energy Condenser II", texture: [
	   ["condenserBottom",0],
	   ["condenserTop",0],
	   ["condenserSide",0],
	   ["condenserFront",0],
	   ["condenserSide",0],
	   ["condenserSide",0],
  ],inCreative: true}
]);

Block.setBlockShape(BlockID.energyCondenser2,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ICRender.getGroup("item-pipe").add(BlockID.energyCondenser2, -1);
ICRender.getGroup("bc-container").add(BlockID.energyCondenser2, -1);

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCondenser2, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", BlockID.dmBlock, 0, "d", BlockID.rmBlock, 0, "c", BlockID.energyCondenser1, 0]);

});

TileEntity.registerPrototype(BlockID.energyCondenser2, {
	defaultValues: {
		emc: 0, maxEmc: 0, work: false
	},
	
	getGuiScreen: function(){
		return condenserUI;
	},
	
	getTransportSlots: function(){
		let inp = [];

		for(let i = 0; i <= 31; i ++){
			inp.push("slotCatalyst" + i);
		}
		
		out = [];
		
		if(this.container.getSlot("item").count > 1) {
			out.push("item");
		}
		
		return {
			input: inp,
			output: out
		}
	},
	
	tick: function() {
		this.container.setText("emcText",this.data.emc);
		let slotItem = this.container.getSlot("item");
		for(let i = 0; i <= 31; i ++) {
			let slotCatalyst = this.container.getSlot("slotCatalyst"+i);
			let val = System.getValue(slotCatalyst.id, slotCatalyst.data);
			
			if(val && System.getValue(slotItem.id, slotItem.data) && slotItem.count <= 64 && slotItem.id != slotCatalyst.id) {
				this.data.emc+=val*slotCatalyst.count;
				slotCatalyst.count = 0;
				this.container.validateAll();
				break;
			}
		}

		if(System.getValue(slotItem.id, slotItem.data)){
			this.data.maxEmc = System.getValue(slotItem.id, slotItem.data);
			this.container.setScale("emcScale", this.data.emc/this.data.maxEmc);
			if(!this.data.work) this.data.work = true;
		} else {
			if(this.data.work) this.data.work = false;
			this.data.maxEmc = 0;
			this.container.setScale("emcScale", 0);
		}

		if(System.getValue(slotItem.id, slotItem.data) && slotItem.count < 64){
			while(this.data.emc >= System.getValue(slotItem.id, slotItem.data)){
				if(slotItem.count < 64){
					this.data.emc -= System.getValue(slotItem.id, slotItem.data);
					slotItem.count++;
				} else break;
			}
		}
	}
});