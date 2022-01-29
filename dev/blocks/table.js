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