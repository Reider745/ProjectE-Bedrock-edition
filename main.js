/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 31
*/



// file: header.js

IMPORT("RenderAPI");
IMPORT("SoundLib");
IMPORT("SoundHelper");
IMPORT("StorageInterface");
IMPORT("ToolLib");

SoundManager.init(16);
SoundManager.setResourcePath(__dir__ + "/res/sounds/");

SoundManager.registerSound("pecharge", "pecharge.ogg", false);
SoundManager.registerSound("pedestruct", "pedestruct.ogg", false);
SoundManager.registerSound("peheal", "peheal.ogg", false);
SoundManager.registerSound("petransmute", "petransmute.ogg", false);
SoundManager.registerSound("peuncharge", "peuncharge.ogg", false);

let INFINITY_TOOL = [];

Callback.addCallback("DestroyBlock", function (coords, block, player){
	let item = Entity.getCarriedItem(player);
	if(INFINITY_TOOL.indexOf(item.id) != -1)
		Entity.setCarriedItem(player, item.id, item.count, 0, item.extra);
});
Callback.addCallback("PlayerAttack", function (player){
	let item = Entity.getCarriedItem(player);
	if(INFINITY_TOOL.indexOf(item.id) != -1)
		Entity.setCarriedItem(player, item.id, item.count, 0, item.extra);
});

Callback.addCallback("ItemUse", function(coords, i, block, isExter, player){
	let item = Entity.getCarriedItem(player);
	if(INFINITY_TOOL.indexOf(item.id) != -1)
		Entity.setCarriedItem(player, item.id, item.count, 0, item.extra);
});

ToolAPI.addToolMaterial("dm", {
	level: 5, 
	efficiency: 6, 
	damage: 12, 
	enchantability: 30,
	durability: 10000,
});
ToolAPI.addToolMaterial("rm", {
	level: 5, 
	efficiency: 8, 
	damage: 16, 
	enchantability: 30,
	durability: 10000
});

//friendly
var friendlyList = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27];

//evil
var evilList = [Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];

//all
var allMobs = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27, Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];




// file: translations.js

Translation.addTranslation("Philosopher's stone", {ru: "Философский камень"});
Translation.addTranslation("Alchemical fuel", {ru: "Алхимический уголь"});
Translation.addTranslation("Mobius fuel", {ru: "Топливо Мобиуса"});
Translation.addTranslation("Astral fuel", {ru: "Астральное топливо"});
Translation.addTranslation("Dark matter", {ru: "Тёмная материя"});
Translation.addTranslation("Red matter", {ru: "Красная материя"});
Translation.addTranslation("Klein star I", {ru: "Звезда Кляйна I"});
Translation.addTranslation("Klein star II", {ru: "Звезда Кляйна II"});
Translation.addTranslation("Klein star III", {ru: "Звезда Кляйна III"});
Translation.addTranslation("Klein star IV", {ru: "Звезда Кляйна IV"});
Translation.addTranslation("Klein star V", {ru: "Звезда Кляйна Омега"});
Translation.addTranslation("Klein star VI", {ru: "Звезда Кляйна Сфера"});
Translation.addTranslation("Dark matter helmet", {ru: "Тёмный шлем"});
Translation.addTranslation("Dark matter chestplate", {ru: "Тёмный нагрудник"});
Translation.addTranslation("Dark matter leggings", {ru: "Тёмные поножи"});
Translation.addTranslation("Dark matter boots", {ru: "Тёмные ботинки"});
Translation.addTranslation("Red matter helmet", {ru: "Красный шлем"});
Translation.addTranslation("Red matter chestplate", {ru: "Красный нагрудник"});
Translation.addTranslation("Red matter leggings", {ru: "Красные поножи"});
Translation.addTranslation("Red matter boots", {ru: "Красные ботинки"});
Translation.addTranslation("Dark matter pickaxe", {ru: "Тёмная кирка"});
Translation.addTranslation("Dark matter axe", {ru: "Тёмный топор"});
Translation.addTranslation("Dark matter shovel", {ru: "Тёмная лопата"});
Translation.addTranslation("Dark matter sword", {ru: "Тёмный меч"});
Translation.addTranslation("Dark matter hammer", {ru: "Тёмный молот"});
Translation.addTranslation("Red matter pickaxe", {ru: "Красная кирка"});
Translation.addTranslation("Red matter axe", {ru: "Красный топор"});
Translation.addTranslation("Red matter shovel", {ru: "Красная лопата"});
Translation.addTranslation("Red matter sword", {ru: "Красный меч"});
Translation.addTranslation("Red matter hammer", {ru: "Красный молот"});
Translation.addTranslation("Anti-matter Relay I", {ru: "Анти-предметное реле MK I"});
Translation.addTranslation("Anti-matter Relay II", {ru: "Анти-предметное реле MK II"});
Translation.addTranslation("Anti-matter Relay III", {ru: "Анти-предметное реле MK III"});
Translation.addTranslation("Energy Collector I", {ru: "Сборщик энергии MK I"});
Translation.addTranslation("Energy Collector II", {ru: "Сборщик энергии MK II"});
Translation.addTranslation("Energy Collector III", {ru: "Сборщик энергии MK III"});
Translation.addTranslation("Energy Condenser I", {ru: "Конденсатор энергии I"});
Translation.addTranslation("Energy Condenser II", {ru: "Конденсатор энергии II"});
Translation.addTranslation("Alchemical chest", {ru: "Алхимический сундук"});
Translation.addTranslation("Transmutation table", {ru: "Стол трансмутаций"});
Translation.addTranslation("Alchemical fuel block", {ru: "Блок Алхимического Угля"});
Translation.addTranslation("Mobius fuel block", {ru: "Блок Топлива Мобиуса"});
Translation.addTranslation("Aeternalis fuel block", {ru: "Блок Астрального Топлива"});
Translation.addTranslation("Dark matter block", {ru: "Блок тёмной материи"});
Translation.addTranslation("Red matter block", {ru: "Блок красной материи"});
Translation.addTranslation("Covalence dust Low", {ru: "Слабая ковалентная пыль"});
Translation.addTranslation("Covalence dust Medium", {ru: "Средняя ковалентная пыль"});
Translation.addTranslation("Covalence dust High", {ru: "Сильная ковалентная пыль"});
Translation.addTranslation("Alchemy Bag", {ru: "Алхимическая сумка"});
Translation.addTranslation("Alchemy bag", {ru: "Алхимическая сумка"});
Translation.addTranslation("Transmutation Table", {ru: "Стол трансмутаций"});
Translation.addTranslation("§bRed matter furnace", {ru: "§bПечь из красной материи"});
Translation.addTranslation("Dark matter furnace", {ru: "Печь из Темной материи"});
Translation.addTranslation("§bMatter pedestal", {ru: "§bПьедестал из темной материи"});
Translation.addTranslation("Transmute tablet", {ru: "Трансмутационный планшет"});
Translation.addTranslation("Red Matter Katar", {ru: "Красный катар"});
Translation.addTranslation("Red Matter Morning Star", {ru: "Красный моргенштерн"});
Translation.addTranslation("Void ring", {ru: "Кольцо чёрной дыры"});
Translation.addTranslation("Body stone", {ru: "Камень тела"});
Translation.addTranslation("Soul stone", {ru: "Камень души"});
Translation.addTranslation("Ring of harvest goodness", {ru: "Кольцо Богини урожая"});
Translation.addTranslation("Talisman of repair", {ru: "Талисман починки"});
Translation.addTranslation("Watch of flowing time", {ru: "Часы \"текучего\" времени"});
Translation.addTranslation("Ring of Zero", {ru: "Кольцо абсолютного нуля"});
Translation.addTranslation("Iron band", {ru: "Железное кольцо"});
Translation.addTranslation("Divining rod low", {ru: "Слабый Стержень поиска"});
Translation.addTranslation("Divining rod medium", {ru: "Средний Стержень поиска"});
Translation.addTranslation("Divining rod high", {ru: "Сильный Стержень поиска"});
Translation.addTranslation("Klein Stars", {ru: "Звёзды Кляйна"});
Translation.addTranslation("Anti-matter Relays", {ru: "Анти-материальные реле"});
Translation.addTranslation("EMC Collectors", {ru: "Сборщики EMC"});
Translation.addTranslation("Rings and Amulets", {ru: "Звёзды и амулеты"});
Translation.addTranslation("Alchemical Bags", {ru: "Алхимические сумки"});
Translation.addTranslation("Tome knowledge", {ru: "Том знаний"});




// file: models/chest_0.js

//create Reider ___ size - 16
let chest_0 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.4375, 0.5-0.0625, 0, 0.5625, 0.75-0.0625, 0.0625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2




// file: models/chest_1.js

//create Reider ___ size - 16
let chest_1 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.4375, 0.5-0.0625, 0.9375, 0.5625, 0.75-0.0625, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2




// file: models/chest_2.js

//create Reider ___ size - 16
let chest_2 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0, 0.5-0.0625, 0.4375, 0.0625, 0.75-0.0625, 0.5625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2




// file: models/chest_3.js

//create Reider ___ size - 16
let chest_3 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.9375, 0.5-0.0625, 0.4375, 1, 0.75-0.0625, 0.5625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2




// file: models/table.js

//create Reider ___ size - 16
let table_model = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0, 0, 0, 1, .25, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	return model;
});//boxes - 1




// file: models/pedestal.js

//create Reider ___ size - 16
let pedestal = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.1875, 0, 0.1875, 0.8125, 0.125, 0.8125, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.375, 0.125, 0.375, 0.625, 0.625, 0.625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0.3125, 0.625, 0.3125, 0.6875, 0.6875, 0.6875, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	return model;
});//boxes - 3




// file: api/ItemName.js

var CustomName = WRAP_JAVA("com.core.api.Item");

Network.addClientPacket("ItemName.setNameClient", function(data){
	let keys = Object.keys(data);
	for(let i in keys){
		let obj = data[keys[i]];
		if(!ItemName.names[obj.id])
			ItemName.names[obj.id] = Translation.translate(Item.getName(obj.id, 0));
		if(obj.add)
			CustomName.overrideName(obj.id, ItemName.names[obj.id] + obj.name);
		else
			CustomName.overrideName(obj.id, obj.name);
	}
});

Callback.addCallback("ServerPlayerLoaded", function(player){
	let client = Network.getClientForPlayer(player);
	if(client)
		client.send("ItemName.setNameClient", ItemName.customs);
});

