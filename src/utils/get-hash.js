const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    console.log('1 location: ', location)
    console.log('2 location.hash: ', location.hash)
    console.log('3 location.hash.slice(1): ', location.hash.slice(1))
    console.log('4 location.hash.slice(1).toLocaleLowerCase(): ', location.hash.slice(1).toLocaleLowerCase())
    console.log("5 location.hash.slice(1).toLocaleLowerCase().split('/'): ", location.hash.slice(1).toLocaleLowerCase().split('/'))
    console.log("6 location.hash.slice(1).toLocaleLowerCase().split('/')[1]: ", location.hash.slice(1).toLocaleLowerCase().split('/')[1])
export default getHash