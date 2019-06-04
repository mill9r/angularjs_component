import '../../style/style.scss'


export const inputFieldComponent = {
    template: require('./fieldInput.component.html'),
    bindings: {
        size: '@',
        borderThin: '=',
        borderHidden: '=',
        textColor: '=',
        indentSize: '@',
        placeholder: '@',
        inputValue: '=',
        onInput: '&',
        inputName: '@'
    }
};

