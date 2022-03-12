const names = ["Daniel", "Matthew", "James" ,  "irina" , "Muzaffer"]

const Name_To_Find  = "Matthew"

function findname1(names) {
    for (let index = 0; index < names.length; index++) {
        if (names[index]  === Name_To_Find) {
            return "found me"

        }
        
    }
    return "have not found me"
}

function findname2  (names) {
    if (names.find(name) => name ===  Name_To_Find){
        return  "find me"
    } 
    return  "havent found me"
}


console.log(findname1(names))

console.log(findname2(names))