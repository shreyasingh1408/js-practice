var arr=[
    {
        company:'AMAZON',
        specialization:'Frontend Developer',
        salary:'20k',
        image:'https://images.unsplash.com/photo-1770666796705-6d8d8bdfd44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'

    },{
        company:'Flikart',
        specialization:'Backend Developer',
        salary:'50k',
        image:'https://images.unsplash.com/photo-1770873263537-fbb8d39b6103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D'

    },{
        company:'Oracle',
        specialization:'UI/UX Designer',
        salary:'35k',
        image:'https://plus.unsplash.com/premium_photo-1772057546818-cfb35e32accb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        company:'Zomato',
        specialization:'Frontend Developer',
        salary:'90k',
        image:'https://images.unsplash.com/photo-1770666796705-6d8d8bdfd44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'

    },
    {
        company:'Lenskart',
        specialization:'Data Analyst',
        salary:'65k',
        image:'https://images.unsplash.com/photo-1770666796705-6d8d8bdfd44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'

    },
    {
        company:'Apple',
        specialization:'AI Engineer',
        salary:'45k',
        image:'https://images.unsplash.com/photo-1770666796705-6d8d8bdfd44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'

    },
    
]

var sum=''

arr.forEach(function(elem){
    sum=sum+ `<div id="card">
        <img src="${elem.image}" alt="">
        <h4 id="company">${elem.company}</h4>
        <h2>${elem.specialization}</h2>
        <div id="btn">
            <button id="btn1">Part Time</button>
            <button id="btn1">Full Time</button>
        </div>
        <div id="bottom">
            <span>${elem.salary}</span>
            <button>Apply Now</button>
        </div>
    </div>`
})

var body=document.querySelector('body')
body.innerHTML=sum