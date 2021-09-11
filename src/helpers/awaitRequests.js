import { promise } from './index';

export default function awaitRequests(requests = []) {
    if (requests && requests.length) {
        return Promise.all(requests);
    }

    return promise([]);
}
