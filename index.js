const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
    }

const returnLastTwoDrivers = function(array){
        return array.slice(2,array.length)
    }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = int =>  {
    return function(multiplyer){
        return int * multiplyer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)
        
function selectDifferentDrivers(array, func){
    return func(array)
}