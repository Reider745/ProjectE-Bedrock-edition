IDRegistry.genItemID("bodyStone");
Item.createItem("bodyStone", "Body stone", {name: "bodyStone", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.bodyStone, count: 1, data: 0}, 
["sss", 
 "dbd",
 "sss"],
["b", 351, 4, "d", ItemID.redMatter, 0, "s", 353, 0]);
});

SetDescription(ItemID.bodyStone, "§3On pedestal: restores hunger to nearest player every 0.2 sec.");

Rings.addPedestalFunction(ItemID.bodyStone, function(tile){
  if(World.getThreadTime()%5 == 0){
    let player = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, Player.get(), 11);
    
    Player.setHunger(Player.getHunger()+2);
  }
});