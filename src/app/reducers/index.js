import {combineReducers} from 'redux'

const mockState = {
    honorifics: {title: ['Mr.', 'Miss', 'Mrs.', 'Ms.', 'Mx.'], selectedHonorifics: ''},
    name: '',
    surname: '',
    employmentStatus: {title: ['Employee', 'Worker', 'Self-employed', 'Freelance'], selectedEmployment: ''},
    impairment: {options:['Yes','No'],selected:''},
    email: {options:['mi11@mail.ru','Enter a new email address'], selected:'' },
    phoneNumber: '',
    dateOfBirth:{input:['DD','MM','YYYY'], output: ['','','']} ,
    sortCode: {input:['','',''], output: ['','','']},
    movementAddress: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        selectedMonth: '',
        day: ''
    }
};

const action = {
    type: 'MODIFY_USERNAME',
    payload: 'new name',
};


function reducer(state = mockState, action) {
    switch (action.type) {
        default:
            return state;
    }

    return state;
}


export const rootReducer = combineReducers({store: reducer});
