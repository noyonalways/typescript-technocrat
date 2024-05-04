// 2-10: Mapped Types

// recap of map method
const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
const arrOfStrings: string[] = arrOfNumbers.map((number) => number.toString());

type AreaNumber = {
  height: number;
  width: number;
};

// map manually
type AreaString1 = {
  height: string;
  width: string;
};

// using map type
type AreaString2 = {
  [key in "height" | "width"]: string;
};

type AreaString3 = {
  [key in keyof AreaNumber]: string;
};

// loop up type
type Height = AreaNumber["height"];
//            type[key] = value

// fully dynamic mapped type
type AreaString4<T> = {
  [key in keyof T]: T[key];
};

const area4: AreaString4<{ height: number; width: number }> = {
  height: 44,
  width: 34,
};
