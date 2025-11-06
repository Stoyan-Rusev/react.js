export default function fakeFetch(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 200,
                message: 'success',
                data: data,
            });
        }, 1500);
    });
};
