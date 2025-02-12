const person = {
    name: "John",
    hello: function() {
        console.log(`Hello ${this.name}`);
    }
};

// Llamar al método para que imprima en la terminal
person.hello();