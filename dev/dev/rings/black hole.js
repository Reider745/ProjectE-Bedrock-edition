IDRegistry.genItemID("ringBlackHoleInactive");
Item.createItem("ringBlackHoleInactive", "Void ring", {name: "ringBlackHole", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.ringBlackHoleInactive, count: 1, data: 0}, 
["sss", 
 "dbd",
 "sss"],
["b", ItemID.ironBand, 0, "d", ItemID.darkMatter, 0, "s", 287, 0]);
});

IDRegistry.genItemID("ringBlackHole");
Item.createItem("ringBlackHole", "Void ring", {name: "ringBlackHole", meta: 1}, {stack: 1, isTech: true});

SetDescription(ItemID.ringBlackHoleInactive, "§3Suck nearest items into your inventory.\n§4Inactive");
SetDescription(ItemID.ringBlackHole, "§3Suck nearest items into your inventory.\n§2Active");

Rings.activateRing(ItemID.ringBlackHoleInactive, ItemID.ringBlackHole, true);

Rings.addRingFunction(ItemID.ringBlackHole, function(){
  let player = Player.getPosition();
  let _item = Entity.getAllInRange({x: player.x, y: player.y, z: player.z}, 7, 64);
  
  for(i in _item){
    let item = _item[i];
    
    if(item){
      
    }
  }
});

function getEmptyContainerSlot(cont){
  if(!cont.tileEntity){
    for(i = 0; i <= cont.getSize(); i ++){
      return true;
      break;
    }
  }
  return false;
}

Rings.addPedestalFunction(ItemID.ringBlackHoleInactive, function(tile){
  var dirs = [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ];
  
  for(_d in dirs){
    let d = dirs[_d];
    let cont = World.getContainer(tile.x+d.x, tile.y+d.y, tile.z+d.z);
    if(cont && !cont.tileEntity){
      for(i = 0; i <= cont.getSize(); i ++){
        let _item = Entity.getAllInRange({x: tile.x, y: tile.y, z: tile.z}, 7, 64);
        for(i in _item){
          item = Entity.getDroppedItem(_item[i]);
          slot = cont.getSlot(i);
          if(!slot.id && item && getEmptyContainerSlot(cont)){
            slot.id = item.id;
            slot.count = item.count;
            slot.data = item.data;
            cont.setSlot(i, slot.id, slot.count, slot.data);
            Entity.remove(_item[i]);
            break
          } else if(slot.id == item.id && slot.count+item.count <= 64) {
            slot.count+=item.count;
            cont.setSlot(i, slot.id, slot.count, slot.data);
            Entity.remove(_item[i]);
            break
          }
        }
      }
    }
  }
});

Callback.addCallback("tick", function(){
  if(Rings.get(ItemID.ringBlackHole)){
    Rings.getRingFunction(ItemID.ringBlackHole).inv();
  }
});
