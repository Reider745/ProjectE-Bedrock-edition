IDRegistry.genItemID("ringZero");
Item.createItem("ringZero", "Ring of Zero", {name: "ringZero", meta: 0}, {stack: 1});

IDRegistry.genItemID("ringZeroActivated");
Item.createItem("ringZeroActivated", "Ring of Zero", {name: "ringZero", meta: 1}, {stack: 1, isTech: true});

SetDescription(ItemID.ringZero, "§3On pedestal: harm nearest hostle creature with ice.\nFreezes water\nActivates every 2 seconds");
SetDescription(ItemID.ringZeroActivated, "§3On pedestal: harm nearest hostle creature with ice.\nFreezes water\nActivates every 2 seconds");

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.ringZero, count: 1, data: 0}, 
["sas", 
 "dbd",
 "sas"],
["b", ItemID.ironBand, 0, "d", ItemID.darkMatter, 0, "s", 80, 0, "a", 332, 0]);
});


Rings.activateRing(ItemID.ringZero, ItemID.ringZeroActivated, true);

Rings.addPedestalFunction(ItemID.ringZero, function(tile){
  if(World.getThreadTime()%40 == 0){
    for(i in evilList){
      let entity = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, evilList[i], 4);
      
      if(entity){
        Entity.damageEntity(entity, 4);
      }
    }
    
    for(xx = -4; xx <= 4; xx ++){
      for(zz = -4; zz <= 4; zz ++){
        let block = World.getBlock(tile.x+xx, tile.y-1, tile.z+zz);
        if(block.id == 9){
          World.setBlock(tile.x+xx, tile.y-1, tile.z+zz, 79, 0);
        }
      }
    }
  }
});

Rings.addRingFunction(ItemID.ringZeroActivated, function(){
  let tile = Player.getPosition();
  for(xx = -1; xx <= 1; xx ++){
    for(zz = -1; zz <= 1; zz ++){
      let block = World.getBlock(tile.x+xx, tile.y-2, tile.z+zz);
      if(block.id == 9){
        World.setBlock(tile.x+xx, tile.y-2, tile.z+zz, 79, 0);
      }
    }
  }
});

Callback.addCallback("tick", function(){
  if(Rings.get(ItemID.ringZeroActivated)){
    Rings.getRingFunction(ItemID.ringZeroActivated).inv();
  }
});