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