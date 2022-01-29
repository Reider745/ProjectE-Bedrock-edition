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

INFINITY_TOOL.push(ItemID.dmPickaxe);
INFINITY_TOOL.push(ItemID.dmAxe);
INFINITY_TOOL.push(ItemID.dmShovel);
INFINITY_TOOL.push(ItemID.dmSword);

IDRegistry.genItemID("dmHelm");
IDRegistry.genItemID("dmChest");
IDRegistry.genItemID("dmLegg");
IDRegistry.genItemID("dmBoots");



Item.createArmorItem("dmHelm", "Dark matter helmet", {name: "dm_armor", meta: 2}, {type: "helmet", armor: 6, durability: 10000000, texture: "armor/dm_0.png"});

Item.createArmorItem("dmChest", "Dark matter chestplate", {name: "dm_armor", meta: 0}, {type: "chestplate", armor: 10, durability: 10000000, texture: "armor/dm_0.png"});

Item.createArmorItem("dmLegg", "Dark matter leggings", {name: "dm_armor", meta: 3}, {type: "leggings", armor: 6, durability: 10000000, texture: "armor/dm_1.png"});

Item.createArmorItem("dmBoots", "Dark matter boots", {name: "dm_armor", meta: 1}, {type: "boots", armor: 6, durability: 10000000, texture: "armor/dm_0.png"});


Armor.registerOnHurtListener(ItemID.dmHelm, function(){
	Armor.preventDamaging(ItemID.dmHelm);
});
Armor.registerOnHurtListener(ItemID.dmChest, function(){
	Armor.preventDamaging(ItemID.dmChest);
});
Armor.registerOnHurtListener(ItemID.dmLegg, function(){
	Armor.preventDamaging(ItemID.dmLegg);
});
Armor.registerOnHurtListener(ItemID.dmBoots, function(){
	Armor.preventDamaging(ItemID.dmBoots);
});





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

INFINITY_TOOL.push(ItemID.rmPickaxe);
INFINITY_TOOL.push(ItemID.rmAxe);
INFINITY_TOOL.push(ItemID.rmShovel);
INFINITY_TOOL.push(ItemID.rmSword);




IDRegistry.genItemID("rmHelm");

IDRegistry.genItemID("rmChest");

IDRegistry.genItemID("rmLegg");

IDRegistry.genItemID("rmBoots");



Item.createArmorItem("rmHelm", "Red matter helmet", {name: "rm_armor", meta: 2}, {type: "helmet", armor: 3, durability: 10000000, texture: "armor/rm_0.png"});

Item.createArmorItem("rmChest", "Red matter chestplate", {name: "rm_armor", meta: 0}, {type: "chestplate", armor: 11, durability: 10000000, texture: "armor/rm_0.png"});

Item.createArmorItem("rmLegg", "Red matter leggings", {name: "rm_armor", meta: 3}, {type: "leggings", armor: 7, durability: 10000000, texture: "armor/rm_1.png"});

Item.createArmorItem("rmBoots", "Red matter boots", {name: "rm_armor", meta: 1}, {type: "boots", armor: 3, durability: 10000000, texture: "armor/rm_0.png"});


Armor.registerOnHurtListener(ItemID.rmHelm, function(){
	Armor.preventDamaging(ItemID.rmHelm);
});
Armor.registerOnHurtListener(ItemID.rmChest, function(){
	Armor.preventDamaging(ItemID.rmChest);
});
Armor.registerOnHurtListener(ItemID.rmLegg, function(){
	Armor.preventDamaging(ItemID.rmLegg);
});
Armor.registerOnHurtListener(ItemID.rmBoots, function(){
	Armor.preventDamaging(ItemID.rmBoots);
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

  useItem: function(c, i, b, player){
  	if(b.id == 17 || b.id == 162){
  		let region = BlockSource.getDefaultForActor(player);
  		let rad = 24;
  		for(x = -rad;x <= rad;x++)
  			for(y = -2;y <= rad;y++)
  				for(z = -rad;z <= rad;z++){
  					let block = region.getBlock(c.x+x, c.y+y, c.z+z);
  					if(block.id == b.id){
  						region.setBlock(c.x+x, c.y+y, c.z+z, 0);
              new PlayerActor(player).addItemToInventory(block.id, 1, block.data, null, true);
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
  useItem: function(coords, item, block, player){
    let x=coords.x; y=coords.y; z=coords.z;
    let rr = 6;
    if(!Entity.getSneaking(player)){
    	let region = BlockSource.getDefaultForActor(player);
      for(xx = -rr; xx <= rr; xx++){
        for(yy = -rr; yy <= rr; yy++){
          for(zz = -rr; zz <= rr; zz++){
            let block = region.getBlock(x + xx, y + yy, z + zz);
            if(!UNBREAKABLE[block.id]){
	          let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
	          if(drop){
	            for(i in drop){
		          try{
	                new PlayerActor(player).addItemToInventory(drop[i][0], drop[i][1] || 1, drop[i][2] || 0, null, true);
	              } catch (e) {}
	            }
	          }
	      	region.setBlock(x + xx, y + yy, z + zz, 0);
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