function add (x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

function mult(x,y){
    return x*y;
}

function div(x,y){
    return x/y;
}


function operate(x,op,y){
    var fun;
    if (op == "+"){
        fun = add;
    } 
    else if (op == "-"){
        fun = sub;
    }
    else if (op == "*"){
        fun = mult;
    }
    else if (op == "/"){
        fun = div
    }

    return fun(x,y);
}