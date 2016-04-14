/************************************************************
$ W V G
*************************************************************
*
* Copyright (c) 2016, Johnjimy Som, Shinesunny Som
*
* SwVG is released under WTFPL license
*
************************************************************/



jQuery.fn.swag = function() {
	// $wVG mapping
	var swag = [
		["a","ɐ"], ["b","ß"], ["c","¢"], ["d","₫"], ["e","€"],
		["f","ƒ"], ["g","₲"], ["h","ħ"], ["i","ї"], ["j","ℑ"],
		["k","₭"], ["l","ℓ"], ["m","₥"], ["n","Π"], ["o","ö"], 
		["p","¶"], ["q","ℚ"], ["r","®"], ["s","$"], ["t","τ"],
		["u","μ"], ["v","℣"], ["w","ω"], ["x","ж"], ["y","ÿ"], 
		["z","ζ"],

		["A","∀"], ["B","ß"], ["C","℃"], ["D","₫"], ["E","Σ"],
		["F","£"], ["G","₲"], ["H","Ḧ"], ["I","エ"], ["J","⅃"],
		["K","₭"], ["L","∫"], ["M","ℳ"], ["N","Π"], ["O","Θ"],  
		["P","¶"], ["Q","ℚ"], ["R","ℜ"], ["S","§"], ["T","₸"],
		["U","℧"], ["V","℣"], ["W","@"], ["X","χ"], ["Y","λ"], 
		["Z","ζ"],
	];//end $WVg mapping

	
	
	// For every letter, convert to the text if possible
	this.keyup(function() {
		var input_field_string = this.value;
		var speed_offset_error = 0;

		// for each array iterate through the swag map and replace the input string
		// if it matches, the letter are rewritten
		for (var i=0; i<swag.length; i++) {
			input_field_string = input_field_string.replace(swag[i][0], swag[i][1]);

			if (input_field_string != this.value) //if no letters match the map, do nothing.
				break;
		}// end for loop

		// setting the correct cursor location
		if (input_field_string != this.value) 
		{
			var original_string = this.value.split("");

			// replace the letters with "swag" symbols in the textfield
			this.value = input_field_string;
			var new_string = input_field_string.split("");
			var tmp_new_length = new_string.length;
				
			//typing cursor position error fix
			for (var i=0; i<new_string.length; i++)
			{
				var char_value = new_string[i].charCodeAt(0);
				if ((char_value >= 65 && char_value <= 90) || (char_value >= 97 && char_value <= 122))
				speed_offset_error = 1;
			}//end for
			
			// calculate cursor position
			for (var i=(original_string.length - 1); i>=0; i--) 
			{
				var j = tmp_new_length - 1;

				if (original_string[i] != new_string[j]) {
					var offset = original_string.length - i;
					var current_position = new_string.length - offset + 1 + speed_offset_error;
					break;
				}//end if

				tmp_new_length--;
			}//end for loop

			//resets cursor position
			$(this).setCursorPosition(current_position);
		}//end if loop
	});//end jQuery function $wVg
};



// reset cursor position (next to letters-$wVg conversion location)
jQuery.fn.setCursorPosition = function(current_position) {
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(current_position, current_position);
        } else if (this.createTextRange) { //end if 
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', current_position);
            range.moveStart('character', current_position);
            range.select();
        }//end if else function
    });//end return function
};//end jQuery function




