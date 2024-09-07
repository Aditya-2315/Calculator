let equation = document.querySelector(".prev")
let result = document.querySelector(".next")
let button = document.querySelector("#btn_container")

button.addEventListener("click", e=>{
    if(e.target.classList.contains('num')){
    //    console.log(e.target.innerHTML , equation.innerHTML.length)
       equation.innerHTML = equation.innerHTML + e.target.innerHTML
    }
    else if(e.target.classList.contains('operator')){
        equation.innerHTML = equation.innerHTML + e.target.innerHTML
    }
    else if(e.target.classList.contains('del')){
        let eq = equation.innerHTML.slice(-1)
        console.log(eq)
        equation.innerHTML = equation.innerHTML.slice(0,-1)
    }
    else if(e.target.classList.contains('equal')){
        result.innerHTML = ""
        result.innerHTML = result.innerHTML + eval(equation.innerHTML)
    }
    else if(e.target.classList.contains('clear')){
        console.log("clear")
        result.innerHTML = ""
        equation.innerHTML = ""
    }
})
