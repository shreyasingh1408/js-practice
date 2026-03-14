var box=document.querySelector('#box')
var heart=document.querySelector('#heart')

box.addEventListener('dblclick', function(){
    heart.style.opacity='1'

    setTimeout(function(){
        heart.style.opacity='0'
    },2000)
})

var box=document.querySelector('#box')

//Mouse Events

// box.addEventListener('click',function(){
//     console.log('clicked on mouse')
//  })
//  box.addEventListener('mouseenter',function(){
//     console.log('mouse entered on box')
//  })
//  box.addEventListener('mouseleave',function(){
//     console.log('mouse left from box')
//  })
//  box.addEventListener('mousemove',function(){
//     console.log('mouseMoving on box')
//  })
//  document.addEventListener('keydown',function(dets){  

// dets gives all hidden details which performs (properties milti h aandar ki mtlb ek bar mouse move hua to kitni cheeje hui)
//dets ki jgh kuch bhi likh skte ho or dets.x me x axis ki details aise hi y-axis ki bhi dekh skte ho

//     console.log('keydown',dets)
//  })
// document.addEventListener('keyup',function(dets){
//     console.log('key up',dets)
//  })

//document mtlb pure html me