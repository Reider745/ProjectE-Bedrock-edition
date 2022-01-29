Network.addClientPacket("pe.particle", function(packetData) {
        Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
});
Network.addClientPacket("pe.message", function(packetData) {
    Game.message(packetData);
});
var Mp = {
    message: function (player, text){
        var client = Network.getClientForPlayer(player);
        if(client != null){
            client.send("pe.message", text);
        }
    },
    spawnParticle: function (type, x, y, z, vx, vy, vz, ax, ay, az){
            vx = vx || 0;
            vy = vy || 0;
            vz = vz || 0;
            ax = ax || 0;
            ay = ay || 0;
            az = az || 0;
            var players = Network.getConnectedPlayers();
            for(var i in players){
                var client = Network.getClientForPlayer(players[i]);
                if(client){
                    client.send("pe.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
             
                }
            }
        
    }
};
