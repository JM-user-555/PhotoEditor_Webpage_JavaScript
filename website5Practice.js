
var loadFile = function(event) {
	var image = document.getElementById('imgA');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var cnt=0;
var imgwidth ;

function addPropToimgA(){
	var image = document.getElementById('imgA');
	const main = document.getElementById('main');
	var borderColor = document.getElementById('imgAborderColor').value;
	var borderSize = document.getElementById('imgAboderSize').value;
	var borderStyle = document.getElementById('borderStyle').value;
	var borderRadius = document.getElementById('imgAborderRadius').value;
	var opacity = document.getElementById('imgAopacity').value;
	var GSValue = document.getElementById('imgAGS').value;
	var rotateHoriz = document.getElementById('imgArotateHoriz').checked;
	var rotateHorizValue; // =-1 ==> rotate horizentally     =1 ==> don't rotate horizentally
	var rotateVert = document.getElementById('imgArotateVert').checked;
	var rotateVertValue; // =-1 ==> rotate vertically     =1 ==> don't rotate vertically
	var rotateRightAngle = document.getElementById('imgArotateR').value;
	var rotateLefttAngle = document.getElementById('imgArotateL').value;
	var rotateAngle;
	var widthScale = document.getElementById('imgAwidth').value;
	if(cnt ==0){// take the default width at beginning before being changed
	 imgwidth = document.getElementById('imgA').width;
	 cnt++;
	}
	var imgW=imgwidth*widthScale;

	if(borderSize<0){
		borderSize=-borderSize;
		alert("The border-size should be positive");
	}
	if(borderSize>20){
		alert("The border-size should be less than 20.");
		borderSize=20;
	}
	if(rotateHoriz==true){
        rotateHorizValue=-1;
	} else{
		rotateHorizValue=1;
	}
	if(rotateVert==true){
		rotateVertValue=-1;
	} else{
		rotateVertValue=1;
	}
	if(rotateRightAngle>360 || rotateRightAngle<0){
		alert("The Rotate Right Angle should be between 0 and 360");
		rotateRightAngle=0;
	}
	if(rotateLefttAngle>360 || rotateLefttAngle<0){
		alert("The Rotate Left Angle should be between 0 and 360");
		rotateLefttAngle=0;
	}

	rotateAngle = rotateRightAngle-rotateLefttAngle;
	console.log("Style:"+borderStyle);
	console.log("Color:"+borderColor);
	console.log("Size:"+borderSize);
	console.log("Radius:"+borderRadius);
	console.log("Opacity:"+opacity);
	console.log('Rotate Horiz:'+rotateHoriz);
	console.log('Rotate Vert:'+rotateVert);
	console.log('Rotate Right Angle:'+rotateRightAngle);
	console.log('Rotate Left Angle:'+rotateLefttAngle);
	console.log('Width: '+imgW);
	image.setAttribute('style',
	'border:'+ borderStyle +' '+borderColor+' '+borderSize+ 'px;'+
	'border-radius: '+borderRadius+'%;'+
	'opacity:'+opacity+'%;'+
	'filter: grayscale('+GSValue+'%);'+
	'transform: scaleX('+rotateHorizValue+') scaleY('+rotateVertValue+') rotate('+rotateAngle+'deg);'+
	'width:'+imgW+'px;'
	);
	main.replaceChildren(image);
}

