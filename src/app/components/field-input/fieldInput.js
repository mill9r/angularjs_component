// import angular from 'angular'
import './fieldInput.component.html'
import './fieldInput.scss'

function inputFieldController() {
    const ctrl = this;
    // console.log('ctrl',ctrl)
    // ctrl.setTitle = (value) => {
    //     ctrl.title = value
    // }
    // ctrl.title = 'value';
    // this.title = 'value';
}


export const inputFieldComponent = {
    template: require('./fieldInput.component.html'),
    // controller: inputFieldController,
    bindings: {
        size: '@',
        borderThin: '=',
        borderHidden: '=',
        textColor: '=',
        indentSize: '@',
        placeholder: '@'
    }
};

