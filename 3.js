console.log('toExponential');
let Expon = 12345.6789;
console.log(Expon.toExponential(2))


console.log('tostring');
let num = 123;
console.log(num.toString())


console.log('valueOf');
let value = 42;
console.log(value.valueOf())


console.log('toPrecision');
let Prec = 5.6789;
console.log(Prec.toPrecision(2))


console.log('toFixed');
let Fix = 5.6789;
console.log(Fix.toFixed(2))


const obj = {
    name: "Kriss",
    age: 40,
    job: 'work'
}
console.log('Object.values');
const values_obj = Object.values(obj)
console.log(values_obj);


console.log('Object.keys');
const keys_obj = Object.keys(obj)
console.log(keys_obj);


console.log('Object.entries');
const arr_obj = Object.entries(obj)
console.log(arr_obj);

console.log('fromEntries');
let arr = [[2, 'a'], [123, "ads"]]
let from = Object.fromEntries(arr)
console.log(from);

console.log('freeze');
let se_al = Object.freeze({
    name: "Kriss",
    age: 40,
    job: 'work'
})
delete se_al.job
console.log(se_al);

console.log('seal');
let se_al2 = Object.seal({
        name: "Kriss",
        age: 40,
        job: 'work'
})
delete se_al2.name
console.log(se_al2);

