export const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
        address: {
            country: 'Sudan',
            city: "Hartum",
        }
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
        address: {
            country: 'Sudan',
            city: "Hartum",
        }
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
        address: {
            country: 'Sudan',
            city: "Hartum",
        }
    }, {
        id: 4,
        name: "Donald",
        isStudent: true,
        address: {
            country: 'Sudan',
            city: "Hartum",
        }
    },
]


const newUser = {
    id: 5,
    name: "Donald",
    isStudent: true,
    address: {
        country: 'Sudan',
        city: "Hartum",
    }
}


const user3 = {...newUser, isStudent: false};
// const user4 = user3.map(u => u.id === 5 ? {...u, name: "Joe", address: {...u.address, city: "Minsk"}}: u)

console.log(user3.name) //почему не выводит в консоль ?







//????
// const users2 = {...users}
//
// const us = users2.find(u => u.id === 3)
// console.log(us.address.city) // почему не отображает ?
//
export function Connect (){
    return <h1>Connect</h1>
}
