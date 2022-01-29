IDRegistry.genItemID("swiftWolfRendingGale");
Item.createItem("swiftWolfRendingGale", "Swift Wolf's Rending Gale", {name: "swiftWolfRendingGale", meta: 0}, {stack: 1});

SetDescription(ItemID.swiftWolfRendingGale, "§3On pedestal: shoots ligthning into nearest hostle creature every 1 sec.");

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.soulStone, count: 1, data: 0}, 
["sfs", 
 "fbf",
 "sfs"],
["b", 261, 0, "d", ItemID.darkMatter, 0, "s", 288, 0]);
});

Rings.addPedestalFunction(ItemID.swiftWolfRendingGale, function(tile){
  if(World.getThreadTime()%15 == 0){
    for(i in evilList){
      let entity = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, evilList[i], 20);
      if(entity){
        let crd = Entity.getPosition(entity);
        Entity.spawn(crd.x, crd.y, crd.z, 93);
      }
    }
  }
});

Callback.addCallback("tick", function () {
	let gm = Game.getGameMode();
  if(gm == 0 && Rings.getHotbar(ItemID.swiftWolfRendingGale)) {
    Player.setFlyingEnabled(1);
  } else if (gm != 1) {
  	Player.setFlyingEnabled(0);
  	Player.setFlying(0);
  }
});