var ItemName = {
	customs: {},
	names: {},
	setName(id, name, add){
		this.customs[id] = {
			id: id,
			name: name,
			add: !!add
		};
	}
};




// file: api/Core.js

Saver.addSavesScope("ProjectE",
	function read(scope){
		Core.players = scope.players || {};
		Table.scrutinys = scope.scrutinys || {};
	}, function save() {
		return {
			players: Core.players||{},
			scrutinys: Table.scrutinys||{}
		}
});
Callback.addCallback("LevelLeft", function(){
	Core.players = {};
	Table.scrutinys = {};
});
var NativeItem = WRAP_JAVA("com.core.api.Item");
const color = "§"+__config__.get("color_emc");
let Core = {
	emc: {},
	players: {},
	
	setEmc(player, emc){
		this.players[player] = emc;
	},
	getEmc(player){
		return this.players[player];
	},
	addEmc(player, emc){
		this.setEmc(player, this.getEmc(player) + emc);
	},
	setItemEmc(id, data, emc){
		if(!id)
			return;
		data = (data || 0) == -1 ? 0 : (data || 0);
		this.emc[id+":"+data] = emc;
		if(!this.stars[id]){
			ItemName.setName(id, "\n"+color+" EMC "+ Core.emc[id+":"+data], true);
		}
	},
	deleteItemEmc(id, data){
		delete this.emc[id+":"+data];
		ItemName.setName(id, "", true);
	},
	getItemEmc(id, data){
		data = (data || 0) == -1 ? 0 : (data || 0);
		let storage = this.stars[id];
		if(!storage){
			return this.emc[id+":"+data] ? this.emc[id+":"+data] : this.emc[id+":0"];
		}
		return (this.emc[id+":"+0]||0) + (storage-data);
	},
	recipes: {},
	addRecipe(id, count, data, items){
		this.recipes[id] = this.recipes[id] || {};
		this.recipes[id][data] = [count,items];
	},
	deleteRecipe(id, data){
		this.recipes[id] = this.recipes[id] || {};
		if(this.recipes[id][data])
			delete this.recipes[id][data];
	},
	getRecipe(id, data){
		if(this.recipes[id])
			return this.recipes[id][data];
		return null;
	},
	
	updateItemEmc(id, count, data, items,op){
		op = op || 0;
		op++;
		if(op >= 50)
			return false;
		if(!items)
			return false;
		let emc_result = 0;
		for(let i in items){
			let item = items[i];
			let emc = Core.getItemEmc(item.id,item.data);
			if(!emc){
				let recipe = this.getRecipe(item.id, item.data);
				if(!recipe || !this.updateItemEmc(item.id, recipe[0], item.data, recipe[1], op))
					return false;
				else
					emc = Core.getItemEmc(item.id,item.data);
			}
			emc_result += emc*item.count;
		}
		op = 0;
		if(emc_result == 0)
			return false;
		emc_result = Math.floor(emc_result/count);
		let item_emc = Core.getItemEmc(id,data);
		if(!item_emc){
			Core.setItemEmc(id,data,emc_result);
			return true;
		}else if(emc_result > item_emc){
			Core.setItemEmc(id,data,emc_result);
			return true;
		}
		return false;
	},
	
	updateRecipesEmc(){
		let keys = Object.keys(this.recipes);
		for(let i in keys){
			let datas = Object.keys(this.recipes[keys[i]]);
			for(let ii in datas){
				let recipe = this.getRecipe(keys[i], datas[ii])
				this.updateItemEmc(parseInt(keys[i]), recipe[0], parseInt(datas[ii]), recipe[1]);
			}
		}
	},
	isItemEmc(id, data){
		return !!this.getItemEmc(id, data);
	},
	
	stars: {},
	
	registerStar(id, storage){
		this.stars[id] = storage;
		Item.setMaxDamage(id, storage);
		Callback.addCallback("PreLoaded", function(){
			Item.addToCreative(id, 1, storage);
		});
		Item.registerNameOverrideFunction(id, function(item, name){
			let emc_default = Core.getItemEmc(item.id, storage)||0;
			let emc = Core.getItemEmc(item.id, item.data)||0;
			return name + "\n§7EMC: " + (emc) + "/" + (storage+emc_default);

		});
	},
	getStorageStar(id){
		return this.stars[id];
	},
	
	updateStarSlot(self, name, value){
		value = value || 1;
		let slot = self.container.getSlot(name);
		let storage = this.getStorageStar(slot.id);
		if(!!storage){
			let a = Math.min(self.data.emc, value);
			if(slot.data-a >= 0)
				self.container.setSlot(name, slot.id, slot.count, (slot.data-a), slot.extra);
			else
				self.container.setSlot(name, slot.id, slot.count, 0, slot.extra);
			self.data.emc-=a;
			self.container.sendChanges();
		}
	},
	
	loadFromFile(path){
		let arr = FileTools.ReadJSON(path);
		for(let i in arr)
			this.setItemEmc(eval(arr[i].id), arr[i].data, arr[i].emc);
	},
	_loadFromFile(path, type){
		let arr = FileTools.ReadText(path);
		arr = arr.split("\n");
		for(let i in arr){
			let data = arr[i].split("===");
			let block = data[0].split(":");
			let id = (function(){
				if(type == "vanilla_item")
					return parseInt(block[0]);
				if(type == "vanilla_block")
					return Block.convertBlockToItemId(parseInt(block[0]));
				if(type == "mod_item")
					return ItemID[block[0]]
			})();
			this.setItemEmc(id, parseInt(block[1]), parseInt(data[1]));
		}
	},
	getTextByArr(prefix, begin, end){
		let arr = [];
		for(let i = begin;i <= end;i++)
			arr.push(prefix+i);
		return arr;
	},
	
	collectors: {},
	setResultCollector(id, data, r_id, r_data, emc){
		emc = emc || Core.getItemEmc(r_id, r_data) - Core.getItemEmc(id, data);
		this.collectors[id+":"+data] = {
			id: r_id,
			data: r_data||0,
			emc: emc
		}
	},
	getResultCollector(id, data){
		return this.collectors[id+":"+data];
	},
	
	collectorBlocks: {},
	
	isCollector(id){
		return !!this.collectorBlocks[id]
	},
	
	transfers: {},
	setTransfer(id, bool){
		this.transfers[id] = bool;
	},
	
	getTransfers(self, transfers){
		let result = [];
		const arr = [
			{x:-1,y:0,z:0},
			{x:1,y:0,z:0},
			{x:0,y:-1,z:0},
			{x:0,y:1,z:0},
			{x:0,y:0,z:-1},
			{x:0,y:0,z:1},
		];
		for(let i in arr){
			let pos = {
				x: self.x+arr[i].x,
				y: self.y+arr[i].y,
				z: self.z+arr[i].z
			};
			let id = self.blockSource.getBlock(pos.x, pos.y, pos.z).id;
			if(!!transfers[id])
				result.push(pos);
		}
		return result;
	},
	transfer(self, transfers){
		transfers = transfers || this.transfers;
		const arr = this.getTransfers(self, transfers);
		for(let i in arr){
			let tile = TileEntity.getTileEntity(arr[i].x, arr[i].y, arr[i].z);
			if(tile && tile.data && tile.data.active){
				let value = Math.min(self.data.emc/arr.length, self.data.emc_out);
				if(tile.data.emc+value <= tile.data.emc_max || tile.data.emc_max == -1){
					self.data.emc-=value;
					tile.data.emc+=value;
				}
			}
		}
	},
	
	inputSlotsEmc(self, slots, black){
		black = black || [];
		for(let i in slots){
			let slot = self.container.getSlot(slots[i]);
			if(black.indexOf(slot.id) != -1)
				continue;
			let emc = Core.getItemEmc(slot.id, slot.data);
			if(emc){
				self.data.emc+=emc;
				self.container.setSlot(slots[i], slot.id, slot.count-1, slot.data);
				self.container.validateAll();
				break;
			}
		}
	},
	
	registerDefaultCollector(id, obj){
		
		obj.input = obj.input || "input";
		obj.output = obj.output || "output";
		obj.emc_text = obj.emc_text || "emc_text";
		obj.progres = obj.progres || "progres";
		obj.sun = obj.sun || "sun";
		obj.emc_scale = obj.emc_scale || "emc_scale";
		obj.slot_star = obj.slot_star || "charge";
		obj.emc_out = obj.emc_out || 16;
		obj.emc_max = obj.emc_max || 10000;
		obj.emc = obj.emc || obj.emc_out;
		obj.emc_min = obj.emc_min||1/20;
		
		this.collectorBlocks[id] = obj;
		this.setTransfer(id, true);
		
		TileEntity.registerPrototype(id, {
			useNetworkItemContainer: true,
			defaultValues: {
				emc: 0,
				emc_max: obj.emc_max,
				emc_out: obj.emc_out,
				active: false 
			},
			getScreenName(player, coords){
				return "main";
			},
			getScreenByName(){
				return obj.ui;
			},
			getEmc(){
				return Math.floor(this.data.emc);
			},
			tick(){
				let sun = this.blockSource.getLightLevel(this.x, this.y+1, this.z) / 15;
				if(this.data.emc < this.data.emc_max)
					this.data.emc+=Math.max((obj.emc/20)*sun, obj.emc_min);
				this.container.setScale(obj.sun, sun);
				this.container.setText(obj.emc_text, Math.floor(this.data.emc)+" EMC");
				
				Core.updateStarSlot(this, obj.slot_star, obj.star_value);
				
				let input = this.container.getSlot(obj.input);
				let output = this.container.getSlot(obj.output);
				let result = Core.getResultCollector(input.id, input.data);
				this.data.active = !!result;
				if(!!result && (output.id == result.id || output.id == 0) && this.data.emc >= result.emc && output.count < Item.getMaxStack(output.id)){
					this.data.emc-=result.emc;
					input.count--;
					output.id = result.id;
					output.data = output.data;
					output.count++;
					if(input.count <= 0){
						input.id = output.id;
						input.data = output.data;
						input.count = output.count;
						output.count = 0;
					}
					
					this.container.setSlot(obj.input, input.id, input.count, input.data);
					this.container.setSlot(obj.output, output.id, output.count, output.data);
					this.container.validateAll();
				}else if(!!result)
					this.container.setScale(obj.progres, this.data.emc/result.emc);
				else{
					Core.transfer(this);
					this.container.setScale(obj.progres, 0);
				}
				this.container.setScale(obj.emc_scale, this.data.emc / this.data.emc_max);
				this.container.sendChanges(); 
			}
		});
	},
	relayBlocks: {},
	isRelay(id){
		return !!this.relayBlocks[id];
	},
	
	setDefaultRelay(id, obj){
		
		obj.emc_out = obj.emc_out || 16;
		obj.emc_max = obj.emc_max || 10000;
		obj.emc_text = obj.emc_text || "emc_text";
		obj.emc_scale = obj.emc_scale || "emc_scale";
		obj.slot_star = obj.slot_star || "charge";
		obj.slots = obj.slots || [];
		obj.star_value = obj.star_value||obj.emc_out;
		
		this.relayBlocks[id] = obj;
		this.setTransfer(id, true);
		
		TileEntity.registerPrototype(id, {
			useNetworkItemContainer: true,
			defaultValues: {
				emc: 0,
				emc_max: obj.emc_max,
				emc_out: obj.emc_out,
				active: true 
			},
			getScreenName(player, coords){
				return "main";
			},
			getScreenByName(){
				return obj.ui;
			},
			getEmc(){
				return Math.floor(this.data.emc);
			},
			tick(){
				this.container.setText(obj.emc_text, Math.floor(this.data.emc)+" EMC");
				this.container.setScale(obj.emc_scale, this.data.emc / this.data.emc_max);
				
				Core.inputSlotsEmc(this, obj.slots);
				Core.transfer(this, Core.condenser);
				Core.updateStarSlot(this, obj.slot_star, obj.star_value);
				
				this.container.sendChanges(); 
			}
		});
	},
	
	setModelChest(id){
		chest_1(null, id, 0).setBlockModel(id, 0);
		chest_0(null, id, 1).setBlockModel(id, 1);
		chest_3(null, id, 2).setBlockModel(id, 2);
		chest_2(null, id, 3).setBlockModel(id, 3);
	},
	condenser: {},
	isCondenser(id){
		return this.condenser[id];
	},
	
	setDefaultCondenser(id, obj){
		
		obj.slots = obj.slots || [];
		obj.emc_text = obj.emc_text || "emc_text";
		obj.emc_scale = obj.emc_scale || "emc_scale";
		
		this.condenser[id] = obj;
		this.setTransfer(id, true);
		
		TileEntity.registerPrototype(id, {
			useNetworkItemContainer: true,
			defaultValues: {
				emc: 0,
				emc_max: -1,
				active: true 
			},
			getScreenName(player, coords){
				return "main";
			},
			getScreenByName(){
				return obj.ui;
			},
			getEmc(){
				return Math.floor(this.data.emc);
			},
			add(item){
				for(let i in obj.slots){
					let slot = this.container.getSlot(obj.slots[i]);
					if((slot.id == 0 || slot.id == item.id) && slot.count+1 <= Item.getMaxStack(item.id)){
						this.container.setSlot(obj.slots[i], item.id, slot.count+1, item.data);
						break;
					}
				}
			},
			tick(){
				StorageInterface.checkHoppers(this);
				
				this.container.setText(obj.emc_text, Math.floor(this.data.emc)+" EMC");
				let item = this.container.getSlot("item");
				let emc = Core.getItemEmc(item.id, item.data);
				this.data.active = !!emc;
				if(!!emc){
					this.container.setScale(obj.emc_scale, this.data.emc / emc);
					Core.inputSlotsEmc(this, obj.slots, [item.id]);
					if(this.data.emc>=emc){
						this.data.emc-=emc;
						this.add(item);
					}
				}else{
					this.container.setScale(obj.emc_scale, 0);
					this.data.emcMax = 0;
				}
				
				this.container.sendChanges(); 
			}
		});
		
		let _slots = {};
		for(let i in obj.slots)
			_slots[obj.slots[i]] = {input: true, output: false};
		
		StorageInterface.createInterface(id, {
			slots: _slots
		});
	}
};
let update = false;
Callback.addCallback(__config__.get("event_emc_load"), function(){
if(update)
return;
update = true;
 Core.loadFromFile(__dir__+"/custom.js");
	Core._loadFromFile(__dir__+"emc/vanilla_item.txt", "vanilla_item");
	Core._loadFromFile(__dir__+"emc/innercore_item.txt", "mod_item");
	Core._loadFromFile(__dir__+"emc/vanilla_block.txt", "vanilla_block");
	
	Core.setItemEmc(ItemID.ingotCopper, 0, 85);
  Core.setItemEmc(ItemID.ingotTin, 0, 128);
  Core.setItemEmc(ItemID.ingotLead, 0, 512);
  Core.setItemEmc(ItemID.ingotSilver, 0, 512);
  Core.setItemEmc(ItemID.latex, 0, 32);
  Core.setItemEmc(ItemID.rubber, 0, 32);
  Core.setItemEmc(ItemID.plateIron, 0, 256);
  Core.setItemEmc(ItemID.plateGold, 0, 2048);
  Core.setItemEmc(ItemID.plateCopper, 0, 85);
  Core.setItemEmc(ItemID.plateTin, 0, 128);
  Core.setItemEmc(ItemID.plateLead, 0, 512);
	
	Callback.invokeCallback("PreEmcLoad", api);
	
	let collection = Recipes.getAllWorkbenchRecipes();
	
	let it = collection.iterator();
	while(it.hasNext()){
		let recipe = it.next();
		let result = recipe.getResult()
		Core.addRecipe(result.id, result.count, result.data, (function(){
			let items = recipe.getSortedEntries();
			let arr = [];
			let obj = {};
			for(let i = 0;i < items.length;i++){
				let item = items[i];
				if(item.id != 0)
					obj[item.id+":"+item.data] = (obj[item.id+":"+item.data]||0)+1;
			}
			let keys = Object.keys(obj);
			for(let i in keys){
				let item = keys[i].split(":");
				arr.push({
					id: parseInt(item[0]),
					data: parseInt(item[1])||0,
					count: obj[keys[i]]
				});
			}
			return arr;
		})());
	}
	if(__config__.get("emc_auto_definition"))
		Core.updateRecipesEmc();
	
	Callback.invokeCallback("PostEmcLoad", api);
});




