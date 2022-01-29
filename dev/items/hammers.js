const dirtBlocksDrop = {
  "2": 3, "3": 3, "60": 3, "61": 3, "198": 3, "243": 3, "110": 3
};

function getBlockDrop(coords, id, data, level){
	 let dropFunc = Block.dropFunctions[id];
	 if(dropFunc)
	 	return dropFunc(coords, id, data, level, {});
	 if(dirtBlocksDrop[id])
	 	return [[dirtBlocksDrop[id], 1, 0]];
	 return [[id, 1, data]];
}

var UNBREAKABLE = {0: true, 7: true, 8: true, 9: true, 10: true, 11: true};

IDRegistry.genItemID("dmHammer");
Item.createItem("dmHammer", "Dark matter hammer", {name: "dm_hammer", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dmHammer, "dm", ToolType.pickaxe);
INFINITY_TOOL.push(ItemID.dmHammer);

Item.registerUseFunction("dmHammer", function(coords, item, block, player){
	let region = BlockSource.getDefaultForActor(player);
  let x=coords.x; y=coords.y; z=coords.z;
  let rr = 2;
  if(!Entity.getSneaking(player))
    for(xx = -rr; xx <= rr; xx++)
      for(yy = -rr; yy <= rr; yy++)
        for(zz = -rr; zz <= rr; zz++){
          let block = region.getBlock(x + xx, y + yy, z + zz);
          if(!UNBREAKABLE[block.id]){
          	let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
          	if(drop){
          		for(i in drop){
          			try{
          				new PlayerActor(player).addItemToInventory(drop[i][0], drop[i][1]||1, drop[i][2] || 0, null, true);
          			}catch(e){}
          		}
          	}
          	region.setBlock(x + xx, y + yy, z + zz, 0);
          }
        }
});


IDRegistry.genItemID("rmHammer");
Item.createItem("rmHammer", "Red matter hammer", {name: "rm_hammer", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.rmHammer, "rm", ToolType.pickaxe);
INFINITY_TOOL.push(ItemID.rmHammer);

Item.registerUseFunction("rmHammer", function(coords, item, block, player){
  let region = BlockSource.getDefaultForActor(player);
  let x=coords.x; y=coords.y; z=coords.z;
  let rr = 4;
  if(!Entity.getSneaking(player))
    for(xx = -rr; xx <= rr; xx++)
      for(yy = -rr; yy <= rr; yy++)
        for(zz = -rr; zz <= rr; zz++){
          let block = region.getBlock(x + xx, y + yy, z + zz);
          if(!UNBREAKABLE[block.id]){
          	let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
          	if(drop){
          		for(i in drop){
          			try{
          				new PlayerActor(player).addItemToInventory(drop[i][0], drop[i][1]||1, drop[i][2] || 0, null, true);
          			}catch(e){}
          		}
          	}
          	region.setBlock(x + xx, y + yy, z + zz, 0);
          }
        }
});