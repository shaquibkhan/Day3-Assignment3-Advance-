class Animal {
	name: string;
	behaviour: string;
	distance_covered: number;
	constructor(name,behaviour,distance_covered){
		this.name = name;
		this.behaviour = behaviour;
		this.distance_covered = distance_covered;
	}
}
class Tiger extends Animal{
	constructor(name,behaviour,distance_covered){
		super(name,behaviour,distance_covered);
	}
	tigerInfo(){
		console.log(`Name of the animal is ${this.name}, behaviour is ${this.behaviour} & distance covered is ${this.distance_covered}`);
	}
}
var first= new Tiger('tiger','carnivores',25000);

first.tigerInfo();

class Cow extends Animal{
	constructor(name,behaviour,distance_covered){
		super(name,behaviour,distance_covered);
	}
	cowInfo(){
		console.log(`Name of the animal is ${this.name}, behaviour is ${this.behaviour} & distance covered is ${this.distance_covered}`);
	}
}
var second= new Cow('cow','omninivores',5000);

second.cowInfo();