
---

# 📌Lecture 26 - Introduction  

Welcome to my **DSA Basics** documentation! 🚀  

This file serves as a daily log of my learning journey in **Data Structures and Algorithms (DSA)** as part of the **Sheryians Coding School Live Cohort**. I will be updating this file regularly with key concepts, example codes, and explanations.  

### 🛠 What You’ll Find Here:  
- ✅ JavaScript fundamentals for DSA  
- ✅ Key concepts with code snippets  
- ✅ Step-by-step problem-solving approaches  
- ✅ Logical and mathematical operations  
- ✅ Daily progress updates  

Let's dive into the world of **DSA** and strengthen problem-solving skills! 💡💻  

---

# 📌Lecture 27 - JavaScript Basics - DSA Notes

## 1. Sum of Two Integers
```js
let a = 10;
let b = 30;
console.log(a + b); // Output: 40
```

---

## 2. Relation Between Integer and String
### Some Rules:
1. **String + String = String (Concatenation)**
   ```js
   let a  = "hello";
   let b = "world";
   console.log(a + b); // helloworld
   console.log(typeof(a + b)); // string
   ```

2. **String + Int = String (Concatenation)**
   ```js
   let a = "hello";
   let b = 20;
   console.log(a + b); // hello20
   console.log(typeof(a + b)); // string
   ```

3. **Int + Int = Int (Arithmetic)**
   ```js
   let a = 20;
   let b = 10;
   console.log(a + b); // 30
   console.log(typeof(a + b)); // number
   ```

---

## 3. Accept and Print the Answer
1. **Printing a defined variable**
   ```js
   let age = 10;
   console.log(age);
   ```

2. **Taking input from the user**
   ```js
   let age = prompt("Enter your age");
   console.log(age);
   ```

---

## 4. Swap Two Variables (3 Methods)
### 1. **Using an Extra Variable**
   ```js
   let a = 10;
   let b = 20;
   
   let temp = a;
   a = b;
   b = temp;

   console.log(a, b); // 20 10
   ```

### 2. **Using Mathematical Calculation**
   ```js
   let a = 10;
   let b = 20;
   
   a = a + b; // 30
   b = a - b; // 10
   a = a - b; // 20
   
   console.log(a, b); // 20 10
   ```

### 3. **Using Destructuring (ES6 Feature)**
   ```js
   let a = 10;
   let b = 20;
   
   [a, b] = [b, a];
   console.log(a, b); // 20 10
   ```

---

## 5. Arithmetic Operators
1. **Modulo Operator**
   ```js
   console.log(10 % 2); // Output: 0
   ```

2. **Division with Floor Value**
   ```js
   console.log(Math.floor(10 / 3)); // Output: 3
   ```

---

## 6. Relational Operators
_Relational operators always return boolean values (true/false)._
```js
console.log(10 > 8);  // true
console.log(10 >= 8); // true
console.log(10 <= 8); // false
console.log(10 < 8);  // false
console.log(10 == 10); // true
console.log(10 === "10"); // false (Strict comparison checks type also)
console.log(10 != 10); // false
```

---

## 7. Logical Operators
```js
console.log(10 < 8 && 19 > 5 && 17 > 7); // false (AND operator)
console.log(10 > 8 || 19 > 5 || 17 > 7); // true (OR operator)
```
---

## 💡 Assignment - Lecture 27  

### 📝 **Topic:** Increment & Decrement Operators in JavaScript  

This assignment contains **JavaScript questions** focusing on **increment (`++`) and decrement (`--`) operators**, covering **basic, complex, and logical issues**.  

---

## **Questions & Expected Outputs**  

### **1️⃣ Increment and Decrement Operators**  
#### **Q1**  
```js
let i = 11; 
i = i++ + ++i; 
console.log(i); // Output: 24
```

#### **Q2**  
```js
let a = 11, b = 22, c; 
c = a + b + a++ + b++ + ++a + ++b; 
console.log("a=" + a); // Output: 13
console.log("b=" + b); // Output: 24
console.log("c=" + c); // Output: 103
```

#### **Q3**  
```js
let i = 0; 
i = i++ - --i + ++i - i--; 
console.log(i); // Output: 0
```

#### **Q4**  
```js
let b = true; 
b++;   
console.log(b); // Output: 2
```

---

### **2️⃣ Complex Increment and Decrement Operations**  
#### **Q5**  
```js
let i = 1, j = 2, k = 3; 
let m = i-- - j-- - k--; 
console.log("i=" + i); // Output: 0
console.log("j=" + j); // Output: 1
console.log("k=" + k); // Output: 2
console.log("m=" + m); // Output: -4
```

#### **Q6**  
```js
let a = 1, b = 2; 
console.log(--b - ++a + ++b - --a); // Output: -1
```

#### **Q7**  
```js
let i = 19, j = 29, k; 
k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++; 
console.log("i=" + i); // Output: 19
console.log("j=" + j); // Output: 28
console.log("k=" + k); // Output: -1
```
# 📌 Lecture 28 - JavaScript Math Functions & Problems 🚀

