const checkPrime = (number) => {
    if(number <= 1){
        return false;
    }

    if(number === 2){
        return true;
    }

    for(let i=2 ;i < number ;i ++){
        if(number % i === 0){
            return false
        }
    }

    return true;
}

module.exports = { checkPrime };