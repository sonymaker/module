module.exports = function(grunt){
	 // Project configuration
	grunt.initConfig({
		pkg		: grunt.file.readJSON('package.json'),
		clean	: {
			'build'				: ['./build', './doc'],
			'readgrid'			: ['./build/QuantomGrid.read.js'],
			'enterprisegrid'	: ['./build/QuantomGrid.enterprise.js']
		},
		concat	: {//concat 타겟 설정(앞에서부터 순서대로 합쳐진다
			'readgrid'	: {
				src		: [
					'../js/Quantum/js/intro.js',
					'../js/Quantum/js/Element.js',
					'../js/Quantum/js/modules/Read/ReadGrid.js',
				],
				dest	: './build/QuantomGrid.read.js'//concat 결과 파일
			},
			'enterprisegrid'	: {
				src		: [
					'../js/Quantum/js/intro.js',
					'../js/Quantum/js/Element.js',
					'../js/Quantum/js/modules/Read/ReadGrid.js',
					'../js/Quantum/js/modules/Enterprise/EnterpriseGrid.js',
				],
				dest	: './build/QuantomGrid.enterprise.js'//concat 결과 파일
			}
		},
		jshint	: {
			options	: {},
			'readgrid'	: {
				options	: {},
				files	: {
					src	: ['./build/QuantomGrid.read.js']
				}
				//src: ['src/foo.js', 'src/bar.js'],
			    //dest: 'dist/output.js'
				//beforeconcat: ['src/foo.js', 'src/bar.js'],
				//afterconcat: ['dist/output.js']
			},
			'enterprisegrid'	: {
				options	: {},
				files	: {
					src	: ['./build/QuantomGrid.enterprise.js']
				}
			}
		},
		jsdoc	: {
			'readgrid'	: {
				src	: ['./build/QuantomGrid.read.js'],
				options: {
					destination	: 'doc'
				}
			}
		},
		uglify	: {
			'readgrid'	: {
				options	: {},
				files	: {
					'./build/QuantomGrid.read.min.js'	: ['./build/QuantomGrid.read.js']
				}
			},
			'enterprisegrid'	: {
				options	: {},
				files	: {
					'./build/QuantomGrid.enterprise.min.js'	: ['./build/QuantomGrid.enterprise.js']
				}
			}
		}
		/*,
		copy	: {
			basic	: {
				src		: 'src/*',
				dest	: 'dest/'
			}
		}
		*/
	});
	
	// Load the plugin that provides the "uglify", "concat" tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// Default task(s).
	grunt.registerTask('default', [
		'clean:build',
		'concat:readgrid', 'concat:enterprisegrid',
		'jshint:readgrid', 'jshint:enterprisegrid',
		'jsdoc:readgrid',
		'uglify:readgrid', 'uglify:enterprisegrid',
		'clean:readgrid', 'clean:enterprisegrid'
	]); //grunt 명령어로 실행할 작업
}