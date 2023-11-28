const { body } = document;

let count = 1;
const memory = {
	[count]: Array(1000).fill('*')
}

function changeBackground(number) {
	count++;
	memory[count] = Array(1000).fill('*')

	// Check if background already showing
	let previousBackground;

	if (body.className) {
		previousBackground = body.className
	}
	console.log(previousBackground);
	// reset Css class for body
	body.className = '';

	switch(number) {
	  case '1':
	  	return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
	    body.classList.add('background-1');
	    break;
	  case '2':
	  	return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));   
	    break;
	  case '3':
	  	return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
	    break;
	  default:
		break;
	}
}