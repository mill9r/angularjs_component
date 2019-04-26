import '../../style/style.scss'

export const inputTitleComponent = {
    template: require('./fieldTitle.component.html'),
    bindings: {
        fontNormalSize: '=',
        resetedMargin: '=',
        colorGray: '=',
        lineHeight: '=',
        title: '@'
    }
};
