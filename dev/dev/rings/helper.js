var Rings = {
  pedestal: {},
  inventory: {},
  activateadble: {},
  addRingFunction: function(ring, func){
    this.inventory[ring] = func;
  },
  addPedestalFunction: function(ring, func){
    this.pedestal[ring] = func;
  },
  getPedestalFunction: function(ring){
    return this.pedestal[ring]
  },
  getRingFunction: function(ring){
    return {
      inv: this.inventory[ring]
    };
  },
  get: function(id){
    for(i = 0; i <= 36; i ++){
      if(Player.getInventorySlot(i).id == id){
        obj = Player.getInventorySlot(i);
        return obj;
      }
    }
  },
  getHotbar: function(id){
    for(i = 0; i <= 9; i ++){
      if(Player.getInventorySlot(i).id == id){
        obj = Player.getInventorySlot(i);
        return obj;
      }
    }
  }
};

Rings.activateRing = function(a,b,sound){
  Rings.activateable = {a: b};
  Callback.addCallback("ItemUse",function(){
  item = Player.getCarriedItem();
    if(item.id==a){
      Player.setCarriedItem(b,1,0);
      if(sound) PlaySoundFile("pecharge.ogg");
    }
    if(item.id==b){
      Player.setCarriedItem(a,1,0);
      if(sound) PlaySoundFile("peuncharge.ogg");
    }
  });
};