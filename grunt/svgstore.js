module.exports = {
    options: {
        prefix: 'icon__',
        svg: {
            viewBox : '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg',
            class: 'hide'
        }
    },
    dev: {
        files: {
            'dev/_assets/imgs/sprite/icon-sprite.svg': ['dev/_assets/svg/*.svg'],
        },
    }
};