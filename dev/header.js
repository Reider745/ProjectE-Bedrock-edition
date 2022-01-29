IMPORT("RenderAPI");
IMPORT("SoundLib");
IMPORT("SoundHelper");
IMPORT("StorageInterface");
IMPORT("ToolLib");

SoundManager.init(16);
SoundManager.setResourcePath(__dir__ + "/res/sounds/");

SoundManager.registerSound("pecharge", "pecharge.ogg", false);
SoundManager.registerSound("pedestruct", "pedestruct.ogg", false);
SoundManager.registerSound("peheal", "peheal.ogg", false);
SoundManager.registerSound("petransmute", "petransmute.ogg", false);
SoundManager.registerSound("peuncharge", "peuncharge.ogg", false);

let INFINITY_TOOL = [];

Callback.addCallback("DestroyBlock", function (coords, block, player){
	let item = Entity.getCarriedItem(player);
	if(INFINITY_TOOL.indexOf(item.id) != -1)
		Entity.setCarriedItem(player, item.id, item.count, 0, item.extra);
});
Callback.addCallback("PlayerAttack", function (player){
	let item = Entity.getCarriedItem(player);
	if(INFINITY_TOOL.indexOf(item.id) != -1)
		Entity.setCarriedItem(player, item.id, item.count, 0, item.extra);
});

Callback.addCallback("ItemUse", function(coords, i, block, isExter, player){
	let item = Entity.getCarriedItem(player);
	if(INFINITY_TOOL.indexOf(item.id) != -1)
		Entity.setCarriedItem(player, item.id, item.count, 0, item.extra);
});

ToolAPI.addToolMaterial("dm", {
	level: 5, 
	efficiency: 6, 
	damage: 12, 
	enchantability: 30,
	durability: 10000,
});
ToolAPI.addToolMaterial("rm", {
	level: 5, 
	efficiency: 8, 
	damage: 16, 
	enchantability: 30,
	durability: 10000
});

//friendly
var friendlyList = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27];

//evil
var evilList = [Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];

//all
var allMobs = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27, Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];
