var arr=[
    {
        user:'Image1',
        age:20,
        married:false,
        isStatus:'Stranger',
        image:'https://images.unsplash.com/photo-1770666796705-6d8d8bdfd44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'

    },{
        user:'Image2',
        age:29,
        married:true,
        isStatus:'Stranger',
        image:'https://images.unsplash.com/photo-1770873263537-fbb8d39b6103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D'

    },{
        user:'Image3',
        age:2,
        married:false,
        isStatus:'Stranger',
        image:'https://plus.unsplash.com/premium_photo-1772057546818-cfb35e32accb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D'

    }]



var main=document.querySelector('#main')

function herofunc(){
    var sum=''

arr.forEach(function(elem,idx){
    sum=sum+ `<div class="card">
        <img src="${elem.image}" alt="">
        <h1>${elem.user} , ${elem.age}</h1>
        <h4>Married:${elem.married}</h4>
        <h5>${elem.isStatus}</h5>
        <button id=${idx}>Add Friend </button>
    </div>`
})

main.innerHTML=sum

}
herofunc()

main.addEventListener('click',function(dets){
    var gold=(arr[dets.target.id])
    if(gold.isStatus=='Stranger'){
        gold.isStatus='Friends'
    }else{
        gold.isStatus='Stranger'
    }
    
    herofunc();


    // console.log(gold.age)
    // console.log(gold.username)
})

