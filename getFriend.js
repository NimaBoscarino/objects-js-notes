var friends = {
	tyson: 'sushi',
	hussain: 'potato salad',
	jason: 'ramen',
	archie: 'bagels'
}

var name = process.argv[2]
console.log('food for ' + name + ' is:', friends[name])