function init(inputArray) {
    var returnArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        const firstIndex = (i - 1) >= 0 ? inputArray[i - 1] : 0;
        const lastIndex = (i + 1) >= inputArray.length ? 0 : inputArray[i + 1];
        var returnItem = firstIndex + inputArray[i] + lastIndex;
        returnArray.push(returnItem);
    }
    return returnArray;
}

var testArray = [4, 0, 1, -2, 3];
console.log(init(testArray))