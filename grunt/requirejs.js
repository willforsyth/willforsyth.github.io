module.exports = {
    compile: {
        options: {
            baseUrl: 'dev/_assets/scripts',
            paths: {
                requireLib: '../../../bower_components/requirejs/require',
                jquery: '../../../bower_components/jquery/dist/jquery'
            },
            name: 'main',
            out: 'web/scripts/main.js',
            include: ['requireLib'],
        }
    }
};