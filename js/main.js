function slider_position() {
	for(var i = 0; i < 4; i++){
		if(document.getElementById("dot_" + i).className == "dot active_dot"){
			return i;
		}
	}
}

function switch_to_prev() {
	pos = slider_position() - 1;
	if(pos < 0) 
		pos = 3;
	
	switch_to(pos);
}

function switch_to_next() {
	pos = slider_position() + 1;
	if(pos > 3) 
		pos = 0;

	switch_to(pos);
}

function switch_to(num) {
	for(var i = 0; i < 4; i++)
		document.getElementById("dot_" + i).className = "dot";	
	

	document.getElementById("dot_" + num).className = "dot active_dot";
	content = document.getElementsByClassName("staboard_image");
	
	for(var i = 0; i < content.length; i++){
		content[i].style.display = "none";
	}

	content[num].style.display = "block";
}

function open_sel_cat(id_name) {
	alert(id_name)
}

function select_place(){
	alert("selct place")
}