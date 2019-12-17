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

function open_sel_cat(id_name, el) {
	c =  document.getElementById(el.id).childNodes;
    
  	
	sm = document.getElementById(id_name);
	if(sm.style.display == "block"){
		c[3].style.transform = "rotate(45deg)";
		sm.style.display = "none";
	} else {
		c[3].style.transform = "rotate(135deg)";
		sm.style.display = "block";
	}
}

function open_buy_cat(id_name, el, x1, y1, x2, y2) {
	c =  document.getElementById(el.id).childNodes;
      
	sm = document.getElementById(id_name);
	if(sm.style.display == "block"){
		
		c[3].style.left = x1 + "px";
		c[3].style.bottom = y1  + "px";

		c[3].style.transform = "rotate(0deg)";
		sm.style.display = "none";
	} else {
		c[3].style.left = x2 + "px";
		c[3].style.bottom = y2 + "px";

		c[3].style.transform = "rotate(180deg)";		
		sm.style.display = "block";
	}
}

function select_place(){
	alert("selct place")
}