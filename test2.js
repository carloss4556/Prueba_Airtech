
const person = {};
Object.defineProperty(person, "name", {
    value: "Juan",
    writable: false,  // Evita cambios
    configurable: false // Evita eliminación
    
});

console.log(person.name); // "John"
person.name = "Mike";  
console.log(person.name); // "John" (no cambia)