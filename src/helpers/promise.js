export default function promise(data, type = 'resolve') {
    return new Promise((resolve, reject) => {
        if (type === 'resolve') {
            resolve(data);
        }

        if (type === 'reject') {
            reject(data);
        }
    });
}
