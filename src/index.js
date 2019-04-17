import angular from 'angular'
import {inputTitleComponent} from './app/modules/field-title/fieldTitle'
import './app/modules/field-title/fieldTitle.scss'
import {inputFieldComponent} from './app/modules/field-input/fieldInput'

angular.module('msmApp', [])
    .component('inputTitle', inputTitleComponent)
    .component('fieldInput', inputFieldComponent);