var Tablet = {
	emc: 0,
	page: 0,
	
	items: [],
	
	container: new UI.Container()
}

System.isLearned = function(id, data){
	let items = Tablet.items;
	
	for(i in items){
	    if(items[i].id == id && items[i].data == data){
		    return true;
	    }
	}
	
	return false;
}

Saver.addSavesScope("EE2Tablet",
	function read (scope) {
		Tablet.items = [];
		Tablet.page = 0;
		Tablet.emc = 0;
		
		delete Tablet.container;
		Tablet.container = new UI.Container();

		if(scope && scope.items) {
			for(i in scope.items){
				Tablet.items.push(scope.items[i]);
			}
			
			Tablet.emc = scope.emc;
		}
	},
	
	function save () {
		return {
			items: Tablet.items,
			emc: Tablet.emc
		};
	}
);