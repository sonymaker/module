_QT.CT.Base = function(){
	/* private member */
//	var attr = new Hashtable();
//	var attrInfo = new Hashtable();	//DATA TYPE 별 member 이름 정보
//	var types = ['boolean', 'number', 'string', 'array', 'object', 'function', 'element', 'jquery', 'hashtable', 'hashset', 'stack', 'queue'];
//	_.each(types, function(type, index){
//		attrInfo.put(type, new HashSet());
//	});
	
	/* public member */
//	this.log = function(){console.log.apply(console, arguments);};
//	this.ht = new Hashtable();
//	this.hs = new HashSet();
	this.className = 'Base';
};

_QT.CT.Element = function(){
	//_QT.CT.Base.call(this);
	
	this.className = 'Element';
};
_QT.UT.inherit(_QT.CT.Element, _QT.CT.Base);
