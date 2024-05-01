// Never, Unknown And Nullable Type

const searchName = (value: string) => {
  if (value) {
    console.log("Searching....");
  } else {
    console.log("There is nothing to search");
  }
};

// Unknown type
const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = ((value * 1000) / 3600).toFixed(2);
    console.log(`The speed is ${convertedSpeed} ms^-1`);
  } else if (typeof value === "string") {
    const [result, _unit] = value.split(" "); // array destructuring
    const convertedSpeed = ((parseInt(result) * 1000) / 3600).toFixed(2);
    console.log(`The speed is ${convertedSpeed} ms^-1`);
  } else {
    console.log("Wrong input!");
  }
};

getSpeedInMeterPerSecond("1000 kmh^-1");
getSpeedInMeterPerSecond(null);

// never type
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Muslik se error hogaya!");
