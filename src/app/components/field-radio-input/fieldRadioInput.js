import './style.scss'



export const fieldRadioInputComponent = {
    template: require('./fieldRadioInput.component.html'),
    bindings: {
        optionsId: '@',
        inputIndent: '=',
        inputColor: '@',
        inputWidth: '@',
        inputTitle: '@',
        selectedOptions : '='
    }
};