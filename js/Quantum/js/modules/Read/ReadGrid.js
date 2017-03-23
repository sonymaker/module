_QT.CT.ReadGrid = function(){
	//_QT.CT.Element.call(this);
	this.className = 'ReadGrid';
};
_QT.UT.inherit(_QT.CT.ReadGrid, _QT.CT.Element);

_QT.CT.ReadGrid.prototype.onClick = function(){
	console.log('ReadGrid onClick!');
};
