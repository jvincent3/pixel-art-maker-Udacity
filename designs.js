// When size is submitted by the user, call makeGrid()
const body = $('body');


var column = $('#input_height').val();
var row =  $('#input_width').val();
var colorPicker = $('#colorPicker')
var onGrid = 0;



// Grid Creation function
function makeGrid(gridHeight,gridWidth) {

	var table = $('#pixel_canvas');

	for(let i = 0; i < gridHeight; i++) {
			table.append('<tr id="grid-'+i+'"></tr>');
			for( let j = 0; j < gridWidth ; j++) {
				$('tbody').children('#grid-' + "" + i + "").append('<td id="grid-' + i + '-' + j + '"></td>');
			}
		}
	}

// Grid Values
	$('#input_height').on('change', function(){

		column = $('#input_height').val();


	});

	$('#input_width').on('change', function(){

		row = $('#input_width').val();

	});
// COLOR Picker
	function colorBox(element){  
        
     	let color = colorPicker.val();
        
        $(element).css("background-color", color);
        
    }

// Grid Box, on Click change background color
	body.on('mousedown','td', function(){

		//$(this).css('background-color', color);
		colorBox(this);
	});

// Add color on hover and left mouse is clicked
    body.on("mouseover", "td", function(e){
        
 		if(e.buttons == 1){
        
            colorBox(this);
        
        }
        
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



