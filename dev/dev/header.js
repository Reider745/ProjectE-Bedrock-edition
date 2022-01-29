//ProjectE by toncho_ (c) 2018 do not distribute.

importLib("SoundAPI", "*");
importLib("ToolType", "*");

var fallVelocity = -0.0785;

var dropItem = ModAPI.requireGlobal("Level.dropItem");
World.getGameMode = ModAPI.requireGlobal("Level.getGameMode");

Recipes.addCraftToolRecipeItem = function(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
	   for(var i in field){
			   if(field[i].id!=tool){
				    api.decreaseFieldSlot(i);
			   }
		  }
	 });
};

_recipesAdd = Recipes.addShaped
Recipes.addShaped = function (a, b, c, d) {
	Logger.Log("Adding recipe for " + Item.getName(a.id, a.data));
	_recipesAdd(a, b, c, d);
}

//friendly
var friendlyList = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27];

//evil
var evilList = [Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];

//all
var allMobs = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27, Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];


ToolType.pickaxe = {
	 isWeapon: false,
  	damage: 0,
	 baseDamage: 0,
	 blockTypes: ["stone"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};

ToolType.axe = {
	 isWeapon: false,
  	damage: 0,
	 baseDamage: 0,
	 blockTypes: ["wood"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};

ToolType.shovel = {
	 isWeapon: false,
  	damage: 0,
	 baseDamage: 0,
	 blockTypes: ["dirt"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};

ToolType.sword = {
	 isWeapon: true,
  	damage: 3,
	 baseDamage: 4,
	 blockTypes: ["fibre","plant"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};

function rnd(min, max){
	 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choose(arr){
  let res = arr[rnd(0, arr.length)];
  if(res){
    return res;
  } return arr[0];
}

Armor.onHurt = function(armor, func){
  Callback.addCallback("EntityHurt", function(a, v, h){
    let slot = Entity.getArmorSlot(Player.get(), armor.slot);
    if(slot.id == armor.id){
      if(v == Player.get()) func(a, v, slot, h);
    }
  });
}

Armor.onTick = function(armor, func){
  Callback.addCallback("tick", function(){
    let slot = Entity.getArmorSlot(Player.get(), armor.slot);
    if(slot.id == armor.id){
      func(slot);
    }
  });
}

function SetDescription(id, string){
  Item.registerNameOverrideFunction(id, function(item, name){
    return name+"\n"+string;
  });
}


Translation.addTranslation("Philosopher's stone", {ru: "Философский камень"});
Translation.addTranslation("Alchemical fuel", {ru: "Алхимический уголь"});
Translation.addTranslation("Mobius fuel", {ru: "Топливо Мобиуса"});
Translation.addTranslation("Astral fuel", {ru: "Астральное топливо"});
Translation.addTranslation("Dark matter", {ru: "Тёмная материя"});
Translation.addTranslation("Red matter", {ru: "Красная материя"});
Translation.addTranslation("Klein star I", {ru: "Звезда Кляйна I"});
Translation.addTranslation("Klein star II", {ru: "Звезда Кляйна II"});
Translation.addTranslation("Klein star III", {ru: "Звезда Кляйна III"});
Translation.addTranslation("Klein star IV", {ru: "Звезда Кляйна IV"});
Translation.addTranslation("Klein star V", {ru: "Звезда Кляйна Омега"});
Translation.addTranslation("Klein star VI", {ru: "Звезда Кляйна Сфера"});
Translation.addTranslation("Dark matter helmet", {ru: "Тёмный шлем"});
Translation.addTranslation("Dark matter chestplate", {ru: "Тёмный нагрудник"});
Translation.addTranslation("Dark matter leggings", {ru: "Тёмные поножи"});
Translation.addTranslation("Dark matter boots", {ru: "Тёмные ботинки"});
Translation.addTranslation("Red matter helmet", {ru: "Красный шлем"});
Translation.addTranslation("Red matter chestplate", {ru: "Красный нагрудник"});
Translation.addTranslation("Red matter leggings", {ru: "Красные поножи"});
Translation.addTranslation("Red matter boots", {ru: "Красные ботинки"});
Translation.addTranslation("Dark matter pickaxe", {ru: "Тёмная кирка"});
Translation.addTranslation("Dark matter axe", {ru: "Тёмный топор"});
Translation.addTranslation("Dark matter shovel", {ru: "Тёмная лопата"});
Translation.addTranslation("Dark matter sword", {ru: "Тёмный меч"});
Translation.addTranslation("Dark matter hammer", {ru: "Тёмный молот"});
Translation.addTranslation("Red matter pickaxe", {ru: "Красная кирка"});
Translation.addTranslation("Red matter axe", {ru: "Красный топор"});
Translation.addTranslation("Red matter shovel", {ru: "Красная лопата"});
Translation.addTranslation("Red matter sword", {ru: "Красный меч"});
Translation.addTranslation("Red matter hammer", {ru: "Красный молот"});
Translation.addTranslation("Anti-matter Relay I", {ru: "Анти-предметное реле MK I"});
Translation.addTranslation("Anti-matter Relay II", {ru: "Анти-предметное реле MK II"});
Translation.addTranslation("Anti-matter Relay III", {ru: "Анти-предметное реле MK III"});
Translation.addTranslation("Energy Collector I", {ru: "Сборщик энергии MK I"});
Translation.addTranslation("Energy Collector II", {ru: "Сборщик энергии MK II"});
Translation.addTranslation("Energy Collector III", {ru: "Сборщик энергии MK III"});
Translation.addTranslation("Energy Condenser I", {ru: "Конденсатор энергии I"});
Translation.addTranslation("Energy Condenser II", {ru: "Конденсатор энергии II"});
Translation.addTranslation("Alchemical chest", {ru: "Алхимический сундук"});
Translation.addTranslation("Transmutation table", {ru: "Стол трансмутаций"});
Translation.addTranslation("Alchemical fuel block", {ru: "Блок Алхимического Угля"});
Translation.addTranslation("Mobius fuel block", {ru: "Блок Топлива Мобиуса"});
Translation.addTranslation("Aeternalis fuel block", {ru: "Блок Астрального Топлива"});
Translation.addTranslation("Dark matter block", {ru: "Блок тёмной материи"});
Translation.addTranslation("Red matter block", {ru: "Блок красной материи"});
Translation.addTranslation("Covalence dust Low", {ru: "Слабая ковалентная пыль"});
Translation.addTranslation("Covalence dust Medium", {ru: "Средняя ковалентная пыль"});
Translation.addTranslation("Covalence dust High", {ru: "Сильная ковалентная пыль"});
Translation.addTranslation("Alchemy Bag", {ru: "Алхимическая сумка"});
Translation.addTranslation("Alchemy bag", {ru: "Алхимическая сумка"});
Translation.addTranslation("Transmutation Table", {ru: "Стол трансмутаций"});
Translation.addTranslation("§bRed matter furnace", {ru: "§bПечь из красной материи"});
Translation.addTranslation("Dark matter furnace", {ru: "Печь из Темной материи"});
Translation.addTranslation("§bMatter pedestal", {ru: "§bПьедестал из темной материи"});
Translation.addTranslation("Transmute tablet", {ru: "Трансмутационный планшет"});
Translation.addTranslation("Red Matter Katar", {ru: "Красный катар"});
Translation.addTranslation("Red Matter Morning Star", {ru: "Красный моргенштерн"});
Translation.addTranslation("Void ring", {ru: "Кольцо чёрной дыры"});
Translation.addTranslation("Body stone", {ru: "Камень тела"});
Translation.addTranslation("Soul stone", {ru: "Камень души"});
Translation.addTranslation("Ring of harvest goodness", {ru: "Кольцо Богини урожая"});
Translation.addTranslation("Talisman of repair", {ru: "Талисман починки"});
Translation.addTranslation("Watch of flowing time", {ru: "Часы \"текучего\" времени"});
Translation.addTranslation("Ring of Zero", {ru: "Кольцо абсолютного нуля"});
Translation.addTranslation("Iron band", {ru: "Железное кольцо"});
Translation.addTranslation("Divining rod low", {ru: "Слабый Стержень поиска"});
Translation.addTranslation("Divining rod medium", {ru: "Средний Стержень поиска"});
Translation.addTranslation("Divining rod high", {ru: "Сильный Стержень поиска"});

Callback.addCallback("LevelLoaded", function (){
  if(!System.getValue(ItemID.harvestRing, 0)){
  	if(Item.getName(280) == "Палка"){
        Game.message(ChatColor.YELLOW+"<ProjectE> EMC Уствновилось не на все предметы. Введите в чат команду /projecte reload.")
  	} else Game.message(ChatColor.YELLOW+"<ProjectE> EMC calculated wrong. Type command /projecte reload.");
  }
});