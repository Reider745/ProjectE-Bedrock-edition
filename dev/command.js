let custom = FileTools.ReadJSON(__dir__+"/custom.js");
Callback.addCallback("NativeCommand",function(str){
let arr = str.split(" ");
if(arr[0] == "/emc"){
let item = Entity.getCarriedItem(Player.get());
custom.push({
id: (function(){
let items = Object.keys(ItemID);
for(let i in items)
if(ItemID[items[i]] == item.id)
return "ItemID."+items[i];

items = Object.keys(BlockID);
for(let i in items)
if(BlockID[items[i]] == Block.convertBlockToItemId(item.id))
return "BlockID."+items[i];

return ""+item.id
})(),
data: item.data,
emc: parseInt(arr[1])
});
FileTools.WriteJSON(__dir__+"/custom.js", custom, true);
Core.setItemEmc(item.id, item.data, parseInt(arr[1]));
Game.prevent();
Game.message(":D");
}else if(arr[0] == "/code"){
Game.prevent();
let code = "";
for(let i = 1;i < arr.length;i++)
code+=+" "+arr[i];
Game.message(code);
let result = eval(code);
Game.message(result)
}
});
