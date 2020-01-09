const calculate = function(input){
    let result = ""
    if (input < 1 || !Number.isInteger(input)) {
        return "WRONG INPUT";
    }
    if (input % 3 === 0 && input % 5 === 0){
        result = "fizzbuzz"
    }
    else if (input % 3 === 0) {
        result = "fizz"
    }
    else if (input % 5 === 0) {
        result = "buzz"
    }
    else {
        result = "NOT DIVISIBLE"
    }
    return result
}


module.exports = {
    calculate: calculate
}