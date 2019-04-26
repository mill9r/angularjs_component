import angular from 'angular'
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

angular.module('msmApp', [])
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
    .component('wrapperInput',wrapperInputComponent);


