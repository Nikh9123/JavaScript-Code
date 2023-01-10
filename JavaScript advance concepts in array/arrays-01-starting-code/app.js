const number = [1, 2, 3];
console.log(number);

//low performance creating array techniques🥺
const moreNumbers = new Array(5);
console.log(moreNumbers);
const moreNumbers1 = Array(5);
console.log(moreNumbers1);
const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers);


// //technique to convert array like objects in real arrays ⚠️⚠️⚠️
 const moreNumbers = Array.from([1, 2, 3]);
 console.log(moreNumbers);

//split string into characters
const moreNumber1s = Array.from('hii!');
console.log(moreNumber1s);

//passing html elements to an array⚠️⚠️
const listItems = document.querySelectorAll('li');
console.log(listItems);
const arraylistItems = Array.from(listItems);
console.log(arraylistItems);

// // //storing in arrays 📥📥📥
// // const hobbies = ['cooking', 'playing'];
// // const personalData = [30, 'Max', { moreDetail: [] }];
// // console.log(personalData);
// // //{moreDetail : []} we can also paas objects as array in array

// // const analyticsData = [
// // 	[1, 1.6],
// // 	[-5.4, 2.1],
// // 	['Nikhil', 'Laddu']
// // ];

// // for (const data of analyticsData) {
// // 	for (const dataPoint of data) {
// // 		console.log(dataPoint);
// // 	}
// // }
// console.log(analyticsData[1]);
//methods with array⚠️⚠️⚠️
// const hobbies = ['sports','hobbies'];
// // hobbies.push('reading');

// for(let i= hobbies.length-1 ;i > 0 ; i--)
// {
//     hobbies[i+1] = hobbies[i];
// }
// hobbies.length+1 ;
// hobbies[0]= 5 ;

// hobbies.unshift('coding');//shift all elements to  right
// const poppedvalue= hobbies.pop();
// hobbies.shift('novel');//shift all elements to  left

// replacing Elements
// hobbies[1] = 'kabbadi';
hobbies.push('kabbadi','cricket');

// console.log('beforesplice',hobbies);

// //ssplice can only be used with real arrays⚠️⚠️⚠️
// hobbies.splice(0, 0, 'good food');//adding elemnt at 0 th index
// hobbies.splice(1 , 0 , 'betterLife');//adding elemnt at 1 th index
// console.log('after using splice as inseting and deleting',hobbies);
// // hobbies.splice(0,1);//first ekement will be deleted starting form 0th index
// // hobbies.splice(1,1);//first ekement will be deleted starting form 1st index
// // hobbies.splice(3)//3 element bbachega starting se baki delete hojayga
// // const removedElements = hobbies.splice(0,1);//splice also return
// // console.log('removedElements',removedElements);

// //alsoe work with negative indexes for negative indexes it will start count from the last elements
// const removedElements = hobbies.splice(-1,1);
// console.log(hobbies);

//special methods of array in js 🤝🤝
//slice method✂️✂️✂️

//slice can return multiple array elements by defining their ranges
// const testResults = [1,5.3,1.5,10.99,-5,10];
// console.log('sliced array',testResults.slice());
// const storedResults = testResults.slice() ; //copy the array element based on thier address
// // testResults.splice(-1,0 ,'football');
// // console.log(testResults.slice());
// console.log('equal stored elements in a variable', storedResults);

// const slicedArray = testResults.slice(0,2);//output = sliceArray elemnts form 0 to < 2 index
// console.log('slicedArray b/w range',slicedArray);

// const negativeIndexslicedArray = testResults.slice(-3,-1);//output = sliceArray elemnts form last 3rd to < 1 index
// console.log('negativeIndexslicedArray slicedArray b/w range',negativeIndexslicedArray);

// const oneIndexSlice = testResults.slice(2);
// console.log(oneIndexSlice);//output element after 2nd index

//✂️✂️concat() method⚠️⚠️⚠️
//a bit like push method add arrays at end
// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];

// const storedResults = testResults.concat([1, 2, 3, 4, 5]);
// console.log(storedResults);

//retriving array elements ⚠️⚠️⚠️
//methhods = index0f() , lastindexof()⚠️⚠️⚠️
// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));

// console.log("include mehtod" ,testResults.includes(9.8));
// console.log("include mehtod" ,testResults.includes(1.5));




// const personData = [
// 	2,
// 	{ name: 'NIKHIL', age: 20, work: 'student' },
// 	{ name: 'Manual' }
// ];
// // console.log(personData.indexOf({name : 'NIKHIL'}))//return -1 does'nt work with objects

// //find and findeIndex() method⚠️⚠️⚠️
// //find takes another anonymss functiion as a argument
// const manuel = personData.find((person, idx, persons) => {
// 	return person.name === 'Manual';
// });
// manuel.name = 'Laddu';
// console.log('mannuel', manuel);
// console.log(personData);

// const nikhilIndex = personData.findIndex((person, idx, persons) => {
// 	return person.name === 'NIKHIL';
// 	// return person.age === 20
// });
// console.log('NIKHIl', nikhilIndex);
// console.log(personData);



//for each method ⭐⭐⭐
// const prices  = [10.99 , 5.99 ,3.99 , 6.59];
// const tax = 0.19 ;
// const taxAdjustPrices = [];

// // for(const price of prices)
// // {
// //     taxAdjustPrices.push(price *(1 + tax));
// // }
// prices.forEach((price , idx , prices) =>{
// const priceObj = {index:idx , Taxprice:price *(1 + tax)};
// taxAdjustPrices.push(priceObj);
// });

// console.log(taxAdjustPrices);


//map method
const prices  = [10.99 , 5.99 ,3.99 , 6.59];
// const tax = 0.19 ;

// prices.map((price , idx , prices) =>{
// const priceObj = {index:idx , Taxprice:price *(1 + tax)};
// return priceObj ;
// });

// console.log(prices);


//sorting method
const sortedPrices = prices.sort((a,b) => {
if(a > b)
{
    return 1 ;
}
else if(a === b)
{
    return 0 ;
}
else 
{
    return -1 ;
}
});
console.log(sortedPrices);
console.log(sortedPrices.reverse());
// console.log('using logic'); 

// for(let i = sortedPrices.length -1 ; i >= 0 ; i--)
// {
//     console.log(sortedPrices.join(' '));
// }

//arraow function shine
const filteredArray = prices.filter(price  => price > 6 );
console.log(filteredArray);


// let sum = 0 ;
// prices.forEach((price , idx , prices) => 
// sum += price 
// );
// console.log(sum);
const sum = prices.reduce((preValue , curValue ) =>  preValue + curValue , 0);
console.log(sum);

//split method ⭐⭐⭐
const data = 'new york ; 10.99;2000';
const transformData = data.split(';');
// transformData[1] 
console.log(transformData);

//join method convvetr everything in string;
const nameFragments = ['Max', 'Nikhil', 'Kirti', 'Rupesh'];
const names = nameFragments.join(' ');
console.log(names);

