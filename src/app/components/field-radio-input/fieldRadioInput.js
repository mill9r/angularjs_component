import './style.scss'



export const fieldRadioInputComponent = {
    template: require('./fieldRadioInput.component.html'),
    bindings: {
        optionsId: '@',
        optionsName: '@',
        inputIndent: '=',
        inputColor: '@',
        inputWidth: '@',
        inputTitle: '@'
    }
};