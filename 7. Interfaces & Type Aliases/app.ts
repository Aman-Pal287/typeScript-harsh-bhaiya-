// Interfaces and Type Aliases
// Defining interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Type aliases
// Intersection types

// function abcd(a: number, b: string) {}

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function abcd(obj: User) {}

abcd({ name: "gkg", email: "xdfgh", password: "xdfh" });
