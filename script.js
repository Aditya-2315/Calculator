let equation = document.querySelector(".prev")
let result = document.querySelector(".next")
let button = document.querySelector("#btn_container")

button.addEventListener("click", e=>{
    if(e.target.classList.contains('num')){

       equation.innerHTML = equation.innerHTML + e.target.innerHTML
    }
    else if(e.target.classList.contains('operator')){
        equation.innerHTML = equation.innerHTML + e.target.innerHTML
    }
    else if(e.target.classList.contains('del')){
        equation.innerHTML = equation.innerHTML.slice(0,-1)
    }
    else if(e.target.classList.contains('equal')){
        result.innerHTML = ""
        result.innerHTML = result.innerHTML + eval(equation.innerHTML)
    }
    else if(e.target.classList.contains('clear')){
        result.innerHTML = ""
        equation.innerHTML = ""
    }
})
