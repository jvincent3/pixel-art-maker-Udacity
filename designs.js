// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var button = "yo";
var color = $('#colorPicker'); 

function makeGrid() {
// Your code goes here!

var table = $('#pixel_canvas');
var column = 30;
var row = 30;




$('tbody').children().append('<td></td>');

var column
var row

for(let i = 0; i < column; i++) {
		table.append('<tr id="grid-'+i+'"></tr>');
		for( let j = 0; j < row ; j++) {
			$('tbody').children('#grid-'+""+i+"").append('<td id="grid-'+i+'-'+j+'"></td>');

		}
		
	}
}

console.log();

$(makeGrid());


