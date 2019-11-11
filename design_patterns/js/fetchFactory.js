/**
 *Factory implementation
 */
export class FetchFactory {
    sendRequest(url, type, body) {
        let response;
        switch (type) {
            case 'put':
                response = this.put(url, body);
                break;
            case 'post':
                response = this.post(url, body);
                break;
            default:
                response = this.get(url);
                break;
        }
        return response;
    }

    get(url) {
        return fetch(url);
    }

    put(url, body) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    post(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
}
