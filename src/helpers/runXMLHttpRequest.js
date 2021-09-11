export default function runXMLHttpRequest(url, params = {}, config) {
    const responseType = (config && config.responseType) || 'json';
    const contentType = (config && config.contentType) || 'application/json';
    const method = (config && config.method) || 'POST';

    const request = new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.responseType = responseType;
        xhr.contentType = contentType;

        xhr.open(method, url);

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve();
            } else {
                reject();
            }
        };

        xhr.onerror = function() {
            reject();
        };

        const stringParams = (params && JSON.stringify(params)) || '';

        xhr.send(stringParams);
    });

    return request;
}
