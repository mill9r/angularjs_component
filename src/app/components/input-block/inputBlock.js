import './style.scss'



export const inputBlockComponent = {
    transclude: true,
    template: require('./html.component.html'),
    bindings: {
        inputValue: '='
    }

};