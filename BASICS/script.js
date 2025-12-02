// 1.sum of two integer
// let a = 10;
// let b = 30;
// console.log(a+b);
// output ---> 40

// 2.Relation between integer and string
//  some rules
//    1. string + string = string (concatenation)
//     let a  = "hello";
//     let b = "world";
//     console.log(a+b);
//     console.log(typeof(a+b));

//    2. string + int = string (concatenation)
//    let a = "hello";
//    let b = 20;
//    console.log(a+b);
//    console.log(typeof(a+b));

//    3. int + int = int (Arithmatic)
//    let a = 20 ;
//    let b = 10;
//    console.log(a+b);
//    console.log(typeof(a+b));

// 3.Accept and print the answer
//   1. let age  = 10;
//      console.log(age);

//   2. let age = prompt("Enter a age");
//      console,log(age);   

// 4.Swap two variables via 3 methods
//    1. with extra variable
//    let a = 10;
//    let b = 20;
   
//    let temp = a;
//    a = b;
//    b = temp;

//    console.log(a , b);
  
//   2. with mathamathecal calculation
//     let a = 10;
//     let b = 20;

//     a = a + b; //30
//     b = a - b; //10
//     a = a - b; //20

//     console.log(a,b);

//   3. 
//    let a = 10;
//    let b = 20;

//    [a , b] = [b ,a]
//    console.log(a,b);

// 5.Arithmatic Operators
//    1.mode
//    console.log(10%2);
//    2.divide
//     console.log(Math.floor(10/3));

// 6. Relational Operators
//  //Relational always return boolean -> true/false
//     console.log(10>8); //true
//     console.log(10>=8); //true
//     console.log(10<=8); //false
//     console.log(10<8); // false
//     console.log(10==10); //true
//     console.log(10==="10"); //false
//     console.log(10!=10); //false

// 7. Logical Operators
//     console.log(10<8 && 19>5 && 17>7);//false
//     console.log(10>8 || 19>5 || 17>7); //true


// //Math functions
// // 1. Math.round()
// console.log(Math.round(10.4));
// // 2. Math.ceil()
// console.log(Math.ceil(10.1));
// // 3. Math.floor()
// console.log(Math.floor(10.2));
// // 5. Math.trunc()
// console.log(Math.trunc(10.2343));
// // 6. Math.pow()
// console.log(Math.pow(5,2)); //5^2 = 25
// // 7. Math.sqrt()
// console.log(Math.sqrt(36));
// // 8. Math.cbrt()
// console.log(Math.cbrt(8));
// // 9. Math.abs()
// console.log(Math.abs(-8));
// // 10.Math.max()
// console.log(Math.max(10,67,90,25));
// // 11.Math.min()
// console.log(Math.min(10,67,90,25));
// // 12.Math.random()
// console.log(Math.random());//0 to 1
// // 13.toFixed()
// let a = 234.0987654
// console.log(a.toFixed(0));

//    //Q.1 Calculate Compound Intrest

//    let p = Number(prompt("Enter principle"))
//    let r = Number(prompt("Enter a rate"))
//    let t = Number(prompt("Enter a time"))

//    //logical part
//    // A = P * (1 + r/100)^t
//    // CP = A-P

//    console.log((p * Math.pow(1 + r/100,t)) - p);
   
//    //Q.2 OTP Genrater
//    console.log(Math.floor(Math.random() * 9000 + 1000)); //1000 to 9000 
   
//     //Q.3 area of triangle by heron's formula
//     let a = Number(prompt("Enter first number"))
//     let b = Number(prompt("Enter second number"))
//     let c = Number(prompt("Enter third number"))

// if(a+b <= c || a+c<=b || c+b<=a ){
//     console.log("not possible");
// }else{
//     let s = (a+b+c)/2
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c))); //3 4 5 = 6
// }
  
  //Q.4 Circumference of circle
  // let r = Number(prompt("Enter a number"))
  // console.log(2*Math.PI*r);
  
//  //conditionals statements
// if
// let age = 20;
// if (age >= 18) {
//     console.log("You are eligible to vote.");
// }

//  //if-else
// let number = 10;
// if (number % 2 === 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// //if else-if else
// let temperature = 30;
// if (temperature > 35) {
//     console.log("It's a very hot day!");
// } else if (temperature > 25) {
//     console.log("It's a warm day.");
// } else {
//     console.log("It's a cool day.");
// }

// // Practice Questions

// //1.Accept two numbers and print the greatest between them
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));

// if(a>b){
//   console.log(a+ " is greatest");
// }else{
//   console.log(b+ " is greatest");
// }

//  //2.Accept an integer and check whether it is an even number or odd.
  
//    let num = Number(prompt("Enter number"));
//    if(num % 2 == 0){
//     console.log("Number is even");
//    }else{
//     console.log("Number is odd"); 
//    }

