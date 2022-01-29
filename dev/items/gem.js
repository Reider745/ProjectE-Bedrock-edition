IDRegistry.genItemID("gemHelm");
IDRegistry.genItemID("gemChest");
IDRegistry.genItemID("gemLegg");
IDRegistry.genItemID("gemBoots");

Item.createArmorItem("gemHelm", "Abyss Helmet", {name: "gem_armor", meta: 2}, {type: "helmet", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});
Item.createArmorItem("gemChest", "Grid Infernal Armor", {name: "gem_armor", meta: 0}, {type: "chestplate", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});
Item.createArmorItem("gemLegg", "Gravity Greaves", {name: "gem_armor", meta: 3}, {type: "leggings", armor: 5, durability: 10000000, texture: "armor/gem_1.png"});
Item.createArmorItem("gemBoots", "Hurricane Boots", {name: "gem_armor", meta: 1}, {type: "boots", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});


Armor.registerOnTickListener(ItemID.gemHelm, function(item, slot, player){
	Entity.addEffect(player, 16, 1, 1000, false, false);
	let p = Entity.getPosition(player);
	let region = BlockSource.getDefaultForActor(player);
	if(region.getBlockId(p.x, p.y, p.z) == 9)
		Entity.addEffect(player, 13, 1, 20, false, false);
});

Armor.registerOnTickListener(ItemID.gemChest, function(item, slot, player){
	let p = Entity.getPosition(player);
	let vel = Entity.getVelocity(player);
	let region = BlockSource.getDefaultForActor(player);
	
	if(!Entity.getSneaking(player) && region.getBlockId(p.x, p.y-2, p.z) == 11){
		Entity.setVelocity(player, vel.x, .015, vel.z);
		Entity.setFire(player, 0);
	}
	Entity.addEffect(player, 12, 1, 20, false, false);
});


Armor.registerOnTickListener(ItemID.gemChest, function(item, slot, player){
  Entity.addEffect(player, 1, 1, 90, false, false);
});

Armor.registerOnHurtListener(ItemID.gemHelm, function(){
	Armor.preventDamaging(ItemID.gemHelm);
});

Armor.registerOnHurtListener(ItemID.gemChest, function(item, slot, player){
	if(Entity.getHealth(player) >= 2) {
    Game.prevent();
    Entity.setFire(player, 40);
  }
  Entity.setFire(player, 0);
  Armor.preventDamaging(ItemID.gemChest);
});

Armor.registerOnHurtListener(ItemID.gemLegg, function(){
	Armor.preventDamaging(ItemID.gemHelm);
});

Armor.registerOnHurtListener(ItemID.gemBoots, function(){
	Armor.preventDamaging(ItemID.gemBoots);
});

Callback.addCallback("ServerPlayerTick", function (player){
  if(
    Entity.getArmorSlot(player, 0).id == ItemID.gemHelm &&
    Entity.getArmorSlot(player, 1).id == ItemID.gemChest &&
    Entity.getArmorSlot(player, 2).id == ItemID.gemLegg &&
    Entity.getArmorSlot(player, 3).id == ItemID.gemBoots
  ){
    new PlayerActor(player).setHunger(20);
  }
});