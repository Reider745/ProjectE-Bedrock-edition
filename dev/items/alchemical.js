IDRegistry.genItemID("philosophersStone");
Item.createItem("philosophersStone", "Philosopher's stone", {name: "philosophers_stone"}, {stack: 1});

Item.registerUseFunction("philosophersStone", function(crd, item, block, player){
  if(Entity.getSneaking(player)){
		let region = BlockSource.getDefaultForActor(player);
    switch(block.id){
      case 1:
        region.setBlock(crd.x,crd.y,crd.z,2);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 2:
        region.setBlock(crd.x,crd.y,crd.z,4);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 4:
        region.setBlock(crd.x,crd.y,crd.z,2);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;

      case 12:
        region.setBlock(crd.x,crd.y,crd.z,4);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 24:
        region.setBlock(crd.x,crd.y,crd.z,13);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
    }
  } else {
  	let region = BlockSource.getDefaultForActor(player);
    switch(block.id){
      case 1:
        region.setBlock(crd.x,crd.y,crd.z,4);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 4:
        region.setBlock(crd.x,crd.y,crd.z,1);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 2:
        region.setBlock(crd.x,crd.y,crd.z,12);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 12:
        region.setBlock(crd.x,crd.y,crd.z,2);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 13:
        region.setBlock(crd.x,crd.y,crd.z,24);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
      
      case 87:
        region.setBlock(crd.x,crd.y,crd.z,4);
        SoundHelper.playByPlayer(player, "petransmute", .5);
      break;
    }
  }
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

Item.registerUseFunction("rodDivining1", function(crd, b, i, player){
	let region = BlockSource.getDefaultForActor(player);
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
  for(let xx = -1; xx <= 1; xx++)
    for(let yy = -1; yy <= 1; yy++)
      for(let zz = -1; zz <= 1; zz++){
        let val = ore_emc[region.getBlockId(c.x+xx, c.y+yy, c.z+zz)];
        if(val)
          total+=val;
      }
  Game.message("Total EMC in this area: "+total);
});

Item.registerUseFunction("rodDivining2", function(crd, b, i, player){
	let region = BlockSource.getDefaultForActor(player);
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
  for(let xx = -2; xx <= 2; xx++)
    for(let yy = -2; yy <= 2; yy++)
      for(let zz = -2; zz <= 2; zz++){
        let val = ore_emc[region.getBlockId(c.x+xx, c.y+yy, c.z+zz)];
        if(val)
          total+=val;
      }
  Game.message("Total EMC in this area: "+total);
});

Item.registerUseFunction("rodDivining3", function(crd, b, i, player){
	let region = BlockSource.getDefaultForActor(player);
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
  for(let xx = -3; xx <= 3; xx++)
    for(let yy = -2; yy <= 2; yy++)
      for(let zz = -3; zz <= 3; zz++){
        let val = ore_emc[region.getBlockId(c.x+xx, c.y+yy, c.z+zz)];
        if(val)
          total+=val;
      }
	Game.message("Total EMC in this area: "+total);
});