import './style.scss'


export const datePickerInputComponent = {
    template: require('./index.component.html'),
    transclude: true,
    bindings: {
        pickerBorderThin: '='
    }
}