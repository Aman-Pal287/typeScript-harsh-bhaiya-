class BottleMaker {
  constructor(public name: string, public price: number) {}
}

let b1 = new BottleMaker("Milton", 1200);

class HumanMaker {
  age = 0;
  constructor(public name: string, public isHandsome: boolean) {}
}

let h1 = new HumanMaker("aman", true);

class Music {
  constructor(
    public name: string,
    public artist: string,
    public length: number,
    public free: boolean,
    public thumbnail: string = "somethuimbknain.jpg"
  ) {}
}

let m1 = new Music("chal challa chal", "bkl", 1200, true);

// class Music {
//   public name;
//   public artist;
//   public thumbnail;
//   public length;

//   constructor(
//     name: string,
//     artist: string,
//     thumbnail: string = "somethuimbknain.jpg",
//     length: number
//   ) {
//     this.name = name;
//     this.artist = artist;
//     this.thumbnail = thumbnail;
//     this.length = length;
//   }
// }
