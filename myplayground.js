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

// foodAm = Number( prompt("food amount = "))
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
// console.log(fruit[2])
// //grab 2nd index //

// fruit.push('🫐')
// // console.log(fruit)
// console.log(fruit.slice(0, 2))

// const person =
// {
//   name: 'Nikhil',
//   learning: 'Node js',
//   skills: 'C++ ,C,JavaScriprt ',
//   phone: 9123248814
// }

// console.log(person)
// person.wpNum = '9631733112'
// console.log(person['wpNum'])
// console.log(person)

// const per = (name, tshirt, number) => {
//   const pes = {
//     name: name,
//     tshirt: tshirt,
//     number: Number

//   }
//   const about = `hello 👋! my name is ${name} and i am wearing ${tshirt} tshirt and my phone number is ${number}`
//   return about
// }
// console.log(per('Nikhil', 'pink', '9631733112'))
// console.log("we are in identity function")
// const identity = (name, no, colour, course) => {
//   const person = {
//     name: name,
//     no: no,
//     colour: colour,
//     course: course
//   }
//   const add = name + no + colour + course
//   return add;
// }
// const nam = Number(514)
// const no1 = Number(543)
// const colour1 = Number(773)
// const course1 = Number(780)

// console.log("add =", identity(nam, no1, colour1, course1))
// // let loda = prompt("hello world enter some thing")
// // console.log(loda)

// const introduce = (name, nation) => {
//   const networth =
//   {
//     name: name,
//     nation: nation,
//     shop: 1200000,
//     vehicle: 3000000,
//     land: 10000000,
//     loan: 5000000,
//     net: function() {
//       return (this.shop + this.vehicle + this.land + this.loan)
//     }
//   }
//   const intro = `hello my name is ${name} , i am from ${nation} and i have a shop of ${networth.shop}$ value and vehicle of ${networth.vehicle}$ value and land of ${networth.land}$ and ${networth.loan}$ and after that my networth is ${networth.net()}$ USD `
//   return intro;
// }

// // console.log(introduce("Pushpinder", "India"))
// let ne = 89748
// let ueiu = "9333"
// console.log(typeof (ne + ueiu))
// console.log(Number("12"))

// kar = 897 ;
// heh = 7386;
// sum = kar + heh 
// console.log(sum)
// /array⚠️⚠️⚠️⚠️⚠️⚠️
// const arr = ['😘','👋','⚠️','🍊','🥥','🫐','🤔','🧑‍💻','💻','🥥']

// for(const any of arr)
//   {
//     console.log(any)
//   }
// let a = [1,2,3,4,5,6,7,8,9]
// let  sum
// // for(let i=0 ; i<a.length;i++)
// //   {
// //    sum = sum + a[i]
// //   }
// // console.log(sum)
// const arr = []
// for(const le of a)
//   {

//     arr.push(le*2)

//   }
// // for(const ep of arr)
// //   {
// //     console.log(ep)
// //   }
// for(let i=0;i<arr.length;i++)
  // {
  //   console.log(i, arr[i])
  // }

//   const funto = (number) =>
//     {
//       let result = []
//       for(let vani of number ){
//         result.push(vani*2)
//       }
//       return result 
//     }

// console.log(funto([12,13,14,15,16,17,18,19,20]))
// const sum =(numbera) =>{
//   let add = 0;
//   for(let i=0;i<numbera.length; i++)
//     {
//       add += numbera[i]
//     }
//   return add ;
// }

// console.log(sum([1,2,3,4,5]))


//   const squ= (number) =>
//     {
//       let nea = []
//       for(let i=0 ; i<number.length;i++ ){

//       nea.push(number[i]*number[i])

//       }
//       return nea
//     }
// console.log(squ([2,3,4,5,6,7,8,9]))
// 
// in count words 
//print words

// const countWord = () => {
 
//   let result = 0;
//   for (letter in words) {
//     console.log(Number(letter) + 1)
//     result = Number(letter) + 1
//   }
//   for (letter of words) {
//     console.log(letter)
//   }
  
// }
//   const words = prompt("inter your words")
// console.log(countWord(words));
// console.log(words.length)

// const inputArray = [12,63,34,65,334,677];
// const size = 5; //Maximum Array size

// for(let i=0; i<size; i++) {
	
// 	//Taking Input from user
// 	inputArray[i] = Number(prompt('Enter Element ' + (i+1)));
// }

//Print the array in the console.
// const inputArray = [1,2,3,4,5]
// const sumArr = (numbers) => {
//   let result = 0;
  
//   for(let number of numbers)
//     {
//       console.log(number)
//       result = Number(result) + Number(number) 
//     }
//   return { result }
// }


// const max = (nums) => 
//   {
//     let result = nums[0] ;
//     for(let i=0; i<6; i++){
//       if(nums[i] > result){
//         result = nums[i]
//       }
//     }
//     return result
//   }
// // console.log(max(inputArray))
// const frequency = (phrase) =>
//   {
//     let frequency = {}
//     console.log(phrase)
//     for(let letter of phrase){
//      if(letter in frequency){
//        frequency[letter] ++
//      }
//       else {
//         frequency[letter] =1 
//       }
//     }
//     return frequency
//   }
// console.log(frequency('what are you doing bro'))


// const wordfreQ = (words) => {
//   let phrase = {}
//   ket = words.split(' ')
//   console.log(ket)
//   for(let word of ket){
//     if(word in phrase){
//       phrase[word]++
//     }
//     else {
//       phrase[word] = 1
//     }
//   }
//   return phrase
// }
// console.log(wordfreQ('hello what what are you saying are you saying hello'))



// const saying = (names) => 
//   {
//     let phrase = {}
//     const nam = names.split(' ')
//     for(let word of nam)
//       {
//         if((word in phrase) > 1)
//         {
//           phrase[word]++
//         }
//         else {
//           phrase[word] = 1
//         }
//       }
//     return phrase
//   }
// console.log(saying(prompt("enter names")))
// const saying = (names) => 
//   {
//     const words = names.split(' ')
//   return frequency(words)
//   }
// console.log(saying(prompt("enter names")))


// 😘😘⚠️⚠️⚠️//
//higher order functions ///
// ['krish', 'suyash','rahul'].map(number => {
//   console.log(number)
//   console.log('bhosdike')
// }
                              
//                )

///mapppinggggg//
// let result = [1,2,3,4,5].map(number => number*2)
// console.log(result)

// const double = (numbers)=>
//   {
//     return numbers.map(number => number * 2)
//   }
// console.log(double([11,22,33,44]))

// const filter = (numbers, max) =>
//   {
//     let neAr= [];
//     for(let number of numbers)
//     {
//       if(number > max){
//         neAr.push(number)
//       }
//     }
//     return neAr
//   }
// // console.log(filter([1,2,3,4,5,6] , 3))
// const nums = [12,14,52,8,5,3,5,09,34,53]
// console.log(nums.filter(num => num > 6))
// const nums = ["hello" , "mango", "apple" , "fruit"]
// toString(nums)
// console.log(nums)
// const size = Number(prompt("enter the size of array"))
// const arr = [size]
// for(let i =0 ; i<size; i++){
//   arr[i] = Number(prompt("enter" +(i+1)+"elements"))
// }
// console.log(arr)
// console.log(arr.filter(num => num > 2 && num > 3))
// console.log(arr.map(arr => arr*9))

const actor = [
  {name : 'ritik', networth : 100000},
  {name :'kangana' , networth : 200000},
{name : 'virat' , networth : 1999999},
]

let result = actor.filter(kya => kya.networth > 100000  )
console.log(result)


playground.innerHTML = `<h1>lerando</h1>`