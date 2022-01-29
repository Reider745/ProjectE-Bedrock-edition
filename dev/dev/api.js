const System = {
    values: {},
    stars: {},
    setStar: function(id, storage) {
        this.stars[id] = storage;
        Item.setMaxDamage(id, storage);

        Callback.addCallback("PreLoaded", function() {
            Item.addToCreative(id, 1, storage);
        });

        Item.registerNameOverrideFunction(id, function(item, name) {
            return name + "\n§7EMC: " + (Item.getMaxDamage(item.id) - item.data) + "/" + Item.getMaxDamage(item.id);
        });
    },
	
    getStarMaxCharge: function(id) {
        return this.stars[id];
    },
	
    isStar: function(id) {
        if (this.stars[id]) return true;
        return false;
    },
	
    chargeStar: function(cont, data) {
        star = cont.getSlot("charge");
        if (this.isStar(star.id)) {
            transfer = Math.min(32, data.emc);
            if (star.data - transfer >= 0 && data.emc - transfer >= 0) {
                star.data -= transfer;
                data.emc -= transfer;
            }
        }
    },
	
    getValue: function(id, data) {
        if (!data) data = 0;
        return this.values[id + ":" + data]
    },
	
    setValue: function(id, data, value) {
        if (!id) return;

        this.values[id + ":" + data] = value;
        Item.registerNameOverrideFunction(id, function(item, name) {
            if (!Entity.getSneaking(Player.get())) {
                let stack_emc = "";
                let info = "";
                if (Item.getName(280) == "Палка") {
                    info = "Присядьте, чтобы скрыть информацию о EMC";
                } else info = "Sneak to hide EMC info";
                if (item.count > 1) stack_emc = "\nStack EMC: " + (value * item.count);
                return name + "\n§eEMC: " + value + stack_emc + ChatColor.GRAY + "\n" + info;
            }
        });
    },
	
    collector: {},
	
    regRecipe: function(arg) {
        this.collector[arg.ing.id + ":" + arg.ing.data] = arg.out.id;
    },
	
    getRecipe: function(id, data) {
        return this.collector[id + ":" + data];
    }
};

const dirs = [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
 ];


Callback.addCallback("PostLoaded", function() {
    System.regRecipe({
        ing: {
            id: 263,
            data: 1
        },
        out: {
            id: 331
        }
    });
	
    System.regRecipe({
        ing: {
            id: 331,
            data: 0
        },
        out: {
            id: 263
        }
    });
	
    System.regRecipe({
        ing: {
            id: 263,
            data: 0
        },
        out: {
            id: 289
        }
    });
	
    System.regRecipe({
        ing: {
            id: 289,
            data: 0
        },
        out: {
            id: 348
        }
    });
	
    System.regRecipe({
        ing: {
            id: 348,
            data: 0
        },
        out: {
            id: ItemID.fuelAlchemical
        }
    });
	
    System.regRecipe({
        ing: {
            id: ItemID.fuelAlchemical,
            data: 0
        },
        out: {
            id: 152
        }
    });
	
    System.regRecipe({
        ing: {
            id: 152,
            data: 0
        },
        out: {
            id: 377
        }
    });
	
    System.regRecipe({
        ing: {
            id: 377,
            data: 0
        },
        out: {
            id: 89
        }
    });
	
    System.regRecipe({
        ing: {
            id: 89,
            data: 0
        },
        out: {
            id: ItemID.fuelAlchemical
        }
    });
	
    System.regRecipe({
        ing: {
            id: ItemID.fuelAlchemical,
            data: 0
        },
        out: {
            id: BlockID.blockAlchemicalFuel
        }
    });
	
    System.regRecipe({
        ing: {
            id: BlockID.blockAlchemicalFuel,
            data: 0
        },
        out: {
            id: ItemID.fuelMobius
        }
    });
	
    System.regRecipe({
        ing: {
            id: ItemID.fuelMobius,
            data: 0
        },
        out: {
            id: BlockID.blockMobiusFuel
        }
    });
	
    System.regRecipe({
        ing: {
            id: BlockID.blockMobiusFuel,
            data: 0
        },
        out: {
            id: BlockID.blockAstralFuel
        }
    });
});

var THINGS_FROM_MODS = [];
var second_define = false;
var define_tries = 0;
const Color = android.graphics.Color;

