/*create a handler function that

  1. reads 3 different strings from the user
  2. creates a new string by shuffling the inputs
  3. alerts the new string
  4. logs all variables for the developer

*/

function handleUserInput() {
	'use strict';

	// read user input
	let user_1_input = prompt('fill languages that you speak', 'eng');
	let user_2_input = prompt('fill languages that you speak', 'du');
	let user_3_input = prompt('fill languages that you speak', 'fr');

	// execute program logic
	let show_user_input = `I speak ${user_1_input}, ${user_2_input} and ${user_3_input}`;
	console.log(show_user_input);
	// communicate the result to the user
	alert(show_user_input);

	// log the action for developers
	console.log('-- handled input --');
	console.log('user input 1; ', typeof user_1_input, user_1_input);
	console.log('user input 2; ', typeof user_2_input, user_2_input);
	console.log('user input 3; ', typeof user_3_input, user_3_input);
	console.log(
		'show user whole message; ',
		typeof show_user_input,
		show_user_input
	);
}

handleUserInput();

// handleUserInput();
