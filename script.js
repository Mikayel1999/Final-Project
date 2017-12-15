    

    function Onload() {
    	let html = '<table border="1">';
    	for(let row=0;row<size;row++) {
    		html += '<tr>';
    		for(let col=0;col<size;col++) {
    			let id = row+""+col;
    			html += '<td align="center" valign="center" height="150" width="150" id="'+id+'"></td>';
    		}
    		html += '</tr>';
    	}
    	html += '</table>';
    	document.getElementById("canvas").innerHTML = html;
    	let id1 = getId();
    	let id2 = "";
    	while(true) {
    		id2 = getId();
    		if(id1 != id2)
    			break;
    	}
    	document.getElementById(id1).innerHTML = "2";
    	document.getElementById(id2).innerHTML = "2";
    	document.getElementById(id1).style.backgroundColor = getColor(2);
    	document.getElementById(id2).style.backgroundColor = getColor(2);
    	score = 0;
    	document.getElementById("score").innerHTML = score;
    	document.getElementById("highestScore").innerHTML = highestScore;
    	return false;
    }
        function getId(){
    	let i = getRandom();
    	let j = getRandom();
    	return i+""+j;
    }


    function getColor(value) {
    	let color = "#ffffff";
    	switch(value) {
    		case 2:		color = "#ECDAC3"; break;
    		case 4:		color = "#DFB115"; break;
    		case 8:		color = "#E9824B"; break;
    		case 16:	color = "#F47055"; break;
    		case 32:	color = "#DA4626"; break;
    		case 64:	color = "#ff0000"; break;
    		case 128:	color = "#F5F239"; break;
    		case 256:	color = "#F0DC15"; break;
    		case 512:	color = "#AFED42"; break;
    		case 1024:	color = "#42EDB4"; break;
    		case 2048:	color = "#4254ED"; break;
    		default:	color = "#ffffff";
    	}
    	return color;
    }



