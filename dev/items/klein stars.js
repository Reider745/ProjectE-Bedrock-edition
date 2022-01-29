IDRegistry.genItemID("kleinStar1");
Item.createItem("kleinStar1", "Klein star I", {name: "klein_star", meta: 0}, {stack: 1});
Core.registerStar(ItemID.kleinStar1, 16000);

IDRegistry.genItemID("kleinStar2");
Item.createItem("kleinStar2", "Klein star II", {name: "klein_star", meta: 1}, {stack: 1});
Core.registerStar(ItemID.kleinStar2, 32000);

IDRegistry.genItemID("kleinStar3");
Item.createItem("kleinStar3", "Klein star III", {name: "klein_star", meta: 2}, {stack: 1});
Core.registerStar(ItemID.kleinStar3, 64000);

IDRegistry.genItemID("kleinStar4");
Item.createItem("kleinStar4", "Klein star VI", {name: "klein_star", meta: 3}, {stack: 1});
Core.registerStar(ItemID.kleinStar4, 128000);

IDRegistry.genItemID("kleinStar5");
Item.createItem("kleinStar5", "Klein star V", {name: "klein_star", meta: 4}, {stack: 1});
Core.registerStar(ItemID.kleinStar5, 256000);

IDRegistry.genItemID("kleinStar6");
Item.createItem("kleinStar6", "Klein star VI", {name: "klein_star", meta: 5}, {stack: 1});
Core.registerStar(ItemID.kleinStar6, 512000);
/*Callback.addCallback("PostLoaded", function (){

Recipes.addShaped({id: ItemID.kleinStar1, count: 1, data: 16000}, 

["aaa", 

 "aba",

 "aaa"],

["a", ItemID.fuelMobius, 0, "b", 264, 0]);



Recipes.addShaped({id: ItemID.kleinStar2, count: 1, data: 32000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar1, -1]);



Recipes.addShaped({id: ItemID.kleinStar3, count: 1, data: 64000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar2, -1]);



Recipes.addShaped({id: ItemID.kleinStar4, count: 1, data: 128000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar3, -1]);



Recipes.addShaped({id: ItemID.kleinStar5, count: 1, data: 256000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar4, -1]);



Recipes.addShaped({id: ItemID.kleinStar6, count: 1, data: 512000}, 

["aa", 

 "aa"],

["a", ItemID.kleinStar5, -1]);



});*/