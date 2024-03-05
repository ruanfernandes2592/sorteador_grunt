module.exports = function(grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
        development: {
            files: {
                'main.css': 'main.less' //Compilação do LESS
            }
        }
    },
    uglify: {
        target: {
            files: {
                'main.min.js': 'main.js' //compressão de código JavaScript
            }
        }
    }
})

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['less', 'uglify']);
}