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
				var columnVal = column.val(); //it gets the val of the Column
				var rowVal = row.val();	//it gets the val of the Row 

			if (!(columnVal > 0 && columnVal <= 50) || !( rowVal>0 && rowVal <=50)) { 
				// If passes lesser than 1 or passes over 50, Alert the user
				alert("Please input a number between 1-50");
			} else {

				premadeGrid(columnVal,rowVal);
				return false;
			}
			});
		}

		function premadeGrid(gridHeight, gridWidth) {
			do {
					onGrid = 0;

					$('tbody').remove();// Clears existing canvas
				} while(onGrid === 1) {

					makeGrid(gridHeight, gridWidth);

					return false; //It does some magic that won't make the table disappear after pressing submit
					onGrid = 1;

				}
		}
	// COLOR Picker
		function colorBox(element){  
	        
	     	let color = colorPicker.val();// Takes the value of the colorPicker and saves it to the var color
	        
	        $(element).css("background-color", color); // Give the given element the value of the ColorPicker.
	        
	    }

	  	// COLOR REMOVER

	  	function clearBox(element) {

	  		$(element).css("background-color", "");
	  	}

	// Grid Box, on Click change background color
		body.on('mousedown','td', function(){

			//$(this).css('background-color', color);
			colorBox(this);
		});

	// Add color on hover and left mouse is clicked
	    body.on("mouseover", "td", function(e){

	        // If left mouse button color the cell.
	 		if(e.buttons == 1){

	            colorBox(this);        
	        }
	    });

	    body.on("dblclick", "td", function(){
	    	clearBox(this);
	    })

	// Premade grid on click   
		$('#16x').on('click', function(){

			premadeGrid(16,16);
			return false;
				
			});
	    $('#24x').on('click', function(){

			premadeGrid(24,24);
			return false;
				
			});
	    $('#32x').on('click', function(){

			premadeGrid(32,32);
			return false;
				
			});
	    $('#50x').on('click', function(){

			premadeGrid(50,50);
			return false;
				
			});

				
	submitGrid();

});


