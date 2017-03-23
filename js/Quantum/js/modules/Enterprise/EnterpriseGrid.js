_QT.CT.EnterpriseGrid = function(){
	//_QT.CT.Element.call(this);
	this.className = 'EnterpriseGrid';
};
_QT.UT.inherit(_QT.CT.EnterpriseGrid, _QT.CT.ReadGrid);

_QT.CT.EnterpriseGrid.prototype.onClick = function(){
	_QT.CT.EnterpriseGrid.uber.onClick.apply(this, arguments);
	console.log('EnterpriseGrid onClick!');
};