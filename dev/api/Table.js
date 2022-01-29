Network.addClientPacket("ProjectE.update", function(packet){
	ItemContainer.registerScreenFactory("ProjectE.Table", function(container, name){
		return tabletUI;
	});
});
Network.addServerPacket("ProjectE.transmutate", function(client, data){
	let player = client.getPlayerUid();
	let emc_p = Core.getEmc(player)||0;
	let container = Table.getContainer(player);
	let slot = container.getSlot(data.slot);
	let emc = Core.getItemEmc(slot.id, slot.data);
	
	if(slot.id == 0 || !emc)
		return;
	
	let count = Math.floor(emc_p / emc) <= data.count ? Math.floor(emc_p / emc) : data.count;
	
	if(emc*count <= emc_p){
		Core.setEmc(player, emc_p - (emc*count));
		new PlayerActor(player).addItemToInventory(slot.id, count, slot.data, null, true);
		container.setText("text", Core.getEmc(player)+" EMC");
		Table.updatePage(Table.pages[player], data.slots, player);
	}
	
	container.sendChanges();
});
Network.addServerPacket("ProjectE.addEmc", function(client, data){
	let player = client.getPlayerUid();
	let container = Table.getContainer(player);
	let slot = container.getSlot(data.slot);
	let emc_p = Core.getEmc(player)||0;
	let emc = Core.getItemEmc(slot.id, slot.data);
	
	if(!!emc || ItemID.tomeKnowledge == slot.id){
		if(ItemID.tomeKnowledge == slot.id){
			let keys = Object.keys(Core.emc);
			for(let i in keys)
				Table.scrutinys[keys[i]] = true;
		}else{
			Core.setEmc(player, emc_p + (emc*slot.count));
			container.setText("text", Core.getEmc(player)+" EMC")
			Table.scrutinys[slot.id+":"+slot.data] = true;
			container.setSlot(data.slot, 0, 0, 0);
		}
		Table.updatePage(Table.pages[player], data.slots, player);
	}
	
	container.validateAll();
	container.sendChanges();
});
Network.addServerPacket("ProjectE.next", function(client, data){
	let player = client.getPlayerUid();
	
	let count = Object.keys(Table.scrutinys).length;
	Table.pages[player] = Table.pages[player] || 0;
	if(Table.pages[player] <= count-1) {
		Table.pages[player]++;
	} else Table.pages[player] = 0;
	
	Table.updatePage(Table.pages[player], data.slots, player);
});
Network.addServerPacket("ProjectE.back", function(client, data){
	let player = client.getPlayerUid();
	
	let count = Object.keys(Table.scrutinys).length;
	Table.pages[player] = Table.pages[player] || 0;
	if(Table.pages[player] > 0){
		Table.pages[player]--;
	}else Table.pages[player] = count;
	
	Table.updatePage(Table.pages[player], data.slots, player);
});
Network.addServerPacket("ProjectE.del", function(client, data){
	let player = client.getPlayerUid();
	
	let container = Table.getContainer(player);
	let slot = container.getSlot(data.slot);
	
	Table.scrutinys[slot.id+":"+slot.data] = false;
	
	Table.updatePage(Table.pages[player], data.slots, player);
})
let Table = {
	players: {},
	pages: {},
	scrutinys: {},
	getContainer(player, type){
		if(!this.players[player]){
			this.players[player] = new ItemContainer();
			let client = Network.getClientForPlayer(player);
			if(client)
				client.send("ProjectE.update", {});
			this.players[player].setClientContainerTypeName(type);
			this.players[player].addServerCloseListener(function(cont, client){
				Table.drop(client.getPlayerUid());
			});
		}
		return this.players[player];
	},
	open(player, type, slots){
		let cont = this.getContainer(player, type);
		Table.pages[player] = 0;
		this.updatePage(Table.pages[player], slots, player);
		cont.setText("text", (Core.getEmc(player)||0)+" EMC")
		cont.openFor(Network.getClientForPlayer(player), "main");
	},
	addEmc(slot, slots){
		Network.sendToServer("ProjectE.addEmc", {
			slot: slot,
			slots: slots
		});
	},
	del(slot, slots){
		Network.sendToServer("ProjectE.del", {
			slot: slot,
			slots: slots
		});
	},
	next(slots){
		Network.sendToServer("ProjectE.next",{
			slots: slots
		});
	},
	back(slots){
		Network.sendToServer("ProjectE.back",{
			slots: slots
		});
	},
	updatePage(page, slots, player){
		page = page || 0;
		let keys = Object.keys(Table.scrutinys);
		let arr = [];
		for(let i in keys){
			let data = keys[i].split(":");
			let emc = Core.getItemEmc(data[0], data[1]);
			let emc_p = Core.getEmc(player);
			if(emc <= emc_p && Table.scrutinys[keys[i]])
				arr.push(keys[i]);
		}
			
		let container = this.getContainer(player);
		for(let i = 0;i <= slots;i++){
			container.setSlot("learn"+i, 0, 1, 0);
			let str = arr[page+i];
			if(str){
				let data = str.split(":");
				container.setSlot("learn"+i, data[0], 1, data[1]);
			}
		}
		container.sendChanges();
	},
	transmutate(slot, count, slots){
		Network.sendToServer("ProjectE.transmutate", {
			slot: slot,
			count: count,
			slots: slots
		});
	},
	drop(player, pos){
		pos = pos || Entity.getPosition(player);
		this.getContainer(player).dropSlot(BlockSource.getDefaultForActor(player), "unlearn", pos.x, pos.y, pos.z);
	}
};

