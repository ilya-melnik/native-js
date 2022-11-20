export const students = [
    {
        name: "Bob",
        age: 19,
        isMarried: true,
        scores: 100,
    },
    {
        name: "Dan",
        age: 27,
        isMarried: true,
        scores: 78,
    },
    {
        name: "Kolya",
        age: 1,
        isMarried: false,
        scores: 45,
    },
]



const func1 = (st) => st.name
const ChangeName = (stName) => ({...stName, name: 'David'})


const global = (arr, func)=>{
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}


console.log(global(students, func1))
console.log(global(students, ChangeName))
console.log(students.map(st => st.age))
console.log(students.map(st => st.age))
//------------------FUNCTION (map under cover) DONE AS METHOD ARRAY-------------

function SelfMadeMap (func1){
    const res = []
    for (let i = 0; i < this.length; i++) {
        res[i] = func1(this[i])
    }
    return res
}

Array.prototype.SelfMadeMap = SelfMadeMap
console.log(students.SelfMadeMap(func1))
console.log(students.SelfMadeMap(ChangeName))
//------------------------------------Filter under cover-------------------------------------------


const FilterUnderCover = (arr, fun) => {
    const result = []

    for (let i = 0; i < arr.length ; i++) {
        if(fun(arr[i]) ===  true){
            result.push(arr[i])
        }
    }

    return result
}

console.log(FilterUnderCover(students, st=> st.age > 10))
