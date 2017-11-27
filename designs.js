(function(){



	var grid = {
		valueColumn: 1,
		valueRow: 1,

		init: function(){
			this.cacheDom();
			
		//	this.test();
			
			this.inputUpdate();
			this.gridUpdate();
			this.colorUpdate();
			this.addColor();
		},
		cacheDom: function() {
			this.$el = $('#sizePicker');
			this.$input = this.$el.find('input');
			this.$button = this.$el.find('#submit');
			this.table = $('#pixel_canvas');
			this.tbody = $('tbody');
			this.pickColor = $('#colorPicker');
			this.$body = $('body');

		},

		render: function(){
			
			valueColumn = $('#input_height').val();
			this.addGrid();
		},
		test: function(){

			this.$input.on('change', function(){
			valueColumn = $('#input_height').val();
			

			});

		},

		// GRID BOX

		addGrid: function(valColumn, valRow){
			



			for(let i = 0; i < valColumn; i++) {
				this.table.append('<tr id="grid-'+i+'"></tr>');
				for( let j = 0; j < valRow ; j++) {
					$('tbody').children('#grid-' + "" + i + "").append('<td id="grid-' + i + '-' + j + '"></td>');
				}
			}
			

		},
		gridUpdate: function(valColumn, valRow){


			this.$button.on('click', function(){
				var onGrid = 0;
				do {
					$('tbody').remove();
					ongrid = 0;
				} while(onGrid === 1) {
					
				grid.addGrid(valColumn, valRow);
				return false;
				ongrid = 1;
				}

				
			});
			
		},
		inputUpdate: function(){

			this.$input.on('change', function(){
				var valColumn = $('#input_height').val();
				var valRow = $('#input_width').val();

				grid.gridUpdate(valColumn, valRow);
			});
		},


		// COLORING
		colorUpdate: function(){

			this.pickColor.on('change', function(){
				var color = $('#colorPicker').val();
				grid.addColor(color);

			});
		},
		addColor: function(color){
			this.$body.on('mousedown', 'td', function(){
				$(this).css('background-color', color);
			})
		},

	};

	grid.init();

})()

