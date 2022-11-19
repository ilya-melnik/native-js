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


// const GetName = (arr) => {
//     const name = []
//     for (let i = 0; i < arr.length; i++) {
//         name[i] = arr[i].name
//     }
//     return name
//
// }
// const GetScore = (arr) => {
//     const funScore = (st => st.scores)
//     const score = []
//     for (let i = 0; i < arr.length; i++) {
//         score[i] = funScore(arr[i])
//     }
//     return score
// }
// const GetMar = (arr) => {
// const fun = (m)=>({...m, married: true})
//     const married = []
//     for (let i = 0; i < arr.length; i++) {
//         married[i] = fun(arr[i])
//     }
//     return married
// }
//
//
//
// const getAge = (arr)=> {
//     const fun = (st => st.age)
//     let ageSt = []
//     for (let i = 0; i < arr.length; i++) {
//         ageSt[i] = fun(arr[i])
//     }
//
//     return ageSt
// }
const func1 = (st) => st.name
const ChangrName = (stName) => ({...stName, name: 'David'})


const global = (arr, func)=>{
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}


const ChangeNameForSt = (arr, ChangrName) => {
let result = []
    for (let i = 0; i < arr.length ; i++) {
       result[i] =  ChangrName(arr[i])
    }


    return result
}

console.log(global(students, func1))
console.log(global(students, ChangrName))



// console.log(GetName(students))
// console.log(GetScore(students))
// console.log(GetMar(students))
// console.log(getAge(students))

