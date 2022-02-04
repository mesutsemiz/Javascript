function topla(...args) {
    let toplam = 0;
    for( var i of args ) {
        toplam += i;
    }
    return toplam;

    
}

// console.log(topla(1,2,3));

function sum(...args){
    return args
    .filter(function(e){
        return typeof e === 'number'
    })

    .reduce(function (prev,curr){
        return prev + curr
    });
}

let result = sum(10, 'hi', null, undefined, 20)

console.log(result);