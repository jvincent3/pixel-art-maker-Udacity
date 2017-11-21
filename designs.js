// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var button = "yo";
var color = $('#colorPicker'); 

var column = $('#input_height').val();
var row =  $('#input_width').val();
var color = $('#colorPicker').val();
var onGrid = 0;

// Grid Creation function

function makeGrid(gridHeight,gridWidth) {
// Your code goes here!

var table = $('#pixel_canvas');

for(let i = 0; i < gridHeight; i++) {
		table.append('<tr id="grid-'+i+'"></tr>');
		for( let j = 0; j < gridWidth ; j++) {
			$('tbody').children('#grid-'+""+i+"").append('<td id="grid-'+i+'-'+j+'"></td>');

		}
		
	}
}

console.log();

// Grid Values
$('#input_height').on('change', function(){

	column = $('#input_height').val();

});

$('#input_width').on('change', function(){

	row = $('#input_width').val();

});
// COLORS 
$('#colorPicker').on('change',function(){
	color = $('#colorPicker').val();
});


// Grid Box, on Click change background color
$('body').on('click','td', function(){

	$(this).css('background-color', color);

});

// On click Grid Appears

$('#submit').on('click', function(){

do {
	onGrid = 0;
	$('tbody').remove();

} while(onGrid === 1) {

	makeGrid(column, row);
	return false;
	onGrid = 1;
}



});

// TESTS 


