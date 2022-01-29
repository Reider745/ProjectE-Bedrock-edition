function addPhilosophersStoneRecipe(item, input){
  let ingridients = [];
  for(i = 0; i < input.count; i++){
    ingridients.push({id: input.id, data: input.data});
  }
  Recipes.addCraftToolRecipeItem(
    {id: item.id, count: item.count, data: item.data}, ingridients, ItemID.philosophersStone
  );
}

Recipes.addCraftToolRecipeItem = function(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
	   for(var i in field)
			   if(field[i].id!=tool)
				    api.decreaseFieldSlot(i);
	 });
};

Callback.addCallback("PostEmcLoad", function(){
	Core.setResultCollector(263, 1, 331, 0);
	Core.setResultCollector(331, 0, 263, 0);
	Core.setResultCollector(263, 0, 289, 0);
	Core.setResultCollector(289, 0, 348, 0);
	Core.setResultCollector(348, 0, ItemID.fuelAlchemical, 0);
	Core.setResultCollector(ItemID.fuelAlchemical, 0, 152, 0);
	Core.setResultCollector(152, 0, 377, 0);
	Core.setResultCollector(377, 0, 89, 0);
	Core.setResultCollector(89, 0, ItemID.fuelAlchemical, 0);
	Core.setResultCollector(ItemID.fuelAlchemical, 0, BlockID.blockAlchemicalFuel, 0);
	Core.setResultCollector(BlockID.blockAlchemicalFuel, 0, ItemID.fuelMobius, 0);
	Core.setResultCollector(ItemID.fuelMobius, 0, BlockID.blockMobiusFuel, 0);
	Core.setResultCollector(BlockID.blockMobiusFuel, 0, BlockID.blockAstralFuel, 0);
	
	Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelAlchemical, count: 1, data: 0}, [
    {id: 263, data: 0},
    {id: 263, data: 0},
    {id: 263, data: 0},
    {id: 263, data: 0},
  ], ItemID.philosophersStone
);

Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelMobius, count: 1, data: 0}, [
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
  ], ItemID.philosophersStone
);

Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelAstral, count: 1, data: 0}, [
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
  ], ItemID.philosophersStone
);

addPhilosophersStoneRecipe({id: 263, data: 0, count: 4}, {id: ItemID.fuelAlchemical, count: 1, data: 0});
addPhilosophersStoneRecipe({id: ItemID.fuelAlchemical, data: 0, count: 4}, {id: ItemID.fuelMobius, count: 1, data: 0});
addPhilosophersStoneRecipe({id: ItemID.fuelMobius, data: 0, count: 4}, {id: ItemID.fuelAstral, count: 1, data: 0});

addPhilosophersStoneRecipe({id: 368, data: 0, count: 1}, {id: 265, count: 4, data: 0});
addPhilosophersStoneRecipe({id: 263, data: 1, count: 4}, {id: 263, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 263, data: 0, count: 1}, {id: 263, count: 4, data: 1});
addPhilosophersStoneRecipe({id: 266, data: 0, count: 1}, {id: 265, count: 8, data: 0});
addPhilosophersStoneRecipe({id: 265, data: 0, count: 8}, {id: 266, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 264, data: 0, count: 1}, {id: 266, count: 4, data: 0});
addPhilosophersStoneRecipe({id: 266, data: 0, count: 4}, {id: 264, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 388, data: 0, count: 1}, {id: 264, count: 2, data: 0});
addPhilosophersStoneRecipe({id: 264, data: 0, count: 2}, {id: 388, count: 1, data: 0});
});

