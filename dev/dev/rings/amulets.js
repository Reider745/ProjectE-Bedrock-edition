IDRegistry.genItemID("evertideAmulet");
Item.createItem("evertideAmulet", "Evertide Amulet", {name: "evertideAmulet", meta: 0}, {stack: 1});
LiquidRegistry.registerItem("water", {id: ItemID.everideAmulet, data: 0}, {id: ItemID.everideAmulet, data: 0});

IDRegistry.genItemID("vulcaniteAmulet");
Item.createItem("vulcaniteAmulet", "Vulcanite Amulet\n§7Doesn't work...", {name: "vulcaniteAmulet", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function (){
  Recipes.addShaped({id: ItemID.evertideAmulet, count: 1, data: 0}, 
     ["www", 
      "mmm",
      "www"],
    ["w", 325, 8, "m", ItemID.darkMatter, 0
  ]);
  
  Recipes.addShaped({id: ItemID.vulcaniteAmulet, count: 1, data: 0}, 
     ["www", 
      "mmm",
      "www"],
    ["w", 325, 11, "m", ItemID.darkMatter, 0
  ]);
});

Item.registerUseFunction("evertideAmulet", function (crd, i, b){
  var c = crd.relative;
  if(World.getBlockID(c.x, c.y, c.z) == 0){
    World.setBlock(c.x, c.y, c.z, 8, 0);
  }
});