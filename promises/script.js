//call back hell

// function stepOne(cb){
//     console.log("step 1");
//     cb();
// }
// function stepTwo(cb){
//     console.log("step 2");
//     cb();
// }
// function stepThree(cb){
//     console.log("step 3");
//     cb();
// }

// stepOne(()=>{
//     stepTwo(()=>{
//         stepThree(()=>{
//             console.log("all steps completed");
//         });
//     });
// });


//With Promises
//how promises workks

// const pr= new Promise(function(res,rej){
//     console.log("insta jao data lao");
//     console.log("insta ka data collect kro");
//     console.log("insta me data collect krte waqt errror aya");
//     rej();
// });

// pr.then(function(){
//     console.log("resolved");
// }).catch(function(){
//     console.log("rejected");
// });




 //call hell to promises


function stepOne(){
    return new Promise(function(res,rej){
        console.log("step 1");
        res();
    });
}
function stepTwo(){
    return new Promise(function(res,rej){
        console.log("step 2");
        res();
    });
}
function stepThree(){
    return new Promise(function(res,rej){
        console.log("step 3");
        res();
    });
}

stepOne()
.then(stepTwo)
.then(stepThree)
.then(function(){
    console.log("all steps done");
});