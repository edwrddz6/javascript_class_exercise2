// Create another class that extends the Animal class and includes a method that the class can only use.

class Animal {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    printName() {
        console.log(`The name of this animal is ${this.name}`);
    }

    showHeight() {
        console.log(`The height of this animal is ${this.height} ft`);
    }

    showWeight() {
        console.log(`The weight of this animal is ${this.weight} lbs`);
    }
}

class Origin extends Animal {
    constructor(name, height, weight, continent) {
        super(name, height, weight);
        this.continent = continent;
    }

    showContinent() {
        console.log(`The continent of origin of this animal is ${this.continent}`);
    }
}

const ringedSeal = new Origin("seal", 5, 120, "Antarctica");

//Print the name of the ringedSeal

ringedSeal.printName();
ringedSeal.showContinent();

