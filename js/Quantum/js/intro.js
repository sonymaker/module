if(window.console === undefined){
	console = {log:function(){}};
}

/**
 * @version Quantum v1.0 API Document v1.0.0
 * @description QuantumGrid의 최상위 namespace
 * @namespace {Object} _QT
*/
_QT = {};

/**
 * @version Quantum v1.0 API Document v1.0.0
 * @description QuantumGrid의 클래스 namespace
 * @namespace {Object} _QT.CT
*/
_QT.CT = {};

/**
 * @version Quantum v1.0 API Document v1.0.0
 * @description QuantumGrid의 유틸리티 namespace
 * @namespace {Object} _QT.UT
*/
_QT.UT = {};

/**
 * @since Quantum v1.0 API Document v1.0.0
 * @description 객체 상속 유틸 함수
 * @returns {Object}
 * @example
 * _QT.UT.inherit(objChild, objParent);
 */
_QT.UT.inherit = (function () {
	var F = function () {};
	return function (C, P) {
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	};
}());
