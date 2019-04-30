import {combineReducers} from 'redux'

const mockState = {
    honorifics: ['Mr.', 'Miss', 'Mrs.', 'Ms.', 'Mx.'],
    name: '',
    surname: '',
    employmentStatus: ['Employee', 'Worker', 'Self-employed', 'Freelance'],
    impairment: false,
    currentEmail: 'mi@mail.com',
    newEmail: '',
    phoneNumber: '',
    dateOfBirth: '28.03.1990',
    sortCode: ['111', '222', '333'],
    movementAddress: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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


export const rootReducer = combineReducers({store:reducer});
