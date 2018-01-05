$(function(){
	
		// When size is submitted by the user, call makeGrid()
	const body = $('body');
	const column = $('#input_height');
	const row =  $('#input_width');
	const colorPicker = $('#colorPicker');

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
	// On click Grid Appears
		function submitGrid() {

			$('#submit').on('click', function(){
				//Grid Values
				let column1 = column.val(); //Column Value
				let row1 = row.val();	// Row Value

				do {
					onGrid = 0;
					$('tbody').remove();
				} while(onGrid === 1) {

					makeGrid(column1, row1);
					return false;
					onGrid = 1;

				}
			});
		}
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

				
	submitGrid();

});


