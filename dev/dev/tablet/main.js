IDRegistry.genBlockID("transmutationTablet");

Block.createBlock("transmutationTablet", [
	{name: "Transmutation Table", texture: [
		["table_bottom", 0],
		["table_top", 0],
		["table_side", 0]
	], inCreative: true}
]);

Callback.addCallback("PostLoaded", function() {
	Recipes.addShapeless({id: BlockID.transmutationTablet, count: 1, data: 0}, [
		{id: 49, data: 0}, 
		{id: 1, data: 0}, 
		{id: 49, data: 0}, 
		{id: 1, data: 0}, 
		{id: ItemID.philosophersStone, data: 0}, 
		{id: 1, data: 0}, 
		{id: 49, data: 0}, 
		{id: 1, data: 0}, 
		{id: 49, data: 0}
	], function(api, field, result){
		for (var i in field){
			if (field[i].id != ItemID.philosophersStone){
				api.decreaseFieldSlot(i);
			}
		}
	});

	Recipes.addShaped({id: ItemID.transmute_tablet, count: 1, data: 0}, [
		"odo", 
		"dcd",
		"odo"
	], ["o", BlockID.dmBlock, 0, "d", 1, 0, "c", BlockID.transmutationTablet, 0]);
});

Block.setBlockShape(BlockID.transmutationTablet, {x: 0, y: 0, z: 0}, {x: 1, y: .25, z: 1});

const table_elements = {
	"burn": {type: "slot", x: 582, y: 400, bitmap: "burn"},
	"unlearn": {type: "slot", x: 518, y: 400, bitmap: "slotUnlearn"},
	
	"learn0": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 200, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn0");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn0");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn1": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 320, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn1");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn1");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn2": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 80, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn2");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn2");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn3": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 200, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn3");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn3");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn4": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 200, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn4");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn4");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn5": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 260, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn5");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn5");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn6": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 140, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn6");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn6");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn7": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 260, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn7");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn7");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn8": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 140, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn8");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn8");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn9": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 500, y: 320, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn9");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn9");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn10": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 620, y: 320, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn10");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn10");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn11": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 500, y: 80, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn11");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn11");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
	"learn12": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 620, y: 80, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn12");if(Tablet.emc>=System.getValue(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn12");if(Tablet.emc>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){Tablet.emc-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},

	"text": {type: "text", x: 320, y: 30, width: 50, height: 15, text: "EMC"},
	
	"buttonNxt": {
		type: "button", x: 670, y: 400, bitmap: "btnNext", scale: 3.2,
		clicker: {
			onClick: function(container, tile) {
				if(Tablet.page < Tablet.items.length-1) {
					Tablet.page++
				} else Tablet.page = 0;
			}
		}
	},
	
	"text_page": {type: "text", x: 550, y: 380, width: 100, height: 30, text: "Page: 0/1"},
	
	"buttonBck": {
		type: "button", x: 415, y: 400, bitmap: "btnPrev", scale: 3.2,
		clicker: {
			onClick: function(container, tile){
				if (Tablet.page > 0){
					ablet.page --;
				} else Tablet.page = Tablet.items.length - 1;
			}
		}
	}
}

for(i in table_elements) {
	table_elements[i].y -= 32
}

var tabletUI = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Transmutation tablet"
			}
		},
		
		inventory: {standart: true},
		background: {standart: true},
		minHeight: 256
	},
	
	elements: table_elements
});

TileEntity.registerPrototype(BlockID.transmutationTablet, {
	getGuiScreen: function () {
		return tabletUI;
	},
	
	init: function () {
		this.container = Tablet.container;
	},
	
	tick: function () {
		let content = this.container.getGuiContent();
		
		if (!content) {
			for(i = 0; i <= 12; i ++) {
				this.container.setSlot("learn"+i, 0, 0, 0);
			}
		}
	},
	
	destroy: function () {
		for(i = 0; i <= 12; i ++) {
			this.container.setSlot("learn"+i, 0, 0, 0);
		}
	}
});


IDRegistry.genItemID("transmute_tablet");
Item.createItem("transmute_tablet", "Transmute tablet", {name: "transmute_tablet"}, {stack: 1});

Item.registerUseFunction("transmute_tablet", function(c, b, i){
	Tablet.container.openAs(tabletUI);
});

Callback.addCallback("tick", function (){
	if(Tablet.container.isOpened()) {
		container = Tablet.container;
		
		container.setText("text", "EMC: "+Tablet.emc);
		container.setText("text_page", (Tablet.page+1)+"/"+(Tablet.items.length+1));
		
		let slotBurn = container.getSlot("burn");
		let slotUnlearn = container.getSlot("unlearn");
		let value = System.getValue(slotBurn.id, slotBurn.data);
		
		if(System.isLearned(slotUnlearn.id, slotUnlearn.data)){
			for(i in Tablet.items){
				ti = Tablet.items[i];
				if(ti.id == slotUnlearn.id && ti.data == slotUnlearn.data){
					Tablet.items.splice(i--, 1);
					alert("Unlearned!");
					Tablet.page = 0;
			    }
			}
		}
		
        if(slotBurn.id == ItemID.tomeKnowledge){
			for(i in System.values){
		        itm = i.split(":");
		        if(!System.isLearned(itm[0], itm[1])){
					Tablet.items.push({id: itm[0], data: itm[1]});
		        }
	        }
			
	        slotBurn.id = 0;
	        Game.message("You got all transmutation knowledges");
		}
		
	    if(value){
	        if (!System.isLearned(slotBurn.id, slotBurn.data)){
		        Tablet.items.push({id: slotBurn.id, data: slotBurn.data});
		        alert("Learned!");
	        }
	      
	        Tablet.emc += value * slotBurn.count;
	        slotBurn.count=0;
	        container.validateAll();
		}
		
		try {
			if (Tablet.items[0]){
				for( i = 0; i <= 12; i ++){
					if (System.getValue(Tablet.items[Tablet.page+i].id, Tablet.items[Tablet.page+i].data) <= Tablet.emc) {
                         container.setSlot("learn"+i, Tablet.items[Tablet.page+i].id, 1, Tablet.items[Tablet.page+i].data);
                    } else if (container.getSlot("learn"+i).id) {
                         container.setSlot("learn"+i, 0, 0, 0);
                    }
			    }
		    }
		} catch(e) {}
	}
});


IDRegistry.genItemID("tomeKnowledge");
Item.createItem("tomeKnowledge", "Tome of knowledge", {name: "tomeKnowledge"}, {stack: 1});

Item.registerUseFunction("tomeKnowledge", function (c, item){
	for(i in System.values){
		itm = i.split(":");
		if(!System.isLearned(itm[0], itm[1])){
		  Tablet.items.push({id: itm[0], data: itm[1]});
		}
	}
	Game.message("You got all transmutation knowledges");
});