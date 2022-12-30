var screen=document.getElementById("screen")


btnclick=(value)=>{
    screen.value+=value
}

clearScreen=()=>{
    screen.value=""
}

findresult=()=>{
    var result=eval(screen.value)
    screen.value=result
}