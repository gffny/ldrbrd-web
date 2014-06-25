module.exports = function(grunt){

  // Load Grunt tasks declared in the package.json file
  var dependencies;

  if (grunt.option('production')) {
      dependencies = require('matchdep').filter('grunt-*');
  } else {
      dependencies = require('matchdep').filterAll('grunt-*');
  }

  dependencies.forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sync: {
      main: {
        files: [{
          src: [
            // '**/*.html',
            // '!node_modules/**'
            // nothing to move but useful to define 
          ],
          dest: '',
        }],
        verbose: true // Display log messages when copying files
      }
    },
    clean: ['app/css'],
    less: {
      options: {
        paths: ["app/less/modules"],
        ieCompat: true
      },
      default: {
        src: 'app/less/ldrbrd.less',
        dest: 'app/css/app.css'
      }
    },
    watch: {
      livereload: {
        options: { livereload: true },
        files: ['app/css/**/*.css']
      },
      less: {
        files: ['app/less/**/*'],
        tasks: ['less']
      }
      // ,
      // js: {
      //   files: ['src/js/**/*.js','src/app/*.js'],
      //   tasks: ['jsbeautifier', 'concat']
      // }
    }
  });

  grunt.registerTask('default', ['watch']);
  
};
