// 9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: string;
}

function combineCarAndDriver(car: Car, driver: Driver): Car & Driver {
  return {
    ...car,
    ...driver,
  };
}

const carInfo = combineCarAndDriver(
  { make: "Toyota", model: "Corola", year: 2012 },
  { name: "Mr. Driver", licenseNumber: "lice-039334323" }
);

console.log(carInfo);
