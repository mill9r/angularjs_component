class Controller {
    constructor($scope, $ngRedux) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, {})(this)
    }

    mapStateToThis(state) {
        return {
            form: state.store
        };
    }

    select() {
        console.log('form', this.form)
        // this.onSelect({carrier});
    }


    submit() {
        console.log('Form:', this.form);
    }


    $onDestroy() {
        this.unsubscribe();
    }

}

export const controller = {
    template: require('./app.html'),
    controller: Controller
};
