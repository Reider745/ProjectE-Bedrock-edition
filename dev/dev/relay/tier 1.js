IDRegistry.genBlockID("antimatterRelay1");
Block.createBlockWithRotation("antimatterRelay1", [{
    name: "Anti-matter Relay I",
    texture: [
        ["relayOther", 0],
        ["relayTop", 0],
        ["relayOther", 0],
        ["relayFront", 0],
        ["relayOther", 0],
        ["relayOther", 0],
    ],
    inCreative: true
}], "opaque");

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
    drawing: [{
            type: "bitmap",
            x: 425,
            y: 100,
            bitmap: "emcBarShort_0",
            scale: 5
        },
        {
            type: "background",
            color: Color.parseColor("#b3b3b3")
        }
    ],
    elements: {
        "input1": {
            type: "slot",
            x: 400,
            y: 260
        },
        "input2": {
            type: "slot",
            x: 464,
            y: 260
        },
        "input3": {
            type: "slot",
            x: 528,
            y: 260
        },
        "input4": {
            type: "slot",
            x: 592,
            y: 260
        },
        "input5": {
            type: "slot",
            x: 400,
            y: 320
        },
        "input6": {
            type: "slot",
            x: 464,
            y: 320
        },
        "input7": {
            type: "slot",
            x: 528,
            y: 320
        },
        "input8": {
            type: "slot",
            x: 592,
            y: 320
        },
        "input9": {
            type: "slot",
            x: 400,
            y: 380
        },
        "input10": {
            type: "slot",
            x: 464,
            y: 380
        },
        "input11": {
            type: "slot",
            x: 528,
            y: 380
        },
        "input12": {
            type: "slot",
            x: 592,
            y: 380
        },
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
        "emcScale": {
            type: "scale",
            x: 425,
            y: 100,
            bitmap: "emcBarShort_1",
            scale: 5
        },
        "text": {
            type: "text",
            x: 800,
            y: 100,
            width: 100,
            height: 30,
            text: "EMC"
        }
    }
});

Callback.addCallback("PostLoaded", function() {

    Recipes.addShaped({
            id: BlockID.antimatterRelay1,
            count: 1,
            data: 0
        },
        ["odo",
            "ofo",
            "ooo"
        ],
        ["o", 49, 0, "f", 61, 0, "d", 57, 0]);

});

TileEntity.registerPrototype(BlockID.antimatterRelay1, {
    defaultValues: {
        emc: 0,
        max: 100000
    },
    getGuiScreen: function() {
        return relayUI;
    },
    dirs: [{
            x: 0,
            y: 1,
            z: 0
        },
        {
            x: 0,
            y: -1,
            z: 0
        },
        {
            x: 1,
            y: 0,
            z: 0
        },
        {
            x: -1,
            y: 0,
            z: 0
        },
        {
            x: 0,
            y: 0,
            z: 1
        },
        {
            x: 0,
            y: 0,
            z: -1
        },
    ],
    emc_out: 32,
    tick: function() {
        for (i = 0; i <= 12; i++) {
            let slotBurn = this.container.getSlot("input" + i);
            let value = System.getValue(slotBurn.id, slotBurn.data);

            if (value) {
                if (this.data.emc + value <= this.data.max) {
                    this.data.emc += value;
                    slotBurn.count--;
                    break;
                }
            }
            if (slotBurn.count <= 0) this.container.validateAll();
        }
        this.container.setScale("emcScale", this.data.emc / this.data.max);
        this.container.setText("text", "EMC: " + this.data.emc);
        System.chargeStar(this.container, this.data);
        for (i in this.dirs) {
            let dir = this.dirs[i];

            let tile = World.getTileEntity(this.x + dir.x, this.y + dir.y, this.z + dir.z);
						let block = World.getBlockID(this.x + dir.x, this.y + dir.y, this.z + dir.z);
            
            
            if (tile && (block == BlockID.energyCollector1 || block == BlockID.energyCollector2 || block == BlockID.energyCollector3)) {
                if (tile.data.emc > 0 && this.data.emc < this.data.max) {
                	  let amount = Math.min(tile.data.emc, tile.emc_out);
                    alert(amount)
                    this.data.emc += amount;
                    tile.data.emc -= amount;
                }
            }
            
            if ((block == BlockID.energyCondenser1 || block == BlockID.energyCondenser2) && tile) {
                if (tile.data.emc <= tile.data.maxEmc && this.data.emc > 0) {
                    if (this.data.emc - Math.min(this.data.emc, this.emc_out) >= 0) {
                        this.data.emc -= Math.min(this.data.emc, this.emc_out);
                        tile.data.emc += Math.min(this.data.emc, this.emc_out);
                    }
                }
            }
        }
    }
});