// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

switch (color) {
	case 'red':
		console.log("Red is the color of blood.");
		break;
	case 'orange':
		console.log("Orange is the color of the Miami Hurricanes.");
		break;
	case 'yellow':
		console.log("Yellow is the color of the Sun.");
		break;
	case 'green':
		console.log("Green is the other color of the Miami Hurricanes.");
		break;
	case 'blue':
		console.log("Blue is the color of the sky.");
		break;
	default:
		console.log('I do not know anything by that color');
}

// if (color === 'red') {
// 	message = "Red is the color of blood.";
// } else if (color === 'orange') {
// 	message = "Orange is the color of the Miami Hurricanes";
// } else if (color === "yellow") {
// 	message = "Yellow is the color of the Sun";
// } else if (color === 'green') {
// 	message = "Green is the other color of the Miami Hurricanes";
// } else if (color === 'blue') {
// 	message = "Blue is the color of the sky";
// } else {
// 	message = "I do not know anything by that color";
// }	
// console.log(message);

var myfavecolor = (color === favorite) ? "This is my fave color." : "This isn\'t my favorite color.";
console.log(myfavecolor);

//  else (color == favorite) {
// 	message = color + " is my favorite color!";
// }

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
