import {Photo, MattedPhoto, Framedphoto} from './photoDemo.js';

let photo1 = new Photo(8, 10);
console.log(photo1.toString());

let photo2 = new Photo(20, 10);
console.log(photo2.toString());
let MattedPhoto1 = new MattedPhoto(8, 10, "Brown");
console.log(MattedPhoto1.toString());

let MattedPhoto2 = new MattedPhoto(20, 10, "Blue");
console.log(MattedPhoto2.toString());

let FramedPhoto1 = new Framedphoto(8, 10, "Silver", "Modern");
console.log(FramedPhoto1.toString());

let FramedPhoto2 = new Framedphoto(20, 10, "Wood", "Traditional");
console.log(FramedPhoto2.toString());