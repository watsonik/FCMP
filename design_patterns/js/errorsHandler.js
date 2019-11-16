import {ErrorModal} from "./modalError";

/**
 *Singleton implementation
 */
export class ErrorsHandler {
    ErrorModal;

    constructor() {
        if (typeof ErrorsHandler.instance === 'object') {
            return ErrorsHandler.instance;
        }
        this.ErrorModal = new ErrorModal();
        ErrorsHandler.instance = this;

        return this;
    }

    handle(message) {
        // if (!ErrorsHandler.instance) {
        //     ErrorsHandler.instance = this;
        // }
        this.ErrorModal.render(message);
    }
}
