// console.log("hello world")
// console.log("nikhil satyam")

// name = 'Nikhil satyam' 
// console.log(name)
// sentence = 'the moon looks pretty in the dark night'
// console.log(sentence)

//operators

// fruit = prompt('what is your favourite fruit ? ')
// console.log(fruit)
// food = Number(prompt('how much food you want'))
// console.log('amount of food', food)

// tipPercent = Number(prompt('tip %')/100)

// tipAmount = Number(food * tipPercent)

// total = food + tipAmount 

// console.log('tip =', tipAmount)
// console.log('total =', total)
// alert(tipAmount)

//user  input  = prompt 
// weather ⛈️🌦️🌧️
// let weather= prompt('what is the type of weather')

// if(weather == 'rainy'){
//   // console.log(' grab your umbrella ')
//   alert(' grab your umbrella ☔☔☔ ')
// }
// else{
//    console.log('grab sunglasses 🕶️🕶️🕶️')
//   alert('grab sunglasses 🕶️🕶️🕶️ ')
// }
//⚠️⚠️⚠️function starts ⚠️⚠️⚠️⚠️
// let name = prompt("what is your name")
// function Myname(name)
//   {

//     console.log(name)

//   }
// Myname(name) 

// function CallName(name,place)
//   {
//     console.log('hi my name is ' + name + ' and i am from ' + place)
//   }
// CallName("Nikhil" , "jharkhand")

// let name = prompt("what is your name  ")

// function findLove( name )
//   {
//    console.log(name)
//     if(name == 'vandana'){
//      love = ` Nikhil loves ${name} and he is gonna marry with ${name}`
//       console.log(love)
//     }
//    else 
//     {
//       console.log("nope ⚠️ ! i have to continue searching")
//     }
//   }
// findLove(name)

//⚠️⚠️⚠️⚠️functions of tip calcultor⚠️⚠️⚠️⚠️⚠️⚠️⚠️

// foodAm =Number( prompt("food amount = "))
// tip = Number(prompt("tip = "))
// function add (a, b){

//   sum = a+b 
//   return sum ;
// }

// // console.log(add(8,10))

// function TipCalc(food , tip)
//   {
//     tiPerct = tip/100 ;
//     tipAm = food * tiPerct ;
//     total = add(food,tipAm)
//     return total 
//   }
// console.log("total amount= " , TipCalc(foodAm , tip))

// //   ES6 OR ARROW FUNCTION ///
// a = Number(prompt())
// b =  Number(prompt())
// //arraow or ES6 function with explicit return //
// const SumArr = (a, b)=>
//   {
//     return (a+b)
//   }

// //arraow function with implicit return //

// const SumArrr = (a,b) => a+b

// console.log(SumArr(a,b), SumArrr(a,b))


///arrays///

// const fruit = ['🍌', '🍎', '🍊', '🥥'] 
// console.log(fruit)
// // console.log(fruit[2])
// // //grab 2nd index //

// fruit.push('🫐')
// console.log(fruit)
// console.log(fruit.slice(0,2))

// fruit.push('🍓')
// console.log(fruit)
// console.log(fruit.slice(0,5))

// array //
// let girlfriend = ['mariyam' ,'preeti','isha', 'puja','neha' ]
// // console.log("my grilfriend names are", girlfriend)

// // girlfriend.pop(girlfriend[5])
// // console.log(girlfriend)
// girlfriend.push('victoria lobov', 'muskan')
// console.log(girlfriend)
// console.log(girlfriend.slice(0,6))


// //objects //⚠️⚠️⚠️
// const n = 18
// function sum(n){
        
    
//     let add = n*n + n 
//     return add 
// }
// console.log(sum(n))

const numm = 6
const add = ( num2) =>
  {
    let sum = 0 
    let i 
    for( i=0;i<=num2;i++)
    {
      
        sum = sum+i ;
    
   
    } 
    console.log(sum);
  }
add(numm)

