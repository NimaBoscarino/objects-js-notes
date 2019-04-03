# W1D3: Objects in JavaScript

## Goal:

An introduction to the use of Objects to store data, the concept of key-value pairs, and passing objects into functions.

Particular Topics:

- Objects
- Primitive data types
- How data is passed to functions
- Using `this` (aka Context) when inside an object's function (method!)

## Review of Primitives

String - 

`"hello world"`
`'hello world'`

"And the dog said \"woof!\""
'And the dog said "woof!"'

Number - 12, 12.5

Boolean - true, false

"true", "false"

4 < 10 ---> "true"

&& || !

if () {
	
}

Truthiness and Falsiness
Truthy and Falsy

true false

Falsy Values:
=============
false
0
undefined
null
NaN
""

Truthy Values
=============

Literally anything else.


------

Array - [1000, "This sentence isn't true", [4, 5, 6], "wat?"]

- making lists
- a bunch of stuff to keep in order.

```js
var shopping_item_1 = 'potato'
var shopping_item_2 = 'shoes'
var shopping_item_3 = 'leeks'
var shopping_item_4 = 'beets'

var shopping_items = ['potato', 'shoes', 'leeks', 'beets']

shopping_items[0]
shopping_items[1]
```

I have a bunch of stuff, and it needs to be kept in order. What do I use?

-------

I have a bunch of info, the order doesn't matter, but I want to ask for it with a particular word.

I want to be able to update/edit this info.

I also want to be able to access values with dynamic keys. (User input, or through a loop, etc etc)


Friends

- Tyson
	- sushi, pizza, craft beer (food)
	- Game of thrones (show)
- Hussain
	- potato salad (food)
	- Jessica Jones (show)
- Jason
	- ramen
	- ...
- Sadie
	- cauliflower steak
- Archie
	- bagels

```js
var friends = ['tyson', 'sushi', 'hussain', 'potato salad'...

// every even index (0, 2, 4...) is a name
// every odd index (1, 3, ....) is the food that (i - 1) likes
]

i = i + 2
```


```js
var jason_food = 'ramen'
var hussain_food = 'potato salad'
```

## Objects

Hash, Map, Key-value pair, Object, dictionary, lookup table

Key-value pair set

```js
var someObject = {}

var friends = {
	tyson: 'sushi',
	hussain: 'potato salad',
	jason: 'ramen'
}

friends.tyson // 'sushi'

// assign a new key-value

friends.archie = 'bagels'

// update!

friends.archie = 'chips'
```

Key: string

Value: Anything
		- string
		- number
		- boolean
		- array
		- object
		- function

Ways to interact with objects:

```js
friends.archie
friends['archie']

var name = 'archie'
var name = process.argv[2]
friends[name]
friends.name // this doesn't work! UNDEFINED!

var inventory = {
	shirts: 10,
	ketchupChips: 5
}
```

Object.keys()

```js
var friends = {
	tyson: 'sushi',
  	hussain: 'potato salad',
  	jason: 'ramen',
  	archie: 'chips'
}

var friendNames = Object.keys(friends) // an array!

for (var i = 0; i < friendNames.length; i++) {
	// get the particular name
	var name = friendNames[i] // tyson, for example
	var food = friends[name]

	console.log(name + ' likes ' + food)
}
```

```js
var friends = {
	tyson: ['sushi', 'pizza', 'beer'],
  	hussain: ['potato salad'],
  	jason: ['ramen'],
  	archie: ['chips']
}

friends.jason.push('burgers')
```


```js
var friends = {
	tyson: {
		food: ['sushi', 'pizza', 'beer'],
		show: 'Game of Thrones'
	},
  	hussain: {
  		food: ['potato salad'],
  		show: 'Jessica Jones'
  	},
  	jason: {
  		food: ['ramen'],
  		show: null
  	},
	archie: {
  		food: ['ramen'],
  		show: 'Brooklyn 99'  		
  	},
}

friends.jason.push('burgers')
```


```js

function sayHello(name) {
	var nameToSay = name
	nameToSay = 'Sally'
	console.log(nameToSay)
}

var friend = 'Jane'
sayHello(friend)
```

What if a function modified an object that was passed to it?

```js
function setShowToGoT(person) {
	person.show = 'Game of Thrones'
}

var bradlina = {
	name: 'Bradlina',
	food: 'tacos',
	show: 'Westworld'
}

setShowToGoT(bradlina)

console.log(bradlina)

function destroyPerson(person) {
	person = {}
}

destroyPerson(bradlina)

console.log(bradlina)
```


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
  console.log("I'm a " + this.color + " " + this.shape + ".");
}

function sayThis() {
	console.log('this is', this)
}

// Attaching describe() to both shapes:
redcircle.describe = describe;
bluesquare.describe = describe;

redcircle.sayThis = sayThis;
bluesquare.sayThis = sayThis;

redcircle.describe();
//=> I'm a red circle.
bluesquare.describe();
//=> I'm a blue square.
```







How to find keys by value??








