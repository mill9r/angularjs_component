import './fieldRadioInput.component.html';
import './style.scss'

function fieldRadioButtonController() {
    
}

export const fieldRadioButtonComponent = {
    template: require('./fieldRadioInput.component.html'),
    controller : fieldRadioButtonController,
    bindings: {
        column: '=',
        row: '='
    }
};