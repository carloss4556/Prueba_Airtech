const citiesList = [
    "Bogota", "Cali", "LA", "Cali", "Madrid",
    "Madrid", "Barcelona", "LA", "sevilla", "Madrid",
    "Sydney", "Barcelona", "Madrid", "Madrid", "Bogota",
    "Barcelona", "London", "Berlin", "Madrid", "Cali", "London"
];

// Contador
const cityCount = {};

citiesList.forEach(city => {
    cityCount[city] = (cityCount[city] || 0) + 1;
});

// Ordena por repeticiones 
const sortedCities = Object.entries(cityCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

// Mostrar resultados
console.log("Top 5 ciudades más repetidas:");
sortedCities.forEach(([city, count]) => {
    console.log(`${city}: ${count} veces`);
});