// file: api/Table.js

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




// file: api/Pedestal.js

let Pedestal = {
	funcs: {},
	register(id, func){
		this.funcs[id] = func;
	},
	get(id){
		return this.funcs[id];
	}
};




// file: api/multiplayer.js

Network.addClientPacket("pe.particle", function(packetData) {
        Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
});
Network.addClientPacket("pe.message", function(packetData) {
    Game.message(packetData);
});
var Mp = {
    message: function (player, text){
        var client = Network.getClientForPlayer(player);
        if(client != null){
            client.send("pe.message", text);
        }
    },
    spawnParticle: function (type, x, y, z, vx, vy, vz, ax, ay, az){
            vx = vx || 0;
            vy = vy || 0;
            vz = vz || 0;
            ax = ax || 0;
            ay = ay || 0;
            az = az || 0;
            var players = Network.getConnectedPlayers();
            for(var i in players){
                var client = Network.getClientForPlayer(players[i]);
                if(client){
                    client.send("pe.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
             
                }
            }
        
    }
};




// file: blocks/collector.js

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




// file: blocks/relay.js

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




// file: blocks/condenser.js

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




// file: blocks/chest.js

IDRegistry.genBlockID("alchChest");
Block.createBlockWithRotation("alchChest", [{
    name: "Alchemical chest",
    texture: [
        ["alchemicalChestBottom", 0],
        ["alchemicalChestBottom", 0],
        ["alchemicalChestSide", 0],
        ["alchemicalChestFront", 0],
        ["alchemicalChestSide", 0],
        ["alchemicalChestSide", 0]
    ],
    inCreative: true
}]);

var alchChestUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Alchemical Storage"
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
        type: "background",
        color: android.graphics.Color.parseColor("#b3b3b3")
    }],
	
    elements: {
        slot1: {
            type: "slot",
            x: 350,
            y: 40,
            size: 50
        },
        slot2: {
            type: "slot",
            x: 400,
            y: 40,
            size: 50
        },
        slot3: {
            type: "slot",
            x: 450,
            y: 40,
            size: 50
        },
        slot4: {
            type: "slot",
            x: 500,
            y: 40,
            size: 50
        },
        slot5: {
            type: "slot",
            x: 550,
            y: 40,
            size: 50
        },
        slot6: {
            type: "slot",
            x: 600,
            y: 40,
            size: 50
        },
        slot7: {
            type: "slot",
            x: 650,
            y: 40,
            size: 50
        },
        slot8: {
            type: "slot",
            x: 700,
            y: 40,
            size: 50
        },
        slot9: {
            type: "slot",
            x: 750,
            y: 40,
            size: 50
        },
        slot10: {
            type: "slot",
            x: 800,
            y: 40,
            size: 50
        },
        slot11: {
            type: "slot",
            x: 850,
            y: 40,
            size: 50
        },
        slot12: {
            type: "slot",
            x: 900,
            y: 40,
            size: 50
        },
        slot13: {
            type: "slot",
            x: 350,
            y: 90,
            size: 50
        },
        slot14: {
            type: "slot",
            x: 400,
            y: 90,
            size: 50
        },
        slot15: {
            type: "slot",
            x: 450,
            y: 90,
            size: 50
        },
        slot16: {
            type: "slot",
            x: 500,
            y: 90,
            size: 50
        },
        slot17: {
            type: "slot",
            x: 550,
            y: 90,
            size: 50
        },
        slot18: {
            type: "slot",
            x: 600,
            y: 90,
            size: 50
        },
        slot19: {
            type: "slot",
            x: 650,
            y: 90,
            size: 50
        },
        slot20: {
            type: "slot",
            x: 700,
            y: 90,
            size: 50
        },
        slot21: {
            type: "slot",
            x: 750,
            y: 90,
            size: 50
        },
        slot22: {
            type: "slot",
            x: 800,
            y: 90,
            size: 50
        },
        slot23: {
            type: "slot",
            x: 850,
            y: 90,
            size: 50
        },
        slot24: {
            type: "slot",
            x: 900,
            y: 90,
            size: 50
        },
        slot25: {
            type: "slot",
            x: 350,
            y: 140,
            size: 50
        },
        slot26: {
            type: "slot",
            x: 400,
            y: 140,
            size: 50
        },
        slot27: {
            type: "slot",
            x: 450,
            y: 140,
            size: 50
        },
        slot28: {
            type: "slot",
            x: 500,
            y: 140,
            size: 50
        },
        slot29: {
            type: "slot",
            x: 550,
            y: 140,
            size: 50
        },
        slot30: {
            type: "slot",
            x: 600,
            y: 140,
            size: 50
        },
        slot31: {
            type: "slot",
            x: 650,
            y: 140,
            size: 50
        },
        slot32: {
            type: "slot",
            x: 700,
            y: 140,
            size: 50
        },
        slot33: {
            type: "slot",
            x: 750,
            y: 140,
            size: 50
        },
        slot34: {
            type: "slot",
            x: 800,
            y: 140,
            size: 50
        },
        slot35: {
            type: "slot",
            x: 850,
            y: 140,
            size: 50
        },
        slot36: {
            type: "slot",
            x: 900,
            y: 140,
            size: 50
        },
        slot37: {
            type: "slot",
            x: 350,
            y: 190,
            size: 50
        },
        slot38: {
            type: "slot",
            x: 400,
            y: 190,
            size: 50
        },
        slot39: {
            type: "slot",
            x: 450,
            y: 190,
            size: 50
        },
        slot40: {
            type: "slot",
            x: 500,
            y: 190,
            size: 50
        },
        slot41: {
            type: "slot",
            x: 550,
            y: 190,
            size: 50
        },
        slot42: {
            type: "slot",
            x: 600,
            y: 190,
            size: 50
        },
        slot43: {
            type: "slot",
            x: 650,
            y: 190,
            size: 50
        },
        slot44: {
            type: "slot",
            x: 700,
            y: 190,
            size: 50
        },
        slot45: {
            type: "slot",
            x: 750,
            y: 190,
            size: 50
        },
        slot46: {
            type: "slot",
            x: 800,
            y: 190,
            size: 50
        },
        slot47: {
            type: "slot",
            x: 850,
            y: 190,
            size: 50
        },
        slot48: {
            type: "slot",
            x: 900,
            y: 190,
            size: 50
        },
        slot49: {
            type: "slot",
            x: 350,
            y: 240,
            size: 50
        },
        slot50: {
            type: "slot",
            x: 400,
            y: 240,
            size: 50
        },
        slot51: {
            type: "slot",
            x: 450,
            y: 240,
            size: 50
        },
        slot52: {
            type: "slot",
            x: 500,
            y: 240,
            size: 50
        },
        slot53: {
            type: "slot",
            x: 550,
            y: 240,
            size: 50
        },
        slot54: {
            type: "slot",
            x: 600,
            y: 240,
            size: 50
        },
        slot55: {
            type: "slot",
            x: 650,
            y: 240,
            size: 50
        },
        slot56: {
            type: "slot",
            x: 700,
            y: 240,
            size: 50
        },
        slot57: {
            type: "slot",
            x: 750,
            y: 240,
            size: 50
        },
        slot58: {
            type: "slot",
            x: 800,
            y: 240,
            size: 50
        },
        slot59: {
            type: "slot",
            x: 850,
            y: 240,
            size: 50
        },
        slot60: {
            type: "slot",
            x: 900,
            y: 240,
            size: 50
        },
        slot61: {
            type: "slot",
            x: 350,
            y: 290,
            size: 50
        },
        slot62: {
            type: "slot",
            x: 400,
            y: 290,
            size: 50
        },
        slot63: {
            type: "slot",
            x: 450,
            y: 290,
            size: 50
        },
        slot64: {
            type: "slot",
            x: 500,
            y: 290,
            size: 50
        },
        slot65: {
            type: "slot",
            x: 550,
            y: 290,
            size: 50
        },
        slot66: {
            type: "slot",
            x: 600,
            y: 290,
            size: 50
        },
        slot67: {
            type: "slot",
            x: 650,
            y: 290,
            size: 50
        },
        slot68: {
            type: "slot",
            x: 700,
            y: 290,
            size: 50
        },
        slot69: {
            type: "slot",
            x: 750,
            y: 290,
            size: 50
        },
        slot70: {
            type: "slot",
            x: 800,
            y: 290,
            size: 50
        },
        slot71: {
            type: "slot",
            x: 850,
            y: 290,
            size: 50
        },
        slot72: {
            type: "slot",
            x: 900,
            y: 290,
            size: 50
        },
        slot73: {
            type: "slot",
            x: 350,
            y: 340,
            size: 50
        },
        slot74: {
            type: "slot",
            x: 400,
            y: 340,
            size: 50
        },
        slot75: {
            type: "slot",
            x: 450,
            y: 340,
            size: 50
        },
        slot76: {
            type: "slot",
            x: 500,
            y: 340,
            size: 50
        },
        slot77: {
            type: "slot",
            x: 550,
            y: 340,
            size: 50
        },
        slot78: {
            type: "slot",
            x: 600,
            y: 340,
            size: 50
        },
        slot79: {
            type: "slot",
            x: 650,
            y: 340,
            size: 50
        },
        slot80: {
            type: "slot",
            x: 700,
            y: 340,
            size: 50
        },
        slot81: {
            type: "slot",
            x: 750,
            y: 340,
            size: 50
        },
        slot82: {
            type: "slot",
            x: 800,
            y: 340,
            size: 50
        },
        slot83: {
            type: "slot",
            x: 850,
            y: 340,
            size: 50
        },
        slot84: {
            type: "slot",
            x: 900,
            y: 340,
            size: 50
        }
    }
});
Core.setModelChest(BlockID.alchChest);
TileEntity.registerPrototype(BlockID.alchChest, {
useNetworkItemContainer: true,
getScreenName(player, coords){
return "main";
},
getScreenByName(){
return alchChestUI;
},
});




