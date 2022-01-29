IDRegistry.genItemID("philosophersStone");
Item.createItem("philosophersStone", "Philosopher's stone", {name: "philosophers_stone"}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.philosophersStone, count: 1, data: 0}, 
["rgr", 
"gdg",
"rgr"],
["r", 331, 0, "g", 348, 0, "d", 264, 0]);
});

IDRegistry.genItemID("fuelAlchemical");
Item.createItem("fuelAlchemical", "Alchemical fuel", {name: "fuelAlchemical"}, {stack: 64});

IDRegistry.genItemID("fuelMobius");
Item.createItem("fuelMobius", "Mobius fuel", {name: "fuelMobius"}, {stack: 64});

IDRegistry.genItemID("fuelAstral");
Item.createItem("fuelAstral", "Astral fuel", {name: "fuelAstral"}, {stack: 64});

Recipes.addFurnaceFuel(ItemID.fuelAlchemical,0,6400);

Recipes.addFurnaceFuel(ItemID.fuelMobius,0,25600);

Recipes.addFurnaceFuel(ItemID.fuelAstral,0,102400);

IDRegistry.genItemID("darkMatter");
Item.createItem("darkMatter", "Dark matter", {name: "darkMatter", meta: 0}, {stack: 64});

IDRegistry.genItemID("redMatter");
Item.createItem("redMatter", "Red matter", {name: "redMatter", meta: 0}, {stack: 64});

IDRegistry.genItemID("ironBand");
Item.createItem("ironBand", "Iron band", {name: "ironBand", meta: 0}, {stack: 64});

