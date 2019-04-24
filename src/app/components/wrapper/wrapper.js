import './style.scss'

function inputTitleController() {
    const ctrl = this;
    console.log('ctrl',ctrl)
    // ctrl.setTitle = (value) => {
    //     ctrl.title = value
    // }
    // ctrl.title = 'value';
    // this.title = 'value';
}

export const wrapperController = {
    controller: inputTitleController,
    template: require('./html.component.html'),
    transclude: true,
    bindings: {
        rightEdge: '=',
        bottomIndent: '=',
        widthXl: '=',
        distributeEvenly: '=',
        alignOrthogonalAxis: '=',
        column: '=',
        sideIndent: '=',
        heightXl: '='
    }
};

