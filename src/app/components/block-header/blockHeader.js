import './style.scss'

export const blockHeaderComponent = {
    template: require('./index.component.html'),
    transclude: true,
    bindings: {
        navy: '=',
        topIndent: '='
    }
};