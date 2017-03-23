module.exports = {
	context	: __dirname + '/', // 모듈 파일 폴더
	entry	: { // 엔트리 파일 목록
		'read'	: './entry.js'
	},
	output	: {
		path		: __dirname + '/deploy', // 번들 파일 폴더
		filename	: 'Quantum.[name].js' // 번들 파일 이름 규칙
	},
	resolve	: {
		alias	: {
			'jquery'			: '../../js/Quantum/js/lib/jquery-1.12.4.min',
			'underscore'		: '../../js/Quantum/js/lib/underscore-min',
			
			'intro'				: '../../js/Quantum/js/intro',
			'element'			: '../../js/Quantum/js/Element',
			
			'readgrid'			: '../../js/Quantum/js/modules/Read/ReadGrid',
			'enterprisegrid'	: '../../js/Quantum/js/modules/Enterprise/EnterpriseGrid'
		}
	},
	module	: {
		loaders	: [
			//{ test: /underscore/, loader: 'exports?_' }
			//{ test: /backbone/, loader: 'exports?Backbone!imports?underscore,jquery' }
			{test: /element/,			loader: 'imports?intro'},
			{test: /readgrid/,			loader: 'imports?element'},
			{test: /enterprisegrid/,	loader: 'imports?readgrid'}
		]
	}
}
