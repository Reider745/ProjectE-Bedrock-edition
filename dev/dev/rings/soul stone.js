IDRegistry.genItemID("soulStone");
Item.createItem("soulStone", "Soul stone", {name: "soulStone", meta: 0}, {stack: 1});

SetDescription(ItemID.soulStone, "§3On pedestal: restores health to nearest player every 0.5 sec.");

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.soulStone, count: 1, data: 0}, 
["sss", 
 "dbd",
 "sss"],
["b", 351, 4, "d", ItemID.redMatter, 0, "s", 348, 0]);
});

Rings.addPedestalFunction(ItemID.soulStone, function(tile){
  if(World.getThreadTime()%10 == 0 && Entity.getHealth(Player.get()) < 20){
    let player = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, Player.get(), 11);
    
    Entity.setHealth(Player.get(), Entity.getHealth(Player.get())+2);
  }
});