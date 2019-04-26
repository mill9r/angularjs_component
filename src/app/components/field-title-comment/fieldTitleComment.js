import '../../style/style.scss'

export const titleCommentComponent = {
    template : require('./html.component.html'),
    bindings : {
        fontSize: '@',
        resetedMargin : '=',
        colorGray: '=',
        commentTitle: '@'
    }
};