// file: blocks/table.js

IDRegistry.genBlockID("transmutationTablet");
Block.createBlock("transmutationTablet", [
	{name: "Transmutation Table", texture: [
		["table_bottom", 0],
		["table_top", 0],
		["table_side", 0]
	], inCreative: true}
]);
table_model(null, BlockID.transmutationTablet, 0).setBlockModel(BlockID.transmutationTablet, 0);
TileEntity.registerPrototype(BlockID.transmutationTablet, {
	click(id, count, data, coords, player){
		if(!Entity.getSneaking(player)){
			Game.prevent();
			Table.open(player, "ProjectE.Table", 12);
		}
	}
});

IDRegistry.genItemID("transmute_tablet");
Item.createItem("transmute_tablet", "Transmute tablet", {name: "transmute_tablet"}, {stack: 1});
Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
	if(item.id == ItemID.transmute_tablet)
		if(!Entity.getSneaking(player)){
			Game.prevent();
			Table.open(player, "ProjectE.Table", 12);
		}
});




// file: pedestal/pedestal.js

IDRegistry.genBlockID("pedestalMatter");
Block.createBlock("pedestalMatter", [
	 {name: "§bMatter pedestal", texture: [
	   ["dmBlock",0],
  ], inCreative: true}
]);

pedestal(null, BlockID.pedestalMatter, 0).setBlockModel(BlockID.pedestalMatter, 0);

TileEntity.registerPrototype(BlockID.pedestalMatter, {
	defaultValues: {
		active: false,
		item: {id: 0, data: 0, extra: null},
		player: null
	},
	client: {
		updateModel(){
			let id = Network.serverToLocalId(this.networkData.getInt("itemId"));
			let data = this.networkData.getInt("itemData");
			this.model.describeItem({
				id: id,
				count: 1,
				data: data,
				size: 1
			});
		},
		load(){
			this.model = new Animation.Item(this.x + .5, this.y + 1, this.z + .5);
			this.updateModel();
			this.model.load();
			let that = this;
			this.networkData.addOnDataChangedListener(function(data, isExternal){
				that.updateModel();
			});
		},
		unload(){
			if(this.model)
				this.model.destroy();
		}
	},
	isItem(){
		if(!this.data.item) this.data.item = {id: 0, data: 0, extra: null};
		if(!this.data.item.id) this.data.item.id = 0;
		if(!this.data.item.data) this.data.item.data = 0;
		if(!this.data.item.extra) this.data.item.extra = null;
	},
	init(){
		this.isItem();
this.animation(this.data.item);
	},
	animation(item){
		this.networkData.putInt("itemId", item.id);
		this.networkData.putInt("itemData", item.data);
		this.networkData.sendChanges();
		this.data.item = {
			id: item.id,
			data: item.data,
			extra: item.extra
		};
	}, 
	drop(){
		this.blockSource.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, this.data.item.extra||null);
		this.animation({id: 0, data: 0});
		if(this.data.active){
			SoundHelper.playByPlayer(this.data.player, "peuncharge", .5);
			this.data.player = null;
		}
	},
	click(id, count, data, coords, player){
		this.isItem();
		Game.prevent();
		if(id == 0 && this.data.item.id != 0 && Entity.getSneaking(player)){
			if(!this.data.active){
				SoundHelper.playByPlayer(player, "pecharge", .5);
				this.data.player = player;
			}else{
				SoundHelper.playByPlayer(player, "peuncharge", .5);
				this.data.player = null;
			}
			this.data.active = !this.data.active;
		}else if(this.data.item.id == 0&&!Entity.getSneaking(player) && !!Pedestal.get(id)){
			this.animation({
				id: id,
				data: data
			});
			Entity.setCarriedItem(player, id, count-1, data);
		}else
			this.drop();
	},
	destroyBlock(){
		this.drop();
	},
	spawnParticle(){
		Mp.spawnParticle(8, this.x+.2, this.y+.3, this.z+.2);
		Mp.spawnParticle(8, this.x+.8, this.y+.3, this.z+.8);
		Mp.spawnParticle(8, this.x+.8, this.y+.3, this.z+.2);
		Mp.spawnParticle(8, this.x+.2, this.y+.3, this.z+.8);
		
		Mp.spawnParticle(8, this.x+.5, this.y+.3, this.z+.2);
		Mp.spawnParticle(8, this.x+.2, this.y+.3, this.z+.5);
		Mp.spawnParticle(8, this.x+.5, this.y+.3, this.z+.8);
		Mp.spawnParticle(8, this.x+.8, this.y+.3, this.z+.5);
	},
	tick(){
		if(this.data.active){
			let tick = Pedestal.get(this.data.item.id);
			if(tick){
				if(World.getThreadTime() % 4 == 0)
				 this.spawnParticle();
				tick(this);
			}
		}
	}
});




// file: pedestal/soul stone.js

IDRegistry.genItemID("soulStone");
Item.createItem("soulStone", "Soul stone\n§3On pedestal: restores health to nearest player every 0.5 sec.", {name: "soulStone", meta: 0}, {stack: 1});

