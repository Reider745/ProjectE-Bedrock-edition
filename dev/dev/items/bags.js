var BAG_CONTAINERS = {};


if(__config__.getBool("bags")){
  const group_array = [];
  Saver.addSavesScope("EE2Bags",
    function read(scope){
      if(scope && scope.cont){
	    BAG_CONTAINERS = scope.cont;
      } else {
  	for(i = 0; i <= 15; i ++){
	    BAG_CONTAINERS["bag"+i] = new UI.Container();
	  }
    }
  },
  function save(){
    return {
      cont: BAG_CONTAINERS
    };
  });
  
  function setupBag(index){
    IDRegistry.genItemID("alchemyBag"+index);
    Item.createItem("alchemyBag"+index, "Alchemy bag", {name: "alchemy_bag", meta: index}, {stack: 1});
  
    Callback.addCallback("ItemUse", function (c, i, b){
      if(i.id == ItemID["alchemyBag"+index]){
        BAG_CONTAINERS["bag"+index].openAs(alchChestUI);
      }
    });
  }
  
  for(let i = 0;i<=15;i++){
    setupBag(i);
	group_array.push(ItemID["alchemyBag"+i]);
  }
  
  Callback.addCallback("PostLoaded", function(){
    for(let i = 0;i<=15;i++){
    Recipes.addShaped({id: ItemID["alchemyBag"+i], count: 1, data: 0}, 
      ["mmm", 
       "aca",
       "aaa"],
      ["a", 35, i, "m", ItemID.covDust3, 0, "c", BlockID.alchChest, 0]);
    }
  });
  
  Item.addCreativeGroup("alchbags", Translation.translate("Alchemical Bags"), group_array);
}