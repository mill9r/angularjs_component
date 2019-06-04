import angular from 'angular'
import ngRedux from 'ng-redux'
import 'angular-messages';
import {inputTitleComponent} from './app/components/field-title/fieldTitle'
import {inputFieldComponent} from './app/components/field-input/fieldInput'
import {fieldRadioInputComponent} from './app/components/field-radio-input/fieldRadioInput'
import {fieldSelectComponent} from './app/components/field-select/fieldSelect'
import {datePickerInputComponent} from './app/components/date-picker-input/datePickerInput'
import {pageHeader} from './app/components/page-header/pageHeader'
import {inputBlockComponent} from './app/components/input-block/inputBlock'
import {blockHeaderComponent} from './app/components/block-header/blockHeader'
import {wrapperComponent} from "./app/components/wrapper/wrapper";
import {titleCommentComponent} from './app/components/field-title-comment/fieldTitleComment'
import {wrapperInputComponent} from './app/components/wrapper-input/wrapperInput'
import {controller} from './app'
import {inputBlockTemplateComponent} from './app/components/all-blocks/input-block-template.component'
import configureStore from './app/store/configureStore'
import generateHtml from './app/directives/generateHtml'

import jsonData from './app/data/content.json'

const app = angular.module('msmApp', ['ngMessages', 'ngRedux'])
    .component('inputTitle', inputTitleComponent)
    .component('fieldInput', inputFieldComponent)
    .component('fieldRadioInput', fieldRadioInputComponent)
    .component('fieldSelect', fieldSelectComponent)
    .component('datePickerInput', datePickerInputComponent)
    .component('pageHeader', pageHeader)
    .component('inputBlock', inputBlockComponent)
    .component('blockHeader', blockHeaderComponent)
    .component('wrapper', wrapperComponent)
    .component('titleComment', titleCommentComponent)
    .component('wrapperInput', wrapperInputComponent)
    .component('inputBlockTemplate',inputBlockTemplateComponent)
    .component('app', controller)
    .directive('contentDirective', generateHtml)
    .config(configureStore)
    .config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist(['self', '**']);
    })
    .constant('URL', '/angularjs_component/dist/')
    .factory('DataService', function ($http, URL) {
        const getData = function () {
            return $http.get(URL + 'content.json');
        };
        return {
            getData: getData
        };
    });

app.controller('ContentCtrl', function (DataService) {
        var ctrl = this;

        ctrl.content = [];

        ctrl.fetchContent = function () {
            DataService.getData().then(function (result) {
                ctrl.content = result.data;
            });
        };

        ctrl.fetchContent();
        console.log('ctrl',ctrl)
    });

export default app

