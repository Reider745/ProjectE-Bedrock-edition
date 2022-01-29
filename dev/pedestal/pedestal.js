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
