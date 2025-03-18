# JavaScript Interview Cheat Sheet

## 1. Variables
- `var`: Function-scoped, hoisted, can be redeclared.
- `let`: Block-scoped, not hoisted, cannot be redeclared.
- `const`: Block-scoped, not hoisted, cannot be redeclared or reassigned.

## 2. Data Types
- **Primitive**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **Reference**: `object`, `array`, `function`.

## 3. Functions
- **Declaration**: `function foo() {}`
- **Expression**: `const foo = function() {}`
- **Arrow Function**: `const foo = () => {}`
- **Default Parameters**: `function foo(a = 1) {}`
- **Rest Parameters**: `function foo(...args) {}`
- **Spread Operator**: `foo(...arr)`

## 4. Scope and Closures
- **Scope**: Where variables are accessible.
  - Global, function, block.
- **Closure**: A function that remembers its lexical scope even when executed outside that scope.

```javascript
function outer() {
  const x = 10;
  return function inner() {
    console.log(x);
  };
}
```

## 5. Objects
- **Create**: `const obj = { key: "value" }`
- **Access**: `obj.key` or `obj["key"]`
- **Methods**: `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`
- **Prototype**: `obj.__proto__` or `Object.getPrototypeOf(obj)`

## 6. Arrays
- **Create**: `const arr = [1, 2, 3]`
- **Methods**:
  - `map`: Transform elements.
  - `filter`: Filter elements.
  - `reduce`: Accumulate values.
  - `forEach`: Iterate without returning.
  - `slice`: Copy a portion.
  - `splice`: Add/remove elements.

## 7. Asynchronous JavaScript
- **Callbacks**:

```javascript
function foo(callback) {
  setTimeout(callback, 1000);
}
```

- **Promises**:

```javascript
const promise = new Promise((resolve, reject) => {
  if (success) resolve(value);
  else reject(error);
});
promise.then().catch();
```

- **Async/Await**:

```javascript
async function foo() {
  const result = await somePromise();
}
```

## 8. DOM Manipulation
- **Select Elements**:
  - `document.getElementById("id")`
  - `document.querySelector(".class")`
- **Modify Elements**:
  - `element.textContent = "text"`
  - `element.style.color = "red"`
- **Event Handling**:

```javascript
element.addEventListener("click", () => {});
```

## 9. Error Handling
- **Try...Catch**:

```javascript
try {
  riskyCode();
} catch (error) {
  console.log(error);
}
```

## 10. ES6+ Features
- **Template Literals**: `` `Hello, ${name}!` ``
- **Destructuring**:

```javascript
const { a, b } = obj;
const [x, y] = arr;
```

- **Modules**:

```javascript
import { foo } from "./module.js";
export default foo;
```

- **Classes**:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
```

## 11. Event Loop
- **Single-threaded**: JavaScript runs one task at a time.
- **Event Loop**: Handles asynchronous tasks.
- **Microtasks**: Promises, `queueMicrotask`.
- **Macrotasks**: `setTimeout`, `setInterval`.

## 12. Functional Programming
- **Pure Functions**: No side effects, same input → same output.
- **Higher-Order Functions**: Functions that take/return other functions.
- **Currying**:

```javascript
const add = (a) => (b) => a + b;
add(2)(3); // 5
```

## 13. Memory Management
- **Garbage Collection**: Automatically frees unused memory.
- **Memory Leaks**: Caused by unused references (e.g., global variables, forgotten timers).

## 14. Performance Optimization
- **Debouncing**: Delay execution until after a pause.

```javascript
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}
```

- **Throttling**: Limit how often a function can run.

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

## 15. Security
- **XSS**: Sanitize user input to prevent malicious scripts.
- **CSRF**: Use tokens to validate requests.

## 16. Theoretical Topics
- **Hoisting**: Variables and functions are moved to the top of their scope before execution.
- **Prototype Chain**: Objects inherit properties from their prototype.
- **Event Bubbling & Capturing**: Determines how events propagate through the DOM.
- **Lexical Scope**: Determines variable accessibility based on where functions are defined.
- **Shadowing**: Local variables overriding global variables.
- **Module Systems**: `CommonJS` (Node.js) vs `ES Modules` (Browser).
- **Execution Context**: Creation and execution phases of JavaScript.
- **Web Storage**: `localStorage`, `sessionStorage`, `cookies`.

## 17. Common Interview Questions
- **Explain `this`**:
  - `this` refers to the object calling the function.
  - In arrow functions, `this` is lexically scoped.
- **Difference between `==` and `===`**:
  - `==` checks value (with type coercion).
  - `===` checks value and type.
- **What is a closure?**:
  - A function that remembers its lexical scope.
- **Explain event delegation**:
  - Attach a single event listener to a parent to handle events for multiple children.
- **What is the event loop?**:
  - A mechanism that handles asynchronous tasks in JavaScript.

## 18. Problem-Solving Patterns
- **Reverse a String**:

```javascript
function reverse(str) {
  return str.split("").reverse().join("");
}
```

- **Find the First Non-Repeating Character**:

```javascript
function firstNonRepeating(str) {
  const map = new Map();
  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const char of str) {
    if (map.get(char) === 1) return char;
  }
  return null;
}
```

This cheat sheet covers the most important topics for a JavaScript interview. Keep it handy, and good luck with your preparation! 😊
