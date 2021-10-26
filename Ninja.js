class Ninja{
    constructor(name, health){
    this.name = name;
    this.health = health;
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
n.sayName();
n.showStats();
n.drinkShake();
n.showStats();