const x:number = 5;
console.log(x);

function greet (firstName:String){
    console.log("Hello "+firstName);
}


function runAfter1S (fn: (name:string) => void) {
    setTimeout(fn, 1000);
}

interface USER {
    firstName: string,
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