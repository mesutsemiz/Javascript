// the filter()method creates a new array with all the alements that pass the test implemented by the callBack() function

// the filter method acepts two named argumnets: a callback function and an optional object.

//the callback function takes three arguments; 1 current element, 2. indez, 3. array




//////WİTHOUT FİLTER


let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// let bigCities = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i].population > 3000000) {
//         bigCities.push(cities[i]);
//     }
// }
// console.log(bigCities);


// let bigCities = cities.filter(e =>{
//     return e.population >4000000
    
// })

// console.log(bigCities);

cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ':' + city.population));