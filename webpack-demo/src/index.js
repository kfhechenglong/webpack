import _ from 'lodash'
// import './style.css'
// import bg from  './bg2.png'
import printMe from './print.js'
import {cube} from './math.js'
function compont(){
	// var element = document.createElement('div');
	var btn = document.createElement('button');
	var element = document.createElement('pre');
	// element.innerHTML = _.join(['Hello','webpack'],'');
	element.innerHTML = [
		'Holle webpack',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');
	btn.innerHTML = 'Click me and check the console';
	btn.onclick = printMe();
	// btn.onclick = e => import(/* webpackChunkName: "print"*/ './print').then(module=>{
	// 	var print = module.default;
	// 	print();
	// })
	element.appendChild(btn);
	// element.className = "hello";
	// let myImg = new Image();
	// myImg.src = bg;
	// element.appendChild(myImg);
	return element;
}
console.log(2)
document.body.appendChild(compont());
// let element = compont();
// document.body.appendChild(element);
// console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV !== 'production') {
// 	console.log('Looks like we are in development mode!');
// }
// if(module.hot){
// 	console.log(module.hot);
// 	module.hot.accept('./print.js',function(){
// 		console.log('module updated prin.js');
// 		// printMe()
// 		document.body.removeChild(element);
// 		element = compont();
// 		document.body.appendChild(element);
// 	})
// }

// async function getComponent() {
// 	var element = document.createElement('div');
// 	const _ = await import(/* webpackChunlName: "lodash" */ 'lodash');
// 	element.innerHTML = _.join(['Holle','webpack'],' ');
// 	return element;
// }
// getComponent().then(component =>{
// 	document.body.appendChild(component);
// })