
//Class - Movie Task-1;


class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title; //key: value  // leo = title
    this.studio = studio;
    this.rating = rating;
  }
}
const obj = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(obj.title, obj.studio, obj.rating);
const obj1 = new Movie("leo", "7-Screen Studio");
console.log(obj1.title, obj1.studio, obj1.rating);
const obj2 = new Movie("vikram", "RKFI", "8.5");
console.log(obj2.title, obj2.studio, obj2.rating);

// class  Circle Task-2; 

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius = n;
  }
  get Color() {
    return this.color;
  }
  set Color(c) {
    this.color = c;
  }
  get toString() {
    return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
}
 

let objVal = new Circle(1.0, "red");
console.log(objVal.Color);
console.log(objVal.Radius);
console.log(objVal.toString);
console.log(objVal.area);
console.log(objVal.circumference);
objVal.Radius = 3.5;
console.log(objVal.Radius);
objVal.Color = "green";
console.log(objVal.Color);


//Write a “person” class to hold all the details Task-3
           


class Person {
  constructor(firstName, lastName, age, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
      this.country = country;
    
  }
  getFullName() {
    const fullName =
      this.firstName +
      " " +
      this.lastName +
      " " +
      this.age +
      " " +
      this.city +
      " " +
      this.country;
    return fullName;
  }
}

const person1 = new Person("Prabakaran", "S", 28, "Kanchipuram", "India");

console.log(person1.getFullName());

 //write a class to calculate the Uber price Task-4

const uber = {
  set kiloMeter(km) {
    this.price = `${km} km = Rs.${km * 50}`;
  },
  get kiloMeter() {
    return this.price;
  },
};

uber.kiloMeter = 2;

console.log(`calculate the uber price
${uber.kiloMeter}`);