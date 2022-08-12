let namasteButton = document.querySelector('button');

namasteButton.addEventListener('click', inputMsg);

function inputMsg(){

   let name = prompt('enter name of student');

   namasteButton.textContent= 'Roll no. 1: ' + name ;


}
//// LOOPS IN JAVASCRIPT  /////.⚠️⚠️⚠️⚠️

let animal = {
    name : "zebra" ,
    name2 : "tiger",
    age1 : 18,
    ag2: 12
};
//for in loops

for(let key in animal){
console.log(key);
}
console.log(animal.ag2)

//array
let names = ["ram", "shyam", "seeta","geeta", "laddu", "preeti" ];
for(let index in names) // for in loops
{
    console.log(index);
}

for(let i=0;i<6;i++)
{
console.log(names[i]);
}
for(let name of names){
    console.log(name);
}

let khana = ["puri", "rasogulla", "pantua", "samosa"];

// for of loop
for(let laddu of khana) 
{
    console.log(laddu);
}

//// ALSO WE HAVE "WHILE" ANS "DO WHILE " LOOPS ///⚠️⚠️⚠️⚠️⚠️




