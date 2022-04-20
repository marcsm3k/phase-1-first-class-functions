function receivesAFunction (cb) {
    return cb();
}

function returnsANamedFunction() {
    
    return function ANamedFunction() {

    }
}


function returnsAnAnonymousFunction() {

    return function() {
        
    }
}