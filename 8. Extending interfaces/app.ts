// Extending interfaces

interface User {
  name: string;
  email: string;
  password: string;
}

interface Admin extends User {
  admin: boolean;
}

function abcd(obj: Admin) {
  obj.admin = true;
}

// !------------------------------

interface Abcd {
  name: string;
}

// same name ke interface aapas mein merge ho jaate hain

interface Abcd {
  email: string;
}

function xyz(obj: Abcd) {}