//  //3.Accept name and age from the user. Check if the user is a valid voter or not.
//    let name = prompt("Enter Name");
//    let age = Number(prompt("Enter Age"));

//    if(age>=18){
//     console.log(name+ " You are a valid voter");
//    }
//    else{
//     console.log(name+ " You are not a valid voter");
//    }

 //4.Accept three numbers and print the greatest among them.

//  //5. Accept a year and check if it a leap year or not (google to find what's leap year) 
//     let year = Number(prompt("Enter Year"));
//     let isLeap = false;

//     if (year%4==0) {                       
//        if(year%100==0){
//         if(year%400==0) isLeap = true      
//          else isLeap = false             
//        }else{
//        isLeap =true                
//        }
//        }else isLeap = false              
//      console.log(isLeap? "leap year": "not a leap year");
 //6. Shop discount - Description on Graphic

 //7. Bijli Bil - Description on Graphic


//DAY 5
 ////loop practice questions
 //Accept an integer and Print hello world n times
// let n = Number(prompt("Enter the number"));
// for(let i = 1; i<=n;i++){
//   console.log("Hello Worlds");
// }


 //Print natural number up to n.
// let n = Number(prompt("Enter the number"));
// for(let i = 1;i<=n;i++){
//   console.log( i);
// }

//  //Reverse for loop. Print n to 1.
//  let n = Number(prompt("Enter the number"));
// for(let i=n;i>=1;i--){
//   console.log(i); 
// }


 //Take a number as input and print its table
//  //5*1=5
//  //5*2=10..up to 10 terms
// let n = Number(prompt("Enter the number"));
// for(let i = 1;i<=10;i++){
//   console.log(n*i);  
// }


//  //sum up to n terms.
// let n = Number(prompt("Enter a number"))
// let sum = 0;
// for(let i = 1;i<=n;i++){
//   sum = sum + i;
// }
// console.log(sum);


//  //Factorial of a number
// let n = Number(prompt("Enter a number"))
// let fact = 1;
// for(let i = 1;i<=n;i++){
//  fact =  fact * i;
// }
// console.log(fact);



//  //Print the sum of all even & odd numvers in a range seperately.
// let n = Number(prompt("Enter a number"));
// let evenSum = 0,oddSum =0;
// for(let i = 1;i<=n;i++){
//   if(i%2==0) evenSum = evenSum + i;
//   else oddSum = oddSum + i;
// }
// console.log("Even sum"+ evenSum);
// console.log("Odd sum"+ oddSum);


//  //Print all the factors of a number.
// let n = Number(prompt("Enter a number"));
// for(let i = 1;i<=n/2;i++){
//   if(n%i==0) console.log(i);
// }
// console.log(n);



//  //Check if the number is Prime or not.
// let n = Number(prompt("Enter a number"));
// let isPrime = true;
// for(let i = 2;i<=n/2;i++){
//   if(n%i==0){
//     isPrime = false;
//     break;
//   }
// }
// if(isPrime) console.log("Prime Number");
// else console.log("No Prime Number");

//  //Write a program to take two inputs a,b & find the value of a raised to the power of b.
//  //Ex-a=2,b=5
//  //op-2^5=32
//  //way1
// let a = Number(prompt("Enter a number a"));
// let b = Number(prompt("Enter a number b"));
// let ans = a**b;
// console.log(ans);

// //way2
// let a = Number(prompt("Enter a number a"));
// let b = Number(prompt("Enter a number b"));
// let ans = Math.pow(a,b);
// console.log(ans);


////DAY 6
 //break and continue
 //While loop
//  //Q.sum of digit
// let n = Number(prompt("Enter the number"));
// let sum = 0;
// while(n>0){
//   let rem = n%10;
//   sum = sum + rem;
//   n = Math.floor(n/10);
// }
// console.log(sum);


//  //Q.reverse of number
// let n = Number(prompt("Enter the number"))
// let rev = 0;
// while(n>0){
//   let rem = n%10;
//   rev = (rev * 10)+rem;
//   n = Math.floor(n/10)
// }
// console.log(rev);


 ////Q.Automorphic number
// let n = Number (prompt("Enter a number"));
// let copy = n;
// let sq = n * n;
// let count = 0;
// while(n>0){
//   count ++;
//   n = Math.floor(n/10)
// }
// if(sq%Math.pow(10,count)==copy) console.log("Automorphic Number");
// else console.log("Not Automorphic Number");


// // switch case

// let n = Number(prompt("Enter a number"));
// switch(n){
//   case 1 : console.log("Monday");
//   break
//   case 2 : console.log("Tuesday");
//   break;
//   case 3 : console.log("Wednesday");
//   break;
//   case 4 : console.log("Thusday");
//   break;
// default : ("Nothing")
// }

// for(let i = 1;i<=5;i++){
//  process.stdout.write("*")
// }












