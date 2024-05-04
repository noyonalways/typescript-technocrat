// 2-9: Conditional Types

// case 1:
type a1 = number;
type b1 = string;
type x = a1 extends null ? true : false; // conditional type
type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // conditional type

// case 2:
type Sheikh = {
  bike: string;
  car: string;
  ship: string;
};

// case ase kina / bike ase kina / ship ase kina / tractor ase kina
// keyof Sheikh => "bike" | "car" | "ship"

// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false; // manually check
type CheckVehicle<T> = T extends keyof Sheikh ? true : false; // manually check

// type hasBike = CheckVehicle<"bike">; // manually check
type hasBike = CheckVehicle<Sheikh["ship"]>;
