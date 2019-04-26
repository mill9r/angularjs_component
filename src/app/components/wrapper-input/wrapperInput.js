import './style.scss'


export const wrapperInputComponent = {
    template: require('./html.component.html'),
    transclude: true,
    bindings : {
        border: '=',
        size: '@',
        yAxeIndent: '='
    }
};