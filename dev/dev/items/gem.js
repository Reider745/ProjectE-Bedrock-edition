IDRegistry.genItemID("gemHelm");
IDRegistry.genItemID("gemChest");
IDRegistry.genItemID("gemLegg");
IDRegistry.genItemID("gemBoots");

Item.createArmorItem("gemHelm", "Abyss Helmet", {name: "gem_armor", meta: 2}, {type: "helmet", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});
Item.createArmorItem("gemChest", "Grid Infernal Armor", {name: "gem_armor", meta: 0}, {type: "chestplate", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});
Item.createArmorItem("gemLegg", "Gravity Greaves", {name: "gem_armor", meta: 3}, {type: "leggings", armor: 5, durability: 10000000, texture: "armor/gem_1.png"});
Item.createArmorItem("gemBoots", "Hurricane Boots", {name: "gem_armor", meta: 1}, {type: "boots", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});

Armor.onTick({id: ItemID.gemHelm, slot: 0}, function (s){
  Entity.addEffect(Player.get(), 16, 1, 1000, false, false);
  p = Player.getPosition();
  if(World.getBlockID(p.x, p.y, p.z) == 9){
    Entity.addEffect(Player.get(), 13, 1, 20, false, false);
  }
});

Armor.onTick({id: ItemID.gemChest, slot: 1}, function (a, v, s){
  p = Player.getPosition();
  vel = Entity.getVelocity(Player.get());
  if(!Entity.getSneaking(Player.get()) && World.getBlockID(p.x, p.y-2, p.z) == 11){
    Entity.setVelocity(Player.get(), vel.x, .015, vel.z);
    Entity.setFire(Player.get(), 0);
  }
  Entity.addEffect(Player.get(), 12, 1, 20, false, false);
});


Armor.onTick({id: ItemID.gemLegg, slot: 2}, function (s){
  if(Entity.getSneaking(Player.get())){
    for(j in allMobs){
      ent = Entity.getAllInRange(Player.getPosition(), 6, allMobs[j]);
      for(i in ent){
        var X = Player.getPosition().x, Y = Player.getPosition().y, Z = Player.getPosition().z
        var x=Entity.getPosition(ent[i]).x-Player.getPosition().x;
        var y=Entity.getPosition(ent[i]).y-Player.getPosition().y;
        var z=Entity.getPosition(ent[i]).z-Player.getPosition().z;
        if(x*x+y*y+z*z<5*5){
	      Entity.setVelocity(ent[i],x, y, z);
	    }
	  }
    }
    if(Entity.getVelocity(Player.get()).y <= fallVelocity){
      Entity.setVelocity(Player.get(), 0, -6, 0);
    }
  }
});

Armor.onTick({id: ItemID.gemBoots, slot: 3}, function (s){
  Entity.addEffect(Player.get(), 1, 1, 90, false, false);
});

Armor.onHurt({id: ItemID.gemHelm, slot: 0}, function (a, v, s){
  Armor.preventDamaging(ItemID.gemHelm);
});

Armor.onHurt({id: ItemID.gemChest, slot: 1}, function (a, v, s, h){
  if(h >= 2) {
    Game.prevent();
    if(a != Player.get()) Entity.setFire(a, 40);
  }
  Entity.setFire(Player.get(), 0);
  Armor.preventDamaging(ItemID.gemChest);
});

Armor.onHurt({id: ItemID.gemLegg, slot: 2}, function (a, v, s){
  Armor.preventDamaging(ItemID.gemLegg);
});

Armor.onHurt({id: ItemID.gemBoots, slot: 3}, function (a, v, s){
  Armor.preventDamaging(ItemID.gemBoots);
});


Callback.addCallback("tick", function (){
  if(
    Entity.getArmorSlot(Player.get(), 0).id == ItemID.gemHelm &&
    Entity.getArmorSlot(Player.get(), 1).id == ItemID.gemChest &&
    Entity.getArmorSlot(Player.get(), 2).id == ItemID.gemLegg &&
    Entity.getArmorSlot(Player.get(), 3).id == ItemID.gemBoots
  ){
    Player.setHunger(20);
  }
});