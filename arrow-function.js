const getThis = () => this     // this na arrow function referencia o objeto global

console.log(getThis())

// --------

const counter = {
    value: 0,
    getValue: () => {
        //console.log('this === window', this === window)
    }
}

console.log(counter.getValue())

// ---------

class MyClass {
    constructor (value1) {
        this.prop1 = value1
    }

    isThisEqualMyObj () {
        console.log(this === myObj)

        setTimeout(() => {
            console.log(this === myObj)
        }, 1000)
    }
}

const myObj = new MyClass('Value 1')

myObj.isThisEqualMyObj()

// ---------

function MyConstructor (propValue) {
    this.myProp = propValue
}

MyConstructor.prototype.getMyProp = function () {
    console.log(this)
    return this.myProp
}

const myObj2 = new MyConstructor('A string')

console.log(myObj2.getMyProp())