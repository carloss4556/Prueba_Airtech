const person = {
    name: "Juan",
    Hello: function() {
        console.log(`Hello ${this.name}`);
    }
};


person.Hello();