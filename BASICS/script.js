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


//Math functions
// 1. Math.round()
console.log(Math.round(10.4));
// 2. Math.ceil()
console.log(Math.ceil(10.1));
// 3. Math.floor()
console.log(Math.floor(10.2));
// 5. Math.trunc()
console.log(Math.trunc(10.2343));
// 6. Math.pow()
console.log(Math.pow(5,2)); //5^2 = 25
// 7. Math.sqrt()
console.log(Math.sqrt(36));
// 8. Math.cbrt()
console.log(Math.cbrt(8));
// 9. Math.abs()
console.log(Math.abs(-8));
// 10.Math.max()
console.log(Math.max(10,67,90,25));
// 11.Math.min()
console.log(Math.min(10,67,90,25));
// 12.Math.random()
console.log(Math.random());//0 to 1
// 13.toFixed()
let a = 234.0987654
console.log(a.toFixed(0));

   