Callback.addCallback("PostLoaded", function(){

Recipes.addShapeless({id: BlockID.transmutationTablet, count: 1, data: 0}, [
		{id: 49, data: 0}, 
		{id: 1, data: 0}, 
		{id: 49, data: 0}, 
		{id: 1, data: 0}, 
		{id: ItemID.philosophersStone, data: 0}, 
		{id: 1, data: 0}, 
		{id: 49, data: 0}, 
		{id: 1, data: 0}, 
		{id: 49, data: 0}
	], function(api, field, result){
		for (var i in field){
			if (field[i].id != ItemID.philosophersStone){
				api.decreaseFieldSlot(i);
			}
		}
	});

	Recipes.addShaped({id: ItemID.transmute_tablet, count: 1, data: 0}, [
		"odo", 
		"dcd",
		"odo"
	], ["o", BlockID.dmBlock, 0, "d", 1, 0, "c", BlockID.transmutationTablet, 0]);

Recipes.addShaped({id: BlockID.energyCollector3, count: 1, data: 0}, 
  ["gmg",
   "gcg",
   "ggg"],
  ['g', 89, 0, 'm', ItemID.redMatter, 0, 'c', BlockID.energyCollector2, 0]);

Recipes.addShaped({id: BlockID.energyCollector2, count: 1, data: 0}, 
  ["gmg",
   "gcg",
   "ggg"],
  ['g', 89, 0, 'm', ItemID.darkMatter, 0, 'c', BlockID.energyCollector1, 0]);


Recipes.addShaped({id: BlockID.energyCollector1, count: 1, data: 0},
  ["glg",
   "gdg",
   "gfg"],
  ['g', 89, 0, 'd', 57, 0, 'f', 61, 0, 'l', 20, 0]);

Recipes.addShaped({id: ItemID.dmHelm, count: 1, data: 0}, 
["aaa", 
 "a a",
 "   "],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmChest, count: 1, data: 0}, 
["a a", 
 "aaa",
 "aaa"],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmLegg, count: 1, data: 0}, 
["aaa", 
 "a a",
 "a a"],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmBoots, count: 1, data: 0}, 
["a a", 
 "a a",
 "   "],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmPickaxe, count: 1, data: 0}, 
["aaa", 
 " d ",
 " d "],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmAxe, count: 1, data: 0}, 
