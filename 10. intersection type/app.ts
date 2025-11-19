//  Intersection tyes

let c: string | null; // ye jo danda laga hai usko union bolte hai

// !--------------

type User = {
  name: string;
  email: string;
};

type Admin = User & {
  getDetails(user: string): void;
};                                                                         

function abcd(a: Admin) {                                                                
  a.getDetails;
}                               
               