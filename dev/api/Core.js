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
