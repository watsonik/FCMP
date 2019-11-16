export class Proxy { //no need to review
    constructor(object) {
        const handlers = {
            apply: function (target, thisArg, argumentsList) {
                console.log("RRRRRRRRRRRR");
                return "2222";
            }

        };

        return new Proxy(object, handlers);
    }
}
