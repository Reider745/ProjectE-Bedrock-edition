/*
Автор: Reider ___
Внимание! Запрещено:
    1.Распространение библиотеки на сторонних источниках без указание ссылки на официальное сообщество
    2.Изменение кода
    3.Явное копирование кода

    Используя библиотеку вы автоматически соглашаетесь с этими правилами.
*/
LIBRARY({
	name: "SoundHelper",
	version: 1,
	shared: true,
	api: "CoreEngine",
	dependencies: ["SoundLib"]
});
IMPORT("SoundLib");

Network.addClientPacket("SoundHelper.play", function(packet){
	SoundManager.playSound(packet.name, packet.volume);
});

let SoundHelper = {
	playByPlayer(player, sound, volume){
		volume = volume || .3;
		let client = Network.getClientForPlayer(player);
		if(client)
			client.send("SoundHelper.play", {
				name: sound,
				volume: volume
			});
	},
	playByPos(sound, pos, radius, region, volume, blackList){
		blackList = blackList || [];
		volume = volume || .3;
		let ents = Entity.getAll();
		let dimension = region.getDimension();
		for(let i in ents)
			if(Network.getConnectedPlayers().indexOf(ents[i]) != -1 && blackList.indexOf(ents[i]) != -1 && dimension == Entity.getDimension(ents[i]) && Entity.getDistanceToCoords(ents[i], pos) <= radius)
				SoundHelper.playByPlayer(ents[i], sound, volume);
	}
};

EXPORT("SoundHelper", SoundHelper);
