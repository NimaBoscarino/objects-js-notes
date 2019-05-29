OBJECTS in JavaScript

Warning: You might never be the same again.

- Real warning: Objects can be confusing! But hang in there :)

## We'll come back to this stuff

An introduction to the use of Objects to store data and behavior, the concept of key-value pairs, and passing objects into functions.

Topics:

Objects
Primitive data types
How data is passed to functions
Using this (aka Context) when inside an object's function

## Objects In JavaScript

### Motivation

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

An object in JS is a collection of key-value pairs.

MANY KEYS. Each key points to A value.

Value: strings, integers (numbers), arrays, other objects


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

GETTING THINGS OUT OF OBJECTS:

Either with DOT notation:

meal.drink <---- the KEY is written after the dot.

With SQUARE BRACKET notation:

meal['drink'] <--- a STRING representing the key is written in brackets

COOL FACT!!!! Square Brackets let us plug in variables. This lets us ask for things DYNAMICALLY.



Fun !

GET THE KEYS!

Object.keys(meal)




COMMAS in objects


Next steps:

- edit stuff
	- use the equal sign
	- `meal.drink = 'Hot Chocolate'`
- add new stuff
	- same as editing
	- `meal.salad = 'Caesar Salad'`
- removing keys from objects
	`delete meal.salad`

```
meal.drink

meal.drink = 'Hot Chocolate';

```

## Nested Objects

... Just go deeper with dot notation, or square brackets. All your dynamic stuff can still work here.

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



## Objects are usually called

Hash, Map, Key-value pair, Object, dictionary, lookup table, Key-value pair set, Collection






`THIS`





Quick aside!


Truthiness and Falsiness
Truthy and Falsy

true false

true, false, 1 < 3, 4 === 5

var numberOfFriends = 0

if (numberOfFriends) {
	console.log('woo')
} else {
	console.log('aw man')
}




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





