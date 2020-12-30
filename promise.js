const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Things wwent wrong')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('error', error)
})

