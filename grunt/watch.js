module.exports = {
    options: {
        livereload: true
    },
    styles: {
        files: ['dev/_assets/scss/{,*/}*.scss'],
        tasks: ['sass:dev','autoprefixer:dev']
    },
    scripts: {
        files: ['dev/_assets/scripts/{,*/}*.js'],
        tasks: ['browserify:dev']
    },
    svg: {
        files: ['dev/_assets/svg/*.svg'],
        tasks: [
            'svgstore:dev',
            'regenerate'
        ]
    },
    images: {
        files: ['dev/_assets/imgs/{,*/,*/*/}*.{jpg,jpeg,png,gif,svg}'],
        tasks: [
            'sprite',
            'copy:images'
        ]
    },
    fonts: {
        files: ['dev/_assets/fonts/{,*/,*/*/}*.{eot,svg,ttf,woff,woff2}'],
        tasks: [
            'copy:fonts'
        ]
    },
    jekyll: {
        files: [
            'dev/*.{html,md}',
            'dev/_layouts/*.html',
            'dev/_includes/*.html',
            'dev/_templates/*.{md,markdown,html}',
            'dev/_components/*.{md,markdown,html}',
            'dev/_plugins/*.rb'
        ],
        tasks: ['regenerate']
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