function getRandom(){
    	return Math.floor(Math.random()*(max-min+1)+min);
    }

    document.onkeydown = function(push) {
    	switch (push.keyCode) {
    		case 37:
    		left();
    		break;
    		case 38:
    		up();
    		break;
    		case 39:
    		right();
    		break;
    		case 40:
    		down();
    		break;
    	}
    };

    let isMoved = false;
    let score = 0;
    let highestScore = 0;
    let excludeIds = [];


    function up() {
    	isMoved = false;
    	excludeIds = [];
    	for(let j=min;j<=max;j++) {
    		for(let i=min;i<=max;i++) {
    			let id = i+""+j;
    			if(document.getElementById(id).innerHTML != "") {
    				UpMove(id);
    			}
    		}
    	}
    	if(isMoved == true) {
    		update();
    	}
    	return false;
    }



    function left() {
    	isMoved = false;
    	excludeIds = [];
    	for(let i=min;i<=max;i++) {
    		for(let j=min;j<=max;j++) {
    			let id = i+""+j;
    			if(document.getElementById(id).innerHTML != "") {
    				LeftMove(id);
    			}
    		}
    	}
    	if(isMoved == true) {
    		update();
    	}
    	return false;
    }



    function down() {
    	isMoved = false;
    	excludeIds = [];
    	for(let i=min;i<=max;i++) {
    		for(let j=max;j>=min;j--) {
    			let id = j+""+i;
    			if(document.getElementById(id).innerHTML != "") {
    				DownMove(id);
    			}
    		}
    	}
    	if(isMoved == true) {
    		update();
    	}
    	return false;
    }



    function right() {
    	isMoved = false;
    	excludeIds = [];
    	for(let i=min;i<=max;i++) {
    		for(let j=max;j>=min;j--) {
    			let id = i+""+j;
    			if(document.getElementById(id).innerHTML != "") {
    				RightMove(id);
    			}
    		}
    	}
    	if(isMoved == true) {
    		update();
    	}
    	return false;
    }




    
    function UpMove(id) {		
    	if(!id.startsWith(min)) {
    		let arr = id.split("");
    		let i = parseInt(arr[0]);
    		let j = parseInt(arr[1]);
    		for(let k=(i-1);k>=min;k--) {
    			let nId = k+""+j;
    			if(document.getElementById(nId).innerHTML != "") {
    				let val = parseInt(document.getElementById((k+1)+""+j).innerHTML);
    				let nVal = parseInt(document.getElementById(nId).innerHTML);
    				if(val == nVal) {
    					if(excludeIds.indexOf(nId) == -1){
    						excludeIds.push(nId);
    						document.getElementById(nId).innerHTML = (val+nVal);
    						document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
    						document.getElementById((k+1)+""+j).innerHTML = "";
    						document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
    						isMoved = true;
    						score += (val+nVal);
    					}
    					break;
    				}
    			}
    			else {
    				document.getElementById(nId).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
    				document.getElementById(nId).style.backgroundColor = document.getElementById((k+1)+""+j).style.backgroundColor;
    				document.getElementById((k+1)+""+j).innerHTML = "";
    				document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
    				isMoved = true;
    			}
    		}
    	}
    	return false;
    }


    function LeftMove(id) {
    	if(!id.endsWith(min)) {
    		let arr = id.split("");
    		let i = parseInt(arr[0]);
    		let j = parseInt(arr[1]);
    		for(let k=(j-1);k>=min;k--) {
    			let nId = i+""+k;
    			if(document.getElementById(nId).innerHTML != "") {
    				let val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
    				let nVal = parseInt(document.getElementById(nId).innerHTML);
    				if(val == nVal) {
    					if(excludeIds.indexOf(nId) == -1){
    						excludeIds.push(nId);
    						document.getElementById(nId).innerHTML = (val+nVal);
    						document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
    						document.getElementById(i+""+(k+1)).innerHTML = "";
    						document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
    						isMoved = true;
    						score += (val+nVal);
    					}
    					break;
    				}
    			}
    			else {
    				document.getElementById(nId).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
    				document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k+1)).style.backgroundColor;
    				document.getElementById(i+""+(k+1)).innerHTML = "";
    				document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
    				isMoved = true;
    			}
    		}
    	}
    	return false;
    }
    function DownMove(id) {
    	if(!id.startsWith(max)) {
    		let arr = id.split("");
    		let i = parseInt(arr[0]);
    		let j = parseInt(arr[1]);
    		for(let k=(i+1);k<=max;k++) {
    			let nId = k+""+j;
    			if(document.getElementById(nId).innerHTML != "") {
    				let value = parseInt(document.getElementById((k-1)+""+j).innerHTML);
    				let nValue = parseInt(document.getElementById(nId).innerHTML);
    				if(value == nValue) {
    					if(excludeIds.indexOf(nId) == -1){
    						excludeIds.push(nId);
    						document.getElementById(nId).innerHTML = (value+nValue);
    						document.getElementById(nId).style.backgroundColor = getColor((value+nValue));
    						document.getElementById((k-1)+""+j).innerHTML = "";
    						document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
    						isMoved = true;
    						score += (value+nValue);
    					}
    					break;
    				}
    			}
    			else {
    				document.getElementById(nId).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
    				document.getElementById(nId).style.backgroundColor = document.getElementById((k-1)+""+j).style.backgroundColor;
    				document.getElementById((k-1)+""+j).innerHTML = "";
    				document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
    				isMoved = true;
    			}
    		}
    	}
    	return false;
    }

    function RightMove(id) {
    	if(!id.endsWith(max)) {
    		let arr = id.split("");
    		let i = parseInt(arr[0]);
    		let j = parseInt(arr[1]);
    		for(let k=(j+1);k<=max;k++) {
    			let nId = i+""+k;
    			if(document.getElementById(nId).innerHTML != "") {
    				let val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
    				let nVal = parseInt(document.getElementById(nId).innerHTML);
    				if(val == nVal) {
    					if(excludeIds.indexOf(nId) == -1){
    						excludeIds.push(nId);
    						document.getElementById(nId).innerHTML = (val+nVal);
    						document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
    						document.getElementById(i+""+(k-1)).innerHTML = "";
    						document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
    						isMoved = true;
    						score += (val+nVal);
    					}
    					break;
    				}
    			}
    			else {
    				document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
    				document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k-1)).style.backgroundColor;
    				document.getElementById(i+""+(k-1)).innerHTML = "";
    				document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
    				isMoved = true;
    			}
    		}
    	}
    	return false;
    }

    
    function update() {		
    	let ids = [];
    	for(let i=min;i<=max;i++) {
    		for(let j=min;j<=max;j++) {
    			let id = i+""+j;
    			if(document.getElementById(id).innerHTML == "") {
    				ids.push(id);
    			}
    		}
    	}
    	let id = ids[Math.floor(Math.random()*ids.length)];
    	document.getElementById(id).innerHTML = "2";
    	document.getElementById(id).style.backgroundColor = getColor(2);
    	let allFilled = true;
    	for(let i=min;i<=max;i++) {
    		for(let j=min;j<=max;j++) {
    			let id = i+""+j;
    			if(document.getElementById(id).innerHTML == "") {
    				allFilled = false;
    				break;
    			}
    		}
    	}		
    	document.getElementById("score").innerHTML = score;
    	document.getElementById("highestScore").innerHTML = highestScore;
    	if(allFilled) {
    		Gameover();
    	}
    }

    function Gameover() {
    	let isOver = true;
    	for(let j=min;j<=max;j++) {
    		for(let i=min;i<=(max-1);i++) {
    			let val = parseInt(document.getElementById(i+""+j).innerHTML);
    			let nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
    			if(val == nVal) {
    				isOver = false;
    				break;
    			}
    		}
    	}		
    	if(isOver == true) {
    		for(let i=min;i<=max;i++) {
    			for(let j=min;j<=(max-1);j++) {
    				let val = parseInt(document.getElementById(i+""+j).innerHTML);
    				let nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
    				if(val == nVal) {
    					isOver = false;
    					break;
    				}
    			}
    		}
    	}
    	if(isOver) {
    		alert("Game over!");
    		if (score > highestScore) {
    			highestScore = score;
    		}
    	}
    	return false;
    }
    if ( typeof String.prototype.startsWith !== 'function' ) {
    	String.prototype.startsWith = function( str ) {
    		return this.substring( 0, str.length ) === str;
    	}
    };
    if ( typeof String.prototype.endsWith != 'function' ) {
    	String.prototype.endsWith = function( str ) {
    		return this.substring( this.length - str.length, this.length ) === str;
    	}
    };
    let size = 4;
    let min = 0;
    let max = size - 1;

    Onload();
