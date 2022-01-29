IDRegistry.genItemID("watchTime");
Item.createItem("watchTime", "Watch of flowing time", {name: "timeWatch", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.watchTime, count: 1, data: 0}, 
["dsd", 
 "gcg",
 "dsd"],
["c", 351, 4, "g", 89, 0, "c", 347, 0, "d", ItemID.darkMatter, 0, "s", 49, 0]);
});

Rings.addPedestalFunction(ItemID.watchTime, function(tile){
  for(xx = -6; xx < 6; xx++){
    for(yy = -6; yy < 6; yy++){
      for(zz = -6; zz < 6; zz++){
        let tile_ent = World.getTileEntity(tile.x + xx, tile.y + yy, tile.z + zz);
        let block = World.getBlock(tile.x + xx, tile.y + yy, tile.z + zz);
        if(tile_ent && block.id != BlockID.pedestalMatter){
          if(tile_ent.tick){
            //for(i = 0; i <= 7; i ++){
              tile_ent.tick();
            //}
            //Game.message(tile_ent.tick.toString());
          }
        }
      }
    }
  }
});