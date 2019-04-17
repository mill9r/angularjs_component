// import angular from 'angular'
import './fieldInput.component.html'
import './fieldInput.scss'

function inputFieldController() {
    // const ctrl = this;
    // ctrl.setTitle = (value) => {
    //     ctrl.title = value
    // }
    // ctrl.title = 'value';
    // this.title = 'value';
}


export const inputFieldComponent = {
    template: require('./fieldInput.component.html'),
    controller: inputFieldController
};

// export default inputFieldComponent

// angular.module('msmApp')
//     .component('fieldInput', {
//         template: require('./fieldInput.component.html'),
//         controller: inputFieldController
//     });