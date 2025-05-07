const x:number = 5;
console.log(x);

function greet (firstName:String|number){
    console.log("Hello "+firstName);
}


function runAfter1S (fn: (name:string) => void) {
    setTimeout(fn, 1000);
}

interface USER {
    firstName: string | number,
    lastName: string,
    age: number
}

const user:USER = {
    firstName: "Varinder",
    lastName: "Dhillon",
    age: 23,
}



greet(user.firstName);

runAfter1S(greet);

interface USER {
    position?: string
}

type isLegalArg = number | string;
function getId (id: isLegalArg) {
    return id
}

console.log(getId(102));
console.log(getId("102"));