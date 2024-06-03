// Code your solution in this file!

const returnFirstTwoDrivers = (myArray) => myArray.slice(0,2);
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
console.log(returnFirstTwoDrivers(drivers)) 

const returnLastTwoDrivers = (myArray) => myArray.slice(2)
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareQuintupler) {
    return function (value) {
        return value * fareQuintupler 
    }
}

function fareDoubler(fare) {
    const double = 2
    return double * fare
}

function fareTripler(fare) {
    const triple = 3
    return triple * fare
}

function selectDifferentDrivers(drivers,selectingDrivers) {
    return selectingDrivers(drivers)
}