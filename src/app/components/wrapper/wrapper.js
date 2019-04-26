import './style.scss'


export const wrapperComponent = {
    template: require('./html.component.html'),
    transclude: true,
    bindings: {
        rightEdge: '=',
        bottomIndent: '=',
        widthXl: '=',
        distributeEvenly: '=',
        alignOrthogonalAxis: '=',
        column: '=',
        leftSideIndent: '=',
        rightSideIndent: '=',
        heightXl: '=',
        center: '='
    }
};

