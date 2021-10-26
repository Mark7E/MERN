class Ninja{
    constructor(name){
    this.name = name;
    this.health = 3;
    this.speed = 3;
    this.strength =3;

    }
    sayName(){
        console.log("hello " + this.name);
    }
    showStats(){
        console.log("Name: " + this.name )
        console.log("Strength: " + this.strength )
        console.log("Speed: " + this.speed )
        console.log("Health: " + this.health )

    }
    drinkShake(){
        this.health += 10;
    }
}

const n = new Ninja("ninja1", 10)
// n.sayName();
// n.showStats();
// n.drinkShake();
// n.showStats();

class Sensei extends Ninja{
    constructor(name){
    super(name);
    this.health = 200;
    this.wisdome =10;
    this.speed = 10;
    this.strength = 10;


    }
    showStats(){
        console.log("Name: " + this.name )
        console.log("Strength: " + this.strength )
        console.log("Speed: " + this.speed )
        console.log("Health: " + this.health )
        console.log("Wisdome: " + this.wisdome )
    }

    speakWisdoem(){
        super.drinkShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")

    }
}

const s = new Sensei("Master ninja")
s.speakWisdoem();
s.showStats();