IDRegistry.genBlockID("energyCondenser1");
Block.createBlockWithRotation("energyCondenser1", [
	 {name: "Energy Condenser I", texture: [
	   ["condenserBottom",0],
	   ["condenserTop",0],
	   ["condenserSide",0],
	   ["condenserFront",0],
	   ["condenserSide",0],
	   ["condenserSide",0],
  ],inCreative: true}
]);

Block.setBlockShape(BlockID.energyCondenser1,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ICRender.getGroup("item-pipe").add(BlockID.energyCondenser1, -1);
ICRender.getGroup("bc-container").add(BlockID.energyCondenser1, -1);

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCondenser1, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", 49, 0, "d", 264, 0, "c", BlockID.alchChest, 0]);

});

var condenserUI = new UI.StandartWindow({
	 standart: {
		  header: {text: {text: "Energy condenser"}},
		  inventory: {standart: true},
		  background: {standart: true},
		  //minHeight: 640
	 }, 
	 drawing: [
    {type: "bitmap", x: 500, y: 100, bitmap: "emcBar_0", scale: 4},
  ],
  	elements: {
    "item": {type: "slot", x: 420, y: 100},
    "emcScale": {type: "scale", x: 500, y: 100, bitmap: "emcBar_1", scale: 4},
    "emcText": {type: "text", x: 500, y: 50, width: 100, height: 30, text: ""},
    "slotCatalyst0": {type: "slot", x: 400, y: 200},
    "slotCatalyst1": {type: "slot", x: 460, y: 200},
    "slotCatalyst2": {type: "slot", x: 520, y: 200},
    "slotCatalyst3": {type: "slot", x: 580, y: 200},
    "slotCatalyst4": {type: "slot", x: 640, y: 200},
    "slotCatalyst5": {type: "slot", x: 700, y: 200},
    "slotCatalyst6": {type: "slot", x: 760, y: 200},
    "slotCatalyst7": {type: "slot", x: 820, y: 200},
    "slotCatalyst8": {type: "slot", x: 400, y: 260},
    "slotCatalyst9": {type: "slot", x: 460, y: 260},
    "slotCatalyst10": {type: "slot", x: 520, y: 260},
    "slotCatalyst11": {type: "slot", x: 580, y: 260},
    "slotCatalyst12": {type: "slot", x: 640, y: 260},
    "slotCatalyst13": {type: "slot", x: 700, y: 260},
    "slotCatalyst14": {type: "slot", x: 760, y: 260},
    "slotCatalyst15": {type: "slot", x: 820, y: 260},
    "slotCatalyst16": {type: "slot", x: 400, y: 320},
    "slotCatalyst17": {type: "slot", x: 460, y: 320},
    "slotCatalyst18": {type: "slot", x: 520, y: 320},
    "slotCatalyst19": {type: "slot", x: 580, y: 320},
    "slotCatalyst20": {type: "slot", x: 640, y: 320},
    "slotCatalyst21": {type: "slot", x: 700, y: 320},
    "slotCatalyst22": {type: "slot", x: 760, y: 320},
    "slotCatalyst23": {type: "slot", x: 820, y: 320},
    "slotCatalyst24": {type: "slot", x: 400, y: 380},
    "slotCatalyst25": {type: "slot", x: 460, y: 380},
    "slotCatalyst26": {type: "slot", x: 520, y: 380},
    "slotCatalyst27": {type: "slot", x: 580, y: 380},
    "slotCatalyst28": {type: "slot", x: 640, y: 380},
    "slotCatalyst29": {type: "slot", x: 700, y: 380},
    "slotCatalyst30": {type: "slot", x: 760, y: 380},
    "slotCatalyst31": {type: "slot", x: 820, y: 380},
	 }
});

var directions = [
  {x:0,y:1,z:0},
  {x:0,y:-1,z:0},
  {x:1,y:0,z:0},
  {x:-1,y:0,z:0},
  {x:0,y:0,z:1},
  {x:0,y:0,z:-1},
];

TileEntity.registerPrototype(BlockID.energyCondenser1, {
  	defaultValues: {
	   	emc: 0, maxEmc: 0, work: false
		},	
	 getGuiScreen: function(){
		  return condenserUI;
	 	},
	 	getTransportSlots: function(){
	 	let inp = [];
	 	
	 	for(let i = 0; i <= 31; i ++){
	 	  inp.push("slotCatalyst"+i);
	 	}
	 	out = [];
	     if(this.container.getSlot("item").count > 1) out.push("item");
	 	return {
             input: inp,
             output: out
           }
	 	},
	 tick: function(){
   	this.container.setText("emcText",this.data.emc);
	   let slotItem = this.container.getSlot("item");
	   for(let i = 0; i <= 31; i ++){
	     let slotCatalyst = this.container.getSlot("slotCatalyst"+i);
	     let val = System.getValue(slotCatalyst.id, slotCatalyst.data);
	     if(val && System.getValue(slotItem.id, slotItem.data) && slotItem.count <= 64 && slotItem.id != slotCatalyst.id){
	       this.data.emc+=val;
	       slotCatalyst.count--;
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
	   
    if(System.getValue(slotItem.id, slotItem.data) && this.data.emc >= System.getValue(slotItem.id, slotItem.data) && slotItem.count < 64){
	  this.data.emc -= System.getValue(slotItem.id, slotItem.data);
	  slotItem.count++;
    }
  }
});