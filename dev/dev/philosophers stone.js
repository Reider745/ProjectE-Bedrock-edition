function addPhilosophersStoneRecipe(item, input){
  let ingridients = [];
  for(i = 0; i < input.count; i++){
    ingridients.push({id: input.id, data: input.data});
  }
  
  Recipes.addCraftToolRecipeItem(
    {id: item.id, count: item.count, data: item.data}, ingridients, ItemID.philosophersStone
  );
}

Callback.addCallback("PostLoaded", function(){
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



Item.registerUseFunction("philosophersStone", function(crd, item, block){
  if(Entity.getSneaking(Player.get())){
    switch(block.id){
      case 1:
        World.setBlock(crd.x,crd.y,crd.z,2);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 2:
        World.setBlock(crd.x,crd.y,crd.z,4);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 4:
        World.setBlock(crd.x,crd.y,crd.z,2);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 12:
        World.setBlock(crd.x,crd.y,crd.z,4);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 24:
        World.setBlock(crd.x,crd.y,crd.z,13);
        PlaySoundFile("petransmute.ogg");
      break;
    }
  } else {
    switch(block.id){
      case 1:
        World.setBlock(crd.x,crd.y,crd.z,4);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 4:
        World.setBlock(crd.x,crd.y,crd.z,1);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 2:
        World.setBlock(crd.x,crd.y,crd.z,12);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 12:
        World.setBlock(crd.x,crd.y,crd.z,2);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 13:
        World.setBlock(crd.x,crd.y,crd.z,24);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 87:
        World.setBlock(crd.x,crd.y,crd.z,4);
        PlaySoundFile("petransmute.ogg");
      break;
    }
  }
});

//mobs

Callback.addCallback("PlayerAttack", function(player,victim){
  let item = Player.getCarriedItem();
  
  if(item.id==ItemID.philosophersStone){
  Game.prevent();
    for(let i = 0; i < 36; i++){
      if(Player.getInventorySlot(i).id==348){
        Player.setInventorySlot(i, 348, Player.getInventorySlot(i).count-1, 0);
        if(!Player.getInventorySlot(i).count) Player.setInventorySlot(i, 0, 0, 0);
        for(h in evilList){
          if(Entity.getType(victim)==evilList[h]){
            Entity.spawn(Entity.getPosition(victim).x, Entity.getPosition(victim).y, Entity.getPosition(victim).z, choose(evilList));
            Entity.remove(victim);
            PlaySoundFile("phiball.ogg");
          }
        }
        for(a in friendlyList){
          if(Entity.getType(victim)==friendlyList[a]){
            Entity.spawn(Entity.getPosition(victim).x, Entity.getPosition(victim).y, Entity.getPosition(victim).z, choose(friendlyList));
            Entity.remove(victim);
            PlaySoundFile("phiball.ogg");
          }
        }
      }
      break;
    }
  }
});