// import angular from 'angular'
import './fieldTitle.scss'
import './fieldTitle.component.html'

function inputTitleController() {
    // const ctrl = this;
    // ctrl.setTitle = (value) => {
    //     ctrl.title = value
    // }
    // ctrl.title = 'value';
    this.title = 'value';
}


export const inputTitleComponent ={
    template: require ('./fieldTitle.component.html'),
    controller: inputTitleController
};

// export default inputTitleComponent


// angular.module('msmApp')
//     .component('inputTitle', {
//         template: require ('./fieldTitle.component.html'),
//         controller: inputTitleController
//     });