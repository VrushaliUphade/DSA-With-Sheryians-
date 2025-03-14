
---

## 📌 Introduction  
### Lecture 26
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

# JavaScript Basics - DSA Notes
### Lecture 27
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

# 📌 Assignment - Lecture 27  

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

---
**📌 Keep Practicing & Happy Coding! 🚀**  

---

