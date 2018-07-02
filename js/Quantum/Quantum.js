var QTPath = './js/Quantum/';

try {
	if (requirejs) {
		requirejs.config({
			baseUrl	: QTPath + 'js/',
			paths	: {
				'jquery'		: 'lib/jquery-1.12.4.min',
				'underscore'	: 'lib/underscore-min',

				'intro'		: 'intro',
				'element'	: 'Element',

				'readgrid'			: 'modules/Read/ReadGrid',
				'enterprisegrid'	: 'modules/Enterprise/EnterpriseGrid'
			},
			shim	: {
				'element'			: {deps	: ['intro']},

				'readgrid'			: {deps	: ['element']},
				'enterprisegrid'	: {deps	: ['readgrid']}
			}
			
		});

		requirejs([ 'jquery', 'underscore' ], function(jq) {
			var jq = jq.noConflict();
			requirejs([ 'enterprisegrid' ], function() {

			});
		});
	}
} catch (e) {
	//alert('requireJS 추가 후 사용해야 함');
	var heScript = document.createElement('script');
	heScript.setAttibute('src', QTPath + 'lib/require.js');
	heScript.setAttibute('type', 'text/javascript');
}
