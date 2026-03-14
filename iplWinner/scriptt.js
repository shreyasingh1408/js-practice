let arr=[
    {
        team:'CSk',
        primary:'yellow',
        secondary:'green'
    }
    ,{
        team:'RCB',
        primary:'red',
        secondary:'blue'

    }
    ,{
        team:'PBKS',
        primary:'pink',
        secondary:'black'

    }
    ,{
        team:'GT',
        primary:'green',
        secondary:'white'

    }
    ,{
        team:'SRH',
        primary:'orange',
        secondary:'green'

    }
    ,{
        team:'MI',
        primary:'blue',
        secondary:'gold'

    }
]

let btn=document.querySelector('button')

let h1=document.querySelector('h1')

btn.addEventListener('click',function(){
    var num=Math.floor(Math.random()*arr.length)
    var winner=arr[num]
    h1.innerHTML=winner.team
    h1.style.backgroundColor=winner.primary
    h1.style.color=winner.secondary
})