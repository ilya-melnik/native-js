import React from 'react';


const Sort
    = () => {

    const strings = ['Alex', 'Dmitriy', 'Bob']
    console.log(strings.sort())

    const strings2 = ['Alex', 'Dmitriy', 'Bob', 'Join', 'Юрий', 'Юлия']
    console.log(strings2)

    const num = [1, 324, 54, 654, 888, -20, '-20']
    // console.log(num.sort())

//------------------------------------------------------------------------
    // sort ПО ВОЗРОСТАНИЮ
    const compareFunk = (a, b) => {
        if (a > b) { // по убыванию
            return 100 // any позитивное число, меняет порядок
        } else {
            return -1 // any negative number, if не нужно переставить местами
        }
    }
// short
    const compareFunkPro = (a, b) => a - b; // если при операции минус, результат положительный, значит  вернет A, если отрицательный вернет B

    // console.log(num.sort(compareFunk)) // ['-20', -20, 1, 54, 324, 654, 888]
    console.log(num.sort(compareFunkPro)) // [-20, '-20', 1, 54, 324, 654, 888]
    // 6. fun should be return bigger number or less than 0
//---------------------------------------------------------------

    // ПО УБЫВАНИЮ
    console.log(num.reverse())
//-----------------------------------------------------------------
    //SORT МАСИВА ОБЬЕКТОВ.
    //зависит от регистра
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
            name: 'Aron',
            age: 34,
            isMarried: false,
            scores: 120
        },
    ]

    const sortName = (a, b) => {
        if (a.name > b.name) {
            return 1
        } else {
            return -1
        }
    }

    console.log(students.sort(sortName))
    // сортировка не зависят от регистра
    const sortWithoutRegistr = (a, b) => a.name.localeCompare(b.name) // sort по алфавиту не учитывая регистр
    console.log(students.sort(sortWithoutRegistr))

    //----------------------------------------------------
    // 7 sort array by score

    // const byScore = (a, b) => {
    //     if (a.scores > b.scores) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // }
    const byScore = (a, b) => a.scores - b.scores // short version

    console.log(students.sort(byScore))

// //=====================================================================================
//                                 // BUBBLE SORT
// //=====================================================================================
    let nums = [100, 45, 23, 46, 66, 78, 32, 91,]


    for (let j = 0; j < nums.length - 1; j++) {
        let isSorted = true;
        for (let i = 0; i < nums.length - 1 - j; i++) {
            if (nums[i] > nums[i + 1]) {
                isSorted = false;
                    // let temp = nums[i]
                    // nums[i] = nums[i + 1]
                    // nums[i + 1] = temp
                    // or
                    [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
            }
            console.log(nums)
        }
        if (isSorted) break


    }


    return (
        <div>
            ffd
        </div>
    );
};

export default Sort;
