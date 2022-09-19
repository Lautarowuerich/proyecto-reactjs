export const customFetch = (products) => {
        return new Promise ((resolve, rejected) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
};  