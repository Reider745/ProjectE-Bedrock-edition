const dirtBlocksDrop = {
  "2": 3, "3": 3, "60": 3, "61": 3, "198": 3, "243": 3, "110": 3
};

function getBlockDrop(coords, id, data, level){
	 let dropFunc = Block.dropFunctions[id];
	 
	 if(dropFunc){
	   	return dropFunc(coords, id, data, level, {});
  	}
  	
  	if(dirtBlocksDrop[id]){
		  return [[dirtBlocksDrop[id], 1, 0]];
  	}
  	
  	return [[id, 1, data]];
}

var UNBREAKABLE = {0: true, 7: true, 8: true, 9: true, 10: true, 11: true};

IDRegistry.genItemID("dmHammer");
Item.createItem("dmHammer", "Dark matter hammer", {name: "dm_hammer", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dmHammer, "dm", ToolType.pickaxe);

Item.registerUseFunction("dmHammer", function(coords, item, block){
  let x=coords.x; y=coords.y; z=coords.z;
  let rr = 2;
  
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
	            } catch (e) { }
	          }
	        }
	        World.setBlock(x + xx, y + yy, z + zz, 0);
          }
        }
      }
    }
  }
});

IDRegistry.genItemID("rmHammer");
Item.createItem("rmHammer", "Red matter hammer", {name: "rm_hammer", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.rmHammer, "rm", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rmHammer, "rm", ToolType.sword);

Item.registerUseFunction("rmHammer", function(coords, item, block){
  let x=coords.x; y=coords.y; z=coords.z;
  let rr = 4;
  
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
});

Callback.addCallback("PostLoaded", function (){
	Recipes.addShaped({id: ItemID.dmHammer, count: 1, data: 0}, 
      ["mdm", 
       " d",
       " d"],
      ["m", ItemID.darkMatter, 0, "d", 264, 0]);
      
      Recipes.addShaped({id: ItemID.rmHammer, count: 1, data: 0}, 
      ["mhm", 
       " d",
       " d"],
      ["m", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "h", ItemID.dmHammer, 0]);
});