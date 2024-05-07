// 6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

type Coordinates = {
  latitude: number;
  longitude: number;
};

const sampleLocation: Coordinates = {
  latitude: 40.7128,
  longitude: -74.006,
};

console.log(sampleLocation);
