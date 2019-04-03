# W1D3: Objects in JS

Note: Today's notes are adapted partly from [David Mill's notes](https://github.com/daegren/lhl-mar4-w1d3-objects) and [Don Burks' notes](https://web.compass.lighthouselabs.ca/activities/116/lectures/2296).

Also note!! The code that we wrote is inside of the `notes.md` file, and the `getFriends.js` file which is found [on the GitHub repo](https://github.com/NimaBoscarino/objects-js-notes).

## Goal:

An introduction to the use of Objects to store data, the concept of key-value pairs, and passing objects into functions.

Particular Topics:

- Objects
- Primitive data types
- How data is passed to functions
- Using `this` (aka Context) when inside an object's function (method!)

## Review of Primitives

String - "Hello", "banana", 'apple', "This sentence is false."

Number - 1, 378643, 2e5, 0xFF

Boolean - true, false

There are many other falsey values: undefined, null, NaN, the number 0 and empty strings. Everything else will evaluate to true inside an if statement.

Array - [1000, "This sentence isn't true", [4, 5, 6], "wat?"]

How do I find the type of something? `typeof(...)`

Heads up! There are certain values that act _like_ `false` in `if` conditions.

### Falsy Values:

- false
- 0
- undefined
- null
- NaN
- ""

### Truthy Values

- Literally anything else.


## Objects 101

Objects are first and foremost key-value pairs. Differently from Arrays, you use keys (which are always strings) to get data in an out. The values can be of any type - including arrays, other objects and functions (more on this below).

Objects help us answer the following requirements:

```
I have a bunch of info, the order doesn't matter, but I want to ask for it with a particular word.

I want to be able to update/edit this info.

I also want to be able to access values with dynamic keys. (User input, or through a loop, etc etc)
```

I can access the data in an object in two ways: dot notation:

```js
job.role = "Web Instructor";
```

or Bracket notation:

```js
job["friends"]
```

- "Look up" - The action we do when we use a dictionary
- We access properties using the `.` operator, as a property lookup
- We can use the `[]` syntax to access properties

The `.` is appropriate when we know the name of the property when we are writing the code. We use the `[]` if the property name is variable / dynamic

We can have more complicated objects! Nested data, aka Complex Data Objects:

- Arrays in objects
- Objects in Objects
- Arrays of Object in Objects
- etc.

## Pass-by-value vs. Pass-by-reference, tricky bits!

Objects are passed _by reference_ to functions. This means when you modify an object inside a function you are actually modifying the original object.

Functions can update the object but not replace it.

```js
function replace(ref) {
    ref = {}; // this code does _not_ affect the object passed
}

function update(ref) {
    ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
}

var a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodfied
update(a);   // the _contents_ of 'a' are changed
```

## `this` keyword, aka "Context"

The `this` keyword can be a tricky concept to understand in Javascript. The simplest explanation is:

`this` is whatever called the function.


```js
var redcircle = {
  color: "red",
  shape: "circle"
};

var bluesquare = {
  color: "blue",
  shape: "square"
};

function describe () {
  console.log(`I'm a ${this.color} ${this.shape}.`);
};

// Attaching describe() to both shapes:
redcircle.describe = describe;
bluesquare.describe = describe;

redcircle.describe();
//=> I'm a red circle.
bluesquare.describe();
//=> I'm a blue square.
```

Note how `this` takes the value of the caller object (whatever is before the dot: redcircle and bluesquare in the example above).

The tricky part is `this` changes for every function call. This can get particularly complex when you're dealing with nested functions.

Another example...

```js
var headInstructor = {
  firstName: 'Don',
  lastName:  'Burks',

  fullName: function() {
    // Fair digression into template literals in ES6 here, if it hasn't happened yet.
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(headInstructor.fullName());
```

## Resources

[MDN - Primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

[Pass-by-value vs. reference in plain English](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c)

[MDN - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) - This is a bit much for now, but interesting to check out later!
