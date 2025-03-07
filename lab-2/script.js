// grab paragraph for text output
const text1 = document.getElementById('car1');
const text2 = document.getElementById('car2');
const text3 = document.getElementById('car3');

function Vehicle(name, year, make, model, modelLine, mainColor, accentColor, manufaturerCountry, windowColor, interiorColor, tireColor, rimColor, wheelType) {
    this.name = name;
    this.year = year;
    this.make = make;
    this.model = model;
    this.mainColor = mainColor;
    this.accentColor = accentColor;
    this.windowColor = windowColor;
    this.interiorColor = interiorColor;
    this.wheelType = wheelType;
    this.tireColor = tireColor;
    this.rimColor = rimColor;
    this.modelLine = modelLine;
    this.manufaturerCountry = manufaturerCountry;

    this.describe = function () {
        let describe = `The car ${this.name} ${this.make} ${this.model} was made in ${this.year}. It's main color is ${this.mainColor} with an accent color ${this.accentColor} . Its windows are ${this.windowColor} and its interior is ${this.interiorColor} for the interior. The ${wheelType} wheel is ${tireColor} and  ${rimColor}. It is from the ${this.modelLine} and made in ${this.manufaturerCountry}.`;
        return describe;
    }
}
    let car1 = new Vehicle("Volvo 850 Estate", 1991, "Volvo", "Hatchback", "Red", "black", "clear", "black", "10SP", "black", "Silver", "Factory Fresh", "Malaysia");
    
    const car2 = new Vehicle("Fiat 500e", 2023, "Fiat", "Silver", "Orange and Black", "Clear", "Black", "Black", 
    "Black and Orange", "Compact Kings", "Malaysia");
    
    const car3 = new Vehicle("Layin' Lowrider", 1969, "Chevy", "Mustard Yellow", "Red and White", "Clear", "Beige", "Black", 
    "Red", "HW Reverse Rake", "Malaysia");

    text1.textContent = car1.describe();
    text2.textContent = car1.describe();
    text3.textContent = car1.describe();
