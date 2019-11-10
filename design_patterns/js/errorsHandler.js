import errorPage from "./modalError";

/**
 *Singleton implementation
 */
export class ErrorsHandler {
    constructor() {
        if (typeof ErrorsHandler.instance === 'object') {
            return ErrorsHandler.instance;
        }

        ErrorsHandler.instance = this;

        return this;
    }

    handle(message) {
        if (!ErrorsHandler.instance) {
            ErrorsHandler.instance = this;
        }
        errorPage.render(message);
    }
}
