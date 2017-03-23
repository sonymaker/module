webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

if(window.console == undefined){
	console = {log:function(){}};
};

_QT = {CT : {}, UT:{}};

_QT.UT.inherit = (function () {
	var F = function () {};
	return function (C, P) {
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	};
}());


/***/ }),
/* 2 */
/***/ (function(module, exports) {

_QT.CT.ReadGrid = function(){
	//_QT.CT.Element.call(this);
	this.className = 'ReadGrid';
};
_QT.UT.inherit(_QT.CT.ReadGrid, _QT.CT.Element);

_QT.CT.ReadGrid.prototype.onClick = function(){
	console.log('ReadGrid onClick!');
};


/***/ })
]);