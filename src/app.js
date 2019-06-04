import actions from '../src/app/actions/actions'

class Controller {
    constructor($scope, $ngRedux) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
        this.data = [
            {
                type: "dropdown.block", attributes: {
                    title: "Title",
                    additionalInformation: ""
                },
                dataGroup:
                    {
                        placeholder: "--Please select--",
                        dataFromTheFormName: "title",
                        options: [
                            {
                                name: "Mr.",
                                value: "Mr."
                            },
                            {
                                name: "Miss.",
                                value: "Miss."
                            },
                            {
                                name: "Mrs.",
                                value: "Mrs."
                            },
                            {
                                name: "Ms.",
                                value: "Ms."
                            }],
                        constraints: []
                    }
            }, {
                type: "input-block-template", attributes: {
                    title: "Name",
                    additionalInformation: ""
                },
                dataGroup: [
                    {
                        placeholder: "First name",
                        dataFromTheFormName: "firstName",
                        constraints: []
                    },
                    {
                        placeholder: "Surname",
                        dataFromTheFormName: "surname",
                        constraints: []
                    }
                ]
            }, {
                type: "dropdown.block", attributes: {
                    title: "Employment status",
                    additionalInformation: "The following information is needed for the provider to complete their credit checks"
                },
                dataGroup:
                    {
                        placeholder: "--Please select--",
                        dataFromTheFormName: "employmentStatus",
                        options: [
                            {
                                name: "Employee",
                                value: "Employee"
                            },
                            {
                                name: "Worker",
                                value: "Worker"
                            },
                            {
                                name: "Self-employed",
                                value: "Self-employed"
                            }],
                        constraints: []
                    }
            },

            {
                type: "radio-button.block", attributes: {
                    title: "Do you have special needs, such as visual or hearing\n" +
                        "                    impairment?",
                    additionalInformation: ""
                },
                dataGroup:
                    {
                        placeholder: "",
                        dataFromTheFormName: "impairment",
                        options: [
                            {
                                name: "yes",
                                value: "Yes"
                            },
                            {
                                name: "no",
                                value: "No"
                            }],
                        constraints: []
                    }
            },
            {
                type: "radio-button.block", attributes: {
                    title: "Email Address",
                    additionalInformation: "This email address will be used by the supplier to confirm and activate your application. Please make sure it's correct."
                },
                dataGroup:
                    {
                        placeholder: "",
                        dataFromTheFormName: "clientEmail",
                        options: [
                            {
                                name: "mi@mail.ru",
                                value: "mi@mail.ru"
                            },
                            {
                                name: "newEmail",
                                value: "Enter a new email address",
                                option : "newEmail"
                            }],
                        constraints: []
                    }
            }, {
                type: "input-block-template", attributes: {
                    title: "Telephone number",
                    additionalInformation: ""
                },
                dataGroup: [
                    {
                        placeholder: "e.g. 0777 1234567",
                        dataFromTheFormName: "phoneNumber",
                        constraints: []
                    }
                ]
            }, {
                type: "date-input.block", attributes: {
                    title: "Date of Birth",
                    additionalInformation: "For example: 30/10/1984"
                },
                dataGroup: [
                    {
                        placeholder: "DD",
                        dataFromTheFormName: "birthDay",
                        options: [],
                        constraints: []
                    },
                    {
                        placeholder: "MM",
                        dataFromTheFormName: "birthMonth",
                        options: [],
                        constraints: []
                    },
                    {
                        placeholder: "YYYY",
                        dataFromTheFormName: "birthYear",
                        options: [],
                        constraints: []
                    },
                ]
            },
            {
                type: "sort-code.block", attributes: {
                    title: "Sort code",
                    additionalInformation: ""
                },
                dataGroup: [
                    {
                        placeholder: "",
                        dataFromTheFormName: "sortFirst",
                        options: [],
                        constraints: []
                    },
                    {
                        placeholder: "",
                        dataFromTheFormName: "sortSecond",
                        options: [],
                        constraints: []
                    },
                    {
                        placeholder: "",
                        dataFromTheFormName: "sortThird",
                        options: [],
                        constraints: []
                    },
                ]
            },
            {
                type: "single-dropdown-input.block", attributes: {
                    title: "When did you move in to your billing address?",
                    additionalInformation: ""
                },
                dataGroup: [
                    {
                        placeholder: "--Please select--",
                        dataFromTheFormName: "addressMonth",
                        options: [
                            {name: 'January', value: 'January'}, {name: 'February', value: 'February'},
                            {name: 'March', value: 'March'}, {name: 'April', value: 'April'},
                            {name: 'May', value: 'May'}, {name: 'June', value: 'June'},
                            {name: 'July', value: 'July'}, {name: 'August', value: 'August'},
                            {name: 'September', value: 'September'}, {name: 'October', value: 'October'},
                            {name: 'November', value: 'November'}, {name: 'December', value: 'December'}
                        ],
                        constraints: []
                    },
                    {
                        placeholder: "",
                        dataFromTheFormName: "addressDay",
                        constraints: []
                    }
                ]
            }
        ];
    }

    mapStateToThis(state) {
        return {
            form: state.reducer
        };
    }

    submit() {
        console.log('Form:', this.form);
    }

    $onDestroy() {
        this.unsubscribe();
    }
}


export const
    controller = {
        template: require('./app.html'),
        controller: Controller
    };