function getSlotClicker(slot){
	return {
		onClick(){
			Table.transmutate(slot, 1, 12);
		},
		onLongClick(){
			Table.transmutate(slot, 64, 12);
		}
	};
}

const table_elements = {
	"burn": {type: "slot", x: 582, y: 400, bitmap: "burn", onItemChanged(){
		Table.addEmc("burn", 12);
	}},
	"unlearn": {type: "slot", x: 518, y: 400, bitmap: "slotUnlearn", onItemChanged(){
		Table.del("unlearn", 12);
	}},
	
	"learn0": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 200, clicker: getSlotClicker("learn0")},

	"learn1": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 320, clicker: getSlotClicker("learn1")},

	"learn2": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 80, clicker: getSlotClicker("learn2")},

	"learn3": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 200, clicker: getSlotClicker("learn3")},

	"learn4": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 200, clicker: getSlotClicker("learn4")},

	"learn5": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 260, clicker: getSlotClicker("learn5")},

	"learn6": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 140, clicker: getSlotClicker("learn6")},

	"learn7": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 260, clicker: getSlotClicker("learn7")},

	"learn8": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 140, clicker: getSlotClicker("learn8")},

	"learn9": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 500, y: 320, clicker: getSlotClicker("learn9")},

	"learn10": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 620, y: 320, clicker: getSlotClicker("learn10")},

	"learn11": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 500, y: 80, clicker: getSlotClicker("learn11")},

	"learn12": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 620, y: 80, clicker: getSlotClicker("learn12")},

	"text": {type: "text", x: 360, y: 80, width: 50, height: 15, text: "0 EMC"},
	
	"buttonNxt": {type: "button", x: 670, y: 400, bitmap: "btnNext", scale: 3.2,  clicker: {
		onClick(){
			Table.next(12);
		}
	}},
	
	//"text_page": {type: "text", x: 550, y: 380, width: 100, height: 30, text: "Page: 0/1"},
	
	"buttonBck": {type: "button", x: 415, y: 400, bitmap: "btnPrev", scale: 3.2,  clicker: {
		onClick(){
			Table.back(12);
		}
	}}
}

for(i in table_elements) {
	table_elements[i].y -= 50;
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

IDRegistry.genItemID("tomeKnowledge");
Item.createItem("tomeKnowledge", "Tome knowledge", {name: "tomeKnowledge"}, {stack: 1});
