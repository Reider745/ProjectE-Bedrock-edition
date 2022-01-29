IDRegistry.genItemID("soulStone");
Item.createItem("soulStone", "Soul stone\n§3On pedestal: restores health to nearest player every 0.5 sec.", {name: "soulStone", meta: 0}, {stack: 1});

Pedestal.register(ItemID.soulStone, function(tile){
	let player = tile.data.player;
  if(World.getThreadTime()%10 == 0 && Entity.getHealth(player) < 20){
    let distance = Entity.getDistanceToCoords(player, {x: tile.x, y: tile.y, z: tile.z});
    if(distance <= 11)
    	Entity.setHealth(player, Entity.getHealth(player)+2);
  }
});