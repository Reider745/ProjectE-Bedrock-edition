ToolAPI.addToolMaterial("dm", {level: 5, efficiency: 6, damage: 12, enchantability: 30});

IDRegistry.genItemID("dmPickaxe");
Item.createItem("dmPickaxe", "Dark matter pickaxe", {name: "dm_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("dmAxe");
Item.createItem("dmAxe", "Dark matter axe", {name: "dm_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("dmShovel");
Item.createItem("dmShovel", "Dark matter shovel", {name: "dm_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("dmSword");
Item.createItem("dmSword", "Dark matter sword", {name: "dm_sword", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.dmPickaxe, "dm", ToolType.pickaxe);
ToolAPI.setTool(ItemID.dmAxe, "dm", ToolType.axe);
ToolAPI.setTool(ItemID.dmShovel, "dm", ToolType.shovel);
ToolAPI.setTool(ItemID.dmSword, "dm", ToolType.sword);

IDRegistry.genItemID("dmHelm");
IDRegistry.genItemID("dmChest");
IDRegistry.genItemID("dmLegg");
IDRegistry.genItemID("dmBoots");

Item.createArmorItem("dmHelm", "Dark matter helmet", {name: "dm_armor", meta: 2}, {type: "helmet", armor: 6, durability: 10000000, texture: "armor/dm_0.png"});
Item.createArmorItem("dmChest", "Dark matter chestplate", {name: "dm_armor", meta: 0}, {type: "chestplate", armor: 10, durability: 10000000, texture: "armor/dm_0.png"});
Item.createArmorItem("dmLegg", "Dark matter leggings", {name: "dm_armor", meta: 3}, {type: "leggings", armor: 6, durability: 10000000, texture: "armor/dm_1.png"});
Item.createArmorItem("dmBoots", "Dark matter boots", {name: "dm_armor", meta: 1}, {type: "boots", armor: 6, durability: 10000000, texture: "armor/dm_0.png"});

Armor.onHurt(ItemID.dmHelm, Armor.preventDamaging(ItemID.dmHelm));
Armor.onHurt(ItemID.dmChest, Armor.preventDamaging(ItemID.dmChest));
Armor.onHurt(ItemID.dmLegg, Armor.preventDamaging(ItemID.dmLegg));
Armor.onHurt(ItemID.dmBoots, Armor.preventDamaging(ItemID.dmBoots));

Callback.addCallback("PostLoaded", function(){

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

});


ToolAPI.addToolMaterial("rm", {level: 5, efficiency: 8, damage: 16, enchantability: 30});

IDRegistry.genItemID("rmPickaxe");
Item.createItem("rmPickaxe", "Red matter pickaxe", {name: "rm_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("rmAxe");
Item.createItem("rmAxe", "Red matter axe", {name: "rm_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("rmShovel");
Item.createItem("rmShovel", "Red matter shovel", {name: "rm_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("rmSword");
Item.createItem("rmSword", "Red matter sword", {name: "rm_sword", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.rmPickaxe, "rm", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rmAxe, "rm", ToolType.axe);
ToolAPI.setTool(ItemID.rmShovel, "rm", ToolType.shovel);
ToolAPI.setTool(ItemID.rmSword, "rm", ToolType.sword);

IDRegistry.genItemID("rmHelm");
IDRegistry.genItemID("rmChest");
IDRegistry.genItemID("rmLegg");
IDRegistry.genItemID("rmBoots");

Item.createArmorItem("rmHelm", "Red matter helmet", {name: "rm_armor", meta: 2}, {type: "helmet", armor: 3, durability: 10000000, texture: "armor/rm_0.png"});
Item.createArmorItem("rmChest", "Red matter chestplate", {name: "rm_armor", meta: 0}, {type: "chestplate", armor: 11, durability: 10000000, texture: "armor/rm_0.png"});
Item.createArmorItem("rmLegg", "Red matter leggings", {name: "rm_armor", meta: 3}, {type: "leggings", armor: 7, durability: 10000000, texture: "armor/rm_1.png"});
Item.createArmorItem("rmBoots", "Red matter boots", {name: "rm_armor", meta: 1}, {type: "boots", armor: 3, durability: 10000000, texture: "armor/rm_0.png"});

Armor.onHurt(ItemID.rmHelm, Armor.preventDamaging(ItemID.rmHelm));
Armor.onHurt(ItemID.rmChest, Armor.preventDamaging(ItemID.rmChest));
Armor.onHurt(ItemID.rmLegg, Armor.preventDamaging(ItemID.rmLegg));
Armor.onHurt(ItemID.rmBoots, Armor.preventDamaging(ItemID.rmBoots));

Callback.addCallback("PostLoaded", function(){
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
});


ToolType.katar = {
  isWeapon: true,
  damage: 8,
  baseDamage: 16,
  blockTypes: ["fibre", "wood", "plant"],
  onDestroy: function(item){
     item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data = 0;
  },
  useItem: function(c, i, b){
    if(b.id == 17 || b.id == 162){
      var rad = 24;
      for(x = -rad; x <= rad; x ++){
        for(y = -2; y <= rad; y ++){
          for(z = -rad; z <= rad; z ++){
            let block = World.getBlock(c.x+x, c.y+y, c.z+z);
            if(block.id == b.id){
              World.setBlock(c.x+x, c.y+y, c.z+z, 0);
              Player.addItemToInventory(block.id, 1, block.data);
            }
          }
        }
      }
    }
  }
};

ToolType.morningStar = {
  isWeapon: true,
  damage: 8,
  baseDamage: 12,
  blockTypes: ["stone", "wood", "dirt", "plant", "fibre"],
  onDestroy: function(item){
     item.data = 0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data = 0;
  },
  calcDestroyTime: function (i, c, b){
    if(b.id != 7) return 0;
  },
  useItem: function(coords, item, block){
    let x=coords.x; y=coords.y; z=coords.z;
    let rr = 6;
    if(!Entity.getSneaking(Player.get())){
      for(xx = -rr; xx <= rr; xx++){
        for(yy = -rr; yy <= rr; yy++){
          for(zz = -rr; zz <= rr; zz++){
            let block = World.getBlock(x + xx, y + yy, z + zz);
            if(!UNBREAKABLE[block.id]){
	          let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
	          
	          if(drop){
	            for(i in drop){
		          try{
	                Player.addItemToInventory(drop[i][0], drop[i][1] || 1, drop[i][2] || 0);
	              } catch (e) {}
	            }
	          }
	      	World.setBlock(x + xx, y + yy, z + zz, 0);
            }
          }
        }
      }
    }
  }
};

IDRegistry.genItemID("rmKatar");
Item.createItem("rmKatar", "Red Matter Katar", {name: "katar", meta: 0}, {stack: 1});

IDRegistry.genItemID("rmMorningStar");
Item.createItem("rmMorningStar", "Red Matter Morning Star", {name: "morning_star", meta: 0}, {stack: 1});


ToolAPI.setTool(ItemID.rmKatar, "rm", ToolType.katar);
ToolAPI.setTool(ItemID.rmMorningStar, "rm", ToolType.morningStar);

Callback.addCallback("PostLoaded", function (){
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