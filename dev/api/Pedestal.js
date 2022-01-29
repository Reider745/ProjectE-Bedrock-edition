let Pedestal = {
	funcs: {},
	register(id, func){
		this.funcs[id] = func;
	},
	get(id){
		return this.funcs[id];
	}
};