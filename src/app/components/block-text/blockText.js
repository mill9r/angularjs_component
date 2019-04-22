import './style.scss'

// function blockTextController($scope) { //}, $ngRedux) {
//     let ctrl = this;
//     ctrl.value = '';
//     console.log('ctrl', ctrl);
//     console.log('scope', $scope);
//     $scope.calculateClass = calculateClass;
//
//     function calculateClass(color) {
//         console.log('my color', color);
//         ctrl.value = color === 'navy';
//     }
// }

export const blockTextComponent = {
    template: require('./index.component.html'),
    transclude: true,
    // controller: blockTextController,
    // scope: true,
    bindings: {
        navy: '='
    }
};