module.exports = {
    scripts: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: '.tmp',
            src: 'scripts/{,*/}*.js'
        }]
    },images: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: '.tmp',
            src: 'imgs/{,*/}*.{png,jpg,jpeg,gif,svg}'
        }]
    },
    fonts: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: '.tmp',
            src: 'fonts/{,*/}*.{eot,svg,ttf,woff,woff2}'
        }]
    },
     dist:{
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: 'web',
            src: ['imgs/{,*/}*.{png,jpg,jpeg,gif,svg}']
        },{
            expand: true,
            dot: true,
            cwd: 'bower_components/svg4everybody',
            dest: 'web/scripts/vendor',
            src: 'svg4everybody.js'
        },{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: 'web',
            src: 'fonts/{,*/}*.{eot,svg,ttf,woff,woff2}'
        }]
    }
};