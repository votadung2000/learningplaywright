const isEvenNumber = function(value, index, array){
    return value % 2 === 0;
}
const isOddNumber = function(value, index, array){
    return value % 2 !== 0;
}

const convertToEvenNumbers = function(value, index, array){
    if(isEvenNumber(value)){
        return value;
    } else {
        return ++value;
    }
}

const sortNumberASC = function(firstValue, secondValue){
    return firstValue - secondValue;
}
const sortNumberDESC = function(firstValue, secondValue){
    return secondValue - firstValue;
}

module.exports = {
    Teo: isEvenNumber,
    Ti: isOddNumber,
    convertToEvenNumbers, 
    sortNumberASC,
    sortNumberDESC,
}