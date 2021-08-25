// bind call apply method
var john ={ 
    name: 'john',
    age : 26,
    job : 'teacher',
    presentation : function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ' , ladies and gentlemen I\'m ' + this.name 
            + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.')
        }else if(style === 'friendly'){
            console.log('Hey what\'s up?  I\'m ' + this.name 
            + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }

}

john.presentation('friendly', 'evening');





































































// closures exercise

  
// function interviewQuestions(job){
//     var a = 'Wow you are a ' ;
//     var b = '!, can you please explain what UX design is ';
//     var c = 'What subject do you teach? ';
//     var d =  ' what do you do?';
//     return function(name){
//         if(job === 'designer'){
//                 console.log(a + job + b + name + ' ?');
//         }else if(job === 'teacher'){
//                 console.log(c + name + ' ?');
        
//         }else{       
//                 console.log('Hello ' + name + d);
//         }
//     } 
// }


// var teacherQuestions = interviewQuestions('teacher');
// teacherQuestions('Almuhandis');
// var designerQuestions = interviewQuestions('designer');
// designerQuestions('Mr. Negative');
// var noJobQuestions = interviewQuestions();
// noJobQuestions('adam');
// interviewQuestions('teacher')('karofi');





// function retirement(retirementAge){
//     var  a = ' years left until retirement.';
//     return function(yearOfBirth){
//         var age = 2021 - yearOfBirth;
//         console.log((retirementAge - age) + a ); 
//     }
// }
// var retirementUs = retirement(66);
// retirementUs(1999);
// var retirementGermany = retirement(65);
// retirementGermany(1999);
// var retirementIceLand = retirement(67);
// retirementIceLand(1999);




// lecture : IIFE
// function game(){
//     var score = Math.random()*10;
//     console.log(score >= 5);

// } 
// game(); 
// ( function(){
//         var score = Math.random()*10;
//         console.log(score >= 5);
 
//     }
// )();
// ( function(goodLuck){
//         var score = Math.random()*10;
//         console.log(score >= 5 - goodLuck);
 
//     }
// )(5);
 



// functions returning functions
// var studentLevel , studentName, studentProgram;
// function examQuestions(level, program){
//     if(level == 100 && program === 'computer'){
//         return function(name){
//             console.log('Hi ' + name + ' Define with example the term computer');
//         }
//     }else if (level == 100 && program === 'physics'){
//         return function(name){
//             console.log('Hi! ' + name + ' please tell us what do you understand by the term experiment ');
//         }
//     }else if (level == 100 && program === 'mathematics'){
//         return function(name){
//             console.log('Hi! ' + name + ' differentiate betwen quadratic and linear equation');

//         }
// }else if(level == 100 && program === 'laboratory science'){
//     return function(name){
//         console.log('HI ' + name  + ' define the term chemical hazard ');
//     }
// }else{
//     return function(name){
//         console.log('Hi ' + name + ' please choose your program');
//     }
// }
// }

// document.querySelector('.btn-submit').addEventListener('click' , function(e){
//     e.preventDefault();
//      studentLevel = document.getElementById('student-level').value;
//      studentProgram = document.getElementById('student-program').value;
//      studentName = document.getElementById('student-name').value;
//      examQuestions(studentLevel, studentProgram)(studentName);
// });
//examQuestions(studentLevel, studentProgram)(studentName);


// function interviewQuestions(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is? ');
//         }
//     }else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach? ' + name + ' ?');
//         }
//     }else{
//         return function(name){
//             console.log('Hello ' + name + ' what do you do?');
//         }
//     }
// } 
// var teacherQuestions = interviewQuestions('teacher');
// teacherQuestions('Almuhandis');
// var designerQuestions = interviewQuestions('designer');
// designerQuestions('Mr. Negative');
// var noJobQuestions = interviewQuestions();
// noJobQuestions('adam');
// interviewQuestions('teacher')('karofi');


// passing functions as arguments
// var dailySavings = [1000,2000,900,8000,7000,3000,7440,400,200];
// function calcArr(arr, fn){
//     result = [];
//     for(var i = 0 ; i < arr.length ; i++){
//         result.push(fn(arr[i]));
//     }
//     return result;
// }
// function maxSavings(el){
//     if(el >= 4000){
//         return el;
//     }else{
//         return 'low saving';
//     }

   
// }
// function addition(el){
//     return el + 2000;
// }
// var extraCash = calcArr(dailySavings, addition );
// var total = calcArr(extraCash, maxSavings);

// console.log(total);
// console.log(extraCash);

// var years = [1999,2000,1992,1989,2011];
// function arrCal(arr, fn){
//     arrRes = [];
//     for(var i =0 ; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
 
//     return arrRes;
// }
// function calculateAge(el){
//     return 2021 - el;
// }
// function isFullAges(el){
//     return el >= 18;
// }
// function maxHeartRate(el){
//     if(el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     }else{
//         return -1;
//     }
// }

// var ages = arrCal(years, calculateAge);
// var fullAges = arrCal(ages, isFullAges);
// var heartRates = arrCal(ages, maxHeartRate);
// console.log(fullAges);
// console.log(ages);
// console.log(heartRates);



//primitives vs objects
// // primitives
// var a = 23 ;
// var b = a;
// a = 46
// console.log(a,b);

// //objects
//  var obj1 = {
//      name : 'john',
//      age : 23
//  };
// var obj2 = obj1;
// obj1.age = 34;
// console.log(obj1, obj2);

// // functions 
// var age = 27;
// var obj = {
//     name : 'jonas',
//     city : 'lisbon'
// };
// function change(a,b){
//     a = 30;
//     b.city = 'san fransisco';
// }
// change(age, obj);
// console.log(age, obj.city);
// // object.create
// var personProto = {
//     calculateAge : function(){
//         console.log(2021 - this.yearOfBirth);
//     }
// };
// var john = Object.create(personProto);
// john.name = 'john';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
// var jane = Object.create(personProto, {
//     name : { value : 'jane'},
//     yearOfBirth : {value : 1998},
//     job : {value : 'designer'}
// })



// function constructor
// var Student = function(department, program, level, regNo,
//      phoneNumber, email, yearOfbirth){
// this.department = department;
// this.program = program;
// this.level = level;
// this.regNo = regNo;
// this.phoneNumber = phoneNumber;
// this.email = email;
// this.yearOfbirth = yearOfbirth;
// }
// Student.prototype.calculateAge = function(){
//     this.age = 2021 - this.yearOfbirth;
// }
// var sadik = new Student ('Mathematical science', 'software engineer',
// '200', 'NAS/STE/19/1015','08052236547', 'sadik@gmail.com', 1996);
// var adam = new Student ('Mathematical science', 'software engineer',
// '200', 'NAS/STE/19/1167','08052236547', 'adam@gmail.com', 1998);
// var salga = new Student ('Mathematical science', 'software engineer',
// '200', 'NAS/STE/19/1081','08052236547', 'salga@gmail.com', 1995);
// var yahaya = new Student ('Mathematical science', 'software engineer',
// '200', 'NAS/STE/19/1043','08052236547', 'yahaya@gmail.com', 2000);
// var anas = new Student ('Mathematical science', 'software engineer',
// '200', 'NAS/STE/19/1067','08052236547', 'anas@gmail.com', 1999);

// sadik.calculateAge();
// adam.calculateAge();
// salga.calculateAge();
// yahaya.calculateAge();
// anas.calculateAge();




