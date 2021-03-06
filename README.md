# W1D3: Objects in JS

Note: Today's notes are adapted partly from [David Mill's notes](https://github.com/daegren/lhl-mar4-w1d3-objects) and [Don Burks' notes](https://web.compass.lighthouselabs.ca/activities/116/lectures/2296).

This file is also available with more (old) examples [on the GitHub repo](https://github.com/NimaBoscarino/objects-js-notes).

I did NOT talk about how objects are "passed by reference" to functions, but that is something that I want you to explore. Please take a look at the section of the notes called "Pass-by-value vs. Pass-by-reference" and mess around with the example using your Node REPL. If you're having trouble understanding it, please let me (or a mentor) know! We can give you a demonstration.

## Goal:

An introduction to the use of Objects to store data, the concept of key-value pairs, and passing objects into functions.

Particular Topics:

- Objects
- Primitive data types
- How data is passed to functions <-- not in lecture!
- Using `this` (aka Context) when inside an object's function (method!)

## Falsy and Truthy values

When you pass a value into an if-condition, the value puts on a "True" or "False" disguise.

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

### Motivation

Here's an example of storing data as an array vs as nested objects. NOTE! This is a _complicated_ example to prove a point.

```js

var my_jams = [
  'power_kanye_west_mdbtf.mp3',
  'spaceship_kanye_west.mp3',
  'two_word_kanye_west.mp3',
  'babye_one_more_time_britney_spears.mp3',
  'umi_says_mos_def.mp3',
  'wanna_be_spice_girls.mp3',
];

// get all the kanye west songs??????


// make a for loop to go through everything, see if they have
// the "substring" "Kanye West", and then push those to a new array

// An OBJECT!

var my_jams = {
  kanye_west: {
    college_dropout: [
      'spaceship_kanye_west_college_dropout.mp3',
      'two_word_kanye_west_college_dropout.mp3',
    ],
    mbdtf: ['power_kanye_west_mdbtf.mp3'],
    yeezus: ['i_am_a_god_kanye_west_yeezus.mp3']
  },

  mos_def: [
    'umi_says_mos_def.mp3',
  ],

  spice_girls: [
    'wanna_be_spice_girls.mp3', 
  ],

  britney_spears: [
    'babye_one_more_time_britney_spears.mp3',
  ]
}
```

### Smaller Examples


```js
var someNewObject = {}; // empty object

var meal_array = ['Long Island Iced Tea', 'Brussel Sprouts', 'Veggie Burger', 'Chocolate Mousse']

var nima_drink = 'Long Island Iced Tea'
var nima_appetizer = 'Brussel Sprouts'
var nima_main = 'Veggie Burger'
var nima_dessert = 'Chocolate Mousse'

var kanye_drink = 'Mojito'
var kanye_appetizer = 'Garlic Fries'
var kanye_main = 'Fish Filet'
var kanye_dessert = 'Croissants'

var meal = {
  drink: 'Long Island Iced Tea',
  appetizer: 'Brussel Sprouts',
  main: 'Veggie Burger',
  dessert: 'Chocolate Mousse'
}


var nima_meal = {
  drink: 'Long Island Iced Tea',
  appetizer: 'Brussel Sprouts',
  main: 'Veggie Burger',
  dessert: 'Chocolate Mousse'
}

var kanye_meal = {
  drink: 'Mojito',
  appetizer: 'Garlic Fries',
  main: 'Fish Filet',
  dessert: 'Croissants'
};

var thingToGet = 'main';

console.log(nima_meal[thingToGet])
console.log(kanye_meal[thingToGet])

// The KEYS are DRINK, APPETIZER, MAIN, DESSERT
// Note, caps is for emphasis

// The VALUES are opposite of the keys

meal.drink // Long Island
meal['drink']
```

### Things we can do with Objects

#### Read Values

I can access the data in an object in two ways: dot notation:

```js
meal.drink
meal['drink']
```
#### Edit Values

```js
meal.drink = 'Hot Chocolate'
meal['drink'] = 'Fizzy Water'
````

#### Add Values

```js
meal.salad = 'Greek Salad'
meal['salad'] = 'Caesar Salad'
````

#### In General

The `.` is appropriate when we know the name of the property when we are writing the code. We use the `[]` if the property name is variable / dynamic

#### Nested Objects

We can have more complicated objects! Nested data, aka Complex Data Objects:

- Arrays in objects
- Objects in Objects
- Arrays of Object in Objects
- etc.

See the Kanye object in the my_jams example way up above!

```js
var artist = 'kanye_west'
var album = 'college_dropout'

var firstSong = my_jams.kanye_west.college_dropout[0]

var firstSong = my_jams[artist][album][0]
var secondSong = my_jams[artist][album][1]

var theArtist = my_jams[artist]
var theAlbum = theArtist[album]
var firstSong = theAlbum[0]
```

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