for (let i in ItemID) THINGS_FROM_MODS.push(ItemID[i]);
for (let i in BlockID) THINGS_FROM_MODS.push(BlockID[i]);

function DefineEmcFromRecipe() {
    if (__config__.getBool("auto_emc_defining")) {
        for (t in THINGS_FROM_MODS) {
            var array = Recipes.getWorkbenchRecipesByResult(THINGS_FROM_MODS[t], -1, 0);
            for (i = 0; i < array.size(); i++) {

                var arr = array.toArray()[i];

                let ing = arr.getSortedEntries();
                let res = arr.result;
                var value = 0;

                if (!System.getValue(res.id, res.data) && !arr.getCallback()) {
                    for (s = 0; s < 9; s++) {
                        try {
                            if (ing[s].id) {
                                value += System.getValue(ing[s].id, ing[s].data);
                            }
                        } catch (e) {}
                    }
					
                    if (value > 0) {
                        System.setValue(res.id, res.data, Math.round(value / res.count));
                    }
                }
            }
        }
    }
}

Callback.addCallback("LevelLoaded", function() {
    DefineEmcFromRecipe();
});

Callback.addCallback("LevelSelected", function() {
    DefineEmcFromRecipe();
});

System.setValue(1, 0, 1);
System.setValue(2, 0, 1);
System.setValue(3, 0, 1);
System.setValue(4, 0, 1);
System.setValue(5, 0, 8);
System.setValue(5, 1, 8);
System.setValue(5, 2, 8);
System.setValue(5, 3, 8);
System.setValue(6, 0, 32);
System.setValue(6, 1, 32);
System.setValue(6, 2, 32);
System.setValue(6, 3, 32);
System.setValue(12, 0, 1);
System.setValue(13, 0, 4);
System.setValue(17, 0, 32);
System.setValue(17, 1, 32);
System.setValue(17, 2, 32);
System.setValue(17, 3, 32);
System.setValue(18, 0, 1);
System.setValue(18, 1, 1);
System.setValue(18, 2, 1);
System.setValue(18, 3, 1);
System.setValue(20, 0, 1);
System.setValue(22, 0, 7776);
System.setValue(23, 0, 119);
System.setValue(24, 0, 4);
System.setValue(24, 1, 4);
System.setValue(24, 2, 4);
System.setValue(25, 0, 128);
System.setValue(27, 0, 2059);
System.setValue(28, 0, 267);
System.setValue(29, 0, 380);
System.setValue(30, 0, 12);
System.setValue(31, 0, 1);
System.setValue(31, 1, 1);
System.setValue(31, 2, 1);
System.setValue(31, 3, 1);
System.setValue(32, 0, 1);
System.setValue(33, 0, 348);
System.setValue(35, 0, 48);
System.setValue(35, 1, 64);
System.setValue(35, 2, 64);
System.setValue(35, 3, 64);
System.setValue(35, 4, 64);
System.setValue(35, 5, 76);
System.setValue(35, 6, 64);
System.setValue(35, 7, 80);
System.setValue(35, 8, 64);
System.setValue(35, 9, 484);
System.setValue(35, 10, 488);
System.setValue(35, 11, 912);
System.setValue(35, 12, 176);
System.setValue(35, 13, 56);
System.setValue(35, 14, 64);
System.setValue(35, 15, 64);
System.setValue(37, 0, 16);
System.setValue(38, 0, 16);
System.setValue(39, 0, 32);
System.setValue(40, 0, 32);
System.setValue(41, 0, 18432);
System.setValue(42, 0, 2304);
System.setValue(44, 1, 2);
System.setValue(44, 4, 32);
System.setValue(44, 6, 2);
System.setValue(44, 7, 512);
System.setValue(45, 0, 64);
System.setValue(46, 0, 964);
System.setValue(47, 0, 528);
System.setValue(48, 0, 2);
System.setValue(49, 0, 64);
System.setValue(50, 0, 9);
System.setValue(53, 0, 12);
System.setValue(54, 0, 64);
System.setValue(57, 0, 73728);
System.setValue(58, 0, 32);
System.setValue(61, 0, 8);
System.setValue(65, 0, 9);
System.setValue(66, 0, 96);
System.setValue(67, 0, 1);
System.setValue(69, 0, 5);
System.setValue(70, 0, 2);
System.setValue(72, 0, 16);
System.setValue(76, 0, 68);
System.setValue(77, 0, 1);
System.setValue(79, 0, 1);
System.setValue(80, 0, 1);
System.setValue(81, 0, 8);
System.setValue(82, 0, 64);
System.setValue(84, 0, 8256);
System.setValue(85, 0, 12);
System.setValue(86, 0, 144);
System.setValue(87, 0, 1);
System.setValue(88, 0, 49);
System.setValue(89, 0, 1536);
System.setValue(91, 0, 153);
System.setValue(96, 0, 24);
System.setValue(99, 0, 1);
System.setValue(100, 0, 1);
System.setValue(101, 0, 96);
System.setValue(103, 0, 144);
System.setValue(106, 0, 8);
System.setValue(107, 0, 32);
System.setValue(108, 0, 96);
System.setValue(109, 0, 1);
System.setValue(110, 0, 2);
System.setValue(112, 0, 4);
System.setValue(113, 0, 4);
System.setValue(114, 0, 6);
System.setValue(116, 0, 16800);
System.setValue(121, 0, 1);
System.setValue(123, 0, 1792);
System.setValue(124, 0, 1792);
System.setValue(126, 0, 4);
System.setValue(126, 1, 4);
System.setValue(126, 2, 4);
System.setValue(126, 3, 4);
System.setValue(128, 0, 6);
System.setValue(130, 0, 2304);
System.setValue(131, 0, 134);
System.setValue(133, 0, 147456);
System.setValue(134, 0, 12);
System.setValue(135, 0, 12);
System.setValue(136, 0, 12);
System.setValue(138, 0, 139461);
System.setValue(139, 0, 1);
System.setValue(139, 1, 2);
System.setValue(143, 0, 8);
System.setValue(145, 0, 7936);
System.setValue(146, 0, 198);
System.setValue(147, 0, 4096);
System.setValue(148, 0, 512);
System.setValue(151, 0, 783);
System.setValue(152, 0, 576);
System.setValue(154, 0, 1344);
System.setValue(155, 0, 1024);
System.setValue(155, 1, 1024);
System.setValue(155, 2, 1024);
System.setValue(156, 0, 1536);
System.setValue(157, 0, 268);
System.setValue(158, 0, 71);
System.setValue(159, 0, 64);
System.setValue(159, 1, 64);
System.setValue(159, 2, 64);
System.setValue(159, 3, 64);
System.setValue(159, 4, 64);
System.setValue(159, 5, 64);
System.setValue(159, 6, 64);
System.setValue(159, 7, 64);
System.setValue(159, 8, 64);
System.setValue(159, 9, 64);
System.setValue(159, 10, 64);
System.setValue(159, 11, 64);
System.setValue(159, 12, 64);
System.setValue(159, 13, 64);
System.setValue(159, 14, 64);
System.setValue(159, 15, 64);
System.setValue(170, 0, 216);
System.setValue(171, 0, 32);
System.setValue(171, 1, 42);
System.setValue(171, 2, 42);
System.setValue(171, 3, 42);
System.setValue(171, 4, 42);
System.setValue(171, 5, 50);
System.setValue(171, 6, 42);
System.setValue(171, 7, 53);
System.setValue(171, 8, 42);
System.setValue(171, 9, 322);
System.setValue(171, 10, 325);
System.setValue(171, 11, 608);
System.setValue(171, 12, 117);
System.setValue(171, 13, 37);
System.setValue(171, 14, 42);
System.setValue(171, 15, 42);
System.setValue(172, 0, 64);
System.setValue(173, 0, 1152);
System.setValue(256, 0, 264);
System.setValue(257, 0, 776);
System.setValue(258, 0, 776);
System.setValue(259, 0, 260);
System.setValue(260, 0, 128);
System.setValue(261, 0, 48);
System.setValue(262, 0, 14);
System.setValue(263, 0, 128);
System.setValue(263, 1, 32);
System.setValue(264, 0, 8192);
System.setValue(265, 0, 256);
System.setValue(266, 0, 2048);
System.setValue(267, 0, 516);
System.setValue(268, 0, 20);
System.setValue(269, 0, 16);
System.setValue(270, 0, 32);
System.setValue(271, 0, 32);
System.setValue(272, 0, 6);
System.setValue(273, 0, 9);
System.setValue(274, 0, 11);
System.setValue(275, 0, 11);
System.setValue(276, 0, 16388);
System.setValue(277, 0, 8200);
System.setValue(278, 0, 24854);
System.setValue(279, 0, 24854);
System.setValue(280, 0, 4);
System.setValue(281, 0, 6);
System.setValue(282, 0, 70);
System.setValue(283, 0, 4100);
System.setValue(284, 0, 2056);
System.setValue(285, 0, 6152);
System.setValue(286, 0, 6152);
System.setValue(287, 0, 12);
System.setValue(288, 0, 48);
System.setValue(289, 0, 192);
System.setValue(290, 0, 24);
System.setValue(291, 0, 10);
System.setValue(292, 0, 520);
System.setValue(293, 0, 16392);
System.setValue(294, 0, 4104);
System.setValue(295, 0, 16);
System.setValue(296, 0, 24);
System.setValue(297, 0, 72);
System.setValue(298, 0, 320);
System.setValue(299, 0, 512);
System.setValue(300, 0, 448);
System.setValue(301, 0, 256);
System.setValue(306, 0, 1280);
System.setValue(307, 0, 2048);
System.setValue(308, 0, 1792);
System.setValue(309, 0, 1024);
System.setValue(310, 0, 40960);
System.setValue(311, 0, 65536);
System.setValue(312, 0, 57344);
System.setValue(313, 0, 32768);
System.setValue(314, 0, 10240);
System.setValue(315, 0, 16384);
System.setValue(316, 0, 14336);
System.setValue(317, 0, 8192);
System.setValue(318, 0, 4);
System.setValue(319, 0, 64);
System.setValue(320, 0, 64);
System.setValue(321, 0, 80);
System.setValue(322, 0, 16512);
System.setValue(322, 1, 147584);
System.setValue(323, 0, 17);
System.setValue(324, 0, 48);
System.setValue(325, 0, 768);
System.setValue(325, 8, 768);
System.setValue(325, 11, 832);
System.setValue(328, 0, 1280);
System.setValue(329, 0, 192);
System.setValue(330, 0, 1536);
System.setValue(331, 0, 64);
System.setValue(332, 0, 1);
System.setValue(333, 0, 40);
System.setValue(334, 0, 64);
System.setValue(335, 0, 784);
System.setValue(336, 0, 16);
System.setValue(337, 0, 16);
System.setValue(338, 0, 32);
System.setValue(339, 0, 32);
System.setValue(340, 0, 160);
System.setValue(341, 0, 32);
System.setValue(342, 0, 1344);
System.setValue(343, 0, 1288);
System.setValue(344, 0, 32);
System.setValue(345, 0, 1088);
System.setValue(346, 0, 36);
System.setValue(347, 0, 8256);
System.setValue(348, 0, 384);
System.setValue(349, 0, 64);
System.setValue(350, 0, 64);
System.setValue(351, 0, 16);
System.setValue(351, 1, 16);
System.setValue(351, 2, 8);
System.setValue(351, 3, 128);
System.setValue(351, 4, 864);
System.setValue(351, 5, 440);
System.setValue(351, 6, 436);
System.setValue(351, 7, 16);
System.setValue(351, 8, 32);
System.setValue(351, 9, 16);
System.setValue(351, 10, 28);
System.setValue(351, 11, 16);
System.setValue(351, 12, 16);
System.setValue(351, 13, 16);
System.setValue(351, 14, 16);
System.setValue(351, 15, 48);
System.setValue(352, 0, 144);
System.setValue(353, 0, 32);
System.setValue(354, 0, 216);
System.setValue(355, 0, 168);
System.setValue(356, 0, 203);
System.setValue(357, 0, 2);
System.setValue(359, 0, 512);
System.setValue(360, 0, 16);
System.setValue(361, 0, 36);
System.setValue(362, 0, 16);
System.setValue(363, 0, 64);
System.setValue(364, 0, 64);
System.setValue(365, 0, 64);
System.setValue(366, 0, 64);
System.setValue(367, 0, 32);
System.setValue(368, 0, 1024);
System.setValue(369, 0, 1536);
System.setValue(370, 0, 4096);
System.setValue(371, 0, 227);
System.setValue(372, 0, 24);
System.setValue(373, 0, 1);
System.setValue(374, 0, 1);
System.setValue(375, 0, 128);
System.setValue(376, 0, 192);
System.setValue(377, 0, 768);
System.setValue(378, 0, 800);
System.setValue(379, 0, 1539);
System.setValue(380, 0, 1792);
System.setValue(381, 0, 1792);
System.setValue(382, 0, 1832);
System.setValue(385, 0, 330);
System.setValue(386, 0, 224);
System.setValue(388, 0, 16384);
System.setValue(389, 0, 96);
System.setValue(390, 0, 48);
System.setValue(391, 0, 64);
System.setValue(392, 0, 64);
System.setValue(393, 0, 64);
System.setValue(394, 0, 64);
System.setValue(395, 0, 1344);
System.setValue(396, 0, 1880);
System.setValue(398, 0, 100);
System.setValue(399, 0, 139264);
System.setValue(400, 0, 208);
System.setValue(404, 0, 463);
System.setValue(405, 0, 1);
System.setValue(406, 0, 256);
System.setValue(407, 0, 2244);
System.setValue(408, 0, 2624);
System.setValue(417, 0, 2048);
System.setValue(418, 0, 16384);
System.setValue(419, 0, 40960);
System.setValue(420, 0, 40);
//MOD ITEMS
Callback.addCallback("PostLoaded", function() {
    System.setValue(ItemID.philosophersStone, 0, 9984);
    System.setValue(BlockID.antimatterRelay3, 0, 681281);
    System.setValue(BlockID.antimatterRelay2, 0, 213889);
    System.setValue(BlockID.antimatterRelay1, 0, 74177);
    System.setValue(BlockID.energyCollector1, 0, 82953);
    System.setValue(BlockID.energyCollector2, 0, 232969);
    System.setValue(BlockID.energyCollector3, 0, 710665);
    System.setValue(BlockID.energyCondenser1, 0, 42011);
    System.setValue(BlockID.transmutationTablet, 0, 260);
    System.setValue(ItemID.covDust1, 0, 1);
    System.setValue(ItemID.covDust2, 0, 8);
    System.setValue(ItemID.covDust3, 0, 208);
    System.setValue(ItemID.fuelAlchemical, 0, 512);
    System.setValue(ItemID.fuelMobius, 0, 2048);
    System.setValue(ItemID.fuelAstral, 0, 8192);
    System.setValue(ItemID.darkMatter, 0, 139264);
    System.setValue(ItemID.redMatter, 0, 466944);
    System.setValue(BlockID.dmBlock, 0, 139264 * 4);
    System.setValue(BlockID.rmBlock, 0, 466944 * 4);
    System.setValue(BlockID.fuelAlchemicalChest, 0, 8987);
    System.setValue(ItemID.kleinStar1, 0, 24576);
    System.setValue(ItemID.kleinStar2, 0, 98304);
    System.setValue(ItemID.kleinStar3, 0, 393216);
    System.setValue(ItemID.kleinStar4, 0, 1572864);
    System.setValue(ItemID.kleinStar5, 0, 6291456);
    System.setValue(ItemID.kleinStar6, 0, 25165824);
    System.setValue(ItemID.ectoplasm, 0, 32);
    System.setValue(ItemID.ironBand, 0, 2048);

    System.setValue(ItemID.ingotCopper, 0, 85);
    System.setValue(ItemID.ingotTin, 0, 128);
    System.setValue(ItemID.ingotLead, 0, 512);
    System.setValue(ItemID.ingotSilver, 0, 512);
    System.setValue(ItemID.latex, 0, 32);
    System.setValue(ItemID.rubber, 0, 32);
    System.setValue(ItemID.plateIron, 0, 256);
    System.setValue(ItemID.plateGold, 0, 2048);
    System.setValue(ItemID.plateCopper, 0, 85);
    System.setValue(ItemID.plateTin, 0, 128);
    System.setValue(ItemID.plateLead, 0, 512);
});

ModAPI.registerAPI("EquivalentAPI", {
    System: System,
    Rings: Rings,
    execute: function(c) {
        return eval(c);
    }
});