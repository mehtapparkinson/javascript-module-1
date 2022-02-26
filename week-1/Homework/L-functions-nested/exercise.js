var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function uppercase (name){
    return name.toUpperCase()
}

function createGreeting (name) {
    return "HELLO " + name
}

const greeting1 = createGreeting (uppercase (mentor1))


console.log (greeting1)