Pedestal.register(ItemID.soulStone, function(tile){
	let player = tile.data.player;
  if(World.getThreadTime()%10 == 0 && Entity.getHealth(player) < 20){
    let distance = Entity.getDistanceToCoords(player, {x: tile.x, y: tile.y, z: tile.z});
    if(distance <= 11)
    	Entity.setHealth(player, Entity.getHealth(player)+2);
  }
});




// file: pedestal/time watch.js

IDRegistry.genItemID("watchTime");
Item.createItem("watchTime", "Watch of flowing time", {name: "timeWatch", meta: 0}, {stack: 1});

Pedestal.register(ItemID.watchTime, function(tile){
  for(let x = -6; x < 6; x++)
    for(let y = -6; y < 6; y++)
      for(let z = -6; z < 6; z++){
        let _tile = World.getTileEntity(tile.x + x, tile.y + y, tile.z + z, tile.blockSource);
        let block = tile.blockSource.getBlockId(tile.x + x, tile.y + y, tile.z + z);
        if(!!_tile && block != BlockID.pedestalMatter && _tile.tick)
        	_tile.tick();
      }
});




// file: items/alchemical.js

IDRegistry.genItemID("philosophersStone");
Item.createItem("philosophersStone", "Philosopher's stone", {name: "philosophers_stone"}, {stack: 1});

Item.registerUseFunction("philosophersStone", function(crd, item, block, player){
  if(Entity.getSneaking(player)){
		let region = BlockSource.getDefaultForActor(player);
    switch(block.id){
      case 1:
        region.setBlock(crd.x,crd.y,crd.z,2);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 2:
        region.setBlock(crd.x,crd.y,crd.z,4);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 4:
        region.setBlock(crd.x,crd.y,crd.z,2);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;

      case 12:
        region.setBlock(crd.x,crd.y,crd.z,4);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 24:
        region.setBlock(crd.x,crd.y,crd.z,13);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
    }
  } else {
  	let region = BlockSource.getDefaultForActor(player);
    switch(block.id){
      case 1:
        region.setBlock(crd.x,crd.y,crd.z,4);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 4:
        region.setBlock(crd.x,crd.y,crd.z,1);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 2:
        region.setBlock(crd.x,crd.y,crd.z,12);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 12:
        region.setBlock(crd.x,crd.y,crd.z,2);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 13:
        region.setBlock(crd.x,crd.y,crd.z,24);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 87:
        region.setBlock(crd.x,crd.y,crd.z,4);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
    }
  }
});

IDRegistry.genItemID("fuelAlchemical");
Item.createItem("fuelAlchemical", "Alchemical fuel", {name: "fuelAlchemical"}, {stack: 64});

IDRegistry.genItemID("fuelMobius");
Item.createItem("fuelMobius", "Mobius fuel", {name: "fuelMobius"}, {stack: 64});

IDRegistry.genItemID("fuelAstral");
Item.createItem("fuelAstral", "Astral fuel", {name: "fuelAstral"}, {stack: 64});

Recipes.addFurnaceFuel(ItemID.fuelAlchemical,0,6400);
Recipes.addFurnaceFuel(ItemID.fuelMobius,0,25600);
Recipes.addFurnaceFuel(ItemID.fuelAstral,0,102400);

IDRegistry.genItemID("darkMatter");
Item.createItem("darkMatter", "Dark matter", {name: "darkMatter", meta: 0}, {stack: 64});

IDRegistry.genItemID("redMatter");
Item.createItem("redMatter", "Red matter", {name: "redMatter", meta: 0}, {stack: 64});

IDRegistry.genItemID("ironBand");
Item.createItem("ironBand", "Iron band", {name: "ironBand", meta: 0}, {stack: 64});


