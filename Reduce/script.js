const number=[1,2,3,4,5]


// const total=number.reduce((accumulator,currentValue)=>  accumulator+currentValue)
// const total=number.reduce((accumulator,currentValue)=>  accumulator+currentValue,5)

// console.log(total)



const basket=[
    {
        name:"Apple macbook pro",
        price : 2500
    },
    {
        name:"Apple watch",
        price : 7500
    },
    {
        name:"Apple gold",
        price : 5500
    }
]
console.log(basket.reduce((accumulator,currentValue)=>accumulator+currentValue.price,0))