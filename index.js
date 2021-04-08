class Cat{

    constructor(name){

        this.name = name   
    }
    speak(){
        return `${this.name} says meow!`
    }
}

class Dog{

    constructor(name, sex){
        this.name = name   
        this.sex = sex
        
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird{

    constructor(name, sex){
        this.name = name   
        this.sex = sex
        
    }
    speak(){
        if (this.sex === 'male'){
        return `It's me! ${this.name}, the parrot!` 
    }else {
        return `${this.name} says squawk!`
       }
    }
}
    
let bird = new Bird ('Pablo', 'male');
let bird2 = new Bird ('Mable', 'female');