import {app} from '../../index'
import {inputTitleComponent} from "../components/field-title/fieldTitle";

function getTempl(value) {
    console.log('value', value);
    switch (value) {
        case 'inputTitle':
            console.log('app', app);
            return app.inputTitleComponent.template;
        case 'video':
            return videoComponent.template;
        case 'notes':
            return notesComponent.template;
        case 'wrapper':
            return app.wrapperInput.template;

    }
}

export default function ($compile, DataService) {
    var getTemplate = function (templates, contentType) {
        console.log('contentType', templates);
        console.log('getTempl', getTempl(templates.title));
        return getTempl(templates.type)
        // var template = '';
        // if (contentType.wrapper) {
        //     let wrapper = getTempl(contentType.wrapper.content_type);
        //     return [wrapper, getTempl(contentType.content_type)]
        // } else {
        //     return [getTempl(contentType.content_type)]
        // }
    };

    var linker = function (scope, element, attrs) {
        console.log('element', element, 'attrs', attrs);
        // scope.rootDirectory = 'images/';

        DataService.getData().then(function (result) {
            // ctrl.content = result.data;
            var templates = result.data.questions;
            console.log('templates', templates, 'scope.content', scope.content);
            let arr = getTemplate(templates[0], scope.content);
            console.log('arr', arr);
            // if (arr.length === 2) {
            //     element.html(arr[1]);
            //     element.wrap(arr[0]);
            //     var out = $compile(element.contents())(scope);
            // } else {
            //     let out = element.html(arr[0]);
            //     $compile(element.contents())(scope);
            // }
        });

    };

    return {
        restrict: 'E',
        link: linker,
        scope: {
            content: '='
        }
    };
};
