var btn=document.querySelector('button')
var img1=document.querySelector('#img1')
var img2=document.querySelector('#img2')


btn.addEventListener('dblclick', function(){
    var imgSrc1=img1.getAttribute('src')
    var imgSrc2=img2.getAttribute('src')
    
    img1.setAttribute('src' , imgSrc2)
    img2.setAttribute('src' , imgSrc1)
})