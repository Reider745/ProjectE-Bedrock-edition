IDRegistry.genItemID("harvestRing");
Item.createItem("harvestRing", "Ring of harvest goodness", {name: "harvestRing", meta: 0}, {stack: 1});

SetDescription(ItemID.harvestRing, "§3On pedestal: instantly growths plants and harvest them every 1 sec.");

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.harvestRing, count: 1, data: 0}, 
["sfs", 
 "dbd",
 "sfs"],
["b", ItemID.ironBand, 0, "d", ItemID.darkMatter, 0, "s", 6, 0, "f", 38, 0]);
});

var PLANT_LIST = {
  141: 7, 142: 7, 244: 7, 59: 7, 127: 3
}

Rings.addRingFunction(ItemID.harvestRing, function(){
  if(World.getThreadTime()%20 == 0){
    for(xx = -4; xx <= 4; xx ++){
      for(zz = -4; zz <= 4; zz ++){
        let block = World.getBlock(Player.getPosition().x+xx, Player.getPosition().y-1, Player.getPosition().z+zz);
        if(PLANT_LIST[block.id]){
          World.setBlock(Player.getPosition().x+xx, Player.getPosition().y-1, Player.getPosition().z+zz, block.id, PLANT_LIST[block.id]);
        }
      }
    }
  }
});

Callback.addCallback("tick", function(){
  if(Rings.get(ItemID.harvestRing)){
    Rings.getRingFunction(ItemID.harvestRing).inv();
  }
});

Rings.addPedestalFunction(ItemID.harvestRing, function(tile){
  if(World.getThreadTime()%10 == 0){
    for(xx = -4; xx <= 4; xx ++){
      for(zz = -4; zz <= 4; zz ++){
        let block = World.getBlock(tile.x+xx, tile.y, tile.z+zz);
        if(PLANT_LIST[block.id]){
          World.setBlock(tile.x+xx, tile.y, tile.z+zz, block.id, PLANT_LIST[block.id]);
        }
        if(block.data >= PLANT_LIST[block.id]){
          World.destroyBlock(tile.x+xx, tile.y, tile.z+zz, true);
          World.setBlock(tile.x+xx, tile.y, tile.z+zz, block.id, 0);
        }
      }
    }
  }
});