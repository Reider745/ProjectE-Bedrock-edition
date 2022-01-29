//create Reider ___ size - 16
let chest_3 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.9375, 0.5-0.0625, 0.4375, 1, 0.75-0.0625, 0.5625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2
