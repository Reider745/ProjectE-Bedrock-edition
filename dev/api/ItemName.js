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