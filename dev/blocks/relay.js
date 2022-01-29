IDRegistry.genBlockID("antimatterRelay1");
Block.createBlockWithRotation("antimatterRelay1", [{
	name: "Anti-matter Relay I", texture: [
		["relayOther", 0],
		["relayTop", 0],
		["relayOther", 0],
		["relayFront", 0],
		["relayOther", 0],
		["relayOther", 0],
	],	inCreative: true}
], "opaque");
IDRegistry.genBlockID("antimatterRelay2");
Block.createBlockWithRotation("antimatterRelay2", [{
	name: "Anti-matter Relay II", texture: [
		["relayOther", 0],
		["relayTop", 1],
		["relayOther", 0],
		["relayFront", 0],
		["relayOther", 0],
		["relayOther", 0],
	],	inCreative: true}
], "opaque");
IDRegistry.genBlockID("antimatterRelay3");
Block.createBlockWithRotation("antimatterRelay3", [{
	name: "Anti-matter Relay III", texture: [
		["relayOther", 0],
		["relayTop", 2],
		["relayOther", 0],
		["relayFront", 0],
		["relayOther", 0],
		["relayOther", 0],
	],	inCreative: true}
], "opaque");

var relayUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Anti-matter relay"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
      {type: "background", color: android.graphics.Color.parseColor("#b3b3b3")},
      {type: "bitmap", x: 425, y: 100, bitmap: "emcBarShort_0", scale: 5},
    ],
    elements: {
        "input1": {type: "slot", x: 400, y: 260-90},
        "input2": {type: "slot", x: 464, y: 260-90},
        "input3": {type: "slot", x: 528, y: 260-90},
        "input4": {type: "slot", x: 592, y: 260-90},
        "input5": {type: "slot", x: 400, y: 320-90},
        "input6": {type: "slot", x: 464, y: 320-90},
        "input7": {type: "slot", x: 528, y: 320-90},
        "input8": {type: "slot", x: 592, y: 320-90},
        "input9": {type: "slot", x: 400, y: 380-90},
        "input10": {type: "slot", x: 464, y: 380-90},
        "input11": {type: "slot", x: 528, y: 380-90},
        "input12": {type: "slot", x: 592, y: 380-90},

        "progScale": {
            type: "scale",
            x: 750,
            y: 200,
            bitmap: "relayProgress_1",
            scale: 3.5,
            direction: 1
        },
        "charge": {
            type: "slot",
            x: 350,
            y: 100,
            bitmap: "starCharge"
        },
        "emc_scale": {
            type: "scale",
            x: 425,
            y: 100,
            bitmap: "emcBarShort_1",
            scale: 5
        },
        "emc_text": {
            type: "text",
            x: 800,
            y: 100,
            width: 100,
            height: 30,
            text: "EMC"
        }
    }
});

Core.setDefaultRelay(BlockID.antimatterRelay1, {
	ui: relayUI,
	slots: Core.getTextByArr("input", 1, 12),
	emc_out: 64,
	emc_max: 100000
});
Core.setDefaultRelay(BlockID.antimatterRelay2, {
	ui: relayUI,
	slots: Core.getTextByArr("input", 1, 12),
	emc_out: 192,
	emc_max: 1000000
});
Core.setDefaultRelay(BlockID.antimatterRelay3, {
	ui: relayUI,
	slots: Core.getTextByArr("input", 1, 12),
	emc_out: 640,
	emc_max: 10000000
});
