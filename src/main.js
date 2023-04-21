import './style/main.css'
import logo from './../assets/logo.png'
const img = document.querySelector('#img')
img.src = logo;
document.querySelector('#btn').addEventListener('click', function() {
  console.log('我被点击了！')
}, false)