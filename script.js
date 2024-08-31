let selector = document.querySelectorAll(".sel");
let y = document.querySelector("#y");
let c = document.querySelector("#c");
let yourchoice;
let button= document.querySelector("button");
let body = document.querySelector("body");
let display = document.querySelector("#display");
button.addEventListener("click",()=>{
    y.innerText=0;
    c.innerText=0;
    display.innerText="";

})

selector.forEach( (selector)=>{
    selector.addEventListener("click",()=>
    {   
        yourchoice = selector.getAttribute("id");
        game(yourchoice);
    }) 

});
function game(yourchoice){
    choices = ["Rock","Paper","Scissors"];
    computer= Math.floor(Math.random() *3);
    if (
        (yourchoice === "Rock" && choices[computer] === "Scissors") ||
        (yourchoice === "Paper" && choices[computer] === "Rock") ||
        (yourchoice === "Scissors" && choices[computer] === "Paper")
    ) { 
        y.innerText++; 
        console.log(`You choose ${yourchoice} & computer choose ${choices[computer]}`);
       
    }
    
    else if (
        (yourchoice === "Rock" && choices[computer] === "Paper") ||
        (yourchoice === "Paper" && choices[computer] === "Scissors") ||
        (yourchoice === "Scissors" && choices[computer] === "Rock")
    ) {
        c.innerText++; 
        console.log(`You choose ${yourchoice} & computer choose ${choices[computer]}`);
    }
    
    else {
        console.log(`You choose ${yourchoice} & computer choose ${choices[computer]}`);
    }
    
    display.innerText=(`You choose ${yourchoice} & Computer choose ${choices[computer]}`);
}
    

