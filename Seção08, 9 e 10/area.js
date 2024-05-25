function areaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !==  "number"){
        throw Error("Um dos parametros utilizados não é number")
    }
    return l * a
}

// console.log(areaRetangulo(2,3))

function areaTriangulo(b, a){
    if(typeof b !== "number" || typeof a !==  "number"){
        throw Error("Um dos parametros utilizados não é number")
    }
    return (b * a) / 2
}

function AreaCirculo(r){
    if(typeof r !== "number"){
        throw Error("Raio apenas aceita números")
    }
    return Math.pow(r, 2) * Math.PI
} 