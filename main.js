//class Car
function Car(brandName, model, productionYear) {
    this.brandName = brandName;
    this.model = model;
    this.productionYear = productionYear;
}

let cars = [
    new Car('Tesla', 'Model X', 2015),
    new Car('Audi', 'A6', 2001),
    new Car('Toyota', 'Land Cruiser', 2005),
    new Car('Toyota', 'Corolla', 1999),
    new Car('Skoda', 'Oktavia', 2003),
    new Car('Skoda', 'Fabia', 1998),
    new Car('Mersedes-benz', 'A170', 2001),
    new Car('Mersedes-benz', 'W213', 2008),
    new Car('Opel', 'Astra', 2004),
    new Car('Porsche', 'Cayenne', 2001),
    new Car('Audi', 'A6', 2003),
    new Car('Jeep', 'Grand Cherokee', 2012),
    new Car('Tesla', 'Model 3', 2017)
];


const carsList = document.querySelector('#cars-list');

//fill carlist
fillGroupList(cars);
function fillGroupList(arr) {
    let out = '';
    if (arr.castomVal == true) {
        out += `<li>${arr.brandName}-${arr.model}-${arr.productionYear} </li>`;
        console.log('kk')
    } else {
        _.each(arr, function (elem) {
            if (elem[0] == undefined) {
                out += `<li>${elem.brandName}-${elem.model}-${elem.productionYear} </li>`;
            } else {
                _.each(elem, function (carElem) {
                    out += `<li>${carElem.brandName}-${carElem.model}-${carElem.productionYear} </li>`
                })
            }
        })
    }
    carsList.innerHTML = out;
}
//filter by productionYear
document.querySelector('#sby').addEventListener('click', () => {
    let arr = _.groupBy(cars, 'productionYear');
    console.log(arr)
    fillGroupList(arr);
})
//filter by brandName
document.querySelector('#sbn').addEventListener('click', () => {
    let arr = _.groupBy(cars, 'brandName');
    console.log(arr)
    fillGroupList(arr);
})
//filter by model
document.querySelector('#sbm').addEventListener('click', () => {
    let arr = _.groupBy(cars, 'model');
    console.log(arr)
    fillGroupList(arr);
})
//get by user productionYear 
document.querySelector('#gby').addEventListener('click', () => {
    let year = prompt('year?');
    if (year == '' || isNaN(year)) {
        return false
    }
    let arr = _.filter(cars, function (elem) {
        return elem.productionYear == year;
    });
    fillGroupList(arr);
})
//get by max productionYear
document.querySelector('#gbmaxy').addEventListener('click', () => {
    let arr = _.max(cars, 'productionYear');
    console.log(arr);
    arr.castomVal = true;
    fillGroupList(arr);
})
//get by min productionYear
document.querySelector('#gbminy').addEventListener('click', () => {
    let arr = _.min(cars, 'productionYear');
    console.log(arr);
    arr.castomVal = true;
    fillGroupList(arr);
})
