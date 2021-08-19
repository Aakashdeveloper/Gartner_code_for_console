let data = require('./db.json')
/*  Function will help to return array of that with
    expensive amount of values of IP address
*/
let outputArray = [];
const checkCount = (clicks) => {
    for (val of clicks) {
        let isFound = false;
        for(let i = 0; i< outputArray.length; i++) {
            if(outputArray[i].ip == val.ip) {
              outputArray[i].count += 1;
              let hour = new Date(val.timestamp).getHours() + 1;
              if(outputArray[i].data[hour]) {
                if(val.amount > outputArray[i].data[hour].amount) {
                  outputArray[i].data[hour] = val;
                }
              } else {
                outputArray[i].data[hour] = val;
              }
              isFound = true
            }
        }
        if(isFound == false) {
            var newData = {
              ip: val.ip,
              count: 1,
              data: {}
            }
            newData.data[new Date(val.timestamp).getHours() + 1] = val;
            outputArray.push(newData)
        }
    }
    clicks=''
}

/* function will the input as final array with 
   values having length more than 10 as and filter
    out the value which will return less than 10 in number
    using filter function of JS
*/
const checkLength = (userInput) => {
    let outArray = userInput ? userInput: outputArray;
    let finalArray = outArray.filter(val => val.count <= 10)
    outputArray = []
    return finalArray
}

/*  Function will call our above 2 functions which 
    will return final output
*/
const getFinalOut = (clicks) => {
    checkCount(clicks)
    
    return checkLength(outputArray)
    
}

module.exports = {checkLength,checkCount,getFinalOut}

console.log(getFinalOut(data))