IDRegistry.genBlockID("blockAlchemicalFuel");
Block.createBlock("blockAlchemicalFuel", [{name: "Alchemical fuel block", texture: [["fuelAlchemical",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockAlchemicalFuel, 0, 6400*9);

IDRegistry.genBlockID("blockMobiusFuel");
Block.createBlock("blockMobiusFuel", [{name: "Mobius fuel block", texture: [["fuelMobius",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockMobiusFuel, 0, 518400);

IDRegistry.genBlockID("blockAstralFuel");
Block.createBlock("blockAstralFuel", [{name: "Astral fuel block", texture: [["fuelAstral",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockAstralFuel, 0, 518400*9);

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.ironBand, count: 1, data: 0}, 
["iii", 
 "ili",
 "iii"],
["l", 325, 10, "i", 265, 0]);
});

IDRegistry.genItemID("covDust1");
Item.createItem("covDust1", "Covalence dust Low", {name: "dustCovalenceLow", meta: 0}, {stack: 64});

IDRegistry.genItemID("covDust2");
Item.createItem("covDust2", "Covalence dust Medium", {name: "dustCovalenceMedium", meta: 0}, {stack: 64});

IDRegistry.genItemID("covDust3");
Item.createItem("covDust3", "Covalence dust High", {name: "dustCovalenceHigh", meta: 0}, {stack: 64});

IDRegistry.genBlockID("dmBlock");
Block.createBlock("dmBlock", [{name: "Dark matter block", texture: [["dmBlock",0]], inCreative: true}],"opaque");

IDRegistry.genBlockID("rmBlock");
Block.createBlock("rmBlock", [{name: "Red matter block", texture: [["rmBlock",0]], inCreative: true}],"opaque");

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: ItemID.darkMatter, count: 1, data: 0}, 
["aaa", 
 "aba",
 "aaa"],
["a", ItemID.fuelAstral, 0, "b", 57, 0]);

Recipes.addShaped({id: ItemID.redMatter, count: 1, data: 0}, 
["aaa", 
 "bbb",
 "aaa"],
["a", ItemID.fuelAstral, 0, "b", ItemID.darkMatter, 0]);

});

var ore_emc = {
  "1": 1,
  "14": 2048,
  "15": 256,
  "16": 128,
  "56": 8192,
  "129": 16384,
  "73": 64
};

IDRegistry.genItemID("rodDivining1");
Item.createItem("rodDivining1", "Divining rod low", {name: "rodDivining", meta: 0}, {stack: 1});

IDRegistry.genItemID("rodDivining3");
Item.createItem("rodDivining3", "Divining rod high", {name: "rodDivining", meta: 1}, {stack: 1});

IDRegistry.genItemID("rodDivining2");
Item.createItem("rodDivining2", "Divining rod medium", {name: "rodDivining", meta: 2}, {stack: 1});

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: ItemID.covDust1, count: 40, data: 0}, 
["sii", 
 "iii",
 "iii"],
["s", 263, 1, "i", 4, 0]);

Recipes.addShaped({id: ItemID.rodDivining1, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", 280, 0, "i", ItemID.covDust1, 0]);

Recipes.addShaped({id: ItemID.rodDivining2, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", ItemID.rodDivining1, 0, "i", ItemID.covDust2, 0]);

Recipes.addShaped({id: ItemID.rodDivining3, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", ItemID.rodDivining2, 0, "i", ItemID.covDust3, 0]);

Recipes.addShapeless({id: ItemID.covDust2, count: 40, data: 0}, [{id: 265, data: 0},{id: 331, data: 0}]);
Recipes.addShapeless({id: ItemID.covDust3, count: 40, data: 0}, [{id: 264, data: 0},{id: 263, data: 0}]);

Recipes.addShapeless({id: BlockID.dmBlock, count: 1, data: 0}, [{id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}]);
Recipes.addShapeless({id: BlockID.rmBlock, count: 1, data: 0}, [{id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}]);
Recipes.addShapeless({id: ItemID.darkMatter, count: 4, data: 0}, [{id: BlockID.dmBlock, data: 0}]);
Recipes.addShapeless({id: ItemID.redMatter, count: 4, data: 0}, [{id: BlockID.rmBlock, data: 0}]);

Recipes.addShaped({id: BlockID.blockAlchemicalFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelAlchemical, 0]);

Recipes.addShaped({id: BlockID.blockMobiusFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelMobius, 0]);

Recipes.addShaped({id: BlockID.blockAstralFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelAstral, 0]);

Recipes.addShapeless({id: ItemID.fuelAlchemical, count: 9, data: 0}, [{id: BlockID.blockAlchemicalFuel, data: 0}]);
Recipes.addShapeless({id: ItemID.fuelMobius, count: 9, data: 0}, [{id: BlockID.blockMobiusFuel, data: 0}]);
Recipes.addShapeless({id: ItemID.fuelAstral, count: 9, data: 0}, [{id: BlockID.blockAstralFuel, data: 0}]);
});

Item.registerUseFunction("rodDivining1", function(crd, b, i){
  let total = 0;
  let c = crd.relative;
  let range = 2;
  switch (crd.side) {
   case 0: c.y += range; break;
   case 1: c.y -= range; break;
   case 2: c.z += range; break;
   case 3: c.z -= range; break;
   case 4: c.x += range; break;
   case 5: c.x -= range; break;
  }
  
  for(let xx = -1; xx <= 1; xx++){
    for(let yy = -1; yy <= 1; yy++){
      for(let zz = -1; zz <= 1; zz++){
        let val = ore_emc[World.getBlockID(c.x+xx, c.y+yy, c.z+zz)];
        if(val){
          total+=val;
        }
      }
    }
  }
  Game.message("Total EMC in this area: "+total);
});

Item.registerUseFunction("rodDivining2", function(crd, b, i){
  let total = 0;
  let c = crd.relative;
  let range = 4;
  switch (crd.side) {
   case 0: c.y += range; break;
   case 1: c.y -= range; break;
   case 2: c.z += range; break;
   case 3: c.z -= range; break;
   case 4: c.x += range; break;
   case 5: c.x -= range; break;
  }
  
  for(let xx = -2; xx <= 2; xx++){
    for(let yy = -2; yy <= 2; yy++){
      for(let zz = -2; zz <= 2; zz++){
        let val = ore_emc[World.getBlockID(c.x+xx, c.y+yy, c.z+zz)];
        if(val){
          total+=val;
        }
      }
    }
  }
  Game.message("Total EMC in this area: "+total);
});

Item.registerUseFunction("rodDivining3", function(crd, b, i){
  let total = 0;
  let c = crd.relative;
  let range = 6;
  switch (crd.side) {
   case 0: c.y += range; break;
   case 1: c.y -= range; break;
   case 2: c.z += range; break;
   case 3: c.z -= range; break;
   case 4: c.x += range; break;
   case 5: c.x -= range; break;
  }
  
  for(let xx = -3; xx <= 3; xx++){
    for(let yy = -2; yy <= 2; yy++){
      for(let zz = -3; zz <= 3; zz++){
        let val = ore_emc[World.getBlockID(c.x+xx, c.y+yy, c.z+zz)];
        if(val){
          total+=val;
        }
      }
    }
  }
  Game.message("Total EMC in this area: "+total);
});