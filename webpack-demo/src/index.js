import _ from 'lodash'
import './style.css'
import bg from  './bg2.png'
import printMe from './print.js'
function commpont(){
	var element = document.createElement('div');
	var btn = document.createElement('button');
	element.innerHTML = _.join(['Hello','webpack'],'');
	btn.innerHTML = 'Click me and check the console';
	btn.onclick = printMe;
	element.appendChild(btn);
	// element.className = "hello";
	// let myImg = new Image();
	// myImg.src = bg;
	// element.appendChild(myImg);
	return element;
}
console.log(2)
document.body.appendChild(commpont());


if(module.hot){
	module.hot.accept('./print.js',function(){
		console.log('module updated prin.js');
		printMe()
	})
}