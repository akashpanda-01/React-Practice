class Parent {
  constructor({name}) {
    // the super method we call in child, when that super method is called,
    // it pass those props value to this parent cunstructor.
    console.log(name);
    
  }
};


class Child extends Parent {
  constructor({name}) {
    // constructor method invoked first when we create an object using class.
    // Constructor Method Automatically Called When We Create a New Object using Keyword "new".
    // constructor props get value from that new Object which we create using "new" keyword.
    console.log(name);

    super({name});
    //super keyword is used to call constructor of its parent class;
  }
};

const obj = new Child({name:"Akash"});


// 1st => Memory allocation Happens. (parent)
// 2nd => JavaScript creates the Child class and sets up inheritance.
//      Ex => Child.__proto__ = Parent
//            Child.prototype.__proto__ = Parent.prototype
// 3rd => Before calling new Child(), JavaScript evaluates
// 4th => new Child create an Object and call it.
// 5th => JavaScript allocates memory for a new object
//      Ex => obj = {}
//            and links it to
//            obj.__proto__ → Child.prototype
// 6th => Call Child constructor.
// 7th => Execute Super() method.
// 8th => Parent constructor runs.