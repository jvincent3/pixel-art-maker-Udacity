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
						const rowCell = $('<tr></tr>'); 
						table.append(rowCell);
					for( let j = 0; j < gridWidth ; j++) {
						rowCell.append('<td></td>');
				}
			}
		}
	// On click Grid Appears
		function submitGrid() {

			$('#submit').on('click', function(){
				//Grid Values
				var columnVal = column.val(); //Column Value
				var rowVal = row.val();	// Row Value

			if (!(columnVal > 0 && columnVal <= 50) || !( rowVal>0 && rowVal <=50)) { 
				// If passes lesser than 1 or passes over 50, Alert the user
				alert("Please input a number between 1-50");
			} else {

				do {
					onGrid = 0;
					
					$('tbody').remove();// Clears current canvas if exists
				} while(onGrid === 1) {

					makeGrid(columnVal, rowVal);

					return false; //It does some magic that won't make the table disappear after pressing submit
					onGrid = 1;

				}
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


