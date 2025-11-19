var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Milton", 1200);
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 0;
    }
    return HumanMaker;
}());
var h1 = new HumanMaker("aman", true);
var Music = /** @class */ (function () {
    function Music(name, artist, length, free, thumbnail) {
        if (thumbnail === void 0) { thumbnail = "somethuimbknain.jpg"; }
        this.name = name;
        this.artist = artist;
        this.length = length;
        this.free = free;
        this.thumbnail = thumbnail;
    }
    return Music;
}());
var m1 = new Music("chal challa chal", "bkl", 1200, true);
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
