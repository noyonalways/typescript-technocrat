// 2-4: Generic With Interface

// using type alias
type GenericArray1<T> = Array<T>;

interface User {
  name: string;
  age: number;
}

const allUsers: GenericArray1<User> = [
  {
    name: "Noyon",
    age: 21,
  },
];

// using interface
interface Developer<SMARTWATCH, BIKE = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: SMARTWATCH;
  bike?: BIKE;
}

type EmilabWatch = {
  brand: string;
  model: string;
  display: string;
};

const poorDeveloper: Developer<EmilabWatch> = {
  name: "Noyon",
  computer: {
    brand: "Gigabyte",
    model: "Gigabyte BM560",
    releaseYear: 2020,
  },
  smartWatch: {
    brand: "Emilab",
    model: "kw66",
    display: "OLED",
  },
};

interface AppleWatch {
  brand: string;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}

interface YamahaBike {
  brand: string;
  cc: string;
}

const richDeveloper: Developer<AppleWatch, YamahaBike> = {
  name: "John",
  computer: {
    brand: "HP",
    model: "X-25UR",
    releaseYear: 2020,
  },
  smartWatch: {
    brand: "Apple",
    model: "Apple Something",
    heartTrack: true,
    sleepTrack: true,
  },
  bike: {
    brand: "Yamaha",
    cc: "150cc",
  },
};
