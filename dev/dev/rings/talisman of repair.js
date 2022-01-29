IDRegistry.genItemID("talismanRepair");
Item.createItem("talismanRepair", "Talisman of repair", {name: "talismanRepair", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.talismanRepair, count: 1, data: 0}, 
["abc", 
 "pps",
 "abc"],
["a", ItemID.covDust1, 0, "b", ItemID.covDust2, 0, "c", ItemID.covDust3, 0, "p", 339, 0, "s", 287, 0]);
});


var toolList = {
  //etc
  261: true, 259: true, 359: true,
  //iron
  256: true, 257: true, 258: true, 267: true, 256: true, 292: true,
  //wooden
  268: true, 269: true, 270: true, 271: true, 290: true, 
  //stone
  272: true, 273: true, 274: true, 275: true, 291: true,
  //diamond
  276: true, 277: true, 278: true, 279: true, 293: true, 
  //golden
  283: true, 284: true, 285: true, 286: true, 294: true
};

Rings.addRingFunction(ItemID.talismanRepair, function(){
  for(i = 0; i < 36; i ++){
    let item = Player.getInventorySlot(i);
    if(toolList[item.id]){
      if(World.getThreadTime()%15 == 0 && item.data > 0){
        Player.setInventorySlot(i, item.id, item.count, item.data-1, item.extra);
      }
    }
  }
});

Callback.addCallback("tick", function(){
  if(Rings.get(ItemID.talismanRepair)){
    Rings.getRingFunction(ItemID.talismanRepair).inv();
  }
});