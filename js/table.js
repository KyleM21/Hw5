function math() {
	
	//This clears the old table body and makes room for the new one
	$("#rTable").empty(); 
	
	/*These declare a variable  to its respective form value.  After getting
	its value it checks it against letters and special characters to ensure 
	all input is valid.  If it is not valid it changes a paragraph in the 
	html file to reflect an error, and promptly breaks the script.
	*/
	var x1 = document.getElementById("x1").value;
		if( x1.toUpperCase() != x1.toLowerCase() || /^[a-zA-Z0-9- ,_]*$/.test(x1) == false){
			x1  = 0;
			document.getElementById("error").innerHTML = "Invalid Input! Please try entering a number";
			throw new Error("Invalid Input");
		}
	var x2 = document.getElementById("x2").value;
		if( x2.toUpperCase() != x2.toLowerCase() || /^[a-zA-Z0-9- ,_]*$/.test(x2) == false){
			x2  = 0;
			document.getElementById("error").innerHTML = "Invalid Input! Please try entering a number";
			throw new Error("Invalid Input");
		}
	var y1 = document.getElementById("y1").value;
		if( y1.toUpperCase() != y1.toLowerCase() || /^[a-zA-Z0-9- ,_]*$/.test(y1) == false){ 
			y1 = 0;
			document.getElementById("error").innerHTML = "Invalid Input! Please try entering a number";
			throw new Error("Invalid Input");
		}
	var y2 = document.getElementById("y2").value;
		if( y2.toUpperCase() != y2.toLowerCase() || /^[a-zA-Z0-9- ,_]*$/.test(y2) == false){
			y2  = 0;
			document.getElementById("error").innerHTML = "Invalid Input! Please try entering a number";
			throw new Error("Invalid Input");
		}
	
	//This ensures that you cant put in the variables wrong, the larger variable will always be x2/y2 respectively
	if(x1>x2){
		document.getElementById("error").innerHTML = "Invalid Input! Please switch your x values";
		throw new Error("Invalid Input");
	}
	if(y1>y2){
		document.getElementById("error").innerHTML = "Invalid Input! Please switch your y values";
		throw new Error("Invalid Input");
	}
	
	/*This here is a solution to the table acting strange.  The first column and row of multiplication
	would just disappear. subtracing 1 from each means the missing row and column appear and function
	normally
	*/
	y1--;
	x1--;
	
	/*This temporary variable holds the tbody with the new table, effectively replacing the old one by 
	adding it in following the old ones removal
	*/
	var temp="";
	
	//Checks for big mode
	if (bigMode.checked == true){
		temp+="<table id='table'; border='100px'; bordercolor='coral';>";
	}
	else{
		temp+="<table id='table'; border='10px'; bordercolor='blue';>";
	}

	//This first loop creates the rows, and uses a loop to fill the columns
	for(var i = y1; i <= y2; i++){
		
		temp+="<tr id=row style='height:30px;'>";
		//This loops builds the rest of the table
		for(var j = x1; j <= x2; j++){

			if(j == x1){
				color = "lightgrey";	
				
				//This checks if its the first cell of the first row and empties it to provide a cleaner look
				if(i==y1){
					color = "lightgrey";
					temp+="<td style='width:30px; background-color:" + color + "'>" + " " + "</td>";
				}
				else{
				temp+="<td style='width:30px; background-color:" + color + "'>" + i*1 + "</td>";
				}
			}
			else if(i == y1){
				color = "lightgrey";
				temp+="<td style='width:30px; background-color:" + color + "'>" + 1*j + "</td>";
			}	
			else {
				color = "white";
				temp+="<td style='width:30px; background-color:" + color + "'>" + i*j + "</td>";
			}
		}
		temp+="</tr>";
	}
	//This builds the end of the table, appends it.
	temp+="</table>";
	$("#rTable").append(temp);
}
	