## ✨ Math Functions in JavaScript 🧮

### 1️⃣ **Rounding Functions** 🔢
```js
console.log(Math.round(10.4)); // 👉 Rounds to the nearest integer → 10
console.log(Math.ceil(10.1));  // 👉 Rounds up to the next integer → 11
console.log(Math.floor(10.9)); // 👉 Rounds down to the previous integer → 10
console.log(Math.trunc(10.2343)); // 👉 Removes decimal part → 10
```

### 2️⃣ **Power & Root Functions** ⚡
```js
console.log(Math.pow(5,2));  // 👉 5 raised to the power of 2 → 25
console.log(Math.sqrt(36));  // 👉 Square root of 36 → 6
console.log(Math.cbrt(8));   // 👉 Cube root of 8 → 2
```

### 3️⃣ **Absolute & Random Values 🎲**
```js
console.log(Math.abs(-8));  // 👉 Absolute (positive) value → 8
console.log(Math.max(10,67,90,25)); // 👉 Largest number → 90
console.log(Math.min(10,67,90,25)); // 👉 Smallest number → 10
console.log(Math.random()); // 👉 Random number between 0 and 1
```

### 4️⃣ **Fix Decimal Places 🔍**
```js
let a = 234.0987654;
console.log(a.toFixed(2)); // 👉 Keeps 2 decimal places → 234.10
```

---

## 💡 JavaScript Challenges & Solutions 

###  **1. Calculate Compound Interest 💰**
```js
let p = Number(prompt("Enter principle"));
let r = Number(prompt("Enter rate (%)"));
let t = Number(prompt("Enter time (years)"));

// 🔢 Formula: A = P * (1 + r/100)^t
let amount = p * Math.pow(1 + r/100, t);
let compoundInterest = amount - p;

console.log("Compound Interest: ", compoundInterest);
```

###  **2. OTP Generator 🔐**
```js
console.log(Math.floor(Math.random() * 9000 + 1000)); // 👉 Generates a 4-digit OTP
```

###  **3. Area of a Triangle (Heron's Formula) 📏**
```js
let a = Number(prompt("Enter first side"));
let b = Number(prompt("Enter second side"));
let c = Number(prompt("Enter third side"));

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("⚠️ Triangle is not possible!");
} else {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Area of Triangle: ", area);
}
```

###  **4. Circumference of a Circle 🔄**
```js
let r = Number(prompt("Enter radius"));
console.log("Circumference: ", 2 * Math.PI * r);
```
# 📌 Lecture 29 - JavaScript Conditionals 🚀

## ✨ Understanding Conditionals
Conditionals allow a program to make decisions based on conditions, executing different blocks of code accordingly.

---

## 🔹 **if Statement**  
Executes a block of code **only if** the condition is `true`.

**Syntax:**
```js
if (condition) {
    // Code executes if condition is true
}
```

**Example:**
```js
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

---

## 🔹 **if...else Statement**  
Runs one block **if the condition is true**, otherwise runs the `else` block.

**Syntax:**
```js
if (condition) {
    // Executes if condition is true
} else {
    // Executes if condition is false
}
```

**Example:**
```js
let number = 10;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
```

---

## 🔹 **Multiple if...else Statements**  
Used when checking **multiple conditions** in sequence.

**Syntax:**
```js
if (condition1) {
    // Executes if condition1 is true
} else if (condition2) {
    // Executes if condition2 is true
} else {
    // Executes if none of the above conditions are true
}
```

**Example:**
```js
let temperature = 30;
if (temperature > 35) {
    console.log("It's a very hot day!");
} else if (temperature > 25) {
    console.log("It's a warm day.");
} else {
    console.log("It's a cool day.");
}
```

---

✅ **Conditionals help control program flow by executing different blocks of code based on conditions.**

# 📌 Practice Questions - Conditionals in JavaScript

## 1️⃣ Find the Greatest Number
**Problem:** Accept two numbers and print the greatest between them.

```js
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));

if (a > b) {
    console.log(a + " is the greatest");
} else {
    console.log(b + " is the greatest");
}
```

---

## 2️⃣ Check Even or Odd
**Problem:** Accept an integer and check whether it is even or odd.

```js
let num = Number(prompt("Enter number"));

if (num % 2 == 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}
```

---

## 3️⃣ Check Voter Eligibility
**Problem:** Accept name and age from the user. Check if the user is a valid voter or not.

```js
let name = prompt("Enter Name");
let age = Number(prompt("Enter Age"));

if (age >= 18) {
    console.log(name + " you are a valid voter");
} else {
    console.log(name + " you are not a valid voter");
}
```

---

✅ **Practice these questions to strengthen your understanding of conditionals!** 🚀


---

## *📌 Keep Practicing & Happy Coding! 🚀*  

---

