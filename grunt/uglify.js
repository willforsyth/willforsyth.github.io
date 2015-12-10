module.exports = {
    dest: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'web/',
            src: 'scripts/*.js',
            dest: 'web/'
        }]
    }
};