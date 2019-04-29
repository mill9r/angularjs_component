class Controller {
    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToProps)(this)
    }

    mapStateToProps(state) {
        return {
            form: state
        };
    }

    $onDestroy() {
        this.unsubscribe();
    }

}

export const controller = {
    template: require('./app.html'),
    controller: Controller
};
