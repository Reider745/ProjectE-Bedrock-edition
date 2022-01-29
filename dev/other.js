Callback.addCallback("PostLoaded", function () {

	Item.addCreativeGroup("kleinstars", Translation.translate("Klein Stars"), [
		ItemID.kleinStar1,
		ItemID.kleinStar2,
		ItemID.kleinStar3,
		ItemID.kleinStar4,
		ItemID.kleinStar5,
		ItemID.kleinStar6
	]);
	
	Item.addCreativeGroup("emcrelays", Translation.translate("Anti-matter Relays"), [
		BlockID.antimatterRelay1,
		BlockID.antimatterRelay2,
		BlockID.antimatterRelay3
	]);
	
	Item.addCreativeGroup("emccollectors", Translation.translate("EMC Collectors"), [
		BlockID.energyCollector1,
		BlockID.energyCollector2,
		BlockID.energyCollector3
	]);
	
	Item.addCreativeGroup("ringsamulets", Translation.translate("Rings and Amulets"), [
		ItemID.ironBand,
		ItemID.watchTime,
		ItemID.soulStone,
	]);
});