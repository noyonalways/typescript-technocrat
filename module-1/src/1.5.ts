// Reference Type --> Object

const user: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
  // company: "Programming Hero"; // type -> literal type. we can also specify it by readonly
  readonly company: string;
} = {
  firstName: "Noyon",
  middleName: "",
  lastName: "Rahman",
  isMarried: false,
  company: "Programming Hero",
};

user.company = "ph"; // Cannot assign to 'company' because it is a read-only property.
