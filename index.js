(function(){
	module.exports = function clone(obj){
		var newObj={};
		for(var key in obj){
			if(typeof obj[key] == 'object' && obj[key] != null) newObj[key] = clone(obj[key]);
			else newObj[key] = obj[key];
		} return newObj;
	}
})();