IDRegistry.genBlockID("blockAlchemicalFuel");
Block.createBlock("blockAlchemicalFuel", [{name: "Alchemical fuel block", texture: [["fuelAlchemical",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockAlchemicalFuel, 0, 6400*9);

IDRegistry.genBlockID("blockMobiusFuel");
Block.createBlock("blockMobiusFuel", [{name: "Mobius fuel block", texture: [["fuelMobius",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockMobiusFuel, 0, 518400);

IDRegistry.genBlockID("blockAstralFuel");
Block.createBlock("blockAstralFuel", [{name: "Astral fuel block", texture: [["fuelAstral",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockAstralFuel, 0, 518400*9);

IDRegistry.genItemID("covDust1");
Item.createItem("covDust1", "Covalence dust Low", {name: "dustCovalenceLow", meta: 0}, {stack: 64});

IDRegistry.genItemID("covDust2");
Item.createItem("covDust2", "Covalence dust Medium", {name: "dustCovalenceMedium", meta: 0}, {stack: 64});

IDRegistry.genItemID("covDust3");
Item.createItem("covDust3", "Covalence dust High", {name: "dustCovalenceHigh", meta: 0}, {stack: 64});

IDRegistry.genBlockID("dmBlock");
Block.createBlock("dmBlock", [{name: "Dark matter block", texture: [["dmBlock",0]], inCreative: true}],"opaque");

IDRegistry.genBlockID("rmBlock");
Block.createBlock("rmBlock", [{name: "Red matter block", texture: [["rmBlock",0]], inCreative: true}],"opaque");

var ore_emc = {
  "1": 1,
  "14": 2048,
  "15": 256,
  "16": 128,
  "56": 8192,
  "129": 16384,
  "73": 64
};

IDRegistry.genItemID("rodDivining1");
Item.createItem("rodDivining1", "Divining rod low", {name: "rodDivining", meta: 0}, {stack: 1});

IDRegistry.genItemID("rodDivining3");
Item.createItem("rodDivining3", "Divining rod high", {name: "rodDivining", meta: 1}, {stack: 1});

IDRegistry.genItemID("rodDivining2");
Item.createItem("rodDivining2", "Divining rod medium", {name: "rodDivining", meta: 2}, {stack: 1});

Item.registerUseFunction("rodDivining1", function(crd, b, i, player){
	let region = BlockSource.getDefaultForActor(player);
  let total = 0;
  let c = crd.relative;
  let range = 2;
  switch (crd.side) {
   case 0: c.y += range; break;
   case 1: c.y -= range; break;
   case 2: c.z += range; break;
   case 3: c.z -= range; break;
   case 4: c.x += range; break;
   case 5: c.x -= range; break;
  }
  for(let xx = -1; xx <= 1; xx++)
    for(let yy = -1; yy <= 1; yy++)
      for(let zz = -1; zz <= 1; zz++){
        let val = ore_emc[region.getBlockId(c.x+xx, c.y+yy, c.z+zz)];
        if(val)
          total+=val;
      }
  Game.message("Total EMC in this area: "+total);
});

Item.registerUseFunction("rodDivining2", function(crd, b, i, player){
	let region = BlockSource.getDefaultForActor(player);
  let total = 0;
  let c = crd.relative;
  let range = 4;
  switch (crd.side) {
   case 0: c.y += range; break;
   case 1: c.y -= range; break;
   case 2: c.z += range; break;
   case 3: c.z -= range; break;
   case 4: c.x += range; break;
   case 5: c.x -= range; break;
  }
  for(let xx = -2; xx <= 2; xx++)
    for(let yy = -2; yy <= 2; yy++)
      for(let zz = -2; zz <= 2; zz++){
        let val = ore_emc[region.getBlockId(c.x+xx, c.y+yy, c.z+zz)];
        if(val)
          total+=val;
      }
  Game.message("Total EMC in this area: "+total);
});

Item.registerUseFunction("rodDivining3", function(crd, b, i, player){
	let region = BlockSource.getDefaultForActor(player);
	 let total = 0;
  let c = crd.relative;
  let range = 6;
  switch (crd.side) {
   case 0: c.y += range; break;
   case 1: c.y -= range; break;
   case 2: c.z += range; break;
   case 3: c.z -= range; break;
   case 4: c.x += range; break;
   case 5: c.x -= range; break;
  }
  for(let xx = -3; xx <= 3; xx++)
    for(let yy = -2; yy <= 2; yy++)
      for(let zz = -3; zz <= 3; zz++){
        let val = ore_emc[region.getBlockId(c.x+xx, c.y+yy, c.z+zz)];
        if(val)
          total+=val;
      }
	Game.message("Total EMC in this area: "+total);
});




// file: items/gem.js

IDRegistry.genItemID("gemHelm");
IDRegistry.genItemID("gemChest");
IDRegistry.genItemID("gemLegg");
IDRegistry.genItemID("gemBoots");

Item.createArmorItem("gemHelm", "Abyss Helmet", {name: "gem_armor", meta: 2}, {type: "helmet", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});
Item.createArmorItem("gemChest", "Grid Infernal Armor", {name: "gem_armor", meta: 0}, {type: "chestplate", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});
Item.createArmorItem("gemLegg", "Gravity Greaves", {name: "gem_armor", meta: 3}, {type: "leggings", armor: 5, durability: 10000000, texture: "armor/gem_1.png"});
Item.createArmorItem("gemBoots", "Hurricane Boots", {name: "gem_armor", meta: 1}, {type: "boots", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});


Armor.registerOnTickListener(ItemID.gemHelm, function(item, slot, player){
	Entity.addEffect(player, 16, 1, 1000, false, false);
	let p = Entity.getPosition(player);
	let region = BlockSource.getDefaultForActor(player);
	if(region.getBlockId(p.x, p.y, p.z) == 9)
		Entity.addEffect(player, 13, 1, 20, false, false);
});

Armor.registerOnTickListener(ItemID.gemChest, function(item, slot, player){
	let p = Entity.getPosition(player);
	let vel = Entity.getVelocity(player);
	let region = BlockSource.getDefaultForActor(player);
	
	if(!Entity.getSneaking(player) && region.getBlockId(p.x, p.y-2, p.z) == 11){
		Entity.setVelocity(player, vel.x, .015, vel.z);
		Entity.setFire(player, 0);
	}
	Entity.addEffect(player, 12, 1, 20, false, false);
});


Armor.registerOnTickListener(ItemID.gemChest, function(item, slot, player){
  Entity.addEffect(player, 1, 1, 90, false, false);
});

Armor.registerOnHurtListener(ItemID.gemHelm, function(){
	Armor.preventDamaging(ItemID.gemHelm);
});

Armor.registerOnHurtListener(ItemID.gemChest, function(item, slot, player){
	if(Entity.getHealth(player) >= 2) {
    Game.prevent();
    Entity.setFire(player, 40);
  }
  Entity.setFire(player, 0);
  Armor.preventDamaging(ItemID.gemChest);
});

Armor.registerOnHurtListener(ItemID.gemLegg, function(){
	Armor.preventDamaging(ItemID.gemHelm);
});

Armor.registerOnHurtListener(ItemID.gemBoots, function(){
	Armor.preventDamaging(ItemID.gemBoots);
});

Callback.addCallback("ServerPlayerTick", function (player){
  if(
    Entity.getArmorSlot(player, 0).id == ItemID.gemHelm &&
    Entity.getArmorSlot(player, 1).id == ItemID.gemChest &&
    Entity.getArmorSlot(player, 2).id == ItemID.gemLegg &&
    Entity.getArmorSlot(player, 3).id == ItemID.gemBoots
  ){
    new PlayerActor(player).setHunger(20);
  }
});




// file: items/hammers.js

const dirtBlocksDrop = {
  "2": 3, "3": 3, "60": 3, "61": 3, "198": 3, "243": 3, "110": 3
};

function getBlockDrop(coords, id, data, level){
	 let dropFunc = Block.dropFunctions[id];
	 if(dropFunc)
	 	return dropFunc(coords, id, data, level, {});
	 if(dirtBlocksDrop[id])
	 	return [[dirtBlocksDrop[id], 1, 0]];
	 return [[id, 1, data]];
}

var UNBREAKABLE = {0: true, 7: true, 8: true, 9: true, 10: true, 11: true};

IDRegistry.genItemID("dmHammer");
Item.createItem("dmHammer", "Dark matter hammer", {name: "dm_hammer", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dmHammer, "dm", ToolType.pickaxe);
INFINITY_TOOL.push(ItemID.dmHammer);

Item.registerUseFunction("dmHammer", function(coords, item, block, player){
	let region = BlockSource.getDefaultForActor(player);
  let x=coords.x; y=coords.y; z=coords.z;
  let rr = 2;
  if(!Entity.getSneaking(player))
    for(xx = -rr; xx <= rr; xx++)
      for(yy = -rr; yy <= rr; yy++)
        for(zz = -rr; zz <= rr; zz++){
          let block = region.getBlock(x + xx, y + yy, z + zz);
          if(!UNBREAKABLE[block.id]){
          	let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
          	if(drop){
          		for(i in drop){
          			try{
          				new PlayerActor(player).addItemToInventory(drop[i][0], drop[i][1]||1, drop[i][2] || 0, null, true);
          			}catch(e){}
          		}
          	}
          	region.setBlock(x + xx, y + yy, z + zz, 0);
          }
        }
});


IDRegistry.genItemID("rmHammer");
Item.createItem("rmHammer", "Red matter hammer", {name: "rm_hammer", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.rmHammer, "rm", ToolType.pickaxe);
INFINITY_TOOL.push(ItemID.rmHammer);

Item.registerUseFunction("rmHammer", function(coords, item, block, player){
  let region = BlockSource.getDefaultForActor(player);
  let x=coords.x; y=coords.y; z=coords.z;
  let rr = 4;
  if(!Entity.getSneaking(player))
    for(xx = -rr; xx <= rr; xx++)
      for(yy = -rr; yy <= rr; yy++)
        for(zz = -rr; zz <= rr; zz++){
          let block = region.getBlock(x + xx, y + yy, z + zz);
          if(!UNBREAKABLE[block.id]){
          	let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
          	if(drop){
          		for(i in drop){
          			try{
          				new PlayerActor(player).addItemToInventory(drop[i][0], drop[i][1]||1, drop[i][2] || 0, null, true);
          			}catch(e){}
          		}
          	}
          	region.setBlock(x + xx, y + yy, z + zz, 0);
          }
        }
});




// file: items/klein stars.js

IDRegistry.genItemID("kleinStar1");
Item.createItem("kleinStar1", "Klein star I", {name: "klein_star", meta: 0}, {stack: 1});
Core.registerStar(ItemID.kleinStar1, 16000);

IDRegistry.genItemID("kleinStar2");
Item.createItem("kleinStar2", "Klein star II", {name: "klein_star", meta: 1}, {stack: 1});
Core.registerStar(ItemID.kleinStar2, 32000);

IDRegistry.genItemID("kleinStar3");
Item.createItem("kleinStar3", "Klein star III", {name: "klein_star", meta: 2}, {stack: 1});
Core.registerStar(ItemID.kleinStar3, 64000);

IDRegistry.genItemID("kleinStar4");
Item.createItem("kleinStar4", "Klein star VI", {name: "klein_star", meta: 3}, {stack: 1});
Core.registerStar(ItemID.kleinStar4, 128000);

IDRegistry.genItemID("kleinStar5");
Item.createItem("kleinStar5", "Klein star V", {name: "klein_star", meta: 4}, {stack: 1});
Core.registerStar(ItemID.kleinStar5, 256000);

IDRegistry.genItemID("kleinStar6");
Item.createItem("kleinStar6", "Klein star VI", {name: "klein_star", meta: 5}, {stack: 1});
Core.registerStar(ItemID.kleinStar6, 512000);
/*Callback.addCallback("PostLoaded", function (){

Recipes.addShaped({id: ItemID.kleinStar1, count: 1, data: 16000}, 

["aaa", 

 "aba",

 "aaa"],

["a", ItemID.fuelMobius, 0, "b", 264, 0]);



Recipes.addShaped({id: ItemID.kleinStar2, count: 1, data: 32000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar1, -1]);



Recipes.addShaped({id: ItemID.kleinStar3, count: 1, data: 64000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar2, -1]);



Recipes.addShaped({id: ItemID.kleinStar4, count: 1, data: 128000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar3, -1]);



Recipes.addShaped({id: ItemID.kleinStar5, count: 1, data: 256000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar4, -1]);



Recipes.addShaped({id: ItemID.kleinStar6, count: 1, data: 512000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar5, -1]);



});*/




// file: items/matter.js

IDRegistry.genItemID("dmPickaxe");

Item.createItem("dmPickaxe", "Dark matter pickaxe", {name: "dm_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("dmAxe");

Item.createItem("dmAxe", "Dark matter axe", {name: "dm_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("dmShovel");

Item.createItem("dmShovel", "Dark matter shovel", {name: "dm_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("dmSword");

Item.createItem("dmSword", "Dark matter sword", {name: "dm_sword", meta: 0}, {stack: 1});



ToolAPI.setTool(ItemID.dmPickaxe, "dm", ToolType.pickaxe);

ToolAPI.setTool(ItemID.dmAxe, "dm", ToolType.axe);

ToolAPI.setTool(ItemID.dmShovel, "dm", ToolType.shovel);

ToolAPI.setTool(ItemID.dmSword, "dm", ToolType.sword);

INFINITY_TOOL.push(ItemID.dmPickaxe);
INFINITY_TOOL.push(ItemID.dmAxe);
INFINITY_TOOL.push(ItemID.dmShovel);
INFINITY_TOOL.push(ItemID.dmSword);

IDRegistry.genItemID("dmHelm");
IDRegistry.genItemID("dmChest");
IDRegistry.genItemID("dmLegg");
IDRegistry.genItemID("dmBoots");



Item.createArmorItem("dmHelm", "Dark matter helmet", {name: "dm_armor", meta: 2}, {type: "helmet", armor: 6, durability: 10000000, texture: "armor/dm_0.png"});

Item.createArmorItem("dmChest", "Dark matter chestplate", {name: "dm_armor", meta: 0}, {type: "chestplate", armor: 10, durability: 10000000, texture: "armor/dm_0.png"});

Item.createArmorItem("dmLegg", "Dark matter leggings", {name: "dm_armor", meta: 3}, {type: "leggings", armor: 6, durability: 10000000, texture: "armor/dm_1.png"});

Item.createArmorItem("dmBoots", "Dark matter boots", {name: "dm_armor", meta: 1}, {type: "boots", armor: 6, durability: 10000000, texture: "armor/dm_0.png"});


Armor.registerOnHurtListener(ItemID.dmHelm, function(){
	Armor.preventDamaging(ItemID.dmHelm);
});
Armor.registerOnHurtListener(ItemID.dmChest, function(){
	Armor.preventDamaging(ItemID.dmChest);
});
Armor.registerOnHurtListener(ItemID.dmLegg, function(){
	Armor.preventDamaging(ItemID.dmLegg);
});
Armor.registerOnHurtListener(ItemID.dmBoots, function(){
	Armor.preventDamaging(ItemID.dmBoots);
});





IDRegistry.genItemID("rmPickaxe");

Item.createItem("rmPickaxe", "Red matter pickaxe", {name: "rm_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("rmAxe");

Item.createItem("rmAxe", "Red matter axe", {name: "rm_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("rmShovel");

Item.createItem("rmShovel", "Red matter shovel", {name: "rm_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("rmSword");

Item.createItem("rmSword", "Red matter sword", {name: "rm_sword", meta: 0}, {stack: 1});



ToolAPI.setTool(ItemID.rmPickaxe, "rm", ToolType.pickaxe);

ToolAPI.setTool(ItemID.rmAxe, "rm", ToolType.axe);

ToolAPI.setTool(ItemID.rmShovel, "rm", ToolType.shovel);

ToolAPI.setTool(ItemID.rmSword, "rm", ToolType.sword);

INFINITY_TOOL.push(ItemID.rmPickaxe);
INFINITY_TOOL.push(ItemID.rmAxe);
INFINITY_TOOL.push(ItemID.rmShovel);
INFINITY_TOOL.push(ItemID.rmSword);




IDRegistry.genItemID("rmHelm");

IDRegistry.genItemID("rmChest");

IDRegistry.genItemID("rmLegg");

IDRegistry.genItemID("rmBoots");



Item.createArmorItem("rmHelm", "Red matter helmet", {name: "rm_armor", meta: 2}, {type: "helmet", armor: 3, durability: 10000000, texture: "armor/rm_0.png"});

Item.createArmorItem("rmChest", "Red matter chestplate", {name: "rm_armor", meta: 0}, {type: "chestplate", armor: 11, durability: 10000000, texture: "armor/rm_0.png"});

Item.createArmorItem("rmLegg", "Red matter leggings", {name: "rm_armor", meta: 3}, {type: "leggings", armor: 7, durability: 10000000, texture: "armor/rm_1.png"});

Item.createArmorItem("rmBoots", "Red matter boots", {name: "rm_armor", meta: 1}, {type: "boots", armor: 3, durability: 10000000, texture: "armor/rm_0.png"});


Armor.registerOnHurtListener(ItemID.rmHelm, function(){
	Armor.preventDamaging(ItemID.rmHelm);
});
Armor.registerOnHurtListener(ItemID.rmChest, function(){
	Armor.preventDamaging(ItemID.rmChest);
});
Armor.registerOnHurtListener(ItemID.rmLegg, function(){
	Armor.preventDamaging(ItemID.rmLegg);
});
Armor.registerOnHurtListener(ItemID.rmBoots, function(){
	Armor.preventDamaging(ItemID.rmBoots);
});



ToolType.katar = {
  isWeapon: true,
  damage: 8,
  baseDamage: 16,
  blockTypes: ["fibre", "wood", "plant"],
  onDestroy: function(item){
     item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data = 0;
  },

  useItem: function(c, i, b, player){
  	if(b.id == 17 || b.id == 162){
  		let region = BlockSource.getDefaultForActor(player);
  		let rad = 24;
  		for(x = -rad;x <= rad;x++)
  			for(y = -2;y <= rad;y++)
  				for(z = -rad;z <= rad;z++){
  					let block = region.getBlock(c.x+x, c.y+y, c.z+z);
  					if(block.id == b.id){
  						region.setBlock(c.x+x, c.y+y, c.z+z, 0);
              new PlayerActor(player).addItemToInventory(block.id, 1, block.data, null, true);
            }
          }
    }
  }
};



ToolType.morningStar = {
	isWeapon: true,
	damage: 8,
	baseDamage: 12,
	blockTypes: ["stone", "wood", "dirt", "plant", "fibre"],
	onDestroy: function(item){
     item.data = 0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data = 0;
  },
  calcDestroyTime: function (i, c, b){
    if(b.id != 7) return 0;
  },
  useItem: function(coords, item, block, player){
    let x=coords.x; y=coords.y; z=coords.z;
    let rr = 6;
    if(!Entity.getSneaking(player)){
    	let region = BlockSource.getDefaultForActor(player);
      for(xx = -rr; xx <= rr; xx++){
        for(yy = -rr; yy <= rr; yy++){
          for(zz = -rr; zz <= rr; zz++){
            let block = region.getBlock(x + xx, y + yy, z + zz);
            if(!UNBREAKABLE[block.id]){
	          let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
	          if(drop){
	            for(i in drop){
		          try{
	                new PlayerActor(player).addItemToInventory(drop[i][0], drop[i][1] || 1, drop[i][2] || 0, null, true);
	              } catch (e) {}
	            }
	          }
	      	region.setBlock(x + xx, y + yy, z + zz, 0);
            }
          }
        }
      }
    }
  }
};



IDRegistry.genItemID("rmKatar");
Item.createItem("rmKatar", "Red Matter Katar", {name: "katar", meta: 0}, {stack: 1});

IDRegistry.genItemID("rmMorningStar");
Item.createItem("rmMorningStar", "Red Matter Morning Star", {name: "morning_star", meta: 0}, {stack: 1});


ToolAPI.setTool(ItemID.rmKatar, "rm", ToolType.katar);
ToolAPI.setTool(ItemID.rmMorningStar, "rm", ToolType.morningStar);




// file: other.js

Callback.addCallback("PostLoaded", function () {

	Item.addCreativeGroup("kleinstars", Translation.translate("Klein Stars"), [
		ItemID.kleinStar1,
		ItemID.kleinStar2,
		ItemID.kleinStar3,
		ItemID.kleinStar4,
		ItemID.kleinStar5,
		ItemID.kleinStar6
	]);
	
	Item.addCreativeGroup("emcrelays", Translation.translate("Anti-matter Relays"), [
		BlockID.antimatterRelay1,
		BlockID.antimatterRelay2,
		BlockID.antimatterRelay3
	]);
	
	Item.addCreativeGroup("emccollectors", Translation.translate("EMC Collectors"), [
		BlockID.energyCollector1,
		BlockID.energyCollector2,
		BlockID.energyCollector3
	]);
	
	Item.addCreativeGroup("ringsamulets", Translation.translate("Rings and Amulets"), [
		ItemID.ironBand,
		ItemID.watchTime,
		ItemID.soulStone,
	]);
});




// file: recipes.js

function addPhilosophersStoneRecipe(item, input){
  let ingridients = [];
  for(i = 0; i < input.count; i++){
    ingridients.push({id: input.id, data: input.data});
  }
  Recipes.addCraftToolRecipeItem(
    {id: item.id, count: item.count, data: item.data}, ingridients, ItemID.philosophersStone
  );
}

Recipes.addCraftToolRecipeItem = function(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
	   for(var i in field)
			   if(field[i].id!=tool)
				    api.decreaseFieldSlot(i);
	 });
};

Callback.addCallback("PostEmcLoad", function(){
	Core.setResultCollector(263, 1, 331, 0);
	Core.setResultCollector(331, 0, 263, 0);
	Core.setResultCollector(263, 0, 289, 0);
	Core.setResultCollector(289, 0, 348, 0);
	Core.setResultCollector(348, 0, ItemID.fuelAlchemical, 0);
	Core.setResultCollector(ItemID.fuelAlchemical, 0, 152, 0);
	Core.setResultCollector(152, 0, 377, 0);
	Core.setResultCollector(377, 0, 89, 0);
	Core.setResultCollector(89, 0, ItemID.fuelAlchemical, 0);
	Core.setResultCollector(ItemID.fuelAlchemical, 0, BlockID.blockAlchemicalFuel, 0);
	Core.setResultCollector(BlockID.blockAlchemicalFuel, 0, ItemID.fuelMobius, 0);
	Core.setResultCollector(ItemID.fuelMobius, 0, BlockID.blockMobiusFuel, 0);
	Core.setResultCollector(BlockID.blockMobiusFuel, 0, BlockID.blockAstralFuel, 0);
	
	Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelAlchemical, count: 1, data: 0}, [
    {id: 263, data: 0},
    {id: 263, data: 0},
    {id: 263, data: 0},
    {id: 263, data: 0},
  ], ItemID.philosophersStone
);

Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelMobius, count: 1, data: 0}, [
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
  ], ItemID.philosophersStone
);

Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelAstral, count: 1, data: 0}, [
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
  ], ItemID.philosophersStone
);

addPhilosophersStoneRecipe({id: 263, data: 0, count: 4}, {id: ItemID.fuelAlchemical, count: 1, data: 0});
addPhilosophersStoneRecipe({id: ItemID.fuelAlchemical, data: 0, count: 4}, {id: ItemID.fuelMobius, count: 1, data: 0});
addPhilosophersStoneRecipe({id: ItemID.fuelMobius, data: 0, count: 4}, {id: ItemID.fuelAstral, count: 1, data: 0});

addPhilosophersStoneRecipe({id: 368, data: 0, count: 1}, {id: 265, count: 4, data: 0});
addPhilosophersStoneRecipe({id: 263, data: 1, count: 4}, {id: 263, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 263, data: 0, count: 1}, {id: 263, count: 4, data: 1});
addPhilosophersStoneRecipe({id: 266, data: 0, count: 1}, {id: 265, count: 8, data: 0});
addPhilosophersStoneRecipe({id: 265, data: 0, count: 8}, {id: 266, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 264, data: 0, count: 1}, {id: 266, count: 4, data: 0});
addPhilosophersStoneRecipe({id: 266, data: 0, count: 4}, {id: 264, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 388, data: 0, count: 1}, {id: 264, count: 2, data: 0});
addPhilosophersStoneRecipe({id: 264, data: 0, count: 2}, {id: 388, count: 1, data: 0});
});

Callback.addCallback("PostLoaded", function(){

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

Recipes.addShaped({id: BlockID.energyCollector3, count: 1, data: 0}, 
  ["gmg",
   "gcg",
   "ggg"],
  ['g', 89, 0, 'm', ItemID.redMatter, 0, 'c', BlockID.energyCollector2, 0]);

Recipes.addShaped({id: BlockID.energyCollector2, count: 1, data: 0}, 
  ["gmg",
   "gcg",
   "ggg"],
  ['g', 89, 0, 'm', ItemID.darkMatter, 0, 'c', BlockID.energyCollector1, 0]);


Recipes.addShaped({id: BlockID.energyCollector1, count: 1, data: 0},
  ["glg",
   "gdg",
   "gfg"],
  ['g', 89, 0, 'd', 57, 0, 'f', 61, 0, 'l', 20, 0]);

Recipes.addShaped({id: ItemID.dmHelm, count: 1, data: 0}, 
["aaa", 
 "a a",
 "   "],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmChest, count: 1, data: 0}, 
["a a", 
 "aaa",
 "aaa"],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmLegg, count: 1, data: 0}, 
["aaa", 
 "a a",
 "a a"],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmBoots, count: 1, data: 0}, 
["a a", 
 "a a",
 "   "],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmPickaxe, count: 1, data: 0}, 
["aaa", 
 " d ",
 " d "],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmAxe, count: 1, data: 0}, 
["aa", 
 "ad",
 " d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmShovel, count: 1, data: 0}, 
["a", 
 "d",
 "d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmSword, count: 1, data: 0}, 
["a", 
 "a",
 "d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.rmHelm, count: 1, data: 0}, 
["aaa", 
 "ada",
 "   "],
["a", ItemID.redMatter, 0, "d", ItemID.dmHelm, 0]);

Recipes.addShaped({id: ItemID.rmChest, count: 1, data: 0}, 
["ada", 
 "aaa",
 "aaa"],
["a", ItemID.redMatter, 0, "d", ItemID.dmChest, 0]);

Recipes.addShaped({id: ItemID.rmLegg, count: 1, data: 0}, 
["aaa", 
 "ada",
 "a a"],
["a", ItemID.redMatter, 0, "d", ItemID.dmLegg, 0]);

Recipes.addShaped({id: ItemID.rmBoots, count: 1, data: 0}, 
["ada", 
 "a a",
 "   "],
["a", ItemID.redMatter, 0, "d", ItemID.dmBoots, 0]);

Recipes.addShaped({id: ItemID.rmPickaxe, count: 1, data: 0}, 
["aaa", 
 " m ",
 " d "],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmPickaxe, 0]);

Recipes.addShaped({id: ItemID.rmAxe, count: 1, data: 0}, 
["aa", 
 "am",
 " d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmAxe, 0]);

Recipes.addShaped({id: ItemID.rmShovel, count: 1, data: 0}, 
["a", 
 "m",
 "d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmShovel, 0]);

Recipes.addShaped({id: ItemID.rmSword, count: 1, data: 0}, 
["a", 
 "m",
 "d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmSword, 0]);

Recipes.addShaped({id: ItemID.rmKatar, count: 1, data: 0}, 
    ["sar", 
     "rrr",
     "rrr"],
  ["s", ItemID.rmSword, 0, "a", ItemID.rmAxe, 0, "r", ItemID.redMatter, 0]);
  
  Recipes.addShaped({id: ItemID.rmMorningStar, count: 1, data: 0}, 
    ["sar", 
     "hrr",
     "rrr"],
  ["h", ItemID.rmHammer, 0, "s", ItemID.rmShovel, 0, "a", ItemID.rmPickaxe, 0, "r", ItemID.redMatter, 0]);

Recipes.addShaped({
            id: BlockID.alchChest,
            count: 1,
            data: 0
        },
        ["lmh",
            "sds",
            "ici"
        ],
        ["l", ItemID.covDust1, 0, "m", ItemID.covDust2, 0, "h", ItemID.covDust3, 0, "s", 1, 0, "i", 265, 0, "c", 54, 0, "d", 264, 0]);

Recipes.addShaped({id: BlockID.energyCondenser1, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", 49, 0, "d", 264, 0, "c", BlockID.alchChest, 0]);

Recipes.addShaped({id: BlockID.energyCondenser2, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", BlockID.dmBlock, 0, "d", BlockID.rmBlock, 0, "c", BlockID.energyCondenser1, 0]);

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

Recipes.addShaped({id: BlockID.antimatterRelay2, count: 1, data: 0}, 
["odo", 
 "ofo",
 "ooo"],
["o", 49, 0, "f", BlockID.antimatterRelay1, 0, "d", ItemID.darkMatter, 0]);

Recipes.addShaped({id: BlockID.antimatterRelay3, count: 1, data: 0}, 
["odo", 
 "ofo",
 "ooo"],
["o", 49, 0, "f", BlockID.antimatterRelay2, 0, "d", ItemID.redMatter, 0]);

Recipes.addShaped({id: ItemID.philosophersStone, count: 1, data: 0}, 
["rgr", 
"gdg",
"rgr"],
["r", 331, 0, "g", 348, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.ironBand, count: 1, data: 0}, 
["iii", 
 "ili",
 "iii"],
["l", 325, 10, "i", 265, 0]);

Recipes.addShaped({id: ItemID.darkMatter, count: 1, data: 0}, 
["aaa", 
 "aba",
 "aaa"],
["a", ItemID.fuelAstral, 0, "b", 57, 0]);

Recipes.addShaped({id: ItemID.redMatter, count: 1, data: 0}, 
["aaa", 
 "bbb",
 "aaa"],
["a", ItemID.fuelAstral, 0, "b", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.covDust1, count: 40, data: 0}, 
["sii", 
 "iii",
 "iii"],
["s", 263, 1, "i", 4, 0]);

Recipes.addShaped({id: ItemID.rodDivining1, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", 280, 0, "i", ItemID.covDust1, 0]);

Recipes.addShaped({id: ItemID.rodDivining2, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", ItemID.rodDivining1, 0, "i", ItemID.covDust2, 0]);

Recipes.addShaped({id: ItemID.rodDivining3, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", ItemID.rodDivining2, 0, "i", ItemID.covDust3, 0]);

Recipes.addShapeless({id: ItemID.covDust2, count: 40, data: 0}, [{id: 265, data: 0},{id: 331, data: 0}]);

Recipes.addShapeless({id: ItemID.covDust3, count: 40, data: 0}, [{id: 264, data: 0},{id: 263, data: 0}]);

Recipes.addShapeless({id: BlockID.dmBlock, count: 1, data: 0}, [{id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}]);

Recipes.addShapeless({id: BlockID.rmBlock, count: 1, data: 0}, [{id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}]);

Recipes.addShapeless({id: ItemID.darkMatter, count: 4, data: 0}, [{id: BlockID.dmBlock, data: 0}]);

Recipes.addShapeless({id: ItemID.redMatter, count: 4, data: 0}, [{id: BlockID.rmBlock, data: 0}]);

Recipes.addShaped({id: BlockID.blockAlchemicalFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelAlchemical, 0]);

Recipes.addShaped({id: BlockID.blockMobiusFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelMobius, 0]);

Recipes.addShaped({id: BlockID.blockAstralFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelAstral, 0]);

Recipes.addShapeless({id: ItemID.fuelAlchemical, count: 9, data: 0}, [{id: BlockID.blockAlchemicalFuel, data: 0}]);

Recipes.addShapeless({id: ItemID.fuelMobius, count: 9, data: 0}, [{id: BlockID.blockMobiusFuel, data: 0}]);

Recipes.addShapeless({id: ItemID.fuelAstral, count: 9, data: 0}, [{id: BlockID.blockAstralFuel, data: 0}]);

Recipes.addShaped({id: BlockID.pedestalMatter, count: 1, data: 0}, 
["rir", 
 "rir",
 "iii"],
["r", ItemID.redMatter, 0, "i", BlockID.dmBlock, 0]);

Recipes.addShaped({id: ItemID.soulStone, count: 1, data: 0}, 
["sss", 
 "dbd",
 "sss"],
["b", 351, 4, "d", ItemID.redMatter, 0, "s", 348, 0]);

Recipes.addShaped({id: ItemID.watchTime, count: 1, data: 0}, 
["dsd", 
 "gcg",
 "dsd"],
["c", 351, 4, "g", 89, 0, "c", 347, 0, "d", ItemID.darkMatter, 0, "s", 49, 0]);
/*Recipes.addShapeless({id: ItemID.gemHelm, count: 1, data: 0}, [
	    {id: ItemID.rmHelm, data: -1}, {id: ItemID.kleinStar6, data: -1},
	    {id: ItemID.evertideAmulet, data: 0}, {id: ItemID.soulStone, data: 0}
	]);

	Recipes.addShapeless({id: ItemID.gemChest, count: 1, data: 0}, [
	    {id: ItemID.rmChest, data: -1}, {id: ItemID.kleinStar6, data: -1},
	    {id: ItemID.vulcaniteAmulet, data: 0}, {id: ItemID.bodyStone, data: 0}
	]);

	Recipes.addShapeless({id: ItemID.gemLegg, count: 1, data: 0}, [
	    {id: ItemID.rmLegg, data: -1}, {id: ItemID.kleinStar6, data: -1},
	    {id: ItemID.watchTime, data: 0}, {id: ItemID.ringBlackHoleInactive, data: 0}
	]);

	Recipes.addShapeless({id: ItemID.gemBoots, count: 1, data: 0}, [
	    {id: ItemID.rmBoots, data: -1}, {id: ItemID.kleinStar6, data: -1},
	    {id: ItemID.swiftWolfRendingGale, data: 0}, {id: ItemID.swiftWolfRendingGale, data: 0}
	]);*/
});

Callback.addCallback("EntityHurt", function(a, v, d){
  item = Player.getCarriedItem();
  if(a == Player.get() && (item.id == ItemID.rmKatar || item.id == ItemID.rmSword)){
    var pos = Entity.getPosition(v);
    for(m in allMobs){
      var mobs = Entity.getAllInRange(pos, 3, allMobs[m]);
      for(i in mobs){
        var mob = mobs[i];
        Entity.damageEntity(mob, 24);
      }
    }
  }
});




// file: command.js

let custom = FileTools.ReadJSON(__dir__+"/custom.js");
Callback.addCallback("NativeCommand",function(str){
let arr = str.split(" ");
if(arr[0] == "/emc"){
let item = Entity.getCarriedItem(Player.get());
custom.push({
id: (function(){
let items = Object.keys(ItemID);
for(let i in items)
if(ItemID[items[i]] == item.id)
return "ItemID."+items[i];

items = Object.keys(BlockID);
for(let i in items)
if(BlockID[items[i]] == Block.convertBlockToItemId(item.id))
return "BlockID."+items[i];

return ""+item.id
})(),
data: item.data,
emc: parseInt(arr[1])
});
FileTools.WriteJSON(__dir__+"/custom.js", custom, true);
Core.setItemEmc(item.id, item.data, parseInt(arr[1]));
Game.prevent();
Game.message(":D");
}else if(arr[0] == "/code"){
Game.prevent();
let code = "";
for(let i = 1;i < arr.length;i++)
code+=+" "+arr[i];
Game.message(code);
let result = eval(code);
Game.message(result)
}
});




// file: integration/RecipeViewer.js

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
ModAPI.addAPICallback("RecipeViewer", function(api){
	var Collector = (function(_super){
  	__extends(Collector, _super);
    function Collector(name, icon, key, content){
      let _this = _super.call(this, name, icon, content) || this;
      _this.ritualKey = key;
      return _this;
    }
    Collector.prototype.getAllList = function() {
    	let recipes = Core.collectors;
      return (function(){
				let list = [];
				let keys = Object.keys(recipes);
				for(let i in keys){
					let item = keys[i].split(":");
					let result = recipes[keys[i]];
					list.push({
    				input: [{id: parseInt(item[0]), data: parseInt(item[1]), count: 1}],
    				output: [{id: result.id, data: result.data, count: 1}],
    				emc: result.emc
     		 });
				}
				return list;
			})();
		};
		Collector.prototype.onOpen = function(elements, data){
			elements.get("emc").onBindingUpdated("text", data.emc+" EMC");
  	}
    return Collector;
  }(api.RecipeType));
  Translation.addTranslation("Collector", {
  	ru: "Сборщик"
  })
	api.RecipeTypeRegistry.register("collector", new Collector(Translation.translate("Collector"), BlockID.energyCollector3, "collector", {
		drawing: [
			{type: "bitmap", x: 410, y: 150, scale: 6, bitmap: "furnProg_0"},
		],
		elements: {
			output0: {x: 290, y: 150, size: 100},
      input0: {x: 590, y: 150, size: 100},
      emc: {type: "text", x: 350, y: 255, font: {size: 40}},
		}
	}));
});




// file: api/shared.js

const api = {
Core: Core,
Table: Table,
Pedestal: Pedestal,
requireGlobal(cmd){
eval(cmd);
}
}
ModAPI.registerAPI("ProjectE", api);




