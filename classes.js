// Class is a way to create objects with the same properties
// Classes are special functions that build new objects
// You don't need to type the properties and methods for each object

class MyClass {
    // Class methods
    constructor () {}

    method01 () {}
    method02 () {}
}

//--- Ways to declare ---

const myConst1 = class MyClass1 {}

// or

const myConst2 = class {}

// or 

function MakeClass () {
    return class {}
}
// ------

// Constructor: special method that creates and initializes an object generated from the class

class Reptile {
    constructor (firstAppearance) {
        this.firstAppearance = firstAppearance
    }

    getFirstAppearance () {
        return this.firstAppearance
    }

    // Invoke the method as it was a property
    get firstTimeAppearance () {
        return this.firstAppearance
    }

    // Static method: applies to the class itself, not the objects created with it
    static getClassName () {
        return this.name
    }
}

const smaug = new Reptile('The Hobbit')

smaug.firstAppearance   // The Hobbit
smaug.getFirstAppearance()  // The Hobbit
smaug.firstTimeAppearance   // The Hobbit
Reptile.getClassName()  // Reptile

// Subclasses

class Dragon extends Reptile {
    constructor (firstAppearance) {
        super(firstAppearance)  // Allow a method from the father class to be on the child class
    }
}

const alduin = new Dragon('Skyrim')

alduin.getFirstAppearance()    // Skyrim