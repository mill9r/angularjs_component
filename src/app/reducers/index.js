import _ from 'lodash'
// firstName: '',
const mockState = {
    honorifics: {title: ['Mr.', 'Miss', 'Mrs.', 'Ms.', 'Mx.'], selectedHonorifics: ''},
    firstName: {name:''},
    surname: '',
    employmentStatus: {title: ['Employee', 'Worker', 'Self-employed', 'Freelance'], selectedEmployment: ''},
    impairment: {options: ['Yes', 'No'], selected: ''},
    email: {options: ['mi11@mail.ru', 'Enter a new email address'], selected: ''},
    phoneNumber: '',
    dateOfBirth: {input: ['DD', 'MM', 'YYYY'], output: ['', '', '']},
    sortCode: {input: ['', '', ''], output: ['', '', '']},
    movementAddress: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        selectedMonth: '',
        day: ''
    }
};

function reducer(state = mockState, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }

}


export default {reducer}

