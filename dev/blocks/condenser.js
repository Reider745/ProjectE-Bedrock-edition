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
    "emc_scale": {type: "scale", x: 500, y: 100, bitmap: "emcBar_1", scale: 4},
    "emc_text": {type: "text", x: 500, y: 50, width: 100, height: 30, text: ""},
    "slotCatalyst0": {type: "slot", x: 400, y: 200-30},
    "slotCatalyst1": {type: "slot", x: 460, y: 200-30},
    "slotCatalyst2": {type: "slot", x: 520, y: 200-30},
    "slotCatalyst3": {type: "slot", x: 580, y: 200-30},
    "slotCatalyst4": {type: "slot", x: 640, y: 200-30},
    "slotCatalyst5": {type: "slot", x: 700, y: 200-30},
    "slotCatalyst6": {type: "slot", x: 760, y: 200-30},
    "slotCatalyst7": {type: "slot", x: 820, y: 200-30},
    "slotCatalyst8": {type: "slot", x: 400, y: 260-30},
    "slotCatalyst9": {type: "slot", x: 460, y: 260-30},
    "slotCatalyst10": {type: "slot", x: 520, y: 260-30},
    "slotCatalyst11": {type: "slot", x: 580, y: 260-30},
    "slotCatalyst12": {type: "slot", x: 640, y: 260-30},
    "slotCatalyst13": {type: "slot", x: 700, y: 260-30},
    "slotCatalyst14": {type: "slot", x: 760, y: 260-30},
    "slotCatalyst15": {type: "slot", x: 820, y: 260-30},
    "slotCatalyst16": {type: "slot", x: 400, y: 320-30},
    "slotCatalyst17": {type: "slot", x: 460, y: 320-30},
    "slotCatalyst18": {type: "slot", x: 520, y: 320-30},
    "slotCatalyst19": {type: "slot", x: 580, y: 320-30},
    "slotCatalyst20": {type: "slot", x: 640, y: 320-30},
    "slotCatalyst21": {type: "slot", x: 700, y: 320-30},
    "slotCatalyst22": {type: "slot", x: 760, y: 320-30},
    "slotCatalyst23": {type: "slot", x: 820, y: 320-30},
    "slotCatalyst24": {type: "slot", x: 400, y: 380-30},
    "slotCatalyst25": {type: "slot", x: 460, y: 380-30},
    "slotCatalyst26": {type: "slot", x: 520, y: 380-30},
    "slotCatalyst27": {type: "slot", x: 580, y: 380-30},
    "slotCatalyst28": {type: "slot", x: 640, y: 380-30},
    "slotCatalyst29": {type: "slot", x: 700, y: 380-30},
    "slotCatalyst30": {type: "slot", x: 760, y: 380-30},
    "slotCatalyst31": {type: "slot", x: 820, y: 380-30},
	 }
});
Core.setModelChest(BlockID.energyCondenser1);
Core.setModelChest(BlockID.energyCondenser2);
Core.setDefaultCondenser(BlockID.energyCondenser1, {
	ui: condenserUI,
	slots: Core.getTextByArr("slotCatalyst", 0, 31),
});
Core.setDefaultCondenser(BlockID.energyCondenser2, {
	ui: condenserUI,
	slots: Core.getTextByArr("slotCatalyst", 0, 31),
});
