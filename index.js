function myEach(collection, callback){
    let myCollection;
    if(!Array.isArray(collection)){
        myCollection = Object.values(collection);
    }else {
        myCollection = [...collection];
    }

    const len = myCollection.length;
    for(let i = 0; i < len; i++){
        callback(myCollection[i]);
    }

    return collection;
}

function myMap(collection, callback){
    let myCollection;
    if(!Array.isArray(collection)){
        myCollection = Object.values(collection);
    }else {
        myCollection = [...collection];
    }

    const len = myCollection.length;
    for(let i = 0; i < len; i++){
        myCollection[i] = callback(myCollection[i]);
    }   
    
    return myCollection;
}

function myReduce(collection, callback, acc){
    let myCollection;
    if(!Array.isArray(collection)){
        myCollection = Object.values(collection);
    }else {
        myCollection = [...collection];
    }

    if(acc === undefined){
        acc = myCollection[0]
        myCollection = myCollection.slice(1)
    }

    const len = myCollection.length;
    for(let i = 0; i < len; i++){
        acc = callback(acc, myCollection[i]);
        console.log("iteration: ", i)
        console.log("current val: ", myCollection[i])
        console.log("total accumulation: ", acc)
        console.log("")
    }

    return acc;
}

function myFind(collection, predicate){
    let myCollection;
    if(!Array.isArray(collection)){
        myCollection = Object.values(collection);
    }else {
        myCollection = [...collection];
    }

    const len = myCollection.length;
    for(let i = 0; i < len; i++){
        if(predicate(myCollection[i])){
            return myCollection[i]
        }
    }    
}

function myFilter(collection, predicate){
    let myCollection;
    if(!Array.isArray(collection)){
        myCollection = Object.values(collection);
    }else {
        myCollection = [...collection];
    }

    const foundItems = []
    const len = myCollection.length;
    for(let i = 0; i < len; i++){
        if(predicate(myCollection[i])){
            foundItems.push(myCollection[i])
        }
    }     
    
    return foundItems;
}

function mySize(collection){
    if(!Array.isArray(collection)){
        return Object.keys(collection).length;
    }else {
        return collection.length;
    }
}

function myFirst(array, n = 1){
    if(n == 1){
        return array[0]
    }

    const result = []
    for(let i = 0; i < n; i++){
        result.push(array[i])
    }

    return result
}

function myLast(array, n = null){
    if(!n || n == 1){
        return array[array.length - 1]
    }
    
    const result = []
    // for(let i = array.length - 1; i >= array.length - n; i--){
    //     result.unshift(array[i])
    // }
    for(let i = array.length - n; i < array.length; i++){
        result.push(array[i])
    }

    return result
}

function myKeys(object){
    const result = []
    Object.entries(object).forEach((item) => {
        result.push(item[0])
    })

    return result
}

function myValues(object){
    const result = []
    Object.entries(object).forEach((item) => {
        result.push(item[1])
    })

    return result
}

const testArr = [1, 2, 3, 4]
const testObj = {one: 1, two: 2, three: 3, four: 4}
const callback = (acc, val, collection) => (acc + (val * 3))

myReduce(testArr, callback)