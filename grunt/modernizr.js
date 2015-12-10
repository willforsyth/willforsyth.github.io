module.exports = {
    dist: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: 'web/scripts/vendor/modernizr.js',
        extra: {
            'shiv' : true,
            'printshiv' : false,
            'load' : true,
            'mq' : false,
            'cssclasses' : true
        },
        files: {
            src: [
                'web/scripts/{,*/}*.js',
                'web/styles/{,*/}*.css'
            ]
        },
        uglify: true
    }
};