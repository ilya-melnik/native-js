import React from 'react';


const Reduce = () => {
    const students = [
        {
            id: 1,
            name: 'Nick',
            age: 20,
            isMarried: true,
            scores: 134
        },
        {
            id: 2,
            name: 'Ilya',
            age: 17,
            isMarried: false,
            scores: 34
        },
        {
            id: 3,
            name: 'Vova',
            age: 24,
            isMarried: true,
            scores: 90
        },
        {
            id: 4,
            name: 'Nina',
            age: 34,
            isMarried: false,
            scores: 120
        },
    ]

    const toDolist_1 = 'kj3-fd'
    const toDolist_2 = 'dhghf5-5'
    const tasks = {
        [toDolist_1]: [
            {id: 'fd1', title: 'html', isDone: true},
            {id: 'fd2', title: 'css', isDone: false},
        ],
        [toDolist_2]: [
            {id: 'fd3', title: 'hi', isDone: true},
            {id: 'fd4', title: 'how are you', isDone: false},
        ]
    }
    //reduce

    //the object property is assigned according to the object id, and the object id is deleted
    // console.log(students.reduce((acc, el) => {
    //     acc[el.id] = el
    //     delete acc[el.id].id
    //     return acc
    // }, {}))
//-------------------------------------------------------------------------
//SelfMadeSelfReduce
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const selfMadeSelfReduce = (array, funk, startAccValue) => {
        let acc = startAccValue;
        for (let i = 0; i < array.length; i++) {
            acc = funk(acc, array[i])
        }
        return acc
    }
// sum array
    // console.log(selfMadeSelfReduce(array, (acc, el) => acc + el, 0))

    //the object property is assigned according to the object id, and the object id is deleted
    console.log(selfMadeSelfReduce(students, (acc, el) => {
        acc[el.id] = el
        delete acc[el.id].id
        return acc
    }, {}))


//--------------------------------------------------------------------------
    //The biggest score
    // console.log(students.reduce((acc, el)=>acc > el.scores? acc:el.scores, 0))
//
//Add 10 score for every student (MAP)
//     console.log(students.reduce((acc, el) => {
//         const copyAc = {...el}
//         copyAc.scores = copyAc.scores + 10
//         acc.push(copyAc)
//         return acc
//
//     }, []))
//----------------------------------------------------------------------------
// Return all student arrays with a score greater than 50
//
//     const res2 = students.reduce((acc, el) => {
//         if (el.scores >= 50) {
//             acc.push(el)
//         }
//         return acc
//     }, [])
//
//
//     console.log(res2)
// --------------------------------------------------------------
//     const num = [1, 2, 3, 4, 5,6,7,8,9,10]
//     num.reduce((acc, el) => {
//             return acc + el
//         })
//
//
// // find great value
//     const num1 = [65,34,7,89,98,879,34,56]
//     const res = num1.reduce((acc,el)=>acc > el?acc:el)


    return (
        <div>
        </div>
    );
};

export default Reduce;


//DELETE
const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

