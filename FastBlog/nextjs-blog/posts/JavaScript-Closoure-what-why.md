---
title: 'JavaScript Closures What? Why?'
date: '2023-05-22'
---

## First Class Function

Programming languages that can treat functions like a variable and be passed to other functions as argument is said to have first class function. Some of the popular example of such language is: Python, JS etc.

## What is Closures?

Follow the code bellow:

```js
function foo(outer_arg) {
    function bar(inner_arg) {
        return outer_arg + inner_arg;
    }
}

let first_class_function = foo(5);

console.log(first_class_function(15));
// Output: 20
```

Here, the `bar()` function keeps reference of the outer argument that was passed to it during the execution of `foo(5)`. So when called it `first_class_function(15)` it adds the `inner_arg` and `outer_arg` and return the value.

## Why Closures?

Follow the code bellow:

```js
var funcs = [];
    
for(var i = 0; i < 3; i++){
    funcs[i] = function(){
        console.log('My value is ' + i);  //creating three different functions with different param values.
    }
}

for(var j = 0; j < 3; j++){
    funcs[j]();

    // OUTPUT:
    // My value is 3
    // My value is 3
    // My value is 3

    }
```

What went wrong with this? Shouldn't I get output like this?

```js
    // OUTPUT:
    // My value is 0
    // My value is 1
    // My value is 2
```

Well the reason behind is: variable `i` is not block-scoped. It's value in all three function was updated.

### Fix it With Closures

This can be solved with closure easily:

```js
var funcs = [];

function createFunction(val) {
    return function () { console.log('My value is ' + val) };
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createFunction(i) //creating three different functions with different param values.
}

for (var j = 0; j < 3; j++) {
    funcs[j]();

    // OUTPUT:
    // My value is 0
    // My value is 1
    // My value is 2

}
```


### ES6 Fixed it.
ES6 introduced `let` for block scoping and also there are options like `forEach` and library like `loadash` to work around this issue. But it would certainly help to know about closures.

## Use in Encapsulation

Consider the following block of code:

```js
function myModule {
    let privateVariable = 'I am a private variable';
    
    let method1 = function(){ console.log('I am method 1'); };
    let method2 = function(){ console.log('I am method 2, ', privateVariable); };
    
    return {
        method1: method1,
        method2: method2
    }
};

myModule.method1(); // I am method 1
myModule.method2(); // I am method 2, I am a private variable
```
Here, the `privateVariable` is not exposed globally. Insted the `myModule` return two method effectively giving us the access over the `privateVariable` making it act like a private variable.

## Other Use cases of Closure.
Closures have many special applications that are useful when creating large javascript programs.

1. Creating a block-scoped variable. 🆗
2. Emulating private variables or encapsulation 🆗
3. Making Asynchronous server side calls 💡

``The Third part: Making Asynchronous Server Side Calls is left as food for thought.``