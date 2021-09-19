export class Photo{
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

export class MattedPhoto extends Photo{
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
export class Framedphoto extends Photo{
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