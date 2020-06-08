/*
given array of words and a string, find a shortest substring that contains all those words

- assume input is always valid - array will contain 2 or more words, and string will contain characters

*/

const findShortest = (str, words) => {
    //create variable obj to store words and their indices
    const obj = {};
    //create vars min and max to store min and max indices
    let min = Infinity;
    let max = -Infinity;

    let sub = '';

    //store the words passed in the array inside the object
    for(w of words) {
        obj[w] = -1; //index initialized to -1
    }

    //original string split on space
    const orig = str.split(' ');
    //change all uppercases to lowercases and split on space and/or punctuations
    const sArr = str.toLowerCase().split(/[ ,.?!]+/);

    //iterate through the array 
    for(let i = 0; i < sArr.length; i++) {
        //if word exists in obj and encountered first time, store in obj
        if(obj[sArr[i]] === -1) {
            obj[sArr[i]] = i;

            //update min and max
            if(i < min) min = i;
            else max = i;
            if (min !== -1 && max !== -1) sub = orig.slice(min, max + 1).join(' ');
            continue;
        }
        //else if word exists in the obj and encountered >1 times
        else if(obj[sArr[i]] !== undefined) {
            //update and get new length every time word appears
            obj[sArr[i]] = i; 

            //update max and min
            max = i;
            min = i;
            for(k in obj) {
                if(obj[k] < min && obj[k] !== -1) min = obj[k];
            }

            //get new len and if smaller, update smallest substring
            let newSub = orig.slice(min, max + 1).join(' ');
            if(newSub.length < sub.length) sub = newSub;
        }
    }

    return sub;
}

module.exports = { findShortest };