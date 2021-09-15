class Photo{
constructor(width = 8, height = 10){
    this.width = width;
    this.height = height;
}
  price() {
      let finalPrice;

      if ((this.width === 8)&& (this.height === 10))
      {
          finalPrice = 4;
      }
      else {
        if ((this.width === 10)&& (this.height === 12)){
            finalPrice = 6;
        }
        else {
            finalPrice = 10;
        }
      }
      return finalPrice;
  }
  toString(){
      return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}`;
  }

}

let photo1 = new Photo(8, 10);
console.log(photo1.toString());

let photo2 = new Photo(20, 10);
console.log(photo2.toString());

class MattedPhoto extends Photo{
    constructor (width, height, color){
        super(width, height);
        this.color = color;
    }
    newPriceMatted(){
        let mattedPrice;
        mattedPrice = super.price() + 10;

        return mattedPrice;
    }
    toString(){
       return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs ${this.newPriceMatted()}`;
    }
}
class Framedphoto extends Photo{
    constructor(width, height, material, style){
        super(width, height)
        this.material = material;
        this.style = style;
    }
    newPriceFramed(){
        let framedPrice;
        framedPrice = super.price() + 25;

        return framedPrice;

    }
    toString(){
        return `This is a ${this.width} by ${this.height} ${this.material} framed photo. The style is ${this.style} and it costs ${this.newPriceFramed()}`;

    }

}
let MattedPhoto1 = new MattedPhoto(8, 10, "Brown");
console.log(MattedPhoto1.toString());

let MattedPhoto2 = new MattedPhoto(20, 10, "Blue");
console.log(MattedPhoto2.toString());

let FramedPhoto1 = new Framedphoto(8, 10, "Silver", "Modern");
console.log(FramedPhoto1.toString());

let FramedPhoto2 = new Framedphoto(20, 10, "Wood", "Traditional");
console.log(FramedPhoto2.toString());