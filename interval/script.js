var btn=document.querySelector('button')
var percent=document.querySelector('#percent')
var growth=document.querySelector('#growth')

var grow=0
btn.addEventListener('click', function(){
    var int =setInterval(function(){
        grow++
        percent.innerHTML=grow+'%'
        growth.style.width=grow+'%'
    },100)

    setTimeout(function(){
        clearInterval(int)


    },5000)
    
})