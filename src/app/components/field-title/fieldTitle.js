import './fieldTitle.scss'


function inputTitleController() {
    // const ctrl = this;
    // ctrl.setTitle = (value) => {
    //     ctrl.title = value
    // }
    // ctrl.title = 'value';
    this.title = 'value';
}


export const inputTitleComponent = {
    template: require('./fieldTitle.component.html'),
    bindings: {
        fontNormalSize: '=',
        resetedMargin: '=',
        colorGray: '=',
        lineHeight: '=',
        title: '@'
    }
};
