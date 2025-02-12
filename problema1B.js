const person = Object.freeze({
    name: "Juan",
    hello: function() {
        console.log(`Hello ${this.name}`);
    }
});

// Intento de modificar el nombre 
person.name = "Carlos";

// Ejecutar el método
person.hello();
