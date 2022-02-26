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
const greeting2 = createGreeting (uppercase (mentor2))
const greeting3 = createGreeting (uppercase (mentor3))
const greeting4 = createGreeting (uppercase (mentor4))
const greeting5 = createGreeting (uppercase (mentor5))
```


console.log (greeting1, greeting2, greeting3, greeting4, greeting5)


