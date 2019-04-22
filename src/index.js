import angular from 'angular'
import {inputTitleComponent} from './app/components/field-title/fieldTitle'
import './app/components/field-title/fieldTitle.scss'
import {inputFieldComponent} from './app/components/field-input/fieldInput'
import {fieldRadioButtonComponent} from './app/components/field-radio-input/fieldRadioInput'
import {fieldSelectComponent} from './app/components/field-select/fieldSelect'
import {datePickerInputComponent} from './app/components/date-picker-input/datePickerInput'
import {pageHeader} from './app/components/page-header/pageHeader'
import {inputBlockComponent} from './app/components/input-block/inputBlock'
import {blockTextComponent} from './app/components/block-text/blockText'

angular.module('msmApp', [])
    .component('inputTitle', inputTitleComponent)
    .component('fieldInput', inputFieldComponent)
    .component('fieldRadioButton', fieldRadioButtonComponent)
    .component('fieldSelect', fieldSelectComponent)
    .component('datePickerInput', datePickerInputComponent)
    .component('pageHeader', pageHeader)
    .component('inputBlock', inputBlockComponent)
    .component('blockText', blockTextComponent);