["aa", 
 "ad",
 " d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmShovel, count: 1, data: 0}, 
["a", 
 "d",
 "d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmSword, count: 1, data: 0}, 
["a", 
 "a",
 "d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.rmHelm, count: 1, data: 0}, 
["aaa", 
 "ada",
 "   "],
["a", ItemID.redMatter, 0, "d", ItemID.dmHelm, 0]);

Recipes.addShaped({id: ItemID.rmChest, count: 1, data: 0}, 
["ada", 
 "aaa",
 "aaa"],
["a", ItemID.redMatter, 0, "d", ItemID.dmChest, 0]);

Recipes.addShaped({id: ItemID.rmLegg, count: 1, data: 0}, 
["aaa", 
 "ada",
 "a a"],
["a", ItemID.redMatter, 0, "d", ItemID.dmLegg, 0]);

Recipes.addShaped({id: ItemID.rmBoots, count: 1, data: 0}, 
["ada", 
 "a a",
 "   "],
["a", ItemID.redMatter, 0, "d", ItemID.dmBoots, 0]);

Recipes.addShaped({id: ItemID.rmPickaxe, count: 1, data: 0}, 
["aaa", 
 " m ",
 " d "],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmPickaxe, 0]);

Recipes.addShaped({id: ItemID.rmAxe, count: 1, data: 0}, 
["aa", 
 "am",
 " d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmAxe, 0]);

Recipes.addShaped({id: ItemID.rmShovel, count: 1, data: 0}, 
["a", 
 "m",
 "d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmShovel, 0]);

Recipes.addShaped({id: ItemID.rmSword, count: 1, data: 0}, 
["a", 
 "m",
 "d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmSword, 0]);

Recipes.addShaped({id: ItemID.rmKatar, count: 1, data: 0}, 
    ["sar", 
     "rrr",
     "rrr"],
  ["s", ItemID.rmSword, 0, "a", ItemID.rmAxe, 0, "r", ItemID.redMatter, 0]);
  
  Recipes.addShaped({id: ItemID.rmMorningStar, count: 1, data: 0}, 
    ["sar", 
     "hrr",
     "rrr"],
  ["h", ItemID.rmHammer, 0, "s", ItemID.rmShovel, 0, "a", ItemID.rmPickaxe, 0, "r", ItemID.redMatter, 0]);

Recipes.addShaped({
            id: BlockID.alchChest,
            count: 1,
            data: 0
        },
        ["lmh",
            "sds",
            "ici"
        ],
        ["l", ItemID.covDust1, 0, "m", ItemID.covDust2, 0, "h", ItemID.covDust3, 0, "s", 1, 0, "i", 265, 0, "c", 54, 0, "d", 264, 0]);

Recipes.addShaped({id: BlockID.energyCondenser1, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", 49, 0, "d", 264, 0, "c", BlockID.alchChest, 0]);

Recipes.addShaped({id: BlockID.energyCondenser2, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", BlockID.dmBlock, 0, "d", BlockID.rmBlock, 0, "c", BlockID.energyCondenser1, 0]);

Recipes.addShaped({
            id: BlockID.antimatterRelay1,
            count: 1,
            data: 0
        },
        ["odo",
            "ofo",
            "ooo"
        ],
        ["o", 49, 0, "f", 61, 0, "d", 57, 0]);

Recipes.addShaped({id: BlockID.antimatterRelay2, count: 1, data: 0}, 
["odo", 
 "ofo",
 "ooo"],
["o", 49, 0, "f", BlockID.antimatterRelay1, 0, "d", ItemID.darkMatter, 0]);

Recipes.addShaped({id: BlockID.antimatterRelay3, count: 1, data: 0}, 
["odo", 
 "ofo",
 "ooo"],
["o", 49, 0, "f", BlockID.antimatterRelay2, 0, "d", ItemID.redMatter, 0]);

Recipes.addShaped({id: ItemID.philosophersStone, count: 1, data: 0}, 
["rgr", 
"gdg",
"rgr"],
["r", 331, 0, "g", 348, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.ironBand, count: 1, data: 0}, 
["iii", 
 "ili",
 "iii"],
["l", 325, 10, "i", 265, 0]);

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

Recipes.addShaped({id: BlockID.pedestalMatter, count: 1, data: 0}, 
["rir", 
 "rir",
 "iii"],
["r", ItemID.redMatter, 0, "i", BlockID.dmBlock, 0]);

Recipes.addShaped({id: ItemID.soulStone, count: 1, data: 0}, 
["sss", 
 "dbd",
 "sss"],
["b", 351, 4, "d", ItemID.redMatter, 0, "s", 348, 0]);

Recipes.addShaped({id: ItemID.watchTime, count: 1, data: 0}, 
["dsd", 
 "gcg",
 "dsd"],
["c", 351, 4, "g", 89, 0, "c", 347, 0, "d", ItemID.darkMatter, 0, "s", 49, 0]);
/*Recipes.addShapeless({id: ItemID.gemHelm, count: 1, data: 0}, [
	    {id: ItemID.rmHelm, data: -1}, {id: ItemID.kleinStar6, data: -1},
	    {id: ItemID.evertideAmulet, data: 0}, {id: ItemID.soulStone, data: 0}
	]);

	Recipes.addShapeless({id: ItemID.gemChest, count: 1, data: 0}, [
	    {id: ItemID.rmChest, data: -1}, {id: ItemID.kleinStar6, data: -1},
	    {id: ItemID.vulcaniteAmulet, data: 0}, {id: ItemID.bodyStone, data: 0}
	]);

	Recipes.addShapeless({id: ItemID.gemLegg, count: 1, data: 0}, [
	    {id: ItemID.rmLegg, data: -1}, {id: ItemID.kleinStar6, data: -1},
	    {id: ItemID.watchTime, data: 0}, {id: ItemID.ringBlackHoleInactive, data: 0}
	]);

	Recipes.addShapeless({id: ItemID.gemBoots, count: 1, data: 0}, [
	    {id: ItemID.rmBoots, data: -1}, {id: ItemID.kleinStar6, data: -1},
	    {id: ItemID.swiftWolfRendingGale, data: 0}, {id: ItemID.swiftWolfRendingGale, data: 0}
	]);*/
});

Callback.addCallback("EntityHurt", function(a, v, d){
  item = Player.getCarriedItem();
  if(a == Player.get() && (item.id == ItemID.rmKatar || item.id == ItemID.rmSword)){
    var pos = Entity.getPosition(v);
    for(m in allMobs){
      var mobs = Entity.getAllInRange(pos, 3, allMobs[m]);
      for(i in mobs){
        var mob = mobs[i];
        Entity.damageEntity(mob, 24);
      }
    }
  }
});
