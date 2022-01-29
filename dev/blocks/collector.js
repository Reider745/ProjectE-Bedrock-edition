Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 10
}, "ProjectE_Collector");


IDRegistry.genBlockID("energyCollector1");
Block.createBlockWithRotation("energyCollector1", [
	{name:"Energy Collector I", texture: [
		["collectorOther",0],
		["collectorTop",0],
		["collectorOther",0],
		["collectorFront",0],
		["collectorOther",0],
		["collectorOther",0],
	], inCreative: true}
],"light");
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
	drawing: [
		{type: "bitmap", x: 701, y: 201, bitmap: "collectSun_0", scale: 3.1},
		{type: "bitmap", x: 750, y: 200, bitmap: "collectorProgress_0", scale: 3.5},
		{type: "bitmap", x: 425, y: 100, bitmap: "emcBarShort_0", scale: 5}
	],
	elements: {
		"output": {type: "slot", x: 700, y: 100},
		"input": {type: "slot", x: 700, y: 300},
		"progres": {type: "scale", x: 750, y: 200, bitmap: "collectorProgress_1", scale: 3.5, direction: 1},
	  "charge": {type: "slot", x: 350, y: 100, bitmap: "starCharge"},

		"emc_scale": {type: "scale", x: 425, y: 100, bitmap: "emcBarShort_1", scale: 5},
		"emc_text": {type: "text", x: 800, y: 100, width: 100, height: 30, text: "EMC"},
		"sun":{type: "scale", x: 700, y: 200, bitmap: "collectSun_1", scale: 3, direction: 1}
  }
});

Core.registerDefaultCollector(BlockID.energyCollector1, {
	ui: collectorUI,
	emc: 1,
	emc_out: 32,
	emc_max: 50000,
 emc_min: 0.001
});
Core.registerDefaultCollector(BlockID.energyCollector2, {
	ui: collectorUI,
	emc: 12,
	emc_out: 128,
	emc_max: 100000,
 emc_min: 0.005
});
Core.registerDefaultCollector(BlockID.energyCollector3, {
	ui: collectorUI,
	emc: 40,
	emc_out: 512,
	emc_max: 500000,
 emc_min: 0.1
});
