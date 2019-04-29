import '../../style/style.scss'


export const fieldSelectComponent = {
    template: require('./index.component.html'),
    bindings: {
        textIndent: '@',
        borderThin: '=',
        size: '@',
        textColor: '=',
        optionTitle: '@',
        form: '